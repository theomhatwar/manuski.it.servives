"use client";

import Image from "next/image";

const WebDevelopmentSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Content - LHS */}
          <div className="w-full md:w-1/2">
            <span className="inline-block text-emerald-600 font-semibold mb-3">
              OUR EXPERTISE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Web Development Services
            </h2>
            
            <div className="space-y-5 text-gray-600">
              <p>
                At <strong>Manuski Welfare Association</strong>, we craft high-performance, 
                scalable web solutions that drive business growth. Our team of 
                experienced developers creates custom websites that deliver 
                exceptional user experiences.
              </p>
              
              <p>
                With our headquarters in <strong>Pune, Maharashtra</strong>, we serve clients 
                globally, helping them establish a powerful digital presence 
                through innovative web technologies.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom Website Development</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>E-Commerce Solutions</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Responsive & Mobile-First Design</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>CMS Development (WordPress, Shopify)</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-md shadow-lg transition-all duration-300 mr-4">
                Get a Free Quote
              </button>
              <button className="bg-white hover:bg-gray-100 text-emerald-600 font-medium py-3 px-8 rounded-md border border-emerald-600 shadow-lg transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>

          {/* Image - RHS */}
          <div className="w-full md:w-1/2">
            <div className="relative h-80 md:h-[450px] rounded-xl overflow-hidden ">
              <Image
                src="/webimg.jpg" // Your image from public folder
                alt="Web Development Services by Manuski Welfare Association"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-emerald-800/20"></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopmentSection;