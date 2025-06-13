"use client";
import Link from "next/link";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image - Hidden on mobile, shown on md+ screens */}
          <div className="hidden md:block w-full md:w-1/2">
            <div className="relative rounded-lg overflow-hidden" style={{ paddingBottom: '75%' }}>
              <Image
                src="/about.jpg"
                alt="Manuski Welfare Association Team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 0vw, 50vw"
                priority={false}
              />
            </div>
          </div>

          {/* Content - Full width on mobile, half on desktop */}
          <div className="w-full md:w-1/2">
            <span className="inline-block text-emerald-600 font-semibold mb-2 text-sm md:text-base">
              LET'S KNOW
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              About Us
            </h2>
            
            <div className="space-y-3 md:space-y-4 text-gray-600 text-sm sm:text-base">
              <p>
                Welcome to Manuski Welfare Associations, your reliable partner in innovative 
                technology solutions. Based in Pune, Maharashtra, we are a global IT service 
                provider committed to driving success through cutting-edge technology.
              </p>
              <p>
                Since 2020, we have been empowering businesses to optimize operations, 
                enhance productivity, and achieve growth through software development, 
                cloud solutions, and IT consulting.
              </p>
              <p>
                At Manuski Welfare Associations, we believe in innovation, collaboration, 
                and excellence.
              </p>
            </div>

            <div className="mt-6 md:mt-8 flex flex-wrap gap-3 md:gap-4">
              <Link
                href="/about-us"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 md:py-3 md:px-6 rounded-md shadow-sm md:shadow-md transition-all duration-300 text-sm md:text-base"
              >
                Read More
              </Link>
               <a
              href="tel:8888565714"
            
                className="bg-white hover:bg-gray-50 text-emerald-600 font-medium py-2 px-4 md:py-3 md:px-6 rounded-md border border-emerald-600 shadow-sm md:shadow-md transition-all duration-300 text-sm md:text-base"
              >
                Contact Us
             </a>
             
           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;