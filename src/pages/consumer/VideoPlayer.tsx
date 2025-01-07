import { useParams } from "react-router-dom";
import { ThumbsUp, MessageSquare, Share2 } from "lucide-react";

const VideoPlayer = () => {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="aspect-video bg-gray-900 rounded-xl mb-6">
            {/* Video player placeholder */}
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Video Player
            </div>
          </div>

          <h1 className="text-2xl font-bold text-white mb-4">
            Getting Started with Web3
          </h1>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt="Creator"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="text-white font-semibold">Tech Insights</h3>
                <p className="text-sm text-gray-400">15k subscribers</p>
              </div>
              <button className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors">
                Subscribe
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <ThumbsUp className="w-5 h-5" />
                <span>12k</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Description
            </h3>
            <p className="text-gray-400">
              In this video, we explore the fundamentals of Web3 technology and
              how it's revolutionizing the internet. Learn about blockchain,
              smart contracts, and decentralized applications.
            </p>
          </div>
        </div>

        <div className="lg:col-span-1">
          <h3 className="text-lg font-semibold text-white mb-4">
            Related Videos
          </h3>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex space-x-4 cursor-pointer group">
                <div className="relative w-40 aspect-video rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1639322537504-6427a16b0a28"
                    alt="Thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                    12:34
                  </span>
                </div>
                <div>
                  <h4 className="text-white group-hover:text-purple-500 transition-colors">
                    Understanding Smart Contracts
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">8.5k views</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
