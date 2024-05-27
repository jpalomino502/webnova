import React from "react";
import Header from "./components/Header";
import Background from "./components/Background";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/global.css";

const App = () => {
  return (
    <div>
      <Background /> {/* Renderiza el componente Background primero */}
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
