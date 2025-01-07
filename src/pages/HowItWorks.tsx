import { motion } from "framer-motion";
import { Upload, Lock, Key, Download } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Content",
    description: "Securely upload your content with client-side encryption",
  },
  {
    icon: Lock,
    title: "Set Access Rules",
    description: "Define who can access your content and for how long",
  },
  {
    icon: Key,
    title: "Share Securely",
    description: "Recipients get secure access through blockchain attestations",
  },
  {
    icon: Download,
    title: "Access Content",
    description: "Authorized users can decrypt and access content seamlessly",
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            How It Works
          </h1>
          <p className="mt-4 text-gray-400">
            Simple, secure, and decentralized content sharing in four easy steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="group p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all">
                <step.icon className="w-8 h-8 text-purple-500 group-hover:text-pink-500 transition-colors" />
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-400">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
