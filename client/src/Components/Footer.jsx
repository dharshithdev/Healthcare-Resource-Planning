import React from 'react';
import { FiActivity } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand/Copyright */}
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <img 
                src="/heart.png" 
                alt="HRP Logo" 
                className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            <span>&copy; {new Date().getFullYear()} HRP Platform. All rights reserved.</span>
          </div>

          {/* Links Row */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-500">
            <Link to="/privacy" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-indigo-600 transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-indigo-600 transition-colors">Support Portal</Link>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;