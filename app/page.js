// app/page.js

export const metadata = {
  title: "Bus Rent in Udaipur | AC & Sleeper Bus Rental Service",
  description:
    "Looking for bus rent in Udaipur? We provide AC, sleeper and luxury bus rental services for tours, weddings and corporate travel.",
};


import Navbar from "@/components/Navbar/Navbar";
import HeroSlider from "@/components/HeroSlider/HeroSlider";
import StatsBanner from "@/components/StatsBanner/StatsBanner";
import CityShowcase from "@/components/CityShowcase/CityShowcase";
import ShubhYatraAnimation from "@/components/ShubhYatraAnimation/ShubhYatraAnimation";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Footer from "@/components/Footer/Footer";


export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSlider/>
    <StatsBanner/>
    <CityShowcase/>
    <ShubhYatraAnimation/>
    <HowItWorks/>
    <Footer/>
    </>
  );
}
