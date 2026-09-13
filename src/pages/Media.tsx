import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Newspaper, Heart, Award, Image, Sparkles, ExternalLink, 
  Calendar, Search, BookOpen, User, ArrowRight, Share2, 
  CheckCircle2, X, MessageSquare, Clock, Filter, ShieldAlert,
  ShieldCheck, Eye, EyeOff
} from 'lucide-react';
import { PublishedArticle } from './AdminPortal';

const DEFAULT_BLOG_POSTS: PublishedArticle[] = [
  {
    id: "art-1",
    title: "Monsoon Acid Reflux & Hydration Guide: Doctor's Preventive Tips",
    summary: "Essential advice by Dr. Jitendra Mistry on preventing acidity, GERD flare-ups, and waterborne GI infections during rain season.",
    content: `During the monsoon season, high humidity, fluctuating temperatures, and sudden dietary shifts often trigger severe gastroesophageal reflux disease (GERD) and stomach distress. 

Dr. Jitendra Mistry (Consultant GI & HPB Surgeon) recommends the following preventive digestive protocol:
1. **Maintain Warm Hydration**: Drink boiled or UV-filtered water. Warm water relaxes the lower esophageal sphincter and aids digestion.
2. **Avoid Oily Street Foods**: Moisture in monsoon accelerates bacterial growth on exposed food items.
3. **Eat Early Dinners**: Complete your evening meal by 7:30 - 8:00 PM. Allow at least 2 hours between dinner and sleep to prevent nighttime acid regurgitation.
4. **Probiotics & Fermented Foods**: Incorporate fresh yogurt or buttermilk to support healthy gut flora.

If heartburn, chest burning, or acid regurgitation persists for more than 3 consecutive days, schedule a specialist OPD consultation at Mission Gastrocare for diagnostic endoscopy screening.`,
    category: "Gastroenterology",
    date: "September 5, 2026",
    readTime: "4 min read",
    author: "Dr. Jitendra Mistry",
    publishedToFB: true,
    publishedToBlog: true,
    broadcastNewsletter: true,
    views: 412
  },
  {
    id: "art-2",
    title: "Advanced ERCP & HPB Surgical Breakthroughs at Mission Gastrocare",
    summary: "How minimally invasive endoscopic retrograde cholangiopancreatography (ERCP) treats complex bile duct stones without large surgical incisions.",
    content: `Endoscopic Retrograde Cholangiopancreatography (ERCP) is a specialized procedure that combines high-definition upper GI endoscopy and X-ray fluoroscopy to diagnose and treat conditions of the bile ducts, gallbladder, and pancreas.

Key Patient Benefits of ERCP at Mission Gastrocare:
• **No Large Abdominal Incisions**: Performed via the mouth using advanced flexible video endoscopes.
• **Rapid Stone Removal**: Direct extraction of common bile duct (CBD) stones and jaundice relief.
• **Painless Stenting**: Placement of plastic or metallic stents to bypass bile duct narrowings or tumors.
• **24-Hour Recovery**: Most patients return home the next day.

Equipped with 4K Ultra-HD endoscopic towers and dedicated day-care recovery bays, Mission Gastrocare offers comprehensive HPB care in Vadodara.`,
    category: "Surgical Innovation",
    date: "August 28, 2026",
    readTime: "5 min read",
    author: "Dr. Jitendra Mistry",
    publishedToFB: true,
    publishedToBlog: true,
    broadcastNewsletter: false,
    views: 628
  },
  {
    id: "art-3",
    title: "Fatty Liver Disease (NAFLD): Symptoms, FibroScan Screening & Reversal",
    summary: "Non-Alcoholic Fatty Liver Disease affects over 30% of adults. Learn how early FibroScan screening can detect liver stiffness before cirrhosis.",
    content: `Non-Alcoholic Fatty Liver Disease (NAFLD) occurs when excess fat accumulates in liver cells. Left unmanaged, it can progress to non-alcoholic steatohepatitis (NASH), liver fibrosis, and irreversible cirrhosis.

**Why Early FibroScan Screening Matters:**
Unlike traditional liver biopsies, FibroScan (Transient Elastography) is a painless, 5-minute non-invasive ultrasound scan that measures liver fat (CAP score) and liver stiffness (kPa).

**Doctor's 3-Step Liver Reversal Strategy:**
1. Aim for a gradual 7-10% body weight reduction through daily 30-minute exercise.
2. Limit refined carbohydrates, fructose syrups, and saturated fats.
3. Schedule annual liver enzyme (ALT/AST) blood panels and FibroScan screening.`,
    category: "Hepatology & Liver Care",
    date: "August 14, 2026",
    readTime: "6 min read",
    author: "Dr. Jitendra Mistry",
    publishedToFB: true,
    publishedToBlog: true,
    broadcastNewsletter: true,
    views: 890
  }
];

const mediaArticles = [
  {
    id: "media-1",
    title: "Dr. Jitendra Mistry Performs Rare Complex HPB Surgery in Vadodara",
    source: "Times Health / Gujarat News",
    date: "March 15, 2026",
    summary: "Leading GI Surgeon Dr. Jitendra Mistry successfully performed a complex pancreaticoduodenectomy (Whipple procedure) restoring full digestive health.",
    category: "Surgical Breakthrough"
  },
  {
    id: "media-2",
    title: "Free GI & Fatty Liver Awareness Camp Conducted at Jetalpur Road",
    source: "Mission Gastrocare Press Release",
    date: "January 20, 2026",
    summary: "Over 250 patients received free FibroScan liver screening, blood sugar tests, and specialist consultations during the community health drive.",
    category: "Community Camp"
  },
  {
    id: "media-3",
    title: "Advanced 4K Laparoscopic & Endoscopy Suite Inaugurated",
    source: "Medical Times Gujarat",
    date: "November 10, 2025",
    summary: "Mission Gastrocare expands its surgical capacity with state-of-the-art 4K Ultra-HD endoscopic towers and dedicated day-care procedure rooms.",
    category: "Infrastructure Expansion"
  }
];

export interface CategorizedGalleryImage {
  id: string;
  title: string;
  category: 'Infrastructure' | 'Surgery' | 'Academic' | 'News';
  desc: string;
  url: string;
  tags: string[];
}

export const SCRAPED_GALLERY_IMAGES: CategorizedGalleryImage[] = [
  {
    id: "gal-1",
    title: "Intraoperative Enteroscopy Suite",
    category: "Surgery",
    desc: "Advanced intraoperative enteroscopy procedure for deep small bowel evaluation & targeted lesion localization.",
    url: "https://www.missiongastrocare.com/admin/image/upload/gallery/image/85598.Intraop enteroscopy.jpg",
    tags: ["enteroscopy", "intraop", "endoscopy", "surgery", "small bowel", "bleeding"]
  },
  {
    id: "gal-2",
    title: "Advanced Surgical ICU & Critical Care",
    category: "Infrastructure",
    desc: "State-of-the-art 24x7 Surgical ICU with multi-para monitors, mechanical ventilators & continuous intensivist care.",
    url: "https://www.missiongastrocare.com/admin/image/upload/gallery/image/37140.icu_.jpg",
    tags: ["icu", "intensive care", "ventilator", "emergency", "infrastructure", "critical care"]
  },
  {
    id: "gal-3",
    title: "Operation Theatre Suite 1 (4K Ultra-HD)",
    category: "Infrastructure",
    desc: "Modulary equipped Operation Theatre with 4K UHD laparoscopic tower, harmonic scalpel & HEPA air filtration.",
    url: "https://www.missiongastrocare.com/admin/image/upload/gallery/image/7936.ot.jpg",
    tags: ["ot", "operation theatre", "laparoscopy", "surgical suite", "infrastructure"]
  },
  {
    id: "gal-4",
    title: "Operation Theatre Suite 2",
    category: "Infrastructure",
    desc: "Dedicated GI & HPB surgical suite with advanced C-arm fluoroscopy & specialized electrosurgical generators.",
    url: "https://www.missiongastrocare.com/admin/image/upload/gallery/image/74313.ot2.jpg",
    tags: ["ot", "operation theatre", "surgical suite", "hpb", "ercp", "c-arm"]
  },
  {
    id: "gal-5",
    title: "Hospital Main Reception & Patient Desk",
    category: "Infrastructure",
    desc: "Spacious welcome lounge with digital registration desks, patient assistance desk & comfortable seating.",
    url: "https://www.missiongastrocare.com/admin/image/upload/gallery/image/71998.Mg-reception.jpg",
    tags: ["reception", "entrance", "waiting area", "lobby", "infrastructure"]
  },
  {
    id: "gal-6",
    title: "Multislice CT Scan & Diagnostic Suite",
    category: "Infrastructure",
    desc: "High-resolution computed tomography (CT) scan facility for emergency abdominal imaging & vascular mapping.",
    url: "https://www.missiongastrocare.com/admin/image/upload/gallery/image/80202.Ctscen.jpg",
    tags: ["ct scan", "radiology", "imaging", "diagnostics", "x-ray", "infrastructure"]
  },
  {
    id: "gal-7",
    title: "Senior Doctor OPD Consultation Room 1",
    category: "Infrastructure",
    desc: "Private OPD consultation room equipped for physical abdominal examinations and patient counseling.",
    url: "https://www.missiongastrocare.com/admin/image/upload/gallery/image/83135.Opd1.jpg",
    tags: ["opd", "consultation", "doctor room", "clinic", "infrastructure"]
  },
  {
    id: "gal-8",
    title: "OPD Consultation Room 3",
    category: "Infrastructure",
    desc: "Clean and quiet OPD suite designed for detailed patient history recording and pre-surgical evaluations.",
    url: "https://www.missiongastrocare.com/admin/image/upload/gallery/image/72540.Opd2.jpg",
    tags: ["opd", "consultation", "examination", "clinic", "infrastructure"]
  },
  {
    id: "gal-9",
    title: "OPD Consultation Room 4",
    category: "Infrastructure",
    desc: "Modern outpatient consultation chamber for gastroenterology and bariatric surgery patients.",
    url: "https://www.missiongastrocare.com/admin/image/upload/gallery/image/70307.opd4.jpg",
    tags: ["opd", "consultation", "clinic", "infrastructure"]
  },
  {
    id: "gal-10",
    title: "Inpatient Deluxe Room",
    category: "Infrastructure",
    desc: "Air-conditioned private inpatient room with motorized patient bed, attendant couch, attached bath & LED TV.",
    url: "https://www.missiongastrocare.com/admin/image/upload/gallery/image/14430.Inpatient Room.jpg",
    tags: ["inpatient", "room", "deluxe ward", "patient room", "infrastructure"]
  },
  {
    id: "gal-11",
    title: "Inpatient Private Suite Ward 2",
    category: "Infrastructure",
    desc: "Well-ventilated private room ensuring comfortable post-operative recovery for surgical patients.",
    url: "https://www.missiongastrocare.com/admin/image/upload/gallery/image/37910.inpatient2.jpg",
    tags: ["inpatient", "ward", "private room", "recovery", "infrastructure"]
  },
  {
    id: "gal-12",
    title: "Clinical Meeting & Case Discussion Room",
    category: "Infrastructure",
    desc: "Multidisciplinary conference room where complex GI oncology and surgical cases are reviewed by experts.",
    url: "https://www.missiongastrocare.com/admin/image/upload/gallery/image/36240.Meeting.jpg",
    tags: ["meeting", "conference", "tumor board", "discussion", "infrastructure"]
  },
  {
    id: "gal-13",
    title: "In-House Hospital Pharmacy",
    category: "Infrastructure",
    desc: "24x7 fully stocked pharmacy dispensing emergency GI drugs, parenteral nutrition & surgical consumables.",
    url: "https://www.missiongastrocare.com/admin/image/upload/gallery/image/74579.ph.jpg",
    tags: ["pharmacy", "medicines", "chemist", "drugs", "infrastructure"]
  },
  {
    id: "gal-14",
    title: "Abdominal Tuberculosis Case Study",
    category: "Surgery",
    desc: "Complex surgical management of peritoneal and intestinal tuberculosis with strictureplasty.",
    url: "https://www.missiongastrocare.com/admin/image/upload/gallery/image/73839.Abdominal TB.jpg",
    tags: ["abdominal tb", "tuberculosis", "intestine", "stricture", "surgery", "pathology"]
  },
  {
    id: "gal-15",
    title: "Intestinal Obstruction Band Resection",
    category: "Surgery",
    desc: "Emergency surgical release of congenital abdominal band causing acute small bowel obstruction.",
    url: "https://www.missiongastrocare.com/admin/image/upload/gallery/image/61717.Band causing intestinal obstruction.jpg",
    tags: ["obstruction", "band", "intestine", "bowel", "emergency", "surgery"]
  },
  {
    id: "gal-16",
    title: "Pancreatic Traumatic Transection Repair",
    category: "Surgery",
    desc: "Successful distal pancreatectomy & splenic preservation for complete blunt pancreatic injury.",
    url: "https://www.missiongastrocare.com/admin/image/upload/gallery/image/43856.Complete pancreatic traumatic transection.jpg",
    tags: ["pancreatic", "pancreas", "trauma", "transection", "whipple", "surgery"]
  },
  {
    id: "gal-17",
    title: "Congenital Malrotation & Internal Hernia",
    category: "Surgery",
    desc: "Complex Ladd's procedure and internal hernia reduction restoring gut perfusion.",
    url: "https://www.missiongastrocare.com/admin/image/upload/gallery/image/84334.Congenital malrotation and internal hernia.jpg",
    tags: ["malrotation", "hernia", "internal hernia", "congenital", "surgery"]
  },
  {
    id: "gal-18",
    title: "Giant Hepatic Hydatid Cyst Resection",
    category: "Surgery",
    desc: "Excision and pericystectomy of massive liver hydatid cyst preserving normal liver parenchyma.",
    url: "https://www.missiongastrocare.com/admin/image/upload/gallery/image/13833.Liver hydatid cyst.jpg",
    tags: ["liver", "hydatid cyst", "hpb", "hepatic", "cyst", "surgery"]
  },
  {
    id: "gal-19",
    title: "Massive Lower GI Bleeding Colectomy",
    category: "Surgery",
    desc: "Emergency life-saving total colectomy for acute torrential lower intestinal hemorrhage.",
    url: "https://www.missiongastrocare.com/admin/image/upload/gallery/image/79548.Massive bleeding from colon_total colon removed.jpg",
    tags: ["colon", "bleeding", "colectomy", "hemorrhage", "surgery", "gi emergency"]
  },
  {
    id: "gal-20",
    title: "Portal Systemic Shunt Surgery (PSRS)",
    category: "Surgery",
    desc: "Proximal Splenorenal Shunt (PSRS) procedure for non-cirrhotic portal hypertension and variceal bleed.",
    url: "https://www.missiongastrocare.com/admin/image/upload/gallery/image/80920.PSRS.jpg",
    tags: ["psrs", "shunt", "portal hypertension", "splenectomy", "hpb", "surgery"]
  },
  {
    id: "gal-21",
    title: "Delivering Oration at Kaizen Con",
    category: "Academic",
    desc: "Dr. Jitendra Mistry delivering invited guest lecture on advanced laparoscopic GI surgical techniques.",
    url: "https://www.missiongastrocare.com/admin/image/upload/gallery/image/65592.37400.22.jpg",
    tags: ["kaizen con", "lecture", "oration", "academic", "presentation", "conference"]
  },
  {
    id: "gal-22",
    title: "Delivering Keynote at GI Cancer Update",
    category: "Academic",
    desc: "Faculty presentation on multidisciplinary management of GI tract malignancies & pancreatic cancer.",
    url: "https://www.missiongastrocare.com/admin/image/upload/gallery/image/52118.24652.21.jpg",
    tags: ["gi cancer", "oncology", "keynote", "lecture", "academic", "conference"]
  },
  {
    id: "gal-23",
    title: "Specialist Conference Talk & Panel Discussion",
    category: "Academic",
    desc: "Chairing surgical symposia on minimially invasive bariatric & HPB surgical innovations.",
    url: "https://www.missiongastrocare.com/admin/image/upload/gallery/image/73495.31650.23.jpg",
    tags: ["conference", "talk", "panel", "academic", "seminar"]
  },
  {
    id: "gal-24",
    title: "Excellence in GI Surgery Award",
    category: "Academic",
    desc: "Prestigious recognition awarded to Dr. Jitendra Mistry for clinical excellence & pioneering surgical care.",
    url: "https://www.missiongastrocare.com/admin/image/upload/gallery/image/38660.99572.2.jpg",
    tags: ["award", "recognition", "excellence", "academic", "honor"]
  },
  {
    id: "gal-25",
    title: "Dr. Jitendra Mistry with Spiritual Leader Swamiji",
    category: "Academic",
    desc: "Seeking blessings and discussing community healthcare initiatives with Swamiji.",
    url: "https://www.missiongastrocare.com/admin/image/upload/gallery/image/94597.89136.3.jpg",
    tags: ["swamiji", "blessings", "guest", "academic", "social work"]
  },
  {
    id: "gal-26",
    title: "Hospital Felicitations & Community Service",
    category: "Academic",
    desc: "Honoring eminent healthcare leaders and public health champions at Mission Gastrocare.",
    url: "https://www.missiongastrocare.com/admin/image/upload/gallery/image/27087.73280.19.jpg",
    tags: ["felicitation", "swamiji", "guest", "community", "academic"]
  },
  {
    id: "gal-27",
    title: "Media Release: Advanced GI Care Breakthroughs",
    category: "News",
    desc: "Press coverage highlighting Mission Gastrocare's milestone surgical treatments in Vadodara.",
    url: "https://www.missiongastrocare.com/admin/image/upload/gallery/image/24350.news.jpg",
    tags: ["news", "media", "press", "newspaper", "breakthrough"]
  }
];

export default function Media() {
  const [activeTab, setActiveTab] = useState<'health-articles' | 'press-coverage' | 'campus-gallery'>('health-articles');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedArticle, setSelectedArticle] = useState<PublishedArticle | null>(null);

  // Gallery Search & Category State
  const [gallerySearchQuery, setGallerySearchQuery] = useState<string>('');
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState<string>('All');
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<CategorizedGalleryImage | null>(null);

  // Medical Discretion Shield State (Blurs raw surgical & organ photos by default)
  const [blurSensitivePhotos, setBlurSensitivePhotos] = useState<boolean>(true);
  const [revealedPhotoIds, setRevealedPhotoIds] = useState<Record<string, boolean>>({});
  const [modalPhotoRevealed, setModalPhotoRevealed] = useState<boolean>(false);

  const toggleRevealPhoto = (id: string) => {
    setRevealedPhotoIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Dynamic articles from localStorage or default
  const [healthArticles, setHealthArticles] = useState<PublishedArticle[]>(() => {
    const saved = localStorage.getItem('mg_published_articles');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.length > 0 ? parsed : DEFAULT_BLOG_POSTS;
      } catch (e) {
        return DEFAULT_BLOG_POSTS;
      }
    }
    return DEFAULT_BLOG_POSTS;
  });

  // Filter articles
  const categories = ['All', 'Gastroenterology', 'Surgical Innovation', 'Hepatology & Liver Care', 'Diet & Wellness'];

  const filteredArticles = healthArticles.filter(art => {
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === 'All' || art.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  // Gallery categories and search filtering logic
  const galleryCategories = ['All', 'Infrastructure', 'Surgery', 'Academic', 'News'];

  const filteredGalleryImages = SCRAPED_GALLERY_IMAGES.filter(img => {
    const q = gallerySearchQuery.trim().toLowerCase();
    const matchesSearch = q === '' ||
      img.title.toLowerCase().includes(q) ||
      img.desc.toLowerCase().includes(q) ||
      img.category.toLowerCase().includes(q) ||
      img.tags.some(t => t.toLowerCase().includes(q));

    const matchesCategory = selectedGalleryCategory === 'All' || img.category === selectedGalleryCategory;

    return matchesSearch && matchesCategory;
  });

  const handleOpenArticle = (art: PublishedArticle) => {
    setSelectedArticle(art);

    // Increment reader view count
    const updated = healthArticles.map(item => {
      if (item.id === art.id) {
        return { ...item, views: (item.views || 0) + 1 };
      }
      return item;
    });
    setHealthArticles(updated);
    localStorage.setItem('mg_published_articles', JSON.stringify(updated));
  };

  // Lock body scrolling when reader modal is active (prevents double scrollbars)
  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedArticle]);

  // Helper to cleanly format markdown asterisks & bullet points
  const renderFormattedContent = (rawText: string) => {
    return rawText.split('\n\n').map((paragraph, pIdx) => {
      // Check if paragraph contains bullet points or numbered lists
      const lines = paragraph.split('\n');
      return (
        <div key={pIdx} className="space-y-1.5 mb-4">
          {lines.map((line, lIdx) => {
            // Replace **bold** with styled strong elements
            const parts = line.split(/(\*\*.*?\*\*)/g);
            const formattedLine = parts.map((part, partIdx) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return (
                  <strong key={partIdx} className="font-extrabold text-[#0F172A]">
                    {part.slice(2, -2)}
                  </strong>
                );
              }
              return part;
            });

            return (
              <p key={lIdx} className="text-sm text-[#334155] leading-relaxed font-medium">
                {formattedLine}
              </p>
            );
          })}
        </div>
      );
    });
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#164E43] via-[#1D5E54] to-[#2E7D72] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="max-w-3xl space-y-4 relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-emerald-100 text-xs font-bold uppercase tracking-wider">
            <Newspaper className="w-4 h-4" />
            Media &amp; Health Hub
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Patient Health Guides, News &amp; Hospital Gallery
          </h1>
          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
            Explore digestive health advisories by Dr. Jitendra Mistry, medical breakthroughs, newspaper features, and state-of-the-art surgical infrastructure at Mission Gastrocare.
          </p>
        </div>

        {/* Doctor Admin Action Button */}
        <div className="relative z-10 shrink-0">
          <Link
            to="/admin"
            className="bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white px-5 py-3 rounded-2xl text-xs font-extrabold flex items-center gap-2 transition-all shadow-md hover:scale-105"
          >
            <Sparkles className="w-4 h-4 text-emerald-300" />
            <span>Doctor Admin Portal 🔒</span>
          </Link>
        </div>
      </div>

      {/* Main Tab Navigation */}
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 border-b border-[#A9C3C9] pb-4">
        <button
          onClick={() => setActiveTab('health-articles')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-extrabold text-sm transition-all ${
            activeTab === 'health-articles'
              ? 'bg-[#1D5E54] text-white shadow-md'
              : 'bg-white text-[#475569] border border-[#A9C3C9] hover:border-[#1D5E54]'
          }`}
        >
          <BookOpen className="w-4 h-4 text-emerald-400" />
          <span>Doctor's Health Advisories &amp; Blog</span>
          <span className="ml-1 bg-white/20 text-xs px-2 py-0.5 rounded-full">{healthArticles.length}</span>
        </button>

        <button
          onClick={() => setActiveTab('press-coverage')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-extrabold text-sm transition-all ${
            activeTab === 'press-coverage'
              ? 'bg-[#1D5E54] text-white shadow-md'
              : 'bg-white text-[#475569] border border-[#A9C3C9] hover:border-[#1D5E54]'
          }`}
        >
          <Newspaper className="w-4 h-4 text-emerald-400" />
          <span>Press Coverage &amp; News</span>
        </button>

        <button
          onClick={() => setActiveTab('campus-gallery')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-extrabold text-sm transition-all ${
            activeTab === 'campus-gallery'
              ? 'bg-[#1D5E54] text-white shadow-md'
              : 'bg-white text-[#475569] border border-[#A9C3C9] hover:border-[#1D5E54]'
          }`}
        >
          <Image className="w-4 h-4 text-emerald-400" />
          <span>Hospital Campus Gallery</span>
        </button>
      </div>

      {/* TAB 1: Doctor's Health Advisories & Blog */}
      {activeTab === 'health-articles' && (
        <div className="space-y-8">
          
          {/* Search & Category Filter Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#E1F2EE]/60 border border-[#BDE3DB] p-4 rounded-3xl">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-[#2E7D72]" />
              <input
                type="text"
                placeholder="Search health topics, symptoms, GERD..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-[#A9C3C9] rounded-2xl pl-10 pr-4 py-2.5 text-xs text-[#0F172A] placeholder-[#64748B] focus:outline-none focus:border-[#1D5E54]"
              />
            </div>

            {/* Category Chips */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#1D5E54] text-white shadow-sm'
                      : 'bg-white text-[#475569] border border-[#A9C3C9] hover:border-[#1D5E54]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Article Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredArticles.map((art) => (
              <div
                key={art.id}
                onClick={() => handleOpenArticle(art)}
                className="bg-white border border-[#A9C3C9] rounded-3xl p-6 hover:border-[#1D5E54] hover:shadow-xl transition-all space-y-4 cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1D5E54] bg-[#E1F2EE] px-2.5 py-0.5 rounded-full border border-[#BDE3DB]">
                      {art.category}
                    </span>
                    <span className="text-[11px] text-[#64748B] flex items-center gap-1 font-medium">
                      <Clock className="w-3 h-3 text-[#2E7D72]" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-[#0F172A] leading-snug group-hover:text-[#1D5E54] transition-colors">
                    {art.title}
                  </h3>

                  <p className="text-xs text-[#475569] leading-relaxed line-clamp-3 font-medium">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#1D5E54] text-white text-[10px] font-extrabold flex items-center justify-center">
                      JM
                    </div>
                    <span className="text-xs font-extrabold text-[#0F172A]">{art.author}</span>
                  </div>

                  <span className="text-xs font-bold text-[#1D5E54] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12 bg-white rounded-3xl border border-dashed border-[#A9C3C9] space-y-3">
              <BookOpen className="w-10 h-10 text-[#64748B] mx-auto" />
              <h3 className="text-base font-bold text-[#0F172A]">No Health Articles Found</h3>
              <p className="text-xs text-[#64748B]">Try searching for a different symptom or select "All" categories.</p>
            </div>
          )}

        </div>
      )}

      {/* TAB 2: Press Coverage & News */}
      {activeTab === 'press-coverage' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-[#0F172A] flex items-center gap-2">
              <Newspaper className="w-6 h-6 text-[#2E7D72]" />
              <span>Latest News &amp; Press Highlights</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mediaArticles.map((article) => (
              <div key={article.id} className="bg-white border border-[#A9C3C9] rounded-3xl p-6 hover:border-[#2E7D72] hover:shadow-lg transition-all space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1D5E54] bg-[#E1F2EE] px-2.5 py-0.5 rounded-full border border-[#BDE3DB]">
                      {article.category}
                    </span>
                    <span className="text-[11px] text-[#64748B] flex items-center gap-1 font-medium">
                      <Calendar className="w-3 h-3 text-[#2E7D72]" />
                      {article.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-[#0F172A] leading-snug">{article.title}</h3>
                  <p className="text-xs text-[#475569] leading-relaxed font-medium">{article.summary}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs font-bold text-[#1D5E54]">
                  <span>Source: {article.source}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: Campus Gallery & Clinical Photo Vault */}
      {activeTab === 'campus-gallery' && (
        <div className="space-y-6">
          
          {/* Header & Subtitle */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-2 border-b border-[#A9C3C9]/40">
            <div>
              <h2 className="text-2xl font-black text-[#0F172A] flex items-center gap-2">
                <Image className="w-6 h-6 text-[#2E7D72]" />
                <span>Hospital Campus &amp; Clinical Gallery</span>
              </h2>
              <p className="text-xs text-[#64748B] font-medium pt-1">
                Explore authentic high-resolution infrastructure, 4K UHD OT suites, emergency ICUs, and complex surgical case photos.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#E1F2EE] border border-[#BDE3DB] px-3.5 py-1.5 rounded-2xl text-xs font-extrabold text-[#1D5E54]">
              <Sparkles className="w-3.5 h-3.5 text-[#2E7D72]" />
              <span>{filteredGalleryImages.length} Photos Listed</span>
            </div>
          </div>

          {/* Medical Discretion Guard Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white border border-[#A9C3C9] p-4 rounded-3xl shadow-sm">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold shadow-sm ${blurSensitivePhotos ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-slate-100 text-slate-700 border border-slate-300'}`}>
                {blurSensitivePhotos ? <ShieldCheck className="w-5 h-5 text-emerald-700" /> : <Eye className="w-5 h-5 text-slate-600" />}
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-black text-[#0F172A] block">
                  Patient Discretion &amp; Sensitive Medical Shield
                </span>
                <p className="text-[11px] text-[#64748B] font-medium">
                  {blurSensitivePhotos 
                    ? 'Intraoperative surgical and organ photographs are softly blurred by default for patient comfort.'
                    : 'Sensitivity protection is OFF. All clinical surgical photographs are unblurred.'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setBlurSensitivePhotos(!blurSensitivePhotos)}
              className={`px-4 py-2 rounded-2xl text-xs font-black transition-all flex items-center gap-2 shadow-sm self-stretch sm:self-auto justify-center ${
                blurSensitivePhotos
                  ? 'bg-[#1D5E54] text-white hover:bg-[#164E43]'
                  : 'bg-slate-200 text-slate-800 hover:bg-slate-300 border border-slate-300'
              }`}
            >
              {blurSensitivePhotos ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              <span>{blurSensitivePhotos ? 'Protection: ACTIVE (Blur ON)' : 'Protection: OFF (Unblurred)'}</span>
            </button>
          </div>

          {/* Search Bar & Category Filter Bar */}
          <div className="bg-[#E1F2EE]/60 border border-[#BDE3DB] p-4 rounded-3xl space-y-3">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Search Bar */}
              <div className="relative w-full md:w-96">
                <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-[#2E7D72]" />
                <input
                  type="text"
                  placeholder="Search enteroscopy, ICU, OT, liver, CT Scan..."
                  value={gallerySearchQuery}
                  onChange={(e) => setGallerySearchQuery(e.target.value)}
                  className="w-full bg-white border border-[#A9C3C9] rounded-2xl pl-10 pr-9 py-2.5 text-xs text-[#0F172A] placeholder-[#64748B] focus:outline-none focus:border-[#1D5E54] shadow-sm"
                />
                {gallerySearchQuery && (
                  <button 
                    onClick={() => setGallerySearchQuery('')}
                    className="absolute right-3 top-3 text-[#64748B] hover:text-[#0F172A]"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Category Filter Chips */}
              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
                {galleryCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedGalleryCategory(cat)}
                    className={`text-xs font-bold px-3.5 py-2 rounded-2xl whitespace-nowrap transition-all flex items-center gap-1.5 ${
                      selectedGalleryCategory === cat
                        ? 'bg-[#1D5E54] text-white shadow-md'
                        : 'bg-white text-[#475569] border border-[#A9C3C9] hover:border-[#1D5E54]'
                    }`}
                  >
                    <span>{cat === 'All' ? 'All Gallery' : cat}</span>
                    {cat === 'Surgery' && <span className="text-[10px] bg-rose-500/20 text-rose-800 px-1.5 py-0.2 rounded-md">Clinical</span>}
                  </button>
                ))}
              </div>

            </div>

            {/* Quick Search Suggestions */}
            <div className="flex items-center gap-2 flex-wrap text-[11px] text-[#64748B] font-medium pt-1">
              <span className="font-bold text-[#1D5E54]">Popular searches:</span>
              {['enteroscopy', 'ICU', 'Operation Theatre', 'CT Scan', 'OPD', 'hydatid cyst'].map((term) => (
                <button
                  key={term}
                  onClick={() => setGallerySearchQuery(term)}
                  className="bg-white/80 hover:bg-white text-[#1D5E54] hover:text-[#0F172A] border border-[#A9C3C9]/60 px-2.5 py-0.5 rounded-full transition-all"
                >
                  #{term}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredGalleryImages.map((img) => (
              <div
                key={img.id}
                onClick={() => {
                  setSelectedGalleryImage(img);
                  setModalPhotoRevealed(false);
                }}
                className="bg-white border border-[#A9C3C9] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#1D5E54] transition-all cursor-pointer group flex flex-col justify-between"
              >
                {/* Photo Frame with Sensitive Protection */}
                <div className="relative w-full h-52 bg-slate-950 overflow-hidden">
                  <img
                    src={img.url}
                    alt={img.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      img.category === 'Surgery' && blurSensitivePhotos && !revealedPhotoIds[img.id]
                        ? 'filter blur-xl scale-110 brightness-50 select-none'
                        : 'group-hover:scale-108'
                    }`}
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  
                  {/* Category Pill Tag Overlay */}
                  <div className="absolute top-3 left-3 z-20">
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border shadow-sm backdrop-blur-md ${
                      img.category === 'Surgery' 
                        ? 'bg-rose-950/90 border-rose-400/50 text-rose-200' 
                        : img.category === 'Infrastructure'
                        ? 'bg-emerald-950/90 border-emerald-400/50 text-emerald-200'
                        : 'bg-amber-950/90 border-amber-400/50 text-amber-200'
                    }`}>
                      {img.category}
                    </span>
                  </div>

                  {/* Sensitive Surgical Blur Overlay Shield */}
                  {img.category === 'Surgery' && blurSensitivePhotos && !revealedPhotoIds[img.id] ? (
                    <div 
                      onClick={(e) => e.stopPropagation()}
                      className="absolute inset-0 bg-[#061815]/75 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center space-y-2 z-10"
                    >
                      <div className="w-10 h-10 rounded-2xl bg-rose-500/20 border border-rose-400/40 flex items-center justify-center text-rose-300 shadow-md">
                        <ShieldAlert className="w-5 h-5" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[11px] font-black uppercase tracking-wider text-rose-300 block">
                          Sensitive Clinical Photo
                        </span>
                        <p className="text-[10px] text-slate-300 font-medium max-w-[200px]">
                          Contains intraoperative surgical organ imagery
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleRevealPhoto(img.id);
                        }}
                        className="bg-rose-600 hover:bg-rose-500 text-white font-black text-[11px] px-3.5 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5 transition-all active:scale-95"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Tap to Reveal Photo</span>
                      </button>
                    </div>
                  ) : (
                    /* Normal Hover Expand Badge */
                    <div className="absolute inset-0 bg-[#061815]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 z-10">
                      <span className="bg-white text-[#0F172A] font-extrabold text-xs px-3.5 py-2 rounded-2xl shadow-lg border border-[#A9C3C9] flex items-center gap-1.5">
                        <Image className="w-3.5 h-3.5 text-[#2E7D72]" />
                        <span>Click to Expand</span>
                      </span>
                      {img.category === 'Surgery' && blurSensitivePhotos && revealedPhotoIds[img.id] && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleRevealPhoto(img.id);
                          }}
                          className="bg-slate-900/90 text-slate-200 hover:bg-rose-600 hover:text-white font-bold text-xs p-2 rounded-2xl border border-slate-700 shadow-lg"
                          title="Re-blur photo"
                        >
                          <EyeOff className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  )}
                </div>

                {/* Card Title & Description */}
                <div className="p-5 space-y-2">
                  <h3 className="text-base font-extrabold text-[#0F172A] leading-snug group-hover:text-[#1D5E54] transition-colors">
                    {img.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed line-clamp-2 font-medium">
                    {img.desc}
                  </p>

                  {/* Tags */}
                  <div className="pt-2 flex flex-wrap gap-1">
                    {img.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-bold text-[#2E7D72] bg-[#E1F2EE] px-2 py-0.5 rounded-md">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Empty Search Results Fallback */}
          {filteredGalleryImages.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-[#A9C3C9] space-y-4">
              <Image className="w-12 h-12 text-[#64748B] mx-auto" />
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[#0F172A]">No gallery photos matched "{gallerySearchQuery}"</h3>
                <p className="text-xs text-[#64748B]">Try searching for "enteroscopy", "ICU", "OT", or select "All Gallery".</p>
              </div>
              <button
                onClick={() => {
                  setGallerySearchQuery('');
                  setSelectedGalleryCategory('All');
                }}
                className="bg-[#1D5E54] hover:bg-[#164E43] text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-sm"
              >
                Clear Search &amp; Show All Photos
              </button>
            </div>
          )}

        </div>
      )}

      {/* Lightbox Modal for Gallery Image Preview */}
      {selectedGalleryImage && (
        <div 
          onClick={() => setSelectedGalleryImage(null)}
          className="fixed inset-0 z-[100] bg-[#061815]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-hidden animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white border border-[#A9C3C9] rounded-3xl max-w-4xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[90vh] relative my-auto animate-in zoom-in-95 duration-200"
          >
            {/* Modal Header */}
            <div className="p-6 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-4 text-white sticky top-0 z-20">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#1D5E54] text-emerald-200 px-2.5 py-0.5 rounded-full">
                    {selectedGalleryImage.category}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">• Mission Gastrocare Vault</span>
                </div>
                <h2 className="text-lg sm:text-xl font-black text-white leading-snug">
                  {selectedGalleryImage.title}
                </h2>
              </div>

              <button
                onClick={() => setSelectedGalleryImage(null)}
                className="flex items-center gap-1 bg-slate-800 hover:bg-rose-600 text-slate-200 hover:text-white font-bold px-3.5 py-2 rounded-2xl text-xs transition-all border border-slate-700 shadow-sm flex-shrink-0"
              >
                <X className="w-4 h-4" />
                <span>Close</span>
              </button>
            </div>

            {/* High-Res Image Display with Sensitive Modal Protection */}
            <div className="p-6 bg-slate-950 flex flex-col items-center justify-center max-h-[60vh] overflow-hidden relative">
              <img 
                src={selectedGalleryImage.url} 
                alt={selectedGalleryImage.title}
                className={`max-h-[50vh] w-auto max-w-full object-contain rounded-2xl border border-slate-800 shadow-2xl transition-all duration-500 ${
                  selectedGalleryImage.category === 'Surgery' && blurSensitivePhotos && !modalPhotoRevealed && !revealedPhotoIds[selectedGalleryImage.id]
                    ? 'filter blur-2xl brightness-50 select-none scale-105'
                    : ''
                }`}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80";
                }}
              />

              {/* Modal Sensitive Content Guard Overlay */}
              {selectedGalleryImage.category === 'Surgery' && blurSensitivePhotos && !modalPhotoRevealed && !revealedPhotoIds[selectedGalleryImage.id] && (
                <div className="absolute inset-0 bg-[#061815]/85 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center space-y-3 z-10">
                  <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-400/40 flex items-center justify-center text-rose-300 shadow-lg">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-black uppercase tracking-wider text-rose-300 block">
                      Intraoperative Clinical Photography Notice
                    </span>
                    <p className="text-xs text-slate-300 font-medium max-w-md">
                      This photograph contains authentic intraoperative organ imagery. Tap below to proceed.
                    </p>
                  </div>
                  <button
                    onClick={() => setModalPhotoRevealed(true)}
                    className="bg-rose-600 hover:bg-rose-500 text-white font-black text-xs px-5 py-2.5 rounded-xl shadow-xl flex items-center gap-2 transition-all active:scale-95"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Reveal High-Res Surgical Photo</span>
                  </button>
                </div>
              )}
            </div>

            {/* Modal Footer Description */}
            <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-4">
              <p className="text-xs sm:text-sm text-[#0F172A] font-medium leading-relaxed">
                {selectedGalleryImage.desc}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-200">
                <div className="flex items-center gap-1.5 flex-wrap">
                  {selectedGalleryImage.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold text-[#1D5E54] bg-[#E1F2EE] px-2.5 py-1 rounded-lg">
                      #{tag}
                    </span>
                  ))}
                </div>

                <a
                  href="https://www.missiongastrocare.com/photo_gallery.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1D5E54] hover:bg-[#164E43] text-white font-bold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 transition-all shadow-sm"
                >
                  <span>View Original Gallery Source</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Full Article Reader Modal */}
      {selectedArticle && (
        <div 
          onClick={() => setSelectedArticle(null)}
          className="fixed inset-0 z-[100] bg-[#061815]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-hidden animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white border border-[#A9C3C9] rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[90vh] relative my-auto animate-in zoom-in-95 duration-200"
          >
            {/* Sticky Header with Prominent Close Button */}
            <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-200 flex items-start justify-between gap-4 sticky top-0 z-20">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#1D5E54] bg-[#E1F2EE] px-3 py-1 rounded-full border border-[#BDE3DB]">
                    {selectedArticle.category}
                  </span>
                  <span className="text-xs text-[#64748B] font-semibold">{selectedArticle.date}</span>
                  <span className="text-xs text-[#64748B] font-semibold">• {selectedArticle.readTime}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] leading-snug">
                  {selectedArticle.title}
                </h2>

                <div className="flex items-center gap-2.5 pt-1">
                  <div className="w-7 h-7 rounded-full bg-[#1D5E54] text-white font-extrabold flex items-center justify-center text-xs shadow-sm">
                    JM
                  </div>
                  <span className="text-xs font-bold text-[#0F172A]">{selectedArticle.author}</span>
                  <span className="text-[11px] text-[#64748B]">• Mission Gastrocare, Vadodara</span>
                </div>
              </div>

              {/* Prominent Red/Slate Close Button */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="flex items-center gap-1.5 bg-slate-200 hover:bg-rose-500 text-slate-800 hover:text-white font-black px-4 py-2 rounded-2xl text-xs transition-all border border-slate-300 shadow-sm flex-shrink-0"
              >
                <X className="w-4 h-4" />
                <span>Close</span>
              </button>
            </div>

            {/* Scrollable Body Content (Single Scrollbar, nicely formatted) */}
            <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(90vh-180px)] space-y-6">
              <div className="prose prose-slate max-w-none">
                {renderFormattedContent(selectedArticle.content)}
              </div>

              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#E1F2EE]/50 p-4 rounded-2xl border border-[#BDE3DB]">
                <div className="text-xs">
                  <span className="font-extrabold text-[#0F172A] block">Have symptoms or questions?</span>
                  <span className="text-[#64748B]">Consult Dr. Jitendra Mistry at Mission Gastrocare, Vadodara.</span>
                </div>

                <a
                  href="#appointment"
                  onClick={() => setSelectedArticle(null)}
                  className="w-full sm:w-auto bg-[#1D5E54] hover:bg-[#164E43] text-white font-black px-6 py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <span>Book OPD Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
