import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Activity, 
  Menu, 
  X, 
  ChevronDown, 
  Calendar, 
  Bot, 
  Stethoscope
} from 'lucide-react';

const servicesList = [
  { title: "GI Surgery & Laparoscopic", href: "/services#gi-surgery", desc: "Advanced minimally invasive gastrointestinal surgeries" },
  { title: "Hepato-Pancreato-Biliary (HPB)", href: "/services#hpb", desc: "Specialized liver, gallbladder & pancreatic procedures" },
  { title: "Bariatric & Metabolic Surgery", href: "/services#bariatric", desc: "Surgical weight loss & metabolic syndrome management" },
  { title: "GI Cancer Surgery & Tumor Board", href: "/services#gi-cancer", desc: "Comprehensive oncology care & multi-specialty tumor board" },
  { title: "Medical Gastroenterology & Endoscopy", href: "/services#endoscopy", desc: "Diagnostic & therapeutic endoscopy, colonoscopy, ERCP" },
  { title: "General GI & Emergency Care", href: "/services#general-gi", desc: "24x7 acute abdomen, hernia & trauma care" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-[#BFD4D9]/95 backdrop-blur-md shadow-md border-b border-[#A9C3C9]' : 'bg-[#BFD4D9] border-b border-[#A9C3C9]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Name (Official emblem cropped cleanly from MGC_Logo.png) */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <img 
              src="/mgc-logo-icon.png" 
              alt="Mission Gastrocare Official Emblem" 
              className="w-11 h-11 rounded-xl shadow-md group-hover:scale-105 transition-transform shrink-0 object-contain bg-white p-0.5 border border-[#BDE3DB]"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-[#164E43] group-hover:text-[#2E7D72] transition-colors leading-tight">
                MISSION GASTROCARE
              </span>
              <span className="text-[11px] text-[#334155] tracking-wide font-semibold mt-0.5">
                Institute of Gastroenterology &amp; GI Surgery
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links - Clean, spacious & uncluttered */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-colors ${
                pathname === '/' ? 'text-[#1D5E54] bg-[#E1F2EE] border border-[#BDE3DB]' : 'text-[#334155] hover:text-[#1D5E54] hover:bg-white/60'
              }`}
            >
              Home
            </Link>

            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-colors ${
                pathname === '/about' ? 'text-[#1D5E54] bg-[#E1F2EE] border border-[#BDE3DB]' : 'text-[#334155] hover:text-[#1D5E54] hover:bg-white/60'
              }`}
            >
              About
            </Link>

            {/* Mega Menu Dropdown for Services */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link 
                to="/services"
                className={`px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-colors flex items-center gap-1 ${
                  pathname?.startsWith('/services') ? 'text-[#1D5E54] bg-[#E1F2EE] border border-[#BDE3DB]' : 'text-[#334155] hover:text-[#1D5E54] hover:bg-white/60'
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-[#1D5E54]' : ''}`} />
              </Link>

              {servicesOpen && (
                <div className="absolute top-full left-0 w-96 bg-white border border-[#A9C3C9] rounded-2xl shadow-xl p-3 grid grid-cols-1 gap-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-1.5 text-xs font-bold text-[#1D5E54] uppercase tracking-wider border-b border-slate-100 mb-1 flex items-center justify-between">
                    <span>Clinical Departments</span>
                    <Stethoscope className="w-3.5 h-3.5" />
                  </div>
                  {servicesList.map((service, idx) => (
                    <Link
                      key={idx}
                      to={service.href}
                      className="p-2.5 rounded-xl hover:bg-[#F0F7FA] transition-colors group flex flex-col"
                      onClick={() => setServicesOpen(false)}
                    >
                      <span className="text-sm font-semibold text-[#1E293B] group-hover:text-[#1D5E54] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3A9D8F]"></span>
                        {service.title}
                      </span>
                      <span className="text-xs text-[#64748B] mt-0.5 line-clamp-1 font-medium">
                        {service.desc}
                      </span>
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-slate-100 mt-1">
                    <Link 
                      to="/services" 
                      className="block text-center text-xs font-bold text-[#1D5E54] hover:underline py-1"
                      onClick={() => setServicesOpen(false)}
                    >
                      View All Clinical Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/doctors" 
              className={`px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-colors ${
                pathname === '/doctors' ? 'text-[#1D5E54] bg-[#E1F2EE] border border-[#BDE3DB]' : 'text-[#334155] hover:text-[#1D5E54] hover:bg-white/60'
              }`}
            >
              Doctors
            </Link>

            <Link 
              to="/facilities" 
              className={`px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-colors ${
                pathname === '/facilities' ? 'text-[#1D5E54] bg-[#E1F2EE] border border-[#BDE3DB]' : 'text-[#334155] hover:text-[#1D5E54] hover:bg-white/60'
              }`}
            >
              Facilities
            </Link>

            <Link 
              to="/media" 
              className={`px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-colors ${
                pathname === '/media' ? 'text-[#1D5E54] bg-[#E1F2EE] border border-[#BDE3DB]' : 'text-[#334155] hover:text-[#1D5E54] hover:bg-white/60'
              }`}
            >
              Media
            </Link>

            <Link 
              to="/careers" 
              className={`px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-colors ${
                pathname === '/careers' ? 'text-[#1D5E54] bg-[#E1F2EE] border border-[#BDE3DB]' : 'text-[#334155] hover:text-[#1D5E54] hover:bg-white/60'
              }`}
            >
              Careers
            </Link>

            <Link 
              to="/contact" 
              className={`px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-colors ${
                pathname === '/contact' ? 'text-[#1D5E54] bg-[#E1F2EE] border border-[#BDE3DB]' : 'text-[#334155] hover:text-[#1D5E54] hover:bg-white/60'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            <Link
              to="/ai-triage"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-[#EBF0F5] text-[#2C4A6F] border border-[#CFDAE6] hover:bg-white transition-colors shadow-sm"
            >
              <Bot className="w-4 h-4 text-[#2C4A6F]" />
              <span>AI Triage</span>
            </Link>

            <Link
              to="/book-appointment"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs xl:text-sm text-white pastel-emerald-gradient hover:opacity-95 transition-all shadow-md active:scale-95"
            >
              <Calendar className="w-4 h-4 stroke-[2.5]" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/book-appointment"
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-white pastel-emerald-gradient shadow-sm"
            >
              Book
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#334155] hover:text-[#0F172A] hover:bg-white/60 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#BFD4D9] border-b border-[#A9C3C9] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200 shadow-xl max-h-[85vh] overflow-y-auto">
          <Link
            to="/"
            className={`block px-3 py-2.5 rounded-xl text-base font-semibold ${pathname === '/' ? 'text-[#1D5E54] bg-[#E1F2EE]' : 'text-[#1E293B]'}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`block px-3 py-2.5 rounded-xl text-base font-semibold ${pathname === '/about' ? 'text-[#1D5E54] bg-[#E1F2EE]' : 'text-[#1E293B]'}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            About Hospital
          </Link>
          <Link
            to="/services"
            className={`block px-3 py-2.5 rounded-xl text-base font-semibold ${pathname?.startsWith('/services') ? 'text-[#1D5E54] bg-[#E1F2EE]' : 'text-[#1E293B]'}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Specialties &amp; Services
          </Link>
          <Link
            to="/doctors"
            className={`block px-3 py-2.5 rounded-xl text-base font-semibold ${pathname === '/doctors' ? 'text-[#1D5E54] bg-[#E1F2EE]' : 'text-[#1E293B]'}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Doctor Team
          </Link>
          <Link
            to="/facilities"
            className={`block px-3 py-2.5 rounded-xl text-base font-semibold ${pathname === '/facilities' ? 'text-[#1D5E54] bg-[#E1F2EE]' : 'text-[#1E293B]'}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Facilities
          </Link>
          <Link
            to="/media"
            className={`block px-3 py-2.5 rounded-xl text-base font-semibold ${pathname === '/media' ? 'text-[#1D5E54] bg-[#E1F2EE]' : 'text-[#1E293B]'}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Media &amp; News
          </Link>
          <Link
            to="/careers"
            className={`block px-3 py-2.5 rounded-xl text-base font-semibold ${pathname === '/careers' ? 'text-[#1D5E54] bg-[#E1F2EE]' : 'text-[#1E293B]'}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Careers &amp; Job Openings
          </Link>
          <Link
            to="/contact"
            className={`block px-3 py-2.5 rounded-xl text-base font-semibold ${pathname === '/contact' ? 'text-[#1D5E54] bg-[#E1F2EE]' : 'text-[#1E293B]'}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>

          <div className="pt-4 border-t border-[#A9C3C9] space-y-2">
            <Link
              to="/ai-triage"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-[#2C4A6F] bg-[#EBF0F5] border border-[#CFDAE6]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Bot className="w-5 h-5 text-[#2C4A6F]" />
              Launch AI Symptom Triage
            </Link>
            <Link
              to="/book-appointment"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-[#FFFFFF] pastel-emerald-gradient shadow-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Calendar className="w-5 h-5" />
              Book Appointment Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
