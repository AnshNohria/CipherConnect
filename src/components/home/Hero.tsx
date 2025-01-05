import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Key, Wallet } from 'lucide-react';
import { GradientButton } from '../ui/GradientButton';

interface HeroProps {
  onGetStarted: () => void;
}

const features = [
  {
    icon: Shield,
    title: 'Secure Storage',
    description: 'End-to-end encryption for maximum security'
  },
  {
    icon: Lock,
    title: 'Access Control',
    description: 'Time-based permissions with blockchain'
  },
  {
    icon: Key,
    title: 'Zero Knowledge',
    description: 'Complete privacy with encryption'
  },
  {
    icon: Wallet,
    title: 'Fair Revenue',
    description: 'Direct payments with minimal fees'
  }
];

const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Secure. Private. Decentralized.
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Experience the future of content sharing with end-to-end encryption
            and blockchain-powered access control.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <GradientButton onClick={onGetStarted}>Get Started</GradientButton>
            <GradientButton variant="outline">Learn More</GradientButton>
          </div>
        </motion.div>
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all"
          >
            <feature.icon className="w-8 h-8 text-purple-500 group-hover:text-pink-500 transition-colors" />
            <h3 className="mt-4 text-xl font-semibold text-white">{feature.title}</h3>
            <p className="mt-2 text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Hero;