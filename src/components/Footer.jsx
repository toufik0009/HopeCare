import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-gray-800 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="text-2xl mr-2">🎗️</div>
              <h3 className="text-2xl font-bold">HopeCare</h3>
            </div>
            <p className="text-blue-100">
              A community of support for cancer patients, survivors, and caregivers.
              Together, we build bridges of hope.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-hope-light-pink transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-hope-light-pink transition-colors duration-300">About Us</a></li>
              <li><a href="#resources" className="hover:text-hope-light-pink transition-colors duration-300">Resources</a></li>
              <li><a href="#contact" className="hover:text-hope-light-pink transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Information</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">📞</span>
                <span>1-800-HOPE-NOW (1-800-467-3669)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📧</span>
                <span>support@care.org</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>123 Hope Street, Suite 100<br />Compassion City, HC 10101</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-blue-300/30 text-center text-blue-100">
          <p>&copy; {new Date().getFullYear()} HopeCare - Cancer Awareness & Support. All rights reserved.</p>
          <p className="mt-2 text-sm">This is a demonstration website for educational purposes.</p>
        </div>
      </div>
    </footer>
  );
};
