import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';

// Global Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

// Pages
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import Schedule from './pages/Schedule';
import Speakers from './pages/Speakers';
import Partners from './pages/Partners';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import SingleScroll from './pages/SingleScroll';
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

  return (
    <BrowserRouter>
      {/* Branded Loading Animation */}
      {loading && (
        <LoadingScreen onComplete={() => setLoading(false)} />
      )}

      {/* Auto Scroll To Top on Route Changes */}
      <ScrollToTop />

      {/* Global Navbar */}
      <Navbar />

      {/* Main Routed Content */}
      <main className="main-content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/build-break-defend" element={<Navigate to="/events/verdictx" replace />} />
          <Route path="/events/cipherx" element={<Navigate to="/events/sherlock-syntax" replace />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/partners" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/venue" element={<Navigate to="/contact" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/singlescroll" element={<SingleScroll />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />
    </BrowserRouter>
  );
}
