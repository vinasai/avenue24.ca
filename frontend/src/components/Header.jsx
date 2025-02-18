import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../assets/logo.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" bg-gray-800 text-white shadow-lg fixed top-0 left-0 w-full z-50" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
      <div className="flex items-center space-x-3">
      <img 
        src={logo} 
        alt="Beautiful Home" 
        className="w-12 h-12 object-contain rounded-lg shadow-lg"
      />
      <span className="text-2xl font-bold">
        AVENUE24
      </span>
    </div>

        <nav className="hidden md:flex space-x-12">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/contact" className="hover:text-gray-300">Contact</a>
          <a href="/about" className="hover:text-gray-300">About</a>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-gray-700">
          <ul className="space-y-2 py-4 px-4">
            <li>
              <a href="/" className="block hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="/contact" className="block hover:text-gray-300">Contact</a>
            </li>
            <li>
              <a href="/about" className="block hover:text-gray-300">About</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
