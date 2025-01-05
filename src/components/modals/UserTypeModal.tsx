import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Video, Play, X } from 'lucide-react';

interface UserTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (type: 'creator' | 'consumer') => void;
}

const UserTypeModal = ({ isOpen, onClose, onSelect }: UserTypeModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-900 p-8 rounded-2xl max-w-lg w-full mx-4"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Choose Your Role</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => onSelect('creator')}
                className="p-6 bg-gray-800 rounded-xl hover:bg-purple-600/20 border border-gray-700 hover:border-purple-500 transition-all group"
              >
                <Video className="w-8 h-8 text-purple-500 mb-4 group-hover:text-purple-400" />
                <h3 className="text-lg font-semibold text-white mb-2">Content Creator</h3>
                <p className="text-sm text-gray-400">Upload and monetize your content</p>
              </button>
              
              <button
                onClick={() => onSelect('consumer')}
                className="p-6 bg-gray-800 rounded-xl hover:bg-pink-600/20 border border-gray-700 hover:border-pink-500 transition-all group"
              >
                <Play className="w-8 h-8 text-pink-500 mb-4 group-hover:text-pink-400" />
                <h3 className="text-lg font-semibold text-white mb-2">Content Consumer</h3>
                <p className="text-sm text-gray-400">Discover and watch amazing content</p>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UserTypeModal;