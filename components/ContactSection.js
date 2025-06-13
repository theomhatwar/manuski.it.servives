"use client";
import { motion } from "framer-motion";
import { FiSend, FiMapPin, FiPhone, FiMail, FiUser, FiMessageSquare } from "react-icons/fi";

const ContactSection = () => {
  return (
    <section className="text-gray-800 body-font relative bg-gradient-to-br from-gray-50 to-emerald-50">
      {/* Heading Section */}
      <div className="container px-4 sm:px-6 py-12 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <span className="inline-block text-emerald-600 font-medium mb-2 text-xs sm:text-sm uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
            Get In <span className="text-emerald-600">Touch</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Have questions? Reach out to our team - we'd love to hear from you.
          </p>
        </motion.div>
      </div>

      {/* Map and Form Section */}
      <div className="container px-4 sm:px-6 py-6 pb-12 mx-auto flex flex-col">
        {/* Contact Info - Stacked on mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full mb-8"
        >
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-emerald-100 p-2 rounded-full mr-4">
                  <FiMapPin className="text-emerald-600 w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Our Address</h3>
                  <p className="text-gray-600 text-sm">Corporate off Address -- Block-157 Dr Ambedkar Commercial IT Park ,loop nagar, yerwada</p>
                  <p className="text-gray-600 text-sm">Pune, Maharashtra 411006</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-100 p-2 rounded-full mr-4">
                  <FiMail className="text-emerald-600 w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                  <a href="mailto:info@empowertech.com" className="text-emerald-600 text-sm hover:text-emerald-800 transition-colors">
                    info@empowertech.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-100 p-2 rounded-full mr-4">
                  <FiPhone className="text-emerald-600 w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                  <p className="text-gray-600 text-sm">+91 8888565714</p>
                  
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map - Full width on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full mb-8 h-64 sm:h-80 rounded-lg overflow-hidden shadow-md"
        >
          <iframe 
            width="100%" 
            height="100%"
            className="border-0"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Pune+(Empower%20YOU%20Technologies)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full bg-white rounded-lg shadow-lg p-5 sm:p-6"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 flex items-center">
            <FiMessageSquare className="text-emerald-600 w-5 h-5 mr-2" />
            Send Us a Message
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Fill the form below and we'll respond within 24 hours.
          </p>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                placeholder="How can we help?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-4 rounded-md transition flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <FiSend className="w-4 h-4" />
              Send Message
            </button>
            
            <p className="text-xs text-gray-500 mt-2">
              We respect your privacy. Your information will not be shared.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;