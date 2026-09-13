import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Agentation } from 'agentation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EmergencyBanner from '@/components/EmergencyBanner';
import CookieBanner from '@/components/CookieBanner';
import AIChatWidget from '@/components/AIChatWidget';

import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Doctors from '@/pages/Doctors';
import Facilities from '@/pages/Facilities';
import BookAppointment from '@/pages/BookAppointment';
import AITriage from '@/pages/AITriage';
import Blog from '@/pages/Blog';
import Careers from '@/pages/Careers';
import Contact from '@/pages/Contact';
import Media from '@/pages/Media';
import AdminPortal from '@/pages/AdminPortal';
import PatientRights from '@/pages/PatientRights';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#BFD4D9] text-[#1E293B] antialiased">
      <ScrollToTop />
      <EmergencyBanner />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/ai-triage" element={<AITriage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/media" element={<Media />} />
          <Route path="/admin" element={<AdminPortal />} />
          <Route path="/patient-rights" element={<PatientRights />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
      <AIChatWidget />
      <Agentation />
    </div>
  );
}
