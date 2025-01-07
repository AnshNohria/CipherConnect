import { Routes, Route } from "react-router-dom";
import CreatorList from "./CreatorList";
import CreatorProfile from "./CreatorProfile";
import VideoPlayer from "./VideoPlayer";

const ConsumerDashboard = () => {
  return (
    <div className="pt-16 min-h-screen bg-black">
      <Routes>
        <Route path="/" element={<CreatorList />} />
        <Route path="/creator/:id" element={<CreatorProfile />} />
        <Route path="/video/:id" element={<VideoPlayer />} />
      </Routes>
    </div>
  );
};

export default ConsumerDashboard;
