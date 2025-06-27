import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Login from "./auth/Login";
import Register from "./auth/Register";
import VideoBooth from "./videobooth";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          element={
            <>
              <section className="hero-banner">
                <h1>Welcome to Testimonial Encounters</h1>
                <p>A place to share Divine Intervention experiences!</p>
              </section>
              <section className="testimonials">
                <h2>Stories from real people.</h2>
                <div className="carousel">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/knpz_2vK85Q?si=mb9A6JjYtSyT82za"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                  <video controls>
                    <source src="/videos/testimonial2.mp4" type="video/mp4" />
                  </video>
                  <video controls>
                    <source src="/videos/testimonial3.mp4" type="video/mp4" />
                  </video>
                </div>
              </section>
            </>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/videobooth" element={<VideoBooth />} />
      </Route>
    </Routes>
  );
}
