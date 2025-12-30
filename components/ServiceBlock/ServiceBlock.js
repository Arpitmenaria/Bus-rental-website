import "./ServiceBlock.css";

export default function ServiceBlock({ title, desc, points, image, reverse }) {
  return (
    <section className={`service-block ${reverse ? "reverse" : ""}`}>
      <div className="service-image">
        <img src={image} alt={title} />
      </div>

      <div className="service-text">
        <h2>{title}</h2>
        <p>{desc}</p>

        <ul>
          {points.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
