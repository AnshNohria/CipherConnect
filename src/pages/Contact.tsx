import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { GradientButton } from '../components/ui/GradientButton';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="mt-4 text-gray-400">
            Have questions? We're here to help!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-purple-500 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white">Email Us</h3>
                <p className="text-gray-400">support@cipherconnect.io</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MessageSquare className="w-6 h-6 text-purple-500 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white">Discord</h3>
                <p className="text-gray-400">Join our community</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-800 text-white px-4 py-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-800 text-white px-4 py-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-800 text-white px-4 py-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <GradientButton>
              <div className="flex items-center space-x-2">
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </div>
            </GradientButton>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;