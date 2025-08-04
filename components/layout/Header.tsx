import React from "react";
import { FaSearch } from "react-icons/fa";

const accommodations = ["Rooms", "Mansion", "Countryside", "Apartment", "Villa"];

const Header: React.FC = () => {
  return (
    <header className="w-full shadow-md bg-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">StayNest</div>

      {/* Accommodation Types */}
      <nav className="hidden md:flex gap-4 text-sm font-medium">
        {accommodations.map((type) => (
          <a
            key={type}
            href="#"
            className="hover:text-blue-500 transition-colors"
          >
            {type}
          </a>
        ))}
      </nav>

      {/* Search + Auth Buttons */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-full py-1.5 px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <FaSearch className="absolute left-3 top-2.5 text-gray-500 text-sm" />
        </div>

        {/* Auth Buttons */}
        <button className="text-sm font-medium hover:text-blue-600">Sign In</button>
        <button className="bg-blue-600 text-white text-sm font-medium px-4 py-1.5 rounded-full hover:bg-blue-700 transition">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
