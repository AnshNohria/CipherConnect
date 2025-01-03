import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
  index: number;
}

export const FeatureCard = ({ icon: Icon, title, description, delay }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="group p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative">
          <Icon className="w-8 h-8 text-purple-500 group-hover:text-pink-500 transition-colors" />
          <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm text-gray-400">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};