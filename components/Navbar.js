"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { RiSecurePaymentLine } from "react-icons/ri";

const certificates = [
  {
    name: "Articles of Association",
    pdfUrl: "/aoa.pdf"
  },
  {
    name: "Memorandum of Association",
    pdfUrl: "/moa.pdf"
  },
  {
    name: "Certificate of Incorporation",
    pdfUrl: "/coi.pdf"
  }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const legalRef = useRef(null);

  const handleCertificateClick = (cert) => {
    window.open(cert.pdfUrl, '_blank');
    setIsLegalOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (legalRef.current && !legalRef.current.contains(event.target)) {
        setIsLegalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100">
             <img src="/manuski.png" alt="" />
            </div>
            <div className="flex flex-col justify-center items-start">
              <span className="text-xl font-bold text-gray-800">MANUSKI</span>
              <span className="text-xs text-gray-800">Welfare Association</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Legal Info - Responsive */}
            <div className="hidden md:flex items-center text-black  px-3 py-1 ">
              <p className="text-lg">CIN: U85300PN2022NPL207615 | PAN: AAPCM3560K</p>

            </div>


            <Link href="/" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors duration-300">
              Home
            </Link>

            {/* Legal Dropdown */}
            <div className="relative" ref={legalRef}>
              <button
                className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors duration-300 flex items-center"
                onClick={() => setIsLegalOpen(!isLegalOpen)}
                onMouseEnter={() => setIsLegalOpen(true)}
              >
                Legal Certificates
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${isLegalOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLegalOpen && (
                <div
                  className="absolute bg-white shadow-lg rounded-md mt-2 w-64 z-50 p-4 border border-gray-100"
                  onMouseLeave={() => setIsLegalOpen(false)}
                >
                  <Link
                    href="/legal"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded transition-colors"
                    onClick={() => setIsLegalOpen(false)}
                  >
                    Overview
                  </Link>
                  <div className="border-t border-gray-100 my-2"></div>

                  {/* Certifications Section */}
                  <div>
                    <h4 className="text-gray-800 text-sm font-semibold mb-2 px-4">Certifications</h4>
                    <ul className="space-y-2">
                      {certificates.map((cert, index) => (
                        <li
                          key={index}
                          className="flex items-start px-4 py-2 rounded hover:bg-emerald-50 transition-colors cursor-pointer"
                          onClick={() => handleCertificateClick(cert)}
                        >
                          <RiSecurePaymentLine className="text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700 hover:text-emerald-600">{cert.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <Link href="/services" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors duration-300">
              Services
            </Link>
            <Link href="/contact-us" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors duration-300">
              Contact 
            </Link>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300 shadow-md">
              Explore
            </button>
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Side Panel Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Menu"
            className="p-1 rounded-md hover:bg-gray-100"
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
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="px-6 space-y-4">
          <li>
            <Link
              href="/"
              className="block text-gray-700 hover:text-emerald-600 text-base py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>

          {/* Mobile Legal Dropdown */}
          <li>
            <details className="group">
              <summary className="cursor-pointer text-gray-700 hover:text-emerald-600 text-base py-2 flex items-center justify-between">
                <span>Legal</span>
                <svg
                  className="w-4 h-4 text-gray-500 group-open:rotate-90 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </summary>
              <ul className="pl-4 mt-2 space-y-2">
                <li>
                  <Link
                    href="/legal"
                    className="block text-gray-600 hover:text-emerald-600 text-sm py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <div className="text-gray-800 font-medium text-sm py-2">Certifications</div>
                  <ul className="pl-2 space-y-2">
                    {certificates.map((cert, index) => (
                      <li
                        key={index}
                        className="flex items-start py-2 pl-2 -ml-2 rounded hover:bg-emerald-50 transition-colors cursor-pointer"
                        onClick={() => {
                          handleCertificateClick(cert);
                          setIsMenuOpen(false);
                        }}
                      >
                        <RiSecurePaymentLine className="text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{cert.name}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <Link
              href="/services"
              className="block text-gray-700 hover:text-emerald-600 text-base py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact-us"
              className="block text-gray-700 hover:text-emerald-600 text-base py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
            <a href="mailto:manuskiwelfareassociation@gmail.com" className="text-emerald-600 text-xs hover:text-emerald-800 transition-colors">
              manuskiwelfareassociation@gmail.com
            </a>
          </div>
          {/* Legal Info - Responsive */}

          <div className="text-center flex justify-center items-start flex-col text-xs text-gray-950">
            <p className="font-medium">MANUSKI WELFARE ASSOCIATION</p>
            <p className="text-[0.65rem]">CIN: U85300PN2022NPL207615 | PAN: AAPCM3560K</p>

          </div>
          <li className="pt-2">
            <button
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300 shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore
            </button>
          </li>
        </ul>
      </div>

      {/* Background overlay */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 "
        />
      )}
    </nav>
  );
};

export default Navbar;