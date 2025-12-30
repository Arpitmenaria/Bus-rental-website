// components/ContactHero/ContactHero.js
import "./ContactHero.css";

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="contact-hero-wrapper">
        {/* LEFT IMAGE */}
        <div className="contact-hero-image">
          <img
            src="/images/slide2.webp"
            alt="Bus Rental Service"
          />
        </div>

        {/* RIGHT INFO CARD */}
        <div className="contact-info-card">
          <h2>We are just one tap, one call, or one visit away!</h2>

          <ul>
            <li>
              📍 <strong>Address</strong><br />
              Hiran Magri Main Road,<br />
              Sector 5
            </li>

            <li>
              📞 <strong>Phone</strong><br />
                  <a href="tel:+917014258932" className="contact-link">
                    +91 7014258932
                   </a>
            </li>

            <li>
  💬 <strong>WhatsApp</strong><br />
                    <a
                      href="https://wa.me/917014258932"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whatsapp-btn"
                    >
                      Chat on WhatsApp
                  </a>
            </li>


            <li>
              📧 <strong>Email</strong><br />
              shivshaktitouristudr@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
