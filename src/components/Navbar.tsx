import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Lock, Wallet } from 'lucide-react';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-black/50 backdrop-blur-lg border-b border-gray-800 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              CipherConnect
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-purple-500 transition-colors">
              Home
            </Link>
            <Link to="/features" className="text-gray-300 hover:text-purple-500 transition-colors">
              Features
            </Link>
            <Link to="/how-it-works" className="text-gray-300 hover:text-purple-500 transition-colors">
              How it Works
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-purple-500 transition-colors">
              Contact
            </Link>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full flex items-center space-x-2"
          >
            <Wallet className="w-4 h-4" />
            <span>Connect Wallet</span>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;