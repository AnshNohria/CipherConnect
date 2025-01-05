import React from 'react';
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';

const creators = [
  {
    id: 1,
    name: 'Tech Insights',
    description: 'Deep dives into the latest technology trends and innovations.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    subscribers: 15000,
    videos: 45
  },
  // Add more creators...
];

const CreatorList = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        Popular Creators
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {creators.map((creator) => (
          <Link
            key={creator.id}
            to={`/consumer/creator/${creator.id}`}
            className="bg-gray-900 rounded-xl p-6 hover:border-purple-500/50 border border-gray-800 transition-all group"
          >
            <div className="flex items-center space-x-4">
              <img
                src={creator.image}
                alt={creator.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-white group-hover:text-purple-500 transition-colors">
                  {creator.name}
                </h3>
                <div className="flex items-center text-sm text-gray-400 mt-1">
                  <Users className="w-4 h-4 mr-1" />
                  {creator.subscribers.toLocaleString()} subscribers
                </div>
              </div>
            </div>
            <p className="mt-4 text-gray-400 line-clamp-2">{creator.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CreatorList;