import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Key, Wallet } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: Shield,
    title: 'Secure Storage',
    description: 'End-to-end encryption for maximum security',
    delay: 0.2
  },
  {
    icon: Lock,
    title: 'Access Control',
    description: 'Time-based permissions with blockchain attestations',
    delay: 0.3
  },
  {
    icon: Key,
    title: 'Zero Knowledge',
    description: 'Complete privacy with proxy re-encryption',
    delay: 0.4
  },
  {
    icon: Wallet,
    title: 'Fair Revenue',
    description: 'Direct payments with minimal fees',
    delay: 0.5
  }
];

export const FeatureList = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative grid grid-cols-1 sm:grid-cols-2 gap-6"
    >
      {features.map((feature, index) => (
        <FeatureCard
          key={feature.title}
          {...feature}
          index={index}
        />
      ))}
    </motion.div>
  );
};