import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Agentation } from 'agentation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EmergencyBanner from '@/components/EmergencyBanner';
import CookieBanner from '@/components/CookieBanner';
import AIChatWidget from '@/components/AIChatWidget';

// Eagerly loaded core entry route
import Home from '@/pages/Home';

// Lazy-loaded secondary & administrative routes for optimal code splitting
const About = lazy(() => import('@/pages/About'));
const Services = lazy(() => import('@/pages/Services'));
const Doctors = lazy(() => import('@/pages/Doctors'));
const Facilities = lazy(() => import('@/pages/Facilities'));
const BookAppointment = lazy(() => import('@/pages/BookAppointment'));
const AITriage = lazy(() => import('@/pages/AITriage'));
const Blog = lazy(() => import('@/pages/Blog'));
const Careers = lazy(() => import('@/pages/Careers'));
const Contact = lazy(() => import('@/pages/Contact'));
const Media = lazy(() => import('@/pages/Media'));
const AdminPortal = lazy(() => import('@/pages/AdminPortal'));
const PatientRights = lazy(() => import('@/pages/PatientRights'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('@/pages/TermsAndConditions'));
const NotFound = lazy(() => import('@/pages/NotFound'));

function RouteLoadingFallback() {
  return (
    <div className="min-h-[45vh] flex items-center justify-center py-16" aria-label="Loading page content">
      <div className="w-8 h-8 border-3 border-[#1D5E54]/25 border-t-[#1D5E54] rounded-full animate-spin" />
    </div>
  );
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class RouteErrorBoundary extends React.Component<{ children: React.ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Route lazy loading error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center py-16 px-4 text-center">
          <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 mb-4 font-bold text-xl">
            !
          </div>
          <h2 className="text-xl font-bold text-[#0F172A] mb-2">Failed to load page content</h2>
          <p className="text-xs text-[#475569] max-w-md mb-6">
            A temporary network interruption prevented this section from loading. Please check your internet connection and try reloading.
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false });
              window.location.reload();
            }}
            className="px-5 py-2.5 rounded-xl bg-[#1D5E54] hover:bg-[#164E43] text-white text-xs font-bold transition-colors shadow-sm"
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

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
        <RouteErrorBoundary>
          <Suspense fallback={<RouteLoadingFallback />}>
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
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </RouteErrorBoundary>
      </main>
      <Footer />
      <CookieBanner />
      <AIChatWidget />
      <Agentation />
    </div>
  );
}
