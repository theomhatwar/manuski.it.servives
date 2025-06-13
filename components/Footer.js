"use client";
import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import Image from 'next/image';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCertificate, setCurrentCertificate] = useState(null);
  const [numPages, setNumPages] = useState(null);

  const certificates = [
    {
      name: "Articles of Association",
      pdfUrl: "/aoa.pdf"
    },
    {
      name: "Memorandum of Association",
      pdfUrl: "/coi.pdf"
    },
    {
      name: "Certificate of Incorporation",
      pdfUrl: "/moa.pdf"
    }
  ];

  const handleCertificateClick = (certificate) => {
    setCurrentCertificate(certificate);
    setIsModalOpen(true);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info - Updated with Logo */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 mr-3">
                <Image 
                  src="/manuski.png" 
                  alt="Manuski Welfare Association Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-white text-lg sm:text-xl font-bold">Manuski Welfare Association</h3>
            </div>
            <p className="mb-4 text-sm sm:text-base">Empowering businesses through innovative IT solutions since 2020.</p>
            <div className="flex space-x-3">
              <a href="#" className="bg-gray-700 hover:bg-emerald-600 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-colors">
                <FaFacebookF className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-emerald-600 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-colors">
                <FaTwitter className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-emerald-600 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-colors">
                <FaLinkedinIn className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-emerald-600 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-colors">
                <FaInstagram className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="hidden sm:block">
            <h4 className="text-white text-base sm:text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-white text-base sm:text-lg font-semibold mb-4">Certifications</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {certificates.map((cert, index) => (
                <li 
                  key={index} 
                  className="flex items-start hover:text-emerald-400 transition-colors cursor-pointer"
                  onClick={() => handleCertificateClick(cert)}
                >
                  <RiSecurePaymentLine className="text-emerald-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{cert.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="hidden sm:block">
            <h4 className="text-white text-base sm:text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
            </ul>
            <div className="flex items-center mt-4">
              <MdPayment className="text-xl mr-2 text-emerald-400" />
              <span className="text-xs sm:text-sm">Secure Payments</span>
            </div>
          </div>
        </div>

        {/* Company Legal Information */}
        <div className="mt-6 px-3 py-2 bg-gray-800 rounded-lg">
          <div className="text-center text-xxs sm:text-xs text-gray-400">
            <div className="space-y-1">
              <p className="font-medium">Company Legal Details</p>
              <p>CIN: U85300PN2022NPL207615 | PAN: AAPCM3560K</p>
            </div>
            <div className="mt-1 text-[0.6rem] sm:text-[0.65rem] leading-tight italic">
              [Pursuant to sub-section (2) of section 7 and sub-section (1) of section 8 of the Companies Act, 2013 (18 of 2013) and rule 18 of the Companies (Incorporation) Rules, 2014]
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-gray-800 text-center">
          <p className="text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Manuski Welfare Association. All Rights Reserved.
          </p>
          <p className="text-xxs sm:text-xs mt-1 text-gray-500">
            Registered Office: 123 Tech Park, Pune, Maharashtra - 411001
          </p>
        </div>
      </div>

      {/* PDF Preview Modal */}
      {isModalOpen && currentCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">{currentCertificate.name}</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <Document
                file={currentCertificate.pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<div className="p-4 text-center">Loading PDF...</div>}
                error={<div className="p-4 text-red-500">Failed to load PDF</div>}
              >
                <Page 
                  pageNumber={1} 
                  width={Math.min(800, window.innerWidth - 64)}
                  renderTextLayer={false}
                />
              </Document>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <div className="text-sm text-gray-500">
                Page 1 of {numPages}
              </div>
              <a
                href={currentCertificate.pdfUrl}
                download
                className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded text-sm transition-colors"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;