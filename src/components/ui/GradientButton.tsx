import React from 'react';
import { motion } from 'framer-motion';

interface GradientButtonProps {
  children: React.ReactNode;
  variant?: 'solid' | 'outline';
  onClick?: () => void;
}

export const GradientButton = ({ 
  children, 
  variant = 'solid', 
  onClick 
}: GradientButtonProps) => {
  const baseClasses = "px-8 py-3 rounded-full font-medium transition-all duration-200";
  
  const variants = {
    solid: "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-glow",
    outline: "border-2 border-purple-500 text-purple-500 hover:text-pink-500 hover:border-pink-500"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};