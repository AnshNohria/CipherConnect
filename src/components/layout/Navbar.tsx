import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Wallet } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-black/50 backdrop-blur-lg border-b border-gray-800 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Shield className="w-8 h-8 text-purple-500 group-hover:text-pink-500 transition-colors" />
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              CipherConnect
            </span>
          </Link>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:shadow-glow transition-shadow"
          >
            <Wallet className="w-4 h-4" />
            <span>Connect</span>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
