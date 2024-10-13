import React from "react";
import Header from "../components/Header.js";
import Hero from "../components/Home/Hero.js";
import AboutUs from '../components/Home/AboutUs.js';
import Services from '../components/Home/Services.js';
import Team from '../components/Home/teamMembers.js';
import WhyChooseUs from '../components/Home/WhyChooseUs.js';
import Footer from '../components/Footer.js';

function Home() {
  return (
    <div className="bg-[#141414] min-h-screen text-[#cdcdd0] font-sans overflow-hidden">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Team />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}

export default Home;
