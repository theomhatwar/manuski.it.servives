"use client";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const ContactSocialBar = () => {
  return (
    <div className="hidden md:block bg-gray-900 text-gray-200 py-2 px-4 border-b border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-3">
        {/* Left Section - Contact Info */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 w-full lg:w-auto">
          <div className="flex items-center gap-4">
            <Link 
              href="tel:+918888565714" 
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors text-sm lg:text-base"
              aria-label="Call us"
            >
              <FaPhone className="text-emerald-400 flex-shrink-0" />
              <span>+91 8888565714</span>
            </Link>
            
            <Link 
              href="mailto:manuskiwelfareassociation@gmail.com" 
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors text-sm lg:text-base"
              aria-label="Email us"
            >
              <FaEnvelope className="text-emerald-400 flex-shrink-0" />
              <span className="hidden xl:inline">manuskiwelfareassociation@gmail.com</span>
              <span className="xl:hidden">Email Us</span>
            </Link>
          </div>

          {/* Legal Info - Responsive */}
          <div className="hidden md:flex items-center bg-gray-800/50 rounded-lg px-3 py-1 border border-gray-700">
            <div className="text-center text-xs text-gray-300">
              {/* <p className="font-medium">MANUSKI WELFARE ASSOCIATION</p> */}
              <p className="text-xl">CIN: U85300PN2022NPL207615 | PAN: AAPCM3560K</p>
            </div>
          </div>
        </div>

        {/* Right Section - Social Links */}
        <div className="flex items-center gap-4">
          <Link 
            href="https://twitter.com/manuski" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-emerald-400 transition-colors text-lg"
            aria-label="Twitter"
          >
            <FaTwitter />
          </Link>
          
          <Link 
            href="https://linkedin.com/company/manuski" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-emerald-400 transition-colors text-lg"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </Link>
          
          <Link 
            href="https://facebook.com/manuski" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-emerald-400 transition-colors text-lg"
            aria-label="Facebook"
          >
            <FaFacebook />
          </Link>
          
          <Link 
            href="https://instagram.com/manuski" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-emerald-400 transition-colors text-lg"
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