import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaBook,
  FaEnvelope,
  FaHeart,
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { id: "home", label: "Home", icon: <FaHome />, href: "#home" },
    { id: "about", label: "About", icon: <FaInfoCircle />, href: "#about" },
    { id: "contact", label: "Contact", icon: <FaEnvelope />, href: "#contact" },
    { id: "donate", label: "Donate", icon: <FaHeart />, href: "#donate" },
  ];

  return (
    <>
      {/* Top Navigation Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gradient-to-r from-blue-500 to-pink-600 shadow-lg py-3"
            : "bg-gradient-to-r from-blue-400 to-pink-600 shadow-lg py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center">
              <div className="text-3xl mr-3">🎗️</div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                  HopeCare
                </h1>
                <p className="text-blue-100 text-sm hidden md:block">
                  Cancer Awareness & Support
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    activeTab === item.id
                      ? "bg-white/20 text-white"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="mr-2 flex sm:hidden">{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-3 md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="text-white text-2xl" />
                ) : (
                  <FaBars className="text-white text-2xl" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 animate-slideDown">
              <div className="bg-white backdrop-blur-sm rounded-xl p-4">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center px-4 py-3 my-1 rounded-lg transition-all duration-300 ${
                      activeTab === item.id
                        ? "bg-pink-100 text-black"
                        : "text-black/90 hover:text-black hover:bg-black/10"
                    }`}
                  >
                    <span className="mr-3 text-xl">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </a>
                ))}
                {/* Mobile Additional Options */}
                <div className="border-t border-white/20 mt-4 pt-4">
                  <a
                    href="#support"
                    className="flex items-center justify-center bg-pink-500 hover:bg-pink-600 text-white px-4 py-3 rounded-lg transition-colors duration-300 font-medium"
                  >
                    <FaPhoneAlt className="mr-2" />
                    Emergency Support: 1-800-HOPE
                  </a>
                  <a
                    href="#profile"
                    className="flex items-center px-4 py-3 my-1 rounded-lg text-black/90 hover:text-black hover:bg-white/10 transition-all duration-300"
                  >
                    <FaUserCircle className="mr-3 text-xl" />
                    <span className="font-medium">My Account</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Bottom Navigation Tabs (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-blue-500 to-pink-600 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t border-white/20">
        <div className="flex justify-around items-center h-16">
          {navItems.slice(0, 5).map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-all duration-300 ${
                activeTab === item.id
                  ? "text-white bg-white/20"
                  : "text-white/80 hover:text-white"
              }`}
            >
              <div
                className={`text-xl mb-1 transform transition-transform duration-300 ${
                  activeTab === item.id ? "scale-110" : ""
                }`}
              >
                {item.icon}
              </div>
              <span className="text-xs font-medium">{item.label}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Spacer for bottom nav on mobile */}
      <div className="h-16 md:h-0"></div>

      {/* Add custom animation */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
