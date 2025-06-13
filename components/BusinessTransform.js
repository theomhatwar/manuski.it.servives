"use client";

const BusinessTransform = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Business Today
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            At Manuski Welfare Association, we specialize in providing innovative IT solutions 
            tailored to your business needs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:8888565714"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-md shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
            <a
              href="/about-us"
              className="bg-white hover:bg-gray-100 text-emerald-600 font-medium py-3 px-8 rounded-md border border-emerald-600 shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessTransform;
