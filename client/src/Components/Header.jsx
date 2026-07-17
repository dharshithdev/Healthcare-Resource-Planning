import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiActivity } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2.5 text-indigo-600 font-bold text-xl sm:text-2xl group">
              <img 
                src="/heart.png" 
                alt="HRP Logo" 
                className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform duration-300 group-hover:scale-105" 
              />
              <span>HRP</span>
            </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            <Link to="/dashboard" className="hover:text-indigo-600 transition-colors">Dashboard</Link>
            <Link to="/analytics" className="hover:text-indigo-600 transition-colors">Analytics</Link>
            <Link to="/records" className="hover:text-indigo-600 transition-colors">Records</Link>
            <Link 
              to="/login" 
              className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl hover:bg-indigo-700 shadow-md shadow-indigo-100 transition-all"
            >
              Log-in
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-50 focus:outline-none"
            >
              {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 text-base font-medium text-gray-600">
              <Link to="/login" onClick={() => setIsOpen(false)} className="block py-2 hover:text-indigo-600">Dashboard</Link>
              <Link to="/analytics" onClick={() => setIsOpen(false)} className="block py-2 hover:text-indigo-600">Analytics</Link>
              <Link to="/records" onClick={() => setIsOpen(false)} className="block py-2 hover:text-indigo-600">Records</Link>
              <Link 
                to="/login" 
                onClick={() => setIsOpen(false)} 
                className="block text-center bg-indigo-600 text-white py-3 rounded-xl font-semibold shadow-lg"
              >
                Log-in
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;