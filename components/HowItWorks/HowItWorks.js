// components/HowItWorks/HowItWorks.js
import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <section className="how-section">
      <div className="how-container">
        {/* LEFT */}
        <div className="how-left">
          <h2>Book Your Journey in 3 Easy Steps</h2>

          <div className="how-step">
            <span className="step-number">01</span>
            <div>
              <h4>Plan Your Trip</h4>
              <p>Select your destination, date, and preferred bus type.</p>
            </div>
          </div>

          <div className="how-step">
            <span className="step-number">02</span>
            <div>
              <h4>Contact Us</h4>
              <p>Reach us via call or WhatsApp to confirm your booking.</p>
            </div>
          </div>

          <div className="how-step">
            <span className="step-number">03</span>
            <div>
              <h4>Enjoy the Journey</h4>
              <p>Relax and enjoy a safe, comfortable, and smooth ride.</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="how-right">
          <img src="/images/sleeper.jpeg" alt="How it works" />
        </div>
      </div>
    </section>
  );
}
