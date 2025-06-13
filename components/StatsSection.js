"use client";
import { motion } from "framer-motion";
import { FiUsers, FiAward, FiBriefcase, FiClock } from "react-icons/fi";

const StatsSection = () => {
  const stats = [
    { value: 500, label: "PROJECTS DONE", icon: <FiBriefcase className="w-8 h-8" /> },
    { value: 500, label: "HAPPY CLIENTS", icon: <FiUsers className="w-8 h-8" /> },
    { value: 7, label: "YEARS EXPERIENCE", icon: <FiClock className="w-8 h-8" /> },
    { value: 50, label: "AWARDS WON", icon: <FiAward className="w-8 h-8" /> },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-r from-gray-900 to-emerald-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-emerald-400 font-medium mb-3 text-sm uppercase tracking-wider">
            IMPACTFUL SERVICE STATISTICS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Take a Look at Our Statistics
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Empower YOU Technologies helps you get various information technology related services and make better decisions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-emerald-400/30 transition-all duration-300"
            >
              <div className="text-emerald-400 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white text-center mb-2">
                {stat.value}+
              </h3>
              <p className="text-gray-300 text-center font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;