import { useEffect, useRef, useState } from "react";
import RecordRTC from "recordrtc";

export default function VideoRecorder() {
  const videoRef = useRef(null);
  const recorderRef = useRef(null);
  const streamRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [videoURL, setVideoURL] = useState(null);

  useEffect(() => {
    return () => {
      // Cleanup on unmount
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      streamRef.current = stream;
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    } catch (err) {
      console.error("Camera access error:", err);
    }
  };

  const startRecording = () => {
    if (!streamRef.current) return;

    recorderRef.current = new RecordRTC(streamRef.current, {
      type: "video",
    });
    recorderRef.current.startRecording();
    setRecording(true);
  };

  const stopRecording = async () => {
    recorderRef.current.stopRecording(() => {
      const blob = recorderRef.current.getBlob();
      setVideoURL(URL.createObjectURL(blob));
      setRecording(false);
    });
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h2 className="text-xl font-semibold">Video Recording Booth</h2>
      <video ref={videoRef} className="w-full max-w-md rounded shadow" muted />
      <div className="flex gap-2">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={startCamera}
        >
          Start Camera
        </button>
        {!recording ? (
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={startRecording}
            disabled={!streamRef.current}
          >
            Record
          </button>
        ) : (
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={stopRecording}
          >
            Stop
          </button>
        )}
      </div>

      {videoURL && (
        <div className="mt-4">
          <h3 className="text-lg font-medium">Recording Preview:</h3>
          <video
            src={videoURL}
            controls
            className="w-full max-w-md mt-2 rounded shadow"
          />
        </div>
      )}
    </div>
  );
}
