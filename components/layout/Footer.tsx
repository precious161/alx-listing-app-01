import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-10 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Logo or Name */}
        <div className="text-lg font-semibold">StayNest</div>

        {/* Center: Links */}
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-blue-600 transition">
            About
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Contact
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Privacy
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Terms
          </a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4 text-xl">
          <a href="#" aria-label="Facebook" className="hover:text-blue-600">
            <FaFacebook />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-500">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} StayNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
