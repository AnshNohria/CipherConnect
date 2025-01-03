import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { GradientButton } from '../components/ui/GradientButton';

const plans = [
  {
    name: 'Basic',
    price: '49',
    features: [
      '10GB Encrypted Storage',
      'Basic Access Control',
      'Email Support',
      '1 Month History'
    ]
  },
  {
    name: 'Pro',
    price: '99',
    features: [
      '100GB Encrypted Storage',
      'Advanced Access Control',
      'Priority Support',
      '6 Months History',
      'Custom Branding'
    ]
  },
  {
    name: 'Enterprise',
    price: '299',
    features: [
      'Unlimited Storage',
      'Custom Access Rules',
      '24/7 Support',
      'Unlimited History',
      'Custom Integration',
      'Dedicated Account Manager'
    ]
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-gray-400">
            Choose the plan that best fits your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all"
            >
              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-white">${plan.price}</span>
                <span className="ml-2 text-gray-400">/month</span>
              </div>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-400">
                    <Check className="w-5 h-5 text-purple-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <GradientButton>Get Started</GradientButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;