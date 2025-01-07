import { Upload, Plus } from "lucide-react";

const UploadVideo = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-6">Upload Video</h1>

      <div className="bg-gray-900 rounded-xl p-8">
        <div className="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center">
          <div className="flex flex-col items-center">
            <Upload className="w-12 h-12 text-purple-500 mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">
              Drag and drop your video here
            </h2>
            <p className="text-gray-400 mb-4">
              or click to select a file from your computer
            </p>
            <button className="bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition-colors flex items-center">
              <Plus className="w-5 h-5 mr-2" />
              Select File
            </button>
          </div>
        </div>

        <div className="mt-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Title
              </label>
              <input
                type="text"
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter video title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Description
              </label>
              <textarea
                rows={4}
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter video description"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Thumbnail
              </label>
              <div className="border-2 border-dashed border-gray-700 rounded-lg p-4 text-center">
                <button className="text-purple-500 hover:text-purple-400">
                  Upload Thumbnail
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button className="bg-purple-500 text-white px-8 py-3 rounded-full hover:bg-purple-600 transition-colors">
              Upload Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadVideo;
