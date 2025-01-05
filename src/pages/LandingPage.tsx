import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/home/Hero';
import Features from '../components/sections/Features';
import About from '../components/sections/About';
import FAQ from '../components/sections/FAQ';
import UserTypeModal from '../components/modals/UserTypeModal';

const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    setShowModal(true);
  };

  const handleUserTypeSelect = (type: 'creator' | 'consumer') => {
    setShowModal(false);
    navigate(`/${type}`);
  };

  return (
    <div className="relative">
      <section className="relative">
        <Hero onGetStarted={handleGetStarted} />
      </section>
      <section className="relative">
        <Features />
      </section>
      <section className="relative">
        <About />
      </section>
      <section className="relative">
        <FAQ />
      </section>
      
      <UserTypeModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)}
        onSelect={handleUserTypeSelect}
      />
    </div>
  );
};

export default LandingPage;