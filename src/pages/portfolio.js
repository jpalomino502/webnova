import React from "react";
import Header from "../components/Header.js";
import Hero from "../components/portfolio/Hero.js";
import WebDevelopmentPortfolio from "../components/portfolio/WebDevelopmentPortfolio";
import WebDesignPortfolio from "../components/portfolio/WebDesignPortfolio";
import WebSecurityPortfolio from "../components/portfolio/WebSecurityPortfolio";
import UserAuthentication from "../components/portfolio/UserAuthentication.js";
import Footer from '../components/Footer.js';

function portfolio() {
  return (
    <div className="bg-[#141414] min-h-screen text-[#cdcdd0] font-sans overflow-hidden">
      <Header />
      <Hero />
      <WebDevelopmentPortfolio />
      <WebDesignPortfolio />
      <WebSecurityPortfolio />
      <UserAuthentication />
      <Footer />
    </div>
  );
}

export default portfolio;
