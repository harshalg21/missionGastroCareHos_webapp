import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  ShieldCheck, 
  HeartPulse, 
  Users, 
  GraduationCap, 
  Building2, 
  Globe, 
  Heart,
  Quote,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Clock,
  ChevronRight,
  Building,
  Sparkle,
  Layers,
  FileCheck2,
  HandHeart,
  Compass,
  ExternalLink
} from 'lucide-react';

export default function About() {
  const [activeChapter, setActiveChapter] = useState(0);
  const [activeHospitalPillar, setActiveHospitalPillar] = useState(0);

  const biopicChapters = [
    {
      id: "ch-1",
      title: "Chapter I: Roots & Early Calling",
      subtitle: "Academic excellence at Medical College, Baroda",
      icon: <GraduationCap className="w-5 h-5" />,
      content: (
        <div className="space-y-3 animate-in fade-in duration-300">
          <h4 className="text-lg font-bold text-[#4DE2D1]">The Spark of Surgical Passion</h4>
          <p className="text-sm text-slate-200 leading-relaxed font-medium">
            Dr. Jitendra Mistry completed both his undergraduate (MBBS) and postgraduate medical degrees at the prestigious Medical College, Baroda. From his postgraduate days, he developed a singular focus: mastering the complexities of Gastrointestinal (GI) and GI Cancer Surgery.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed font-medium">
            Recognizing that surgical gastroenterology was an evolving frontier in Gujarat, he spent his early career visiting leading surgical centers across India, observing complex procedures and building deep clinical insights.
          </p>
        </div>
      )
    },
    {
      id: "ch-2",
      title: "Chapter II: Mentorship Under Legends",
      subtitle: "Sir Ganga Ram Hospital & SGPGI Lucknow",
      icon: <Building2 className="w-5 h-5" />,
      content: (
        <div className="space-y-3 animate-in fade-in duration-300">
          <h4 className="text-lg font-bold text-[#4DE2D1]">Training at Asia&apos;s Renowned GI Hub</h4>
          <p className="text-sm text-slate-200 leading-relaxed font-medium">
            In 2010, Dr. Mistry joined the Department of Surgical Gastroenterology &amp; Liver Transplantation at Sir Ganga Ram Hospital, New Delhi, for his 4-year DNB super-specialty training.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed font-medium">
            He was trained directly under world-renowned stalwarts of GI Surgery &amp; Liver Transplantation—<strong className="text-white font-extrabold">Prof. Dr. Samiran Nundy, Dr. Adarsh Chaudhary, and Dr. Arvinder Soin</strong>. Managing high-complexity GI resections and liver transplant cases laid the foundation for his meticulous clinical standards. He further enriched his experience at SGPGI Lucknow and Kaizen Hospital, Ahmedabad.
          </p>
        </div>
      )
    },
    {
      id: "ch-3",
      title: "Chapter III: Global Acclaim & Research",
      subtitle: "International DST Award & Academic Mastery",
      icon: <Globe className="w-5 h-5" />,
      content: (
        <div className="space-y-3 animate-in fade-in duration-300">
          <h4 className="text-lg font-bold text-[#4DE2D1]">Representing India on the Global Stage</h4>
          <p className="text-sm text-slate-200 leading-relaxed font-medium">
            A passionate academic researcher and peer reviewer for reputed medical journals, Dr. Mistry has published extensively in international surgical literature.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed font-medium">
            The <strong className="text-white font-extrabold">Department of Science &amp; Technology (DST), Government of India</strong>, honored him with a prestigious Travel Grant Award to represent India and present his original scientific paper at the Congress of the International Liver Transplantation Society (ILTS) in San Francisco, USA.
          </p>
        </div>
      )
    },
    {
      id: "ch-4",
      title: "Chapter IV: The Founding Dream",
      subtitle: "Building Western India&apos;s GI Center of Excellence",
      icon: <Heart className="w-5 h-5" />,
      content: (
        <div className="space-y-3 animate-in fade-in duration-300">
          <h4 className="text-lg font-bold text-[#4DE2D1]">Compassionate &amp; Affordable Care for All</h4>
          <p className="text-sm text-slate-200 leading-relaxed font-medium">
            Observing that the majority of Indian families pay out-of-pocket for medical care without insurance, Dr. Mistry founded Mission Gastrocare in Vadodara with an uncompromising vision:
          </p>
          <p className="text-sm text-slate-300 leading-relaxed font-medium">
            To build a team of formally trained, super-specialized surgeons who deliver patient-centric, gold-standard GI care at accessible, reasonable costs—bringing world-class medical treatment to every family in Gujarat and Western India.
          </p>
        </div>
      )
    }
  ];

  const hospitalPillars = [
    {
      id: "hp-1",
      title: "Pillar I: Institutional Practice",
      subtitle: "Teamwork & Multidisciplinary Ecosystem",
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-3 animate-in fade-in duration-300">
          <h4 className="text-lg font-bold text-[#4DE2D1]">The Paradigm Shift from Solo Practice</h4>
          <p className="text-sm text-slate-200 leading-relaxed font-medium">
            For decades, healthcare across Gujarat operated primarily on isolated, solo-doctor practices. But when managing high-complexity GI disorders, liver failure, pancreatic tumors, and GI cancers, true clinical success requires an <strong className="text-white font-extrabold">institutional ecosystem</strong>.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed font-medium">
            Mission Gastrocare was founded to spearhead this crucial shift. Here, patient care is driven by a collaborative multidisciplinary team. Our specialists follow evidence-based surgical protocols, hold weekly academic case reviews, engage in constructive peer audits, and continuously refine treatment strategies.
          </p>
        </div>
      )
    },
    {
      id: "hp-2",
      title: "Pillar II: Care Under One Roof",
      subtitle: "A Dream Realized for Western India",
      icon: <Building className="w-5 h-5" />,
      content: (
        <div className="space-y-3 animate-in fade-in duration-300">
          <h4 className="text-lg font-bold text-[#4DE2D1]">Eliminating Out-of-State Patient Travel</h4>
          <p className="text-sm text-slate-200 leading-relaxed font-medium">
            Mission Gastrocare is the realization of Dr. Jitendra Mistry&apos;s dream: to establish a world-class gastroenterology and surgical institution in Vadodara so families in Gujarat no longer face the physical and financial strain of traveling to Delhi, Mumbai, or southern metro cities.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed font-medium">
            Everything—from high-definition endoscopy, ERCP, and laparoscopic bariatric surgery to complex HPB resections, GI Oncology, and ICU monitoring—is delivered seamlessly in Vadodara under one roof.
          </p>
        </div>
      )
    },
    {
      id: "hp-3",
      title: "Pillar III: Clinical Rigor & Audits",
      subtitle: "Protocol-Based Excellence & Continuous Audits",
      icon: <FileCheck2 className="w-5 h-5" />,
      content: (
        <div className="space-y-3 animate-in fade-in duration-300">
          <h4 className="text-lg font-bold text-[#4DE2D1]">Evidence-Based Protocols &amp; Auditing</h4>
          <p className="text-sm text-slate-200 leading-relaxed font-medium">
            Every procedure at Mission Gastrocare is governed by standardized clinical pathways. Our surgical teams hold mandatory post-operative audit meetings to critically review outcomes and learn continuously from every case.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed font-medium">
            This culture of constructive criticism and academic updating guarantees that every next case receives even higher precision, safer recoveries, and reduced hospital stays.
          </p>
        </div>
      )
    },
    {
      id: "hp-4",
      title: "Pillar IV: Ethical Compass",
      subtitle: "Transparent Pricing & Social Duty",
      icon: <HandHeart className="w-5 h-5" />,
      content: (
        <div className="space-y-3 animate-in fade-in duration-300">
          <h4 className="text-lg font-bold text-[#4DE2D1]">Zero Corruption &amp; Social Responsibility</h4>
          <p className="text-sm text-slate-200 leading-relaxed font-medium">
            We stand firmly on the foundation of ethical medical practice—strictly rejecting commercial inflation or unnecessary procedures. Recognizing that most Indian families pay out-of-pocket, our priority is gold-standard care at transparent, reasonable costs.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed font-medium">
            We actively fulfill our social responsibility by conducting free health screening camps, spreading GI disease awareness, and delivering expert surgical treatment to financially vulnerable patients without financial barriers.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-20 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent text-[#1E293B]">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[#1D5E54] font-extrabold text-xs uppercase tracking-wider bg-[#E1F2EE] px-3 py-1 rounded-full border border-[#BDE3DB]">
          About Mission Gastrocare
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A]">
          Pioneering Digestive &amp; Liver Care in Vadodara
        </h1>
        <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-medium">
          Built on a foundation of clinical integrity, formal surgical training, and deep human empathy, Mission Gastrocare is Western India&apos;s premier super-specialty center for Gastroenterology, HPB Surgery, and GI Oncology.
        </p>
      </div>

      {/* Mission & Vision Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border border-[#A9C3C9] p-8 rounded-3xl space-y-4 relative overflow-hidden shadow-md hover:border-[#2E7D72] transition-all">
          <div className="w-12 h-12 rounded-2xl pastel-emerald-gradient flex items-center justify-center text-white font-bold shadow-md">
            <HeartPulse className="w-6 h-6 stroke-[2.5]" />
          </div>
          <h2 className="text-2xl font-extrabold text-[#0F172A]">Our Mission</h2>
          <p className="text-sm text-[#475569] leading-relaxed font-medium">
            &quot;To develop a world-class institution with a team of formally trained, highly qualified doctors operating with the highest ethical standards—providing patient-centric, excellent quality GI care at an affordable cost to every family.&quot;
          </p>
        </div>

        <div className="bg-white border border-[#A9C3C9] p-8 rounded-3xl space-y-4 relative overflow-hidden shadow-md hover:border-[#2E7D72] transition-all">
          <div className="w-12 h-12 rounded-2xl bg-[#1D5E54] flex items-center justify-center text-white font-bold shadow-md">
            <Award className="w-6 h-6 stroke-[2.5]" />
          </div>
          <h2 className="text-2xl font-extrabold text-[#0F172A]">Our Vision</h2>
          <p className="text-sm text-[#475569] leading-relaxed font-medium">
            &quot;To establish Western India as a recognized beacon of excellence in Surgical Gastroenterology, HPB Care, and Bariatric Surgery, ensuring no patient has to travel far for complex digestive health solutions.&quot;
          </p>
        </div>
      </div>

      {/* 🌟 PRESTIGIOUS CINEMATIC FOUNDER BIOPIC FEATURE: DR. JITENDRA MISTRY 🌟 */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#061815] via-[#0B2E28] to-[#164E43] text-white border-2 border-[#2E7D72]/60 shadow-2xl p-8 sm:p-12 lg:p-14 space-y-10">
        
        {/* Ambient Glowing Backdrop Orbs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#3A9D8F]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#2E7D72]/30 rounded-full blur-3xl pointer-events-none" />

        {/* Section Executive Header */}
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/15 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3A9D8F]/20 border border-[#4DE2D1]/40 text-[#4DE2D1] text-[11px] font-extrabold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Biographical Profile &amp; Founder&apos;s Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Dr. Jitendra Mistry
            </h2>
            <p className="text-xs sm:text-sm text-emerald-200 font-semibold">
              Managing Director &amp; Senior Consultant GI Surgeon, Mission Gastrocare
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-2xl text-xs font-bold text-emerald-300 shadow-md">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>18+ Years Clinical Mastery</span>
          </div>
        </div>

        {/* Cinematic 2-Column Biopic Layout */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Portrait Frame & Quick Badges */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Cinematic Doctor Photo Frame */}
            <div className="relative w-full h-[450px] rounded-3xl overflow-hidden border-2 border-emerald-400/40 shadow-2xl group bg-slate-900">
              <img 
                src="/doctors/Dr_Jitendra_Mistry.jpg" 
                alt="Dr. Jitendra Mistry - Managing Director" 
                className="w-full h-full object-cover object-[50%_32%] group-hover:scale-105 transition-transform duration-700 filter brightness-105 contrast-105"
              />
              
              {/* Overlay Glass Title Card */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#061815] via-[#061815]/80 to-transparent p-6 space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#4DE2D1] block">
                  Visionary Healthcare Leader
                </span>
                <p className="text-xl font-extrabold text-white leading-tight">Dr. Jitendra Mistry</p>
                <p className="text-xs text-slate-300 font-medium">MS, DNB (GI Surgery), DM Gastroenterology</p>
              </div>
            </div>

            {/* Biopic Key Milestone Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl space-y-1 text-center hover:bg-white/15 transition-colors">
                <GraduationCap className="w-5 h-5 text-[#4DE2D1] mx-auto" />
                <span className="text-[11px] font-bold text-white block leading-tight">Medical College Baroda</span>
                <span className="text-[10px] text-slate-300 block">MBBS &amp; MS Surgery</span>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl space-y-1 text-center hover:bg-white/15 transition-colors">
                <Building2 className="w-5 h-5 text-[#4DE2D1] mx-auto" />
                <span className="text-[11px] font-bold text-white block leading-tight">Sir Ganga Ram Hospital</span>
                <span className="text-[10px] text-slate-300 block">4-Yr DNB GI Training</span>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl space-y-1 text-center hover:bg-white/15 transition-colors">
                <Globe className="w-5 h-5 text-[#4DE2D1] mx-auto" />
                <span className="text-[11px] font-bold text-white block leading-tight">DST Travel Grant</span>
                <span className="text-[10px] text-slate-300 block">San Francisco USA</span>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl space-y-1 text-center hover:bg-white/15 transition-colors">
                <Heart className="w-5 h-5 text-[#4DE2D1] mx-auto" />
                <span className="text-[11px] font-bold text-white block leading-tight">Patient-First Philosophy</span>
                <span className="text-[10px] text-slate-300 block">Affordable Quality</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Biopic Chapter Navigator */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* High-Impact Executive Quote Box */}
            <div className="relative bg-white/10 backdrop-blur-md border-l-4 border-[#4DE2D1] p-6 rounded-r-3xl text-white space-y-2 shadow-lg">
              <Quote className="w-8 h-8 text-[#4DE2D1]/40 absolute top-3 right-4 pointer-events-none" />
              <p className="text-sm sm:text-base font-medium italic text-emerald-100 leading-relaxed">
                &quot;Mission Gastrocare is a dream born from a simple belief: every patient in India deserves access to world-class gastrointestinal surgical care delivered by formally trained specialists, without the burden of extortionate medical bills.&quot;
              </p>
              <p className="text-xs font-bold text-[#4DE2D1] text-right">
                — Dr. Jitendra Mistry, Managing Director
              </p>
            </div>

            {/* Interactive Biopic Chapters Accordion / Tab Bar */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#4DE2D1]">
                <BookOpen className="w-4 h-4" />
                <span>Explore Life Chapters:</span>
              </div>

              {/* Chapter Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {biopicChapters.map((ch, idx) => (
                  <button
                    key={ch.id}
                    onClick={() => setActiveChapter(idx)}
                    className={`p-3 rounded-2xl text-left transition-all duration-300 flex items-center justify-between gap-2 border ${
                      activeChapter === idx
                        ? 'bg-[#3A9D8F] border-[#4DE2D1] text-white shadow-lg translate-x-1'
                        : 'bg-white/5 border-white/15 text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`p-1.5 rounded-xl ${activeChapter === idx ? 'bg-white/20 text-white' : 'bg-white/10 text-emerald-400'}`}>
                        {ch.icon}
                      </div>
                      <span className="text-xs font-bold">{ch.title}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${activeChapter === idx ? 'rotate-90 text-white' : 'text-slate-400'}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Active Chapter Reading View */}
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-6 rounded-3xl space-y-3 shadow-inner min-h-[160px]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#4DE2D1]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{biopicChapters[activeChapter].subtitle}</span>
              </div>
              {biopicChapters[activeChapter].content}
            </div>

            {/* Consultation Action Bar */}
            <div className="pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-white/15">
              <span className="text-xs text-emerald-200 font-semibold">
                Available for OPD Consultations &amp; GI Tumor Board Panels
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="http://drjitendramistry.com/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/15 border border-white/30 text-white font-extrabold text-xs hover:bg-white hover:text-[#061815] transition-all shadow-sm flex items-center gap-2 group"
                >
                  <Globe className="w-3.5 h-3.5 text-[#4DE2D1] group-hover:text-[#061815]" />
                  <span>Dr. Mistry&apos;s Official Clinical Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#4DE2D1] group-hover:text-[#061815] group-hover:translate-x-0.5 transition-transform" />
                </a>
                <Link
                  to={`/book-appointment?doctor=${encodeURIComponent("Dr. Jitendra Mistry")}`}
                  className="px-5 py-2.5 rounded-xl bg-[#4DE2D1] text-[#061815] font-extrabold text-xs hover:bg-white transition-colors shadow-md active:scale-95 flex items-center gap-2"
                >
                  <span>Book OPD Slot with Dr. Mistry</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* 🏢 MATCHING CINEMATIC HOSPITAL BUILD SHOWCASE: "A DREAM COME TRUE" 🏢 */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#061815] via-[#0B2E28] to-[#164E43] text-white border-2 border-[#2E7D72]/60 shadow-2xl p-8 sm:p-12 lg:p-14 space-y-10">
        
        {/* Ambient Glowing Backdrop Orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#3A9D8F]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#2E7D72]/30 rounded-full blur-3xl pointer-events-none" />

        {/* Section Executive Header */}
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/15 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3A9D8F]/20 border border-[#4DE2D1]/40 text-[#4DE2D1] text-[11px] font-extrabold uppercase tracking-wider">
              <Sparkle className="w-3.5 h-3.5" />
              <span>Institutional Excellence • A Dream Realized</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Mission Gastrocare Hospital
            </h2>
            <p className="text-xs sm:text-sm text-emerald-200 font-semibold">
              Doctor House, Jetalpur Road, Vadodara, Gujarat
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-2xl text-xs font-bold text-emerald-300 shadow-md">
            <Building className="w-4 h-4 text-emerald-400" />
            <span>Super-Specialty Infrastructure</span>
          </div>
        </div>

        {/* Cinematic 2-Column Hospital Showcase Layout */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Real Hospital Building Photo & Glass Badges */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Real Hospital Photo Frame */}
            <div className="relative w-full h-[450px] rounded-3xl overflow-hidden border-2 border-emerald-400/40 shadow-2xl group bg-slate-900">
              <img 
                src="/hospital-building.jpg" 
                alt="Mission Gastrocare Hospital Headquarters" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-105 contrast-105"
              />
              
              {/* Overlay Glass Title Card */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#061815] via-[#061815]/80 to-transparent p-6 space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#4DE2D1] block">
                  Vadodara Landmark Facility
                </span>
                <p className="text-xl font-extrabold text-white leading-tight">Mission Gastrocare Headquarters</p>
                <p className="text-xs text-slate-300 font-medium">Doctor House, Jetalpur Road, Vadodara</p>
              </div>
            </div>

            {/* Hospital Milestone Cards Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl space-y-1 text-center hover:bg-white/15 transition-colors">
                <Layers className="w-5 h-5 text-[#4DE2D1] mx-auto" />
                <span className="text-[11px] font-bold text-white block leading-tight">Under One Roof</span>
                <span className="text-[10px] text-slate-300 block">Endoscopy, Surgery &amp; ICU</span>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl space-y-1 text-center hover:bg-white/15 transition-colors">
                <Globe className="w-5 h-5 text-[#4DE2D1] mx-auto" />
                <span className="text-[11px] font-bold text-white block leading-tight">Zero Travel Strain</span>
                <span className="text-[10px] text-slate-300 block">No Metro Referral Needed</span>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl space-y-1 text-center hover:bg-white/15 transition-colors">
                <FileCheck2 className="w-5 h-5 text-[#4DE2D1] mx-auto" />
                <span className="text-[11px] font-bold text-white block leading-tight">Protocol Based</span>
                <span className="text-[10px] text-slate-300 block">Audited Outcomes</span>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl space-y-1 text-center hover:bg-white/15 transition-colors">
                <HandHeart className="w-5 h-5 text-[#4DE2D1] mx-auto" />
                <span className="text-[11px] font-bold text-white block leading-tight">Ethical Integrity</span>
                <span className="text-[10px] text-slate-300 block">Transparent Costs</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Hospital Pillars Navigator */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* High-Impact Executive Quote Callout */}
            <div className="relative bg-white/10 backdrop-blur-md border-l-4 border-[#4DE2D1] p-6 rounded-r-3xl text-white space-y-2 shadow-lg">
              <Quote className="w-8 h-8 text-[#4DE2D1]/40 absolute top-3 right-4 pointer-events-none" />
              <p className="text-sm sm:text-base font-medium italic text-emerald-100 leading-relaxed">
                &quot;Quality healthcare is best provided when the practice pattern is institutional—where multidisciplinary teamwork, evidence-based protocols, and continuous clinical audits ensure every patient receives world-class treatment.&quot;
              </p>
              <p className="text-xs font-bold text-[#4DE2D1] text-right">
                — Institutional Practice Charter, Mission Gastrocare
              </p>
            </div>

            {/* Interactive Hospital Pillars Accordion / Tab Bar */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#4DE2D1]">
                <Compass className="w-4 h-4" />
                <span>Explore Institutional Pillars:</span>
              </div>

              {/* Pillar Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {hospitalPillars.map((hp, idx) => (
                  <button
                    key={hp.id}
                    onClick={() => setActiveHospitalPillar(idx)}
                    className={`p-3 rounded-2xl text-left transition-all duration-300 flex items-center justify-between gap-2 border ${
                      activeHospitalPillar === idx
                        ? 'bg-[#3A9D8F] border-[#4DE2D1] text-white shadow-lg translate-x-1'
                        : 'bg-white/5 border-white/15 text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`p-1.5 rounded-xl ${activeHospitalPillar === idx ? 'bg-white/20 text-white' : 'bg-white/10 text-emerald-400'}`}>
                        {hp.icon}
                      </div>
                      <span className="text-xs font-bold">{hp.title}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${activeHospitalPillar === idx ? 'rotate-90 text-white' : 'text-slate-400'}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Active Pillar Reading View */}
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-6 rounded-3xl space-y-3 shadow-inner min-h-[160px]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#4DE2D1]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{hospitalPillars[activeHospitalPillar].subtitle}</span>
              </div>
              {hospitalPillars[activeHospitalPillar].content}
            </div>

            {/* Hospital Navigation Action Bar */}
            <div className="pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-white/15">
              <span className="text-xs text-emerald-200 font-semibold">
                Located at Doctor House, Jetalpur Road, Vadodara
              </span>
              <Link
                to="/facilities"
                className="px-5 py-2.5 rounded-xl bg-[#4DE2D1] text-[#061815] font-extrabold text-xs hover:bg-white transition-colors shadow-md active:scale-95 flex items-center gap-2"
              >
                <span>Explore Hospital Infrastructure</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </section>

      {/* 🌟 HIGH-IMPACT INTERACTIVE FEATURE CARDS: "WHY CHOOSE MISSION GASTROCARE" 🌟 */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[#1D5E54] font-extrabold text-xs uppercase tracking-wider bg-[#E1F2EE] px-3 py-1 rounded-full border border-[#BDE3DB]">
            Institutional Pillars
          </span>
          <h2 className="text-3xl font-extrabold text-[#0F172A]">Why Choose Mission Gastrocare</h2>
          <p className="text-xs text-[#475569] font-medium">
            We hold ourselves to the highest global standards of clinical excellence, surgical safety, and patient satisfaction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Feature Card 1: NABH */}
          <div className="bg-white border-2 border-[#A9C3C9] p-8 rounded-3xl space-y-5 shadow-md hover:shadow-2xl hover:border-[#2E7D72] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl pastel-emerald-gradient flex items-center justify-center text-white font-bold shadow-md group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-7 h-7 stroke-[2.5]" />
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] font-extrabold text-[#1D5E54] uppercase tracking-wider bg-[#E1F2EE] px-2.5 py-1 rounded-md border border-[#BDE3DB]">
                  NABH Compliant
                </span>
                <h3 className="font-extrabold text-[#0F172A] text-xl pt-1 group-hover:text-[#164E43] transition-colors">
                  NABH Accredited Safety
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed font-medium">
                  Strict adherence to NABH safety protocols, zero-infection sterilization control, modular laminar airflow OTs, and rigorous clinical auditing.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1D5E54]">
              <span>100% Sterile OT Protocol</span>
              <ShieldCheck className="w-4 h-4 text-[#2E7D72]" />
            </div>
          </div>

          {/* Feature Card 2: Multidisciplinary */}
          <div className="bg-white border-2 border-[#A9C3C9] p-8 rounded-3xl space-y-5 shadow-md hover:shadow-2xl hover:border-[#2E7D72] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#1D5E54] flex items-center justify-center text-white font-bold shadow-md group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 stroke-[2.5]" />
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] font-extrabold text-[#1D5E54] uppercase tracking-wider bg-[#E1F2EE] px-2.5 py-1 rounded-md border border-[#BDE3DB]">
                  Tumor Board Panel
                </span>
                <h3 className="font-extrabold text-[#0F172A] text-xl pt-1 group-hover:text-[#164E43] transition-colors">
                  Multidisciplinary Faculty
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed font-medium">
                  Collaborative team of 5 formally trained super-specialists across Gastroenterology, HPB Surgery, Laparoscopy, Oncology, and GI Intensive Care.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1D5E54]">
              <span>5 Senior Specialists</span>
              <Award className="w-4 h-4 text-[#2E7D72]" />
            </div>
          </div>

          {/* Feature Card 3: 24x7 Emergency */}
          <div className="bg-white border-2 border-[#A9C3C9] p-8 rounded-3xl space-y-5 shadow-md hover:shadow-2xl hover:border-[#2E7D72] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#C94A4A] flex items-center justify-center text-white font-bold shadow-md group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-7 h-7 stroke-[2.5]" />
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] font-extrabold text-[#C94A4A] uppercase tracking-wider bg-[#FDF2F2] px-2.5 py-1 rounded-md border border-[#F8C4C4]">
                  24x7 Trauma &amp; ICU
                </span>
                <h3 className="font-extrabold text-[#0F172A] text-xl pt-1 group-hover:text-[#C94A4A] transition-colors">
                  24x7 Acute Emergency
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed font-medium">
                  Round-the-clock rapid response for acute GI bleeding, severe necrotizing pancreatitis, intestinal perforation peritonitis, and abdominal trauma.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#C94A4A]">
              <span>Immediate ER Triage</span>
              <Clock className="w-4 h-4 text-[#C94A4A]" />
            </div>
          </div>

        </div>
      </section>

      {/* CTA Box */}
      <div className="bg-white border border-[#A9C3C9] p-8 sm:p-12 rounded-3xl text-center space-y-4 shadow-md">
        <h3 className="text-2xl font-extrabold text-[#0F172A]">Need a Consultation with Our Specialists?</h3>
        <p className="text-xs text-[#475569] max-w-xl mx-auto font-medium">
          Schedule an OPD appointment online or speak with our hospital clinical coordinator directly.
        </p>
        <div className="flex justify-center gap-4 pt-2">
          <Link to="/book-appointment" className="px-6 py-3.5 rounded-xl text-white pastel-emerald-gradient font-bold text-xs shadow-md active:scale-95 transition-transform">
            Book Appointment Now
          </Link>
          <a href="tel:+919925329142" className="px-6 py-3.5 rounded-xl bg-[#EBF0F5] border border-[#CFDAE6] text-[#2C4A6F] font-bold text-xs hover:bg-[#DEE7F0] transition-colors">
            Call Hospital Helpline (+91 99253 29142)
          </a>
        </div>
      </div>

    </div>
  );
}
