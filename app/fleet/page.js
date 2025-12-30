// app/fleet/page.js
export const metadata = {
  title: "Our Fleet | AC & Sleeper Buses",
  description:
    "Explore our fleet of AC buses, sleeper coaches and luxury travel buses.",
};


import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import FleetCards from "../../components/FleetCards/FleetCards";

export default function FleetPage() {
  return (
    <>
      <Navbar />
      <FleetCards />
      <Footer />
    </>
  );
}
