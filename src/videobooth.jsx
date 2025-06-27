// src/pages/VideoBooth.jsx
import VideoRecorder from "../helpers/VideoRecorder";
export default function VideoBooth() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-6"> Video Booth</h1>
        <VideoRecorder />
      </div>
    </main>
  );
}
