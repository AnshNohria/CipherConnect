import React from 'react';
import { Camera } from 'lucide-react';

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-900 rounded-xl p-8">
        <div className="flex items-center space-x-8">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full bg-gray-800 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 bg-purple-500 p-2 rounded-full hover:bg-purple-600 transition-colors">
              <Camera className="w-4 h-4 text-white" />
            </button>
          </div>
          
          <div className="flex-1">
            <input
              type="text"
              placeholder="Channel Name"
              className="bg-transparent text-2xl font-bold text-white border-none focus:outline-none focus:ring-0 mb-2"
              defaultValue="Creative Studio"
            />
            <textarea
              placeholder="Channel Description"
              className="w-full bg-gray-800 rounded-lg p-3 text-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-500"
              rows={3}
              defaultValue="Creating amazing content about technology and creativity."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;