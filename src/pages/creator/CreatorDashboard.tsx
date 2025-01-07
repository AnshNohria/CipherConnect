import { Routes, Route, NavLink } from "react-router-dom";
import { Layout, Upload, BarChart2, PlaySquare, User } from "lucide-react";
import Profile from "./Profile";
import UploadVideo from "./UploadVideo";
import Videos from "./Videos";
import Analytics from "./Analytics";

const CreatorDashboard = () => {
  return (
    <div className="flex h-screen pt-16">
      <aside className="w-64 bg-gray-900 p-4">
        <nav className="space-y-2">
          <NavLink
            to="/creator/profile"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-purple-600/20 text-purple-500"
                  : "text-gray-400 hover:bg-gray-800"
              }`
            }
          >
            <User className="w-5 h-5" />
            <span>Profile</span>
          </NavLink>
          <NavLink
            to="/creator/upload"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-purple-600/20 text-purple-500"
                  : "text-gray-400 hover:bg-gray-800"
              }`
            }
          >
            <Upload className="w-5 h-5" />
            <span>Upload Video</span>
          </NavLink>
          <NavLink
            to="/creator/videos"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-purple-600/20 text-purple-500"
                  : "text-gray-400 hover:bg-gray-800"
              }`
            }
          >
            <PlaySquare className="w-5 h-5" />
            <span>My Videos</span>
          </NavLink>
          <NavLink
            to="/creator/analytics"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-purple-600/20 text-purple-500"
                  : "text-gray-400 hover:bg-gray-800"
              }`
            }
          >
            <BarChart2 className="w-5 h-5" />
            <span>Analytics</span>
          </NavLink>
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto bg-black p-6">
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="upload" element={<UploadVideo />} />
          <Route path="videos" element={<Videos />} />
          <Route path="analytics" element={<Analytics />} />
        </Routes>
      </main>
    </div>
  );
};

export default CreatorDashboard;
