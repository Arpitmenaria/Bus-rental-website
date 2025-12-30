// components/FleetCards/FleetCards.js
import "./FleetCards.css";

const fleetData = [
  {
    name: "32 Seater AC Bus",
    image: "/images/slide3.webp",
    description:
      "Ideal for small groups, tours, and comfortable city or short-distance travel.",
  },
  {
    name: "45 Seater AC Bus",
    image: "/images/45seat.jpeg",
    description:
      "Perfect for medium-sized groups with spacious seating and AC comfort.",
  },
  {
    name: "52 Seater AC Bus",
    image: "/images/52seat.jpeg",
    description:
      "Best suited for long-distance journeys with maximum comfort and safety.",
  },
  {
    name: "56 Seater AC Bus",
    image: "/images/56seat.jpeg",
    description:
      "Large capacity bus for corporate trips, school tours, and big events.",
  },
  {
    name: "Sleeper Bus",
    image: "/images/sleeper.jpeg",
    description:
      "Luxury sleeper coaches designed for overnight journeys and long routes.",
  },
];

export default function FleetCards() {
  return (
    <section className="fleet-section">
      <div className="fleet-container">
        <h1>Our Fleet</h1>
        <p className="fleet-subtitle">
          Choose from our wide range of well-maintained and comfortable buses.
        </p>

        <div className="fleet-grid">
          {fleetData.map((bus, index) => (
            <div className="fleet-card" key={index}>
              <div className="fleet-image">
                <img src={bus.image} alt={bus.name} />
              </div>
              <div className="fleet-content">
                <h3>{bus.name}</h3>
                <p>{bus.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
