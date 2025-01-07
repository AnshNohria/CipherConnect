import { motion } from "framer-motion";
import { Shield, Lock, Key, Wallet } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Secure. Private. Decentralized.
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-400">
              CipherConnect revolutionizes content sharing with end-to-end
              encryption and blockchain-powered access control.
            </p>
            <div className="mt-8 flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-purple-500 text-purple-500 px-8 py-3 rounded-full"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl" />
            <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: Shield,
                    title: "Secure Storage",
                    desc: "End-to-end encryption",
                  },
                  {
                    icon: Lock,
                    title: "Access Control",
                    desc: "Time-based permissions",
                  },
                  {
                    icon: Key,
                    title: "Zero Knowledge",
                    desc: "Complete privacy",
                  },
                  {
                    icon: Wallet,
                    title: "Fair Revenue",
                    desc: "Direct payments",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="p-4 bg-black/50 rounded-xl border border-gray-800"
                  >
                    <item.icon className="w-8 h-8 text-purple-500 mb-2" />
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
