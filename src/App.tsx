import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import LandingPage from './pages/LandingPage';
import CreatorDashboard from './pages/creator/CreatorDashboard';
import ConsumerDashboard from './pages/consumer/ConsumerDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/creator/*" element={<CreatorDashboard />} />
          <Route path="/consumer/*" element={<ConsumerDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;