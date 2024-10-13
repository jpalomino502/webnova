import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portafolio" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
