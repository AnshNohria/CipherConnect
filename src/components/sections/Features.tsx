import { motion } from "framer-motion";
import { Shield, Lock, Key, Wallet, Zap, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Storage",
    description:
      "Your content is encrypted before upload and only decrypted by authorized recipients.",
  },
  {
    icon: Lock,
    title: "Access Control",
    description:
      "Define precise access rules with blockchain-based attestations.",
  },
  {
    icon: Key,
    title: "Zero Knowledge",
    description: "Complete privacy with proxy re-encryption technology.",
  },
  {
    icon: Wallet,
    title: "Direct Payments",
    description: "Receive payments directly through smart contracts.",
  },
  {
    icon: Zap,
    title: "Instant Delivery",
    description:
      "Lightning-fast content delivery through decentralized networks.",
  },
  {
    icon: Clock,
    title: "Time-Based Access",
    description:
      "Set precise duration for content access with automatic expiration.",
  },
];

const Features = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Platform Features
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all"
            >
              <feature.icon className="w-8 h-8 text-purple-500 group-hover:text-pink-500 transition-colors" />
              <h3 className="mt-4 text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
