import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How does CipherConnect ensure content security?',
    answer: 'CipherConnect uses end-to-end encryption and proxy re-encryption technology to ensure your content remains secure. Content is encrypted before upload and can only be decrypted by authorized recipients.'
  },
  {
    question: 'What blockchain technology does CipherConnect use?',
    answer: 'CipherConnect is built on the Solana blockchain, chosen for its high performance, low costs, and robust security features. We use Solana for managing access control attestations and payments.'
  },
  {
    question: 'How are access permissions managed?',
    answer: 'Access permissions are managed through blockchain attestations, which specify who can access content and for how long. These permissions are immutable and automatically enforced by smart contracts.'
  },
  {
    question: 'What are the payment options?',
    answer: 'CipherConnect supports various payment models including pay-per-view, subscriptions, and custom access passes. All payments are processed through Solana smart contracts with minimal fees.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-gray-400">
            Find answers to common questions about CipherConnect
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-800 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-900/50 transition-colors"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-purple-500 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 py-4 bg-gray-900/30"
                  >
                    <p className="text-gray-400">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;