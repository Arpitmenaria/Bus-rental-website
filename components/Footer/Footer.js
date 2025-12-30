// components/Footer/Footer.js
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT */}
        <div className="footer-left">
          <h3>ShivShakti Tourist</h3>

          <p>
            Hiran Magri, Main Road, Sector5<br />
            Udaipur, Rajasthan – 313002
          </p>

          <p className="footer-phone">
            📞 +91 70142 58932
          </p>

          <a
            href="https://www.instagram.com/shivshaktitourist"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-instagram"
          >
            Instagram
          </a>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Hiran%20Magri%20Main%20Road%20Sector%205&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Bus Rental Service. All rights reserved.
      </div>
    </footer>
  );
}
