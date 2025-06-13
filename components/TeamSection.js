"use client";
import { FiTwitter, FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";
import { motion } from "framer-motion";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Lead Developer",
      bio: "10+ years building scalable web apps",
      img: "https://empoweryoutechnologies.in/uploads/images/team/1773927219090447.jpg"
    },
    {
      name: "Sarah Williams",
      role: "UI/UX Designer",
      bio: "Creates intuitive user interfaces",
      img: "https://empoweryoutechnologies.in/uploads/images/team/1819306761069657.png"
    },
    {
      name: "Michael Chen",
      role: "DevOps Engineer",
      bio: "Cloud infrastructure specialist",
      img: "https://empoweryoutechnologies.in/uploads/images/team/1819306824662492.png"
    },
    {
      name: "Priya Patel",
      role: "Product Manager",
      bio: "Bridges business and technology",
      img: "https://empoweryoutechnologies.in/uploads/images/team/1819306886637478.png"
    }
  ];

  return (
    <section className="bg-white py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Our <span className="text-emerald-600">Team</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Meet the experts behind our success
          </p>
        </motion.div>

        {/* Team Members - Mobile Layout */}
        <div className="md:hidden space-y-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm p-3 flex items-center border border-gray-100"
            >
              <div className="w-16 h-16 flex-shrink-0 mr-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-gray-900 truncate">{member.name}</h3>
                <p className="text-emerald-600 text-xs mb-1">{member.role}</p>
                <p className="text-gray-600 text-xs truncate">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Members - Desktop Layout */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="p-5 text-center">
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-emerald-600 font-medium text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors">
                    <FiTwitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors">
                    <FiLinkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors">
                    <FiGithub className="w-4 h-4" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors">
                    <FiInstagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;