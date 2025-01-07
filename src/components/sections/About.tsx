import { motion } from "framer-motion";
import { Code, Database, Shield, Users } from "lucide-react";

const techStack = [
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Built with security-first approach",
  },
  {
    icon: Database,
    title: "Decentralized Storage",
    description: "Content stored across distributed networks",
  },
  {
    icon: Code,
    title: "Smart Contracts",
    description: "Automated content access control",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Built by creators, for creators",
  },
];

const About = () => {
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
            About Our Platform
          </h2>
          <p className="mt-4 text-gray-400">
            Building the future of content sharing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            <p className="text-gray-400">
              To revolutionize digital content sharing by providing a secure,
              private, and decentralized platform that empowers creators and
              protects user privacy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">Our Vision</h3>
            <p className="text-gray-400">
              A world where content creators have full control over their
              digital assets, and users can share sensitive information without
              compromising security.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all"
            >
              <tech.icon className="w-8 h-8 text-purple-500 group-hover:text-pink-500 transition-colors" />
              <h3 className="mt-4 text-lg font-semibold text-white">
                {tech.title}
              </h3>
              <p className="mt-2 text-sm text-gray-400">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
