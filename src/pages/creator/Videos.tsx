import { Play, MoreVertical } from "lucide-react";

const Videos = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-6">My Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="bg-gray-900 rounded-xl overflow-hidden group"
          >
            <div className="relative aspect-video">
              <img
                src="https://images.unsplash.com/photo-1639322537504-6427a16b0a28"
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-12 h-12 text-white" />
              </div>
              <span className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 text-sm rounded">
                12:34
              </span>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-500 transition-colors">
                    Getting Started with Web3
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    12.5k views • 2 days ago
                  </p>
                </div>
                <button className="text-gray-400 hover:text-white">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
