"use client";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const ClientsSection = () => {
  const clients = [
    { id: 1, name: "Facebook", logo: "https://empoweryoutechnologies.in/uploads/images/clients/1797753769866103.png", url: "https://facebook.com" },
    { id: 2, name: "Google", logo: "https://empoweryoutechnologies.in/uploads/images/clients/1797753760691329.png", url: "https://google.com" },
    { id: 3, name: "Amazon", logo: "https://empoweryoutechnologies.in/uploads/images/clients/1797753748824222.png", url: "https://amazon.com" },
    { id: 4, name: "Microsoft", logo: "https://empoweryoutechnologies.in/uploads/images/clients/1797753790512235.png", url: "https://microsoft.com" },
    { id: 5, name: "Apple", logo: "https://empoweryoutechnologies.in/uploads/images/clients/1797753779267153.png", url: "https://apple.com" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Description */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-5/12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-emerald-600">Trusted</span> By Industry Leaders
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We are proud to partner with innovative organizations across various industries. Our commitment to excellence has earned us the trust of these esteemed clients.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-800 transition-colors"
            >
              Become our client <FiArrowRight className="ml-2" />
            </a>
          </motion.div>

          {/* Client Logos Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-7/12"
          >
            <div className="relative">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {clients.map((client) => (
                  <motion.div
                    key={client.id}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl p-6 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                  >
                    <a href={client.url} target="_blank" rel="noopener noreferrer">
                      <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="h-12 object-contain "
                      />
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;