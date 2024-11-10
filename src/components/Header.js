import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className="fixed w-full z-50 bg-[#141414] bg-opacity-50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src={logo} 
              alt="WebNova Logo" 
              width="48"
              height="48"
              className="mr-3"
            />
          </Link>
          <div className="text-3xl font-bold">
            <span className="text-[#f74a1f]">Web</span>
            <span className="text-[#cdcdd0] ">Nova</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
