import React from 'react';
import { useParams } from 'react-router-dom';
import { Users, Play } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'Getting Started with Web3',
    thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28',
    views: 12500,
    duration: '12:34'
  },
  // Add more videos...
];

const CreatorProfile = () => {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-gray-900 rounded-xl p-8 mb-8">
        <div className="flex items-center space-x-8">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            alt="Creator"
            className="w-32 h-32 rounded-full object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Tech Insights</h1>
            <p className="text-gray-400 mb-4">
              Deep dives into the latest technology trends and innovations.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-400">
                <Users className="w-5 h-5 mr-2" />
                15k subscribers
              </div>
              <button className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mb-6">Latest Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-gray-900 rounded-xl overflow-hidden group cursor-pointer"
          >
            <div className="relative aspect-video">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-12 h-12 text-white" />
              </div>
              <span className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 text-sm rounded">
                {video.duration}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white group-hover:text-purple-500 transition-colors">
                {video.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1">{video.views.toLocaleString()} views</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatorProfile;