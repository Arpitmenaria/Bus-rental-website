export const metadata = {
  title: "Bus Rental Services in Udaipur | Charter & Corporate Buses",
  description:
    "Affordable bus rental services in Udaipur for tours, weddings, corporate and outstation travel.",
};



import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ServicesHero from "../../components/ServicesHero/ServicesHero";
import ServiceBlock from "../../components/ServiceBlock/ServiceBlock";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <ServicesHero />

      <ServiceBlock
        title="Bus Services"
        desc="Comfortable intercity and long-distance bus travel with premium amenities."
        image="/images/new2.jpeg"
        points={[
          "AC Sleeper & Volvo Coaches",
          "WiFi & Charging Points",
          "Clean interiors & punctual service",
        ]}
      />

      <ServiceBlock
        title="Charter Bus Rentals"
        desc="Flexible and customized bus rentals for all occasions."
        image="/images/slide3.webp"
        reverse
        points={[
          "Weddings, tours & events",
          "Flexible routes & schedules",
          "Dedicated support team",
        ]}
      />

      <ServiceBlock
        title="Corporate Transportation"
        desc="Reliable daily commute solutions for offices and industries."
        image="/images/slide5.jpeg"
        points={[
          "GPS monitored buses",
          "Route optimized travel",
          "On-time & safe commute",
        ]}
      />

      <Footer />
    </>
  );
}
