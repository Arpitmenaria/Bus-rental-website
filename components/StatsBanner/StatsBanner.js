// components/StatsBanner/StatsBanner.js
import "./StatsBanner.css";

export default function StatsBanner() {
  const stats = [
    { value: "1M+", label: "Happy Customers" },
    { value: "100+", label: "Trusted Travels" },
    { value: "60+", label: "Cities Covered" },
    { value: "40+", label: "Years of Experience" },
  ];

  return (
    <section className="stats-wrap">
      <div className="stats-banner">
        {stats.map((item, i) => (
          <div className="stat-item" key={i}>
            <span className="stat-value">{item.value}</span>
            <span className="stat-label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
