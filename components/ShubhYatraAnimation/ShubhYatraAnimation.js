// components/ShubhYatraAnimation/ShubhYatraAnimation.js
"use client";

import { useEffect, useState } from "react";
import "./ShubhYatraAnimation.css";

const cities = [
  "Haridwar",
  "BadriNath",
  "Kedarnath",
  "Gangasagar",
  "Katra",
  "Ayodhya",
];

export default function ShubhYatraAnimation() {
  const [showCities, setShowCities] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCities(true);
    }, 1600); // after title animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="shubh-section">
      <div className="shubh-container">
        {/* Title */}
        <h2 className="shubh-title">शुभ यात्रा</h2>

        {/* Cities */}
        {showCities && (
          <div className="shubh-cities">
            {cities.map((city, i) => (
              <span className="shubh-city" key={i}>
                {city}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
