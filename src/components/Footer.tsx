import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  MapPin, 
  Phone, 
  Clock, 
  ShieldCheck, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Send
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1E293B] text-[#CBD5E1] text-sm">
      {/* Top Accreditation & Emergency Banner */}
      <div className="bg-[#E1F2EE] border-b border-[#BDE3DB] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white border border-[#BDE3DB] flex items-center justify-center text-[#1D5E54] shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-[#0F172A] font-extrabold text-base">NABH Accredited Gastro Care Hospital</h4>
              <p className="text-xs text-[#334155] font-medium">Adhering to strict international clinical protocols &amp; patient safety standards.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+919925329142"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              <span>Emergency 24x7: (+91) 99253 29142</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Col 1: About Hospital */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img 
              src="/mgc-logo-icon.png" 
              alt="Mission Gastrocare Official Emblem" 
              className="w-10 h-10 rounded-xl shadow-sm object-contain bg-white p-0.5 border border-[#BDE3DB]" 
            />
            <span className="font-extrabold text-lg tracking-tight text-white">
              MISSION GASTROCARE
            </span>
          </div>
          <p className="text-xs text-[#94A3B8] leading-relaxed font-medium">
            Vadodara&apos;s premier super-specialty hospital for Gastroenterology, Hepato-Pancreato-Biliary (HPB) Surgery, Bariatric Surgery, GI Oncology &amp; Advanced Endoscopy.
          </p>
          <div className="pt-2 flex items-center gap-3">
            <a
              href="https://www.instagram.com/missiongastrocare"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#334155] border border-[#475569] flex items-center justify-center text-[#E2E8F0] hover:text-[#5EEAD4] hover:border-[#5EEAD4] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/p/Mission-Gastrocare-100068558808602/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#334155] border border-[#475569] flex items-center justify-center text-[#E2E8F0] hover:text-[#5EEAD4] hover:border-[#5EEAD4] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/mission-gastrocare-vadodara"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#334155] border border-[#475569] flex items-center justify-center text-[#E2E8F0] hover:text-[#5EEAD4] hover:border-[#5EEAD4] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h5 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-[#334155] pb-2">
            Quick Navigation
          </h5>
          <ul className="space-y-2 text-xs font-medium">
            <li>
              <Link to="/about" className="hover:text-[#5EEAD4] transition-colors">About Our Hospital</Link>
            </li>
            <li>
              <Link to="/doctors" className="hover:text-[#5EEAD4] transition-colors">Specialist Doctors Team</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#5EEAD4] transition-colors">Specialties &amp; Procedures</Link>
            </li>
            <li>
              <Link to="/facilities" className="hover:text-[#5EEAD4] transition-colors">Facilities &amp; Ward Rooms</Link>
            </li>
            <li>
              <Link to="/media" className="hover:text-[#5EEAD4] transition-colors">Media &amp; News Coverage</Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-[#5EEAD4] transition-colors text-[#5EEAD4] font-bold">Careers &amp; Openings</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#5EEAD4] transition-colors">Contact Us &amp; Maps</Link>
            </li>
            <li>
              <Link to="/patient-rights" className="hover:text-[#5EEAD4] transition-colors">Patient Charter &amp; Rights</Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Key Clinical Services */}
        <div>
          <h5 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-[#334155] pb-2">
            Clinical Specialties
          </h5>
          <ul className="space-y-2.5 text-xs font-medium">
            <li>
              <Link to="/services#gi-surgery" className="hover:text-[#5EEAD4] transition-colors">Laparoscopic GI Surgery</Link>
            </li>
            <li>
              <Link to="/services#hpb" className="hover:text-[#5EEAD4] transition-colors">HPB &amp; Liver Surgery</Link>
            </li>
            <li>
              <Link to="/services#bariatric" className="hover:text-[#5EEAD4] transition-colors">Bariatric &amp; Weight Loss</Link>
            </li>
            <li>
              <Link to="/services#gi-cancer" className="hover:text-[#5EEAD4] transition-colors">GI Oncology &amp; Tumor Board</Link>
            </li>
            <li>
              <Link to="/services#endoscopy" className="hover:text-[#5EEAD4] transition-colors">Therapeutic Endoscopy &amp; ERCP</Link>
            </li>
            <li>
              <Link to="/facilities#icu" className="hover:text-[#5EEAD4] transition-colors">Intensive Care Unit (ICU)</Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact & Hospital Address */}
        <div className="space-y-3 font-medium">
          <h5 className="text-white font-bold text-sm uppercase tracking-wider border-b border-[#334155] pb-2">
            Hospital Contact
          </h5>
          
          <div className="flex items-start gap-2.5 text-xs">
            <MapPin className="w-4 h-4 text-[#5EEAD4] shrink-0 mt-0.5" />
            <a 
              href="https://maps.google.com/?q=Mission+Gastrocare+Vadodara" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#5EEAD4] transition-colors"
            >
              "Doctor House", 19 Windward Park, Jetalpur Road, Vadodara 390020
            </a>
          </div>

          <div className="flex items-center gap-2.5 text-xs">
            <Phone className="w-4 h-4 text-[#5EEAD4] shrink-0" />
            <div className="flex flex-col">
              <a href="tel:+919925329142" className="hover:text-[#5EEAD4] font-bold">(+91) 99253 29142</a>
              <a href="tel:02652393766" className="hover:text-[#5EEAD4]">0265-2393766</a>
            </div>
          </div>

          <div className="flex items-center gap-2.5 text-xs">
            <Clock className="w-4 h-4 text-[#5EEAD4] shrink-0" />
            <span>OPD: 10:00 AM - 8:00 PM (24x7 Emergency)</span>
          </div>

          {/* Newsletter Signup */}
          <div className="pt-2">
            <p className="text-[11px] font-semibold text-[#CBD5E1] mb-2">Subscribe for GI Health Updates</p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to Mission Gastrocare Health Tips!'); }} className="flex gap-1.5">
              <input
                type="email"
                placeholder="Enter email address"
                required
                className="w-full bg-[#334155] border border-[#475569] rounded-lg px-3 py-1.5 text-xs text-white placeholder-[#94A3B8] focus:outline-none focus:border-[#5EEAD4]"
              />
              <button
                type="submit"
                className="px-3 py-1.5 rounded-lg pastel-emerald-gradient text-white font-bold text-xs shrink-0 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* Bottom Legal Bar */}
      <div className="bg-[#0F172A] border-t border-[#334155] py-6 px-4 text-center text-xs text-[#94A3B8]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Mission Gastrocare, Vadodara. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[#94A3B8] text-xs font-medium">
            <span>NABH Accredited</span>
            <span>•</span>
            <Link to="/patient-rights" className="hover:text-[#5EEAD4]">Patient Charter</Link>
            <span>•</span>
            <Link to="/careers" className="hover:text-[#5EEAD4]">Careers</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-[#5EEAD4]">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
