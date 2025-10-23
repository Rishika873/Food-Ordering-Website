import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-orange-50 text-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-orange-600 mb-4">TastyBite</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            Fresh, healthy, and delicious food — crafted by passionate chefs.
            We bring restaurant-quality meals straight to your doorstep.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-orange-600 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-500 transition">Home</a></li>
            <li><a href="#" className="hover:text-orange-500 transition">Menu</a></li>
            <li><a href="#" className="hover:text-orange-500 transition">About Us</a></li>
            <li><a href="#" className="hover:text-orange-500 transition">Contact</a></li>
            <li><a href="#" className="hover:text-orange-500 transition">Book Table</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-orange-600 mb-4">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-orange-500" /> 
              <span>Mumbai, India</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-orange-500" /> 
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-orange-500" /> 
              <span>support@tastybite.com</span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <a href="#" className="hover:text-orange-500 transition"><Facebook size={18} /></a>
            <a href="#" className="hover:text-orange-500 transition"><Instagram size={18} /></a>
            <a href="#" className="hover:text-orange-500 transition"><Twitter size={18} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-orange-100 text-center py-4 text-sm text-gray-600 border-t border-orange-200">
        © {new Date().getFullYear()} TastyBite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
