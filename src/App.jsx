import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Global Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import RegistrationModal from './components/RegistrationModal';

// Pages
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import Schedule from './pages/Schedule';
import Speakers from './pages/Speakers';
import Partners from './pages/Partners';
import About from './pages/About';
import Venue from './pages/Venue';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleOpenRegister = () => {
    setIsRegisterModalOpen(true);
  };

  const handleCloseRegister = () => {
    setIsRegisterModalOpen(false);
  };

  return (
    <BrowserRouter>
      {/* Branded Loading Animation */}
      {loading && (
        <LoadingScreen onComplete={() => setLoading(false)} />
      )}

      {/* Auto Scroll To Top on Route Changes */}
      <ScrollToTop />

      {/* Global Navbar */}
      <Navbar onOpenRegister={handleOpenRegister} />

      {/* Main Routed Content */}
      <main className="main-content-wrapper">
        <Routes>
          <Route path="/" element={<Home onOpenRegister={handleOpenRegister} />} />
          <Route path="/events" element={<Events onOpenRegister={handleOpenRegister} />} />
          <Route path="/events/:id" element={<EventDetails onOpenRegister={handleOpenRegister} />} />
          <Route path="/schedule" element={<Schedule onOpenRegister={handleOpenRegister} />} />
          <Route path="/speakers" element={<Speakers onOpenRegister={handleOpenRegister} />} />
          <Route path="/partners" element={<Partners onOpenRegister={handleOpenRegister} />} />
          <Route path="/about" element={<About onOpenRegister={handleOpenRegister} />} />
          <Route path="/venue" element={<Venue onOpenRegister={handleOpenRegister} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer onOpenRegister={handleOpenRegister} />

      {/* Global Registration Modal */}
      <RegistrationModal 
        isOpen={isRegisterModalOpen} 
        onClose={handleCloseRegister} 
      />
    </BrowserRouter>
  );
}
