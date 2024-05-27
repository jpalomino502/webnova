import React, { useEffect, useState } from "react";
import "../styles/global.css";

const randomInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const Star = () => {
  const [position, setPosition] = useState({
    left: `${randomInRange(0, window.innerWidth)}px`,
    top: `${randomInRange(0, window.innerHeight)}px`,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => ({
        left: `${parseInt(prevPosition.left) + randomInRange(-1, 1)}px`,
        top: `${parseInt(prevPosition.top) + randomInRange(-1, 1)}px`,
      }));
    }, 100); // Cambia el valor según la velocidad de movimiento deseada

    return () => clearInterval(interval);
  }, []);

  return <div className="star" style={position}></div>;
};

const Asteroid = () => {
  const [position, setPosition] = useState({
    left: `${randomInRange(0, window.innerWidth)}px`,
    top: `${randomInRange(0, window.innerHeight)}px`,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => ({
        left: `${parseInt(prevPosition.left) + randomInRange(-2, 2)}px`,
        top: `${parseInt(prevPosition.top) + randomInRange(-2, 2)}px`,
      }));
    }, 50); // Cambia el valor según la velocidad de movimiento deseada

    return () => clearInterval(interval);
  }, []);

  return <div className="asteroid" style={position}></div>;
};

const Background = () => {
  useEffect(() => {
    const handleResize = () => {
      // Recalculate positions on window resize
      window.location.reload();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderStars = () => {
    const numStars = 100;
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push(<Star key={i} />);
    }
    return stars;
  };

  const renderAsteroids = () => {
    const numAsteroids = 5;
    const asteroids = [];
    for (let i = 0; i < numAsteroids; i++) {
      asteroids.push(<Asteroid key={i} />);
    }
    return asteroids;
  };

  return (
    <>
      {renderStars()}
      {renderAsteroids()}
    </>
  );
};

export default Background;
