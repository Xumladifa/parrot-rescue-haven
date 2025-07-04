import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/src/assets/photo_2025-06-28_17-21-36.jpg"
                alt="Parrot Haven Logo"
                className="h-10 w-auto object-contain filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Dedicated to rescuing, rehabilitating, and finding loving homes for parrots in need. 
              Every bird deserves a second chance at happiness.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">About Us</Link></li>
              <li><Link to="/parrots" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Available Parrots</Link></li>
              <li><Link to="/new-rescues" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">New Rescues</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">How to Help</Link></li>
              <li><Link to="/accessories" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Accessories Shop</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">(555) 123-BIRD</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">parrotrescueteam@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">14 Rescue Lane<br />Denver, ST 1455</span>
              </div>
            </div>
          </div>

          {/* Donation Banner */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support Our Mission</h3>
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Heart className="w-5 h-5 text-white" />
                <span className="text-white font-medium">Giving Wings to Second Chances</span>
              </div>
              <p className="text-blue-100 text-sm mb-3">
                Your donation helps us rescue and care for parrots in need.
              </p>
              <Link
                to="/donate"
                className="block bg-white text-blue-600 text-center py-2 px-4 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Parrot Haven Rescue Center. All rights reserved. | 501(c)(3) Non-Profit Organization</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;