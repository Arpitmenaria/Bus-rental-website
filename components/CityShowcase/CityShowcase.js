// components/CityShowcase/CityShowcase.js
"use client";

import { useEffect, useState } from "react";
import "./CityShowcase.css";

const cities = [
  { name: "Kashmir", img: "/images/cities/kashmir.webp" },
  { name: "Jaipur", img: "/images/cities/jaipur.jpg" },
  { name: "Agra", img: "/images/cities/agra.jpeg" },
  { name: "Amritsar", img: "/images/cities/amritsar.jpg" },
  { name: "Katra", img: "/images/cities/katra.jpg" },
  { name: "Manali", img: "/images/cities/manali.jpeg" },
];

export default function CityShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % cities.length);
    }, 15000); // 15 seconds
    return () => clearInterval(id);
  }, []);

  return (
    <section className="city-section">
      <div className="city-container">
        {/* LEFT */}
        <div className="city-left">
          <h2>Explore Our Most Travelled Cities</h2>
          <p>
            Comfortable and reliable bus services across India’s most popular
            destinations.
          </p>

          <div className="city-tabs">
            {cities.map((city, i) => (
              <button
                key={city.name}
                className={`city-tab ${active === i ? "active" : ""}`}
                onClick={() => setActive(i)}
              >
                {city.name}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="city-right">
          <img
            src={cities[active].img}
            alt={cities[active].name}
          />
        </div>
      </div>
    </section>
  );
}
