import React, { useState, useEffect } from "react";
import {
  PhoneCall,
  MessageCircle,
  Menu,
  X,
  Wrench,
  MapPin,
} from "lucide-react";

export default function FullNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detect scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      // Change state if scrolled more than 20px
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Action Handlers
  const handleCall = () => window.open("tel:+919876543210");
  const handleWhatsApp = () =>
    window.open("https://wa.me/919876543210", "_blank");

  // Navigation Links
  const navLinks = [
    {
      name: "Home",
      action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    { name: "Services", action: () => console.log("Services clicked") },
    { name: "About", action: () => console.log("About clicked") },
    { name: "Reviews", action: () => console.log("Reviews clicked") },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all  duration-300 py-3 ${
          isScrolled
            ? "bg-white/10 backdrop-blur-md shadow-sm" // SCROLLED: White glass effect
            : "bg-transparent" // TOP: Fully transparent
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* 1. LOGO */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <Wrench size={20} fill="currentColor" />
            </div>
            <span
              className={`text-xl font-bold tracking-tight ${
                isScrolled ? "text-gray-900" : "text-gray-900"
              }`}
            >
              HomeTech
            </span>
          </div>

          {/* 2. CENTER NAVIGATION (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={link.action}
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors relative group"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* 3. RIGHT ACTIONS (Call & WhatsApp) */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleWhatsApp}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 hover:bg-green-600 hover:text-white transition-all"
              title="WhatsApp Us"
            >
              <MessageCircle size={20} />
            </button>

            <button
              onClick={handleCall}
              className="hidden sm:flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95"
            >
              <PhoneCall size={18} />
              <span>Call Now</span>
            </button>

            <button
              onClick={handleCall}
              className="sm:hidden w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white shadow-md"
            >
              <PhoneCall size={18} />
            </button>

            <button
              className="md:hidden ml-2 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* 4. MOBILE MENU DROPDOWN */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg flex flex-col p-4 gap-4 transition-all duration-300 origin-top ${
            mobileMenuOpen
              ? "scale-y-100 opacity-100"
              : "scale-y-0 opacity-0 pointer-events-none"
          }`}
        >
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                link.action();
                setMobileMenuOpen(false);
              }}
              className="text-left text-gray-700 font-medium py-2 border-b border-gray-50 hover:text-blue-600"
            >
              {link.name}
            </button>
          ))}
          <div className="flex items-center gap-2 text-sm text-gray-500 py-2">
            <MapPin size={16} />
            <span>Serving Greater Metro Area</span>
          </div>
        </div>
      </nav>
    </>
  );
}
