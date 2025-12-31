import React from 'react';
import { FaHeartbeat,FaStar} from 'react-icons/fa';

export default function About() {
  const stats = [
    { number: "10K+", label: "Members Supported" },
    { number: "500+", label: "Medical Partners" },
    { number: "24/7", label: "Support Availability" },
    { number: "98%", label: "Satisfaction Rate" }
  ];

  return (
    <section id="about" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-400 to-pink-500 p-3 rounded-full">
              <FaHeartbeat className="text-white text-2xl" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-pink-600 bg-clip-text text-transparent">
              About HopeCare
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Your trusted partner in the cancer journey - providing comprehensive support when it matters most
          </p>
        </div>

        <div className="grid grid-cols-1">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Description */}
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-8 border border-blue-100">
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FaStar className="text-blue-500 text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Mission</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    HopeCare is dedicated to supporting individuals and families affected by
                    cancer. We believe that no one should face cancer alone, and our mission
                    is to provide resources, emotional support, and a community of hope.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our platform connects cancer patients, survivors, caregivers, and
                    medical professionals to share experiences, offer encouragement, and
                    provide practical assistance throughout the cancer journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
}