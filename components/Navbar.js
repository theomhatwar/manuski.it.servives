"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-center items-start">

            <span className="text-xl font-bold text-gray-800">MANUSKI</span>
            <span className="text-sm text-gray-800">Welfare Association</span>
            </div>

          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Home</Link>
            <Link href="/about-us" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors duration-300">About Us</Link>
            <Link href="/services" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Services</Link>
            <Link href="/contact-us" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Contact Us</Link>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300 shadow-md">Get a Quote</button>
          </div>

          {/* Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Side Panel Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)} aria-label="Close Menu">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="px-6 space-y-4">
          <li>
            <Link href="/" className="block text-gray-700 hover:text-emerald-600 text-base" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link href="/about-us" className="block text-gray-700 hover:text-emerald-600 text-base" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          </li>
          <li>
            <Link href="/services" className="block text-gray-700 hover:text-emerald-600 text-base" onClick={() => setIsMenuOpen(false)}>Services</Link>
          </li>
          <li>
            <Link href="/contact-us" className="block text-gray-700 hover:text-emerald-600 text-base" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
          </li>
          <li>
            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300 shadow-md">
              Get a Quote
            </button>
          </li>
        </ul>
      </div>

      {/* Background overlay */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0  bg-opacity-25 z-30"
        />
      )}
    </nav>
  );
};

export default Navbar;
