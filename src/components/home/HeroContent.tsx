import { motion } from "framer-motion";
import { GradientButton } from "../ui/GradientButton";

export const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Secure. Private.
          </span>
          <br />
          <span className="text-white">Decentralized.</span>
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-xl text-gray-400 max-w-lg"
      >
        Experience the future of content sharing with end-to-end encryption and
        blockchain-powered access control.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 flex flex-wrap gap-4"
      >
        <GradientButton>Get Started</GradientButton>
        <GradientButton variant="outline">Learn More</GradientButton>
      </motion.div>
    </motion.div>
  );
};
