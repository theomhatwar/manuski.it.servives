"use client";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const ContactSocialBar = () => {
  return (
    <div className="hidden md:block bg-gray-800 text-gray-200 py-3 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Contact Info - LHS */}
        <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-3 md:mb-0">
          <Link 
            href="tel:+1234567890" 
            className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
          >
            <FaPhone className="text-emerald-400" />
            <span>+1 (234) 567-890</span>
          </Link>
          
          <Link 
            href="mailto:info@technova.com" 
            className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
          >
            <FaEnvelope className="text-emerald-400" />
            <span>info@technova.com</span>
          </Link>
        </div>

        {/* Social Handles - RHS */}
        <div className="flex items-center gap-4">
          <Link 
            href="https://twitter.com/technova" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-emerald-400 transition-colors text-xl"
            aria-label="Twitter"
          >
            <FaTwitter />
          </Link>
          
          <Link 
            href="https://linkedin.com/company/technova" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-emerald-400 transition-colors text-xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </Link>
          
          <Link 
            href="https://facebook.com/technova" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-emerald-400 transition-colors text-xl"
            aria-label="Facebook"
          >
            <FaFacebook />
          </Link>
          
          <Link 
            href="https://instagram.com/technova" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-emerald-400 transition-colors text-xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactSocialBar;