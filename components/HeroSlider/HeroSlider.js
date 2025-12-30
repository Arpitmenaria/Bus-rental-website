// components/HeroSlider/HeroSlider.js
"use client";

import { useEffect, useState } from "react";
import "./HeroSlider.css";

const slides = [
  "/images/slide1.jpg",
  "/images/slide4.jpeg",
  "/images/slide5.jpeg",
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000); // 5s
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero-slider">
      <div className="hero-track" style={{ transform: `translateX(-${active * 100}%)` }}>
        {slides.map((src, i) => (
          <div className="hero-slide" key={i}>
            <img src={src} alt={`Slide ${i + 1}`} />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${active === i ? "active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
