"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ServicesSection = () => {
  const services = [
    { 
      title: "Mobile App Dev", 
      img: "/mobile-dev.jpg", // Your image path
      color: "bg-purple-100 text-purple-600" 
    },
    { 
      title: "IT Consulting", 
      img: "/it-consulting.jpg",
      color: "bg-blue-100 text-blue-600" 
    },
    { 
      title: "AI & ML", 
      img: "/ai-ml.jpg",
      color: "bg-red-100 text-red-600" 
    },
    { 
      title: "SEO & Digital Marketing", 
      img: "/digital-marketing.jpg",
      color: "bg-green-100 text-green-600" 
    },
    { 
      title: "Software Dev", 
      img: "/software-dev.jpg",
      color: "bg-yellow-100 text-yellow-600" 
    },
    { 
      title: "Cloud Solutions", 
      img: "/cloud.jpg",
      color: "bg-indigo-100 text-indigo-600" 
    },
    { 
      title: "Networking & Security", 
      img: "/cybersecurity.jpg",
      color: "bg-gray-100 text-gray-600" 
    },
    { 
      title: "Data Analytics", 
      img: "/data-analytics.jpg",
      color: "bg-pink-100 text-pink-600" 
    },
  ];

  // Animation configurations
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-emerald-500 font-medium mb-4 text-lg">
            TAKE A LOOK AT
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500">Premium</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge solutions designed to propel your business into the digital future
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">Custom solutions tailored to your specific business requirements and goals.</p>
                <button className="text-emerald-500 font-medium flex items-center gap-2 hover:gap-3 transition-all">
                  Discover more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Color Accent */}
              <div className={`absolute bottom-0 left-0 w-full h-1 ${service.color.replace('100', '500').replace('text', 'bg')} group-hover:h-2 transition-all`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button className="relative overflow-hidden group bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-medium py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all">
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;