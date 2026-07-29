import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Stethoscope, 
  ChevronRight, 
  ChevronLeft, 
  Award, 
  Phone,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Star
} from 'lucide-react';

const slides = [
  {
    title: "Best Gastroenterologist & GI Surgery Hospital in Vadodara",
    subtitle: "Advanced Laparoscopic, Hepato-Pancreato-Biliary (HPB) & Bariatric Surgery by Leading Specialists.",
    badge: "NABH Accredited Center of Clinical Excellence",
    highlights: ["20,000+ Successful GI Procedures", "24x7 Emergency & ICU Care", "Modular Endoscopy & OT Suites"]
  },
  {
    title: "World-Class HPB, Liver & GI Oncology Care in Gujarat",
    subtitle: "Comprehensive GI Tumor Board & Multidisciplinary Surgical Cancer Treatments under Dr. Jitendra Mistry & Team.",
    badge: "Multidisciplinary Tumor Board Protocol",
    highlights: ["Minimally Invasive Laparoscopy", "Liver & Pancreatic Specialists", "Therapeutic ERCP & Endoscopy"]
  },
  {
    title: "24x7 Acute Abdomen, Trauma & ERCP Emergency Care",
    subtitle: "Immediate response for severe stomach pain, GI bleeding, gallstones, and acute intestinal emergencies.",
    badge: "24x7 Immediate Emergency Response",
    highlights: ["Direct Specialist Consultation", "Zero Waiting in Emergency", "In-House Radiology & Pathology"]
  }
];

function CursorGradientHeading({ title }: { title: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [gradientPos, setGradientPos] = useState({ x: 50, y: 50, isHovered: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);
    setGradientPos({ x, y, isHovered: true });
  };

  const handleMouseLeave = () => {
    setGradientPos({ x: 50, y: 50, isHovered: false });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative cursor-pointer select-none py-1"
    >
      {/* Pure Text Gradient Blend Following the Cursor - No external dots or circles */}
      <h1
        className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.18] transition-all duration-300 ease-out"
        style={{
          backgroundImage: gradientPos.isHovered
            ? `radial-gradient(circle 220px at ${gradientPos.x}% ${gradientPos.y}%, #3A9D8F 0%, #2E7D72 35%, #1D5E54 65%, #0F172A 100%)`
            : 'none',
          WebkitBackgroundClip: gradientPos.isHovered ? 'text' : undefined,
          WebkitTextFillColor: gradientPos.isHovered ? 'transparent' : '#0F172A',
          color: gradientPos.isHovered ? 'transparent' : '#0F172A',
        }}
      >
        {title}
      </h1>
    </div>
  );
}

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroMousePos, setHeroMousePos] = useState({ x: 50, y: 50, isHovered: false });
  const heroRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);
    setHeroMousePos({ x, y, isHovered: true });
  };

  const handleHeroMouseLeave = () => {
    setHeroMousePos({ x: 50, y: 50, isHovered: false });
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section 
      ref={heroRef}
      onMouseMove={handleHeroMouseMove}
      onMouseLeave={handleHeroMouseLeave}
      className="relative bg-gradient-to-br from-[#BFD4D9] via-[#CADBE0] to-[#B4C6CC] text-[#1E293B] overflow-hidden py-14 lg:py-20 border-b border-[#A9C3C9] group/hero"
    >
      
      {/* Dynamic Ambient Glowing Orbs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#2E7D72]/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#3A9D8F]/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* 🌟 Interactive Dark Charcoal Cursor-Following Ambient Gradient Backdrop (Completely replaces old dotted grid) 🌟 */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-300 ease-out"
        style={{
          background: heroMousePos.isHovered
            ? `radial-gradient(circle 550px at ${heroMousePos.x}% ${heroMousePos.y}%, rgba(15, 23, 42, 0.16) 0%, rgba(30, 41, 59, 0.08) 45%, transparent 75%)`
            : 'none'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#BDE3DB] text-[#1D5E54] text-xs font-extrabold uppercase tracking-wider shadow-sm transition-all hover:scale-105">
              <Award className="w-4 h-4 text-[#1D5E54]" />
              <span>{slides[currentSlide].badge}</span>
            </div>

            {/* Pure Text Gradient Blend Following the Cursor */}
            <CursorGradientHeading title={slides[currentSlide].title} />

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#334155] leading-relaxed font-medium">
              {slides[currentSlide].subtitle}
            </p>

            {/* Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {slides[currentSlide].highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#1E293B] bg-white/90 backdrop-blur-md border border-[#A9C3C9] px-3.5 py-2.5 rounded-2xl shadow-sm hover:border-[#2E7D72] hover:-translate-y-1 transition-all">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7D72] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/book-appointment"
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-white pastel-emerald-gradient hover:opacity-95 transition-all shadow-md active:scale-95 text-sm hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5 stroke-[2.5]" />
                <span>Book Doctor Appointment</span>
              </Link>

              <a
                href="tel:+919925329142"
                className="flex items-center gap-2 px-5 py-3.5 rounded-2xl font-bold text-[#334155] bg-white/90 backdrop-blur-md border border-[#A9C3C9] hover:bg-white hover:text-[#0F172A] transition-all text-sm shadow-sm hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-rose-600" />
                <span>Call Emergency (+91 99253 29142)</span>
              </a>
            </div>

            {/* Slider Navigation Controls */}
            <div className="flex items-center gap-3 pt-4">
              <button
                onClick={prevSlide}
                className="p-2.5 rounded-xl bg-white/90 backdrop-blur-md border border-[#A9C3C9] hover:border-[#2E7D72] text-[#334155] hover:text-[#1D5E54] transition-all shadow-sm active:scale-90"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentSlide === i ? 'w-8 bg-[#2E7D72]' : 'w-2.5 bg-slate-400/60'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2.5 rounded-xl bg-white/90 backdrop-blur-md border border-[#A9C3C9] hover:border-[#2E7D72] text-[#334155] hover:text-[#1D5E54] transition-all shadow-sm active:scale-90"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

          {/* Right Column: Frosted Glass Appointment Card */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 backdrop-blur-md border border-[#A9C3C9] p-6 sm:p-7 rounded-3xl shadow-xl space-y-4 text-[#1E293B] relative overflow-hidden">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-3.5">
                <div className="flex items-center gap-2 text-[#0F172A] font-extrabold text-base">
                  <Stethoscope className="w-5 h-5 text-[#2E7D72]" />
                  <span>Quick Consultation Booking</span>
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1D5E54] bg-[#E1F2EE] px-2.5 py-1 rounded-full border border-[#BDE3DB] flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#1D5E54]" />
                  Instant Slots
                </span>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); navigate('/book-appointment'); }} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#334155] mb-1">Select Doctor / Specialty</label>
                  <select className="w-full bg-[#FAFBFB] border border-[#A9C3C9] rounded-xl px-3.5 py-2.5 text-xs text-[#1E293B] focus:outline-none focus:border-[#2E7D72] font-medium transition-colors">
                    <option value="">Dr. Jitendra Mistry (Gastroenterology)</option>
                    <option value="">Dr. Saurabh Dey (GI &amp; Laparoscopic Surgery)</option>
                    <option value="">Dr. Deepali Mistry (Consultant Gastroenterologist)</option>
                    <option value="">Dr. Himani Patel (HPB &amp; Liver Specialist)</option>
                    <option value="">Dr. Parul Mistry (Critical Care &amp; Anesthesia)</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#334155] mb-1">Patient Name</label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      className="w-full bg-[#FAFBFB] border border-[#A9C3C9] rounded-xl px-3.5 py-2.5 text-xs text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2E7D72] font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#334155] mb-1">Mobile Phone</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      className="w-full bg-[#FAFBFB] border border-[#A9C3C9] rounded-xl px-3.5 py-2.5 text-xs text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2E7D72] font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#334155] mb-1">Preferred Consultation Date</label>
                  <input
                    type="date"
                    required
                    defaultValue={new Date().toISOString().split('T')[0]}
                    className="w-full bg-[#FAFBFB] border border-[#A9C3C9] rounded-xl px-3.5 py-2.5 text-xs text-[#1E293B] focus:outline-none focus:border-[#2E7D72] font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl font-bold text-white pastel-emerald-gradient hover:opacity-95 transition-all text-xs tracking-wide shadow-md active:scale-95 flex items-center justify-center gap-2 hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4 stroke-[2.5]" />
                  <span>Confirm Slot Selection</span>
                </button>
              </form>

              <div className="pt-2 text-center border-t border-slate-100">
                <p className="text-[11px] text-[#64748B] font-medium">
                  Prefer WhatsApp? <a href="https://wa.me/919925329142" target="_blank" rel="noopener noreferrer" className="text-[#1D5E54] font-bold hover:underline">Book via WhatsApp →</a>
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Floating Stats Cards */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5 pt-8 border-t border-[#A9C3C9]">
          
          <div className="bg-white/90 backdrop-blur-md border border-[#A9C3C9] p-4.5 rounded-2xl text-center space-y-1 shadow-sm hover:-translate-y-1.5 transition-all duration-300 group">
            <div className="w-8 h-8 rounded-full bg-[#E1F2EE] text-[#1D5E54] flex items-center justify-center mx-auto mb-1 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#1D5E54]">20,000+</span>
            <p className="text-xs text-[#334155] font-semibold">Successful GI Surgeries</p>
          </div>

          <div className="bg-white/90 backdrop-blur-md border border-[#A9C3C9] p-4.5 rounded-2xl text-center space-y-1 shadow-sm hover:-translate-y-1.5 transition-all duration-300 group">
            <div className="w-8 h-8 rounded-full bg-[#E1F2EE] text-[#1D5E54] flex items-center justify-center mx-auto mb-1 group-hover:scale-110 transition-transform">
              <Award className="w-4 h-4" />
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#1D5E54]">15+ Years</span>
            <p className="text-xs text-[#334155] font-semibold">Clinical Excellence</p>
          </div>

          <div className="bg-white/90 backdrop-blur-md border border-[#A9C3C9] p-4.5 rounded-2xl text-center space-y-1 shadow-sm hover:-translate-y-1.5 transition-all duration-300 group">
            <div className="w-8 h-8 rounded-full bg-[#E1F2EE] text-[#1D5E54] flex items-center justify-center mx-auto mb-1 group-hover:scale-110 transition-transform">
              <Star className="w-4 h-4 text-amber-500 fill-current" />
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#1D5E54]">4.8★ Rating</span>
            <p className="text-xs text-[#334155] font-semibold">500+ Patient Reviews</p>
          </div>

          <div className="bg-white/90 backdrop-blur-md border border-[#A9C3C9] p-4.5 rounded-2xl text-center space-y-1 shadow-sm hover:-translate-y-1.5 transition-all duration-300 group">
            <div className="w-8 h-8 rounded-full bg-[#E1F2EE] text-[#1D5E54] flex items-center justify-center mx-auto mb-1 group-hover:scale-110 transition-transform">
              <Phone className="w-4 h-4 text-rose-600" />
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#1D5E54]">24x7</span>
            <p className="text-xs text-[#334155] font-semibold">Emergency &amp; ICU Support</p>
          </div>

        </div>

      </div>
    </section>
  );
}
