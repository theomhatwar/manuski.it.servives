"use client";

import Image from "next/image";

const DigitalMarketingSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Content - LHS */}
          <div className="w-full md:w-1/2">
            <span className="inline-block text-emerald-600 font-semibold mb-3">
              DIGITAL TRANSFORMATION
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Digital Marketing Solutions
            </h2>
            
            <div className="space-y-5 text-gray-600">
              <p>
                At <strong>Manuski Welfare Association</strong>, we drive measurable results through 
                strategic digital marketing campaigns. Our data-driven approach 
                helps businesses increase visibility, engagement, and conversions.
              </p>
              
              <p>
                As a leading <strong>digital marketing agency in Pune</strong>, we combine 
                creativity with analytics to deliver campaigns that outperform 
                competitors and maximize ROI.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Search Engine Optimization (SEO)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Social Media Marketing</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Pay-Per-Click Advertising (PPC)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Content Marketing Strategy</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-md shadow-lg transition-all duration-300 mr-4">
                Get Marketing Audit
              </button>
              <button className="bg-white hover:bg-gray-100 text-emerald-600 font-medium py-3 px-8 rounded-md border border-emerald-600 shadow-lg transition-all duration-300">
                See Case Studies
              </button>
            </div>
          </div>

         {/* Image - RHS - Fixed to prevent cutoff */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-video md:aspect-[3/4] lg:aspect-square rounded-xl overflow-hidden ">
              <Image
                src="/digitalimg.jpg"
                alt="Digital Marketing Services"
                fill
                className="object-contain"  // Changed from object-cover to object-contain
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* <div className="absolute inset-0 bg-gradient-to-l from-emerald-600/10 to-emerald-800/20"></div> */}
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingSection;