import React from "react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="bg-gradient-to-r from-blue-400/90 to-pink-600/90 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 mt-4">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Together in the Fight Against Cancer
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Providing support, resources, and hope to patients, survivors, and
              caregivers. You are not alone in this journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-blue-400 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Support
              </a>
              <a
                href="#resources"
                className="bg-transparent border-2 border-white hover:bg-white/20 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Image Section - Using gradient as placeholder */}
      <div className="h-64 bg-gradient-to-r from-blue-200 via-pink-100 to-blue-200 flex items-center justify-center">
        <div className="text-center p-6">
          <div className="text-5xl mb-4">🎗️</div>
          <p className="text-gray-700 text-xl font-medium">
            Cancer Awareness Month: September 2025
          </p>
          <p className="text-gray-600">
            Early detection saves lives. Get screened regularly.
          </p>
        </div>
      </div>
    </section>
  );
}
