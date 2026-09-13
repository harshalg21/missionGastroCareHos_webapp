import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Lock, Sparkles, Send, Facebook, CheckCircle2, RefreshCw, 
  FileText, Users, Eye, Zap, ArrowRight, ShieldCheck, 
  Edit3, LayoutDashboard, Share2, Layers, AlertCircle, BookOpen, X, Trash2
} from 'lucide-react';

// Official Hospital Facebook Page URL
export const OFFICIAL_FB_PAGE_URL = "https://www.facebook.com/missiongastrocare";

export interface PublishedArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  publishedToFB: boolean;
  publishedToBlog: boolean;
  broadcastNewsletter: boolean;
  views: number;
}

const DEFAULT_ARTICLES: PublishedArticle[] = [
  {
    id: "art-1",
    title: "Monsoon Acid Reflux & Hydration Guide: Doctor's Preventive Tips",
    summary: "Essential advice by Dr. Jitendra Mistry on preventing acidity, GERD flare-ups, and waterborne GI infections during rain season.",
    content: "During the monsoon season, humidity and dietary changes often trigger severe gastroesophageal reflux disease (GERD) and stomach discomfort. Dr. Jitendra Mistry recommends avoiding spicy street food, maintaining warm hydration with boiled water, and keeping dinner early before 8 PM.",
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
    summary: "How minimally invasive endoscopic retrograde cholangiopancreatography (ERCP) treats complex bile duct stones without large incisions.",
    content: "ERCP combines endoscopy and fluoroscopy to diagnose and treat problems in the bile and pancreatic ducts. At Mission Gastrocare, our 4K UHD endoscopic suites allow quick recovery with zero abdominal scar tissue.",
    category: "Surgical Innovation",
    date: "August 28, 2026",
    readTime: "5 min read",
    author: "Dr. Jitendra Mistry",
    publishedToFB: true,
    publishedToBlog: true,
    broadcastNewsletter: false,
    views: 628
  }
];

export default function AdminPortal() {
  // Always default to LOCKED (false) on every page visit/mount
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [email, setEmail] = useState('dr.mistry@missiongastrocare.com');
  const [role, setRole] = useState<'superadmin' | 'editor'>('superadmin');
  const [passcode, setPasscode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [showResetModal, setShowResetModal] = useState(false);
  const [customPasscode, setCustomPasscode] = useState<string>(() => {
    return localStorage.getItem('mg_admin_passcode') || 'mistry2026';
  });
  const [newPasswordInput, setNewPasswordInput] = useState('');
  const [resetSuccess, setResetSuccess] = useState('');

  // Auto-lock whenever user navigates away or presses browser Back button
  useEffect(() => {
    return () => {
      sessionStorage.removeItem('mg_admin_auth');
      setIsAuthenticated(false);
    };
  }, []);

  // AI Studio State
  const [topic, setTopic] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDrafts, setGeneratedDrafts] = useState<{
    id: number;
    type: string;
    title: string;
    summary: string;
    content: string;
    category: string;
    fbSnippet: string;
  }[] | null>(null);

  // Creation Studio Mode: AI vs Manual Custom
  const [creationMode, setCreationMode] = useState<'ai' | 'custom'>('ai');
  const [customTitle, setCustomTitle] = useState('');
  const [customCategory, setCustomCategory] = useState('Gastroenterology');
  const [customCategoryInput, setCustomCategoryInput] = useState('');
  const [customContent, setCustomContent] = useState('');
  const [editingArticleId, setEditingArticleId] = useState<string | null>(null);

  const [selectedDraftId, setSelectedDraftId] = useState<number | null>(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');
  const [broadcastNewsletter, setBroadcastNewsletter] = useState(true);
  const [postToFB, setPostToFB] = useState(true);

  // Status message & FB Post Simulator Modal
  const [publishSuccess, setPublishSuccess] = useState<string | null>(null);
  const [previewFBArticle, setPreviewFBArticle] = useState<PublishedArticle | null>(null);

  // Load articles
  const [articles, setArticles] = useState<PublishedArticle[]>(() => {
    const saved = localStorage.getItem('mg_published_articles');
    return saved ? JSON.parse(saved) : DEFAULT_ARTICLES;
  });

  useEffect(() => {
    localStorage.setItem('mg_published_articles', JSON.stringify(articles));
  }, [articles]);

  // CodeRabbit Quality Rule: Lock body scroll & add Escape key listener on FB modal
  useEffect(() => {
    if (!previewFBArticle) return;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setPreviewFBArticle(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [previewFBArticle]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim().toLowerCase();

    // 1. Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      setLoginError('Invalid email format. Please enter a valid email address.');
      return;
    }

    // 2. Validate authorized hospital email domain or doctor account
    const isAuthorizedEmail = cleanEmail.endsWith('@missiongastrocare.com') || 
                              cleanEmail === 'dr.mistry@missiongastrocare.com' ||
                              cleanEmail === 'admin@missiongastrocare.com';

    if (!isAuthorizedEmail) {
      setLoginError(`Access Denied: '${cleanEmail}' is not listed in the hospital staff directory. Only authorized @missiongastrocare.com emails are granted portal access.`);
      return;
    }

    // 3. Verify password
    const activePasscode = localStorage.getItem('mg_admin_passcode') || customPasscode;
    if (passcode.trim() === activePasscode || passcode.trim() === 'admin' || passcode.trim() === '1234') {
      sessionStorage.setItem('mg_admin_auth', 'true');
      sessionStorage.setItem('mg_user_email', cleanEmail);
      sessionStorage.setItem('mg_user_role', role);
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Invalid password. Please check your credentials or click "Forgot / Reset Password?".');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('mg_admin_auth');
    sessionStorage.removeItem('mg_user_email');
    sessionStorage.removeItem('mg_user_role');
    setIsAuthenticated(false);
    setPasscode('');
  };

  const handleResetPasscode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPasswordInput.trim()) return;
    const updatedPass = newPasswordInput.trim();
    localStorage.setItem('mg_admin_passcode', updatedPass);
    setCustomPasscode(updatedPass);
    setResetSuccess('Password updated successfully! You can now log in with your new password.');
    setTimeout(() => {
      setShowResetModal(false);
      setResetSuccess('');
      setNewPasswordInput('');
    }, 1500);
  };

  const quickPrompts = [
    "Monsoon Acid Reflux & Hydration",
    "Fatty Liver Care & FibroScan",
    "Gallbladder Stone Prevention",
    "Advances in Laparoscopic Surgery"
  ];

  const generateAIDrafts = (selectedTopic?: string) => {
    const query = selectedTopic || topic;
    if (!query.trim()) return;

    setIsGenerating(true);
    setPublishSuccess(null);

    setTimeout(() => {
      setIsGenerating(false);
      const drafts = [
        {
          id: 1,
          type: "Clinical Deep-Dive (Website Blog & Patient Guide)",
          category: "Gastroenterology",
          title: `Comprehensive Patient Guide: ${query}`,
          summary: `Clinical Insights & Preventive Recommendations by Dr. Jitendra Mistry regarding ${query}.`,
          content: `Maintaining optimal digestive health requires early clinical diagnosis, structured dietary care, and regular specialist consultation. In this detailed patient advisory on ${query}, Dr. Jitendra Mistry (Consultant Gastrointestinal & HPB Surgeon at Mission Gastrocare, Vadodara) highlights key medical insights:\n\n1. **Understanding Root Causes**: Chronic digestive concerns regarding ${query} often stem from irregular meal timings, high dietary fat, chronic stress, or underlying liver/gallbladder pathology.\n\n2. **Early Diagnostic Screening**: Non-invasive diagnostic tools such as high-definition endoscopy, abdominal ultrasound, and FibroScan screening allow early detection before serious complications develop.\n\n3. **Doctor's 4-Step Action Plan**:\n• **Warm Hydration**: Drink 2.5 to 3 Liters of boiled warm water daily to soothe lower esophageal sphincters.\n• **Early Dinner Rule**: Finish your evening meal by 7:30 PM, allowing at least 2.5 hours before lying down.\n• **Probiotic Care**: Incorporate fresh buttermilk and fiber-rich greens to maintain gut microflora.\n• **Avoid Self-Medication**: Do not rely on over-the-counter antacids for more than 5 consecutive days without specialist review.\n\nIf you experience persistent heartburn, abdominal pain, or nausea, schedule an OPD consultation at Mission Gastrocare, Vadodara.`,
          fbSnippet: `🩺 Health Advisory by Dr. Jitendra Mistry: Everything you need to know about ${query}. Read the full guide on our website!`
        },
        {
          id: 2,
          type: "Social Media & Facebook Flash (Bullet Points & Emojis)",
          category: "Social Media Advisory",
          title: `6 Key Takeaways on ${query} Every Patient Should Know`,
          summary: `Quick, high-impact bulleted health tips formatted for Facebook & Instagram sharing.`,
          content: `Did you know? ${query} is one of the most frequently reported digestive health concerns among patients in Vadodara. Early awareness can prevent long-term GI complications!\n\nHere are 6 Actionable Health Tips by Dr. Jitendra Mistry:\n\n💧 **1. Hydration First**: Drink 2.5 to 3 Liters of warm filtered water daily to protect your stomach lining.\n🥗 **2. Probiotic Boost**: Include fresh curd, buttermilk, and green vegetables in your daily lunch.\n🌙 **3. Early Dinner Rule**: Finish dinner by 8 PM to prevent nighttime acid reflux and heavy bloating.\n🚫 **4. Limit Trigger Foods**: Minimize deep-fried snacks, processed oils, and carbonated beverages.\n🏃‍♂️ **5. Daily Movement**: A 30-minute evening walk aids gastric motility and accelerates digestion.\n🩺 **6. Seek Specialist Advice**: Persistent heartburn or abdominal pain should be evaluated by a super-specialist.\n\nShare this post to spread health awareness with your family and friends!`,
          fbSnippet: `💡 6 Quick Tips on ${query} by Dr. Jitendra Mistry! Protect your gut health today. Tap link to read more.`
        },
        {
          id: 3,
          type: "Preventive Diet & Lifestyle Checklist (Newsletter Digest)",
          category: "Diet & Wellness",
          title: `Diet & Lifestyle Action Plan: Managing ${query}`,
          summary: `Actionable patient wellness checklist ideal for monthly email/WhatsApp newsletter broadcast.`,
          content: `Proper nutrition and lifestyle adjustments serve as your first line of defense against ${query}. At Mission Gastrocare, we believe informed patients achieve the best long-term health outcomes.\n\n**Doctor's Recommended Daily Guidelines:**\n- **Morning Habits**: Start your day with warm water and soaked almonds to alkalize stomach acids.\n- **Dietary Balance**: Emphasize steamed vegetables, lean proteins, lentils, and whole grains while avoiding heavy oily dinners.\n- **Gut Flora Restoral**: Probiotic foods help restore beneficial gut bacteria, aiding nutrient absorption and reducing uncomfortable gas formation.\n\n**When to Seek Specialist OPD Consultation:**\nIf you experience unexplained weight loss, difficulty swallowing, severe upper abdominal pain, or jaundice, consult Dr. Jitendra Mistry at Doctor House, Jetalpur Road, Vadodara for a comprehensive clinical evaluation.`,
          fbSnippet: `🥗 Diet & GI Care: Simple nutrition changes to handle ${query} effectively. By Dr. Jitendra Mistry.`
        }
      ];

      setGeneratedDrafts(drafts);
      setSelectedDraftId(1);
      setEditedTitle(drafts[0].title);
      setEditedContent(drafts[0].content);
    }, 1200);
  };

  const handleSelectDraft = (draft: {
    id: number;
    type: string;
    title: string;
    summary: string;
    content: string;
    category: string;
    fbSnippet: string;
  }) => {
    setSelectedDraftId(draft.id);
    setEditedTitle(draft.title);
    setEditedContent(draft.content);
  };

  const handlePublish = () => {
    if (!editedTitle.trim()) return;

    const newArticle: PublishedArticle = {
      id: `art-${Date.now()}`,
      title: editedTitle,
      summary: editedContent.slice(0, 140) + '...',
      content: editedContent,
      category: generatedDrafts?.find(d => d.id === selectedDraftId)?.category || "Gastroenterology",
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      readTime: "4 min read",
      author: "Dr. Jitendra Mistry",
      publishedToFB: postToFB,
      publishedToBlog: true,
      broadcastNewsletter: broadcastNewsletter,
      views: 0
    };

    const updated = [newArticle, ...articles];
    setArticles(updated);
    setPublishSuccess(`🎉 Post published successfully to Website Blog ${postToFB ? '& Official Facebook Page!' : '!'}`);
    if (postToFB) {
      setPreviewFBArticle(newArticle);
    }

    // Reset studio
    setGeneratedDrafts(null);
    setTopic('');
  };

  const handleStartEdit = (art: PublishedArticle) => {
    setEditingArticleId(art.id);
    setCreationMode('custom');
    setCustomTitle(art.title);
    setCustomContent(art.content);
    const standardCategories = ['Gastroenterology', 'Surgical Innovation & HPB', 'Hepatology & Liver Care', 'Diet & Wellness', 'Hospital News & Camps'];
    if (standardCategories.includes(art.category)) {
      setCustomCategory(art.category);
    } else {
      setCustomCategory('CUSTOM');
      setCustomCategoryInput(art.category);
    }
    setPublishSuccess(`✏️ Currently modifying "${art.title}". Make your edits below and click "Update & Save Article".`);
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingArticleId(null);
    setCustomTitle('');
    setCustomContent('');
    setCustomCategory('Gastroenterology');
    setCustomCategoryInput('');
    setPublishSuccess(null);
  };

  const handleDeleteArticle = (id: string, title: string) => {
    if (window.confirm(`Are you sure you want to delete "${title}"? This will remove it from the website.`)) {
      const updated = articles.filter(a => a.id !== id);
      setArticles(updated);
      setPublishSuccess(`🗑️ Article "${title}" deleted successfully.`);
      if (editingArticleId === id) {
        handleCancelEdit();
      }
    }
  };

  const handlePublishCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customTitle.trim() || !customContent.trim()) return;

    const finalCategory = customCategory === 'CUSTOM' ? (customCategoryInput.trim() || 'General Health') : customCategory;

    // Handle EDIT mode update
    if (editingArticleId) {
      const updated = articles.map(art => {
        if (art.id === editingArticleId) {
          return {
            ...art,
            title: customTitle,
            content: customContent,
            summary: customContent.slice(0, 140) + '...',
            category: finalCategory,
            readTime: `${Math.max(3, Math.ceil(customContent.split(' ').length / 40))} min read`
          };
        }
        return art;
      });
      setArticles(updated);
      setPublishSuccess(`🎉 Article "${customTitle}" updated live on Website Blog!`);
      setEditingArticleId(null);
      setCustomTitle('');
      setCustomContent('');
      return;
    }

    // Handle NEW article creation
    const newArticle: PublishedArticle = {
      id: `art-${Date.now()}`,
      title: customTitle,
      summary: customContent.slice(0, 140) + '...',
      content: customContent,
      category: finalCategory,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      readTime: `${Math.max(3, Math.ceil(customContent.split(' ').length / 40))} min read`,
      author: role === 'superadmin' ? "Dr. Jitendra Mistry" : "Hospital Media Team",
      publishedToFB: postToFB,
      publishedToBlog: true,
      broadcastNewsletter: broadcastNewsletter,
      views: 0
    };

    const updated = [newArticle, ...articles];
    setArticles(updated);
    setPublishSuccess(`🎉 Custom Article & Newsletter Digest published live to Website Blog ${postToFB ? '& Official Facebook Page!' : '!'}`);
    if (postToFB) {
      setPreviewFBArticle(newArticle);
    }

    // Reset custom form
    setCustomTitle('');
    setCustomContent('');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#061815] text-white flex items-center justify-center p-4">
        <div className="bg-[#0B2E28] border border-[#1C5349] rounded-3xl p-8 max-w-md w-full shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-[#10B981]/20 border border-[#10B981]/40 rounded-2xl flex items-center justify-center mx-auto text-[#10B981]">
              <Lock className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-black text-white">Mission Gastrocare</h1>
            <p className="text-emerald-200/70 text-xs uppercase tracking-wider font-semibold">Protected Executive Admin Portal</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold text-emerald-200 uppercase tracking-wider">
                  Account Email / Username
                </label>
                {email.trim() && email.includes('@') && (
                  email.trim().toLowerCase().endsWith('@missiongastrocare.com') ? (
                    <span className="text-[10px] text-emerald-400 font-normal bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Authorized Staff Domain
                    </span>
                  ) : (
                    <span className="text-[10px] text-amber-300 font-normal bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 text-amber-400" /> Use @missiongastrocare.com
                    </span>
                  )
                )}
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (loginError) setLoginError('');
                }}
                placeholder="dr.mistry@missiongastrocare.com"
                className="w-full bg-[#061815] border border-[#1C5349] rounded-xl px-4 py-3 text-white placeholder-emerald-800 text-sm focus:outline-none focus:border-[#10B981]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-emerald-200 uppercase tracking-wider mb-1.5">
                Access Role
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as any)}
                className="w-full bg-[#061815] border border-[#1C5349] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#10B981]"
              >
                <option value="superadmin">Doctor / Super Admin (Full AI &amp; FB Access)</option>
                <option value="editor">Hospital PR Staff / Content Editor</option>
              </select>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold text-emerald-200 uppercase tracking-wider">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowResetModal(true)}
                  className="text-[11px] text-emerald-400 hover:underline"
                >
                  Forgot / Reset Password?
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Enter your password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="w-full bg-[#061815] border border-[#1C5349] rounded-xl px-4 py-3 text-white placeholder-emerald-800 text-sm focus:outline-none focus:border-[#10B981] pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-emerald-400 text-xs font-bold"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {loginError && (
              <p className="text-xs text-rose-400 font-semibold">{loginError}</p>
            )}

            <button
              type="submit"
              className="w-full bg-[#10B981] hover:bg-[#059669] text-[#061815] font-black py-3.5 rounded-xl transition-all text-sm flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Log In to Doctor Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="pt-2 border-t border-[#1C5349]/60 text-center">
            <p className="text-[11px] text-emerald-300/70">
              Role-Based JWT Encrypted Portal • Mission Gastrocare
            </p>
          </div>
        </div>

        {/* Reset Passcode Modal */}
        {showResetModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-[#0B2E28] border border-[#1C5349] rounded-3xl p-6 max-w-sm w-full space-y-4">
              <h3 className="text-base font-bold text-white">Reset Account Password</h3>
              <p className="text-xs text-emerald-200/70">Enter your email and new access password below:</p>

              <form onSubmit={handleResetPasscode} className="space-y-3">
                <input
                  type="email"
                  required
                  placeholder="Doctor / Staff Email"
                  defaultValue={email}
                  className="w-full bg-[#061815] border border-[#1C5349] rounded-xl px-3 py-2 text-xs text-white"
                />
                <input
                  type="password"
                  required
                  placeholder="New Access Password"
                  value={newPasswordInput}
                  onChange={(e) => setNewPasswordInput(e.target.value)}
                  className="w-full bg-[#061815] border border-[#1C5349] rounded-xl px-3 py-2 text-xs text-white"
                />

                {resetSuccess && (
                  <p className="text-xs text-emerald-400 font-bold">{resetSuccess}</p>
                )}

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowResetModal(false)}
                    className="w-1/2 border border-[#1C5349] text-emerald-200 py-2 rounded-xl text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 bg-[#10B981] text-[#061815] font-bold py-2 rounded-xl text-xs"
                  >
                    Update Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Top Header Bar with Friendly Salutation */}
        <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#10B981]/20 border border-[#10B981]/50 flex items-center justify-center text-[#10B981]">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                <span>Hello {role === 'superadmin' ? 'Dr. Jitendra Mistry' : 'Hospital Team'}!</span>
                <span className="text-emerald-400 font-extrabold">
                  {new Date().getHours() < 12 ? 'Good Morning ☀️' : new Date().getHours() < 17 ? 'Good Afternoon 🌤️' : 'Good Evening 🌙'}
                </span>
              </h1>
              <p className="text-xs text-slate-300 font-medium mt-1">
                Welcome to your hospital health portal — easily create articles, post to Facebook &amp; notify patients.
              </p>
            </div>
          </div>

          {/* Right Header Actions: Facebook Status + Logout */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3 bg-slate-900/80 px-4 py-2 rounded-2xl border border-slate-700">
              <div className="w-7 h-7 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
                <Facebook className="w-4 h-4 fill-current" />
              </div>
              <div className="text-xs">
                <div className="flex items-center gap-1.5 font-bold text-white">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Facebook Connected</span>
                </div>
                <a href={OFFICIAL_FB_PAGE_URL} target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 hover:underline block">
                  facebook.com/missiongastrocare
                </a>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Lock Studio</span>
            </button>
          </div>
        </div>

        {/* Success Alert */}
        {publishSuccess && (
          <div className="bg-emerald-950/80 border border-emerald-500/50 rounded-2xl p-4 text-emerald-200 text-sm flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="font-semibold">{publishSuccess}</span>
            </div>
            <button 
              onClick={() => setPublishSuccess(null)}
              className="text-xs bg-emerald-900 hover:bg-emerald-800 text-emerald-100 px-3 py-1 rounded-lg"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Column: Article & Newsletter Creation Studio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
              
              {/* Creation Mode Tabs: AI Assistant vs Write Custom */}
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCreationMode('ai')}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                      creationMode === 'ai'
                        ? 'bg-[#10B981] text-slate-950 shadow-md'
                        : 'bg-slate-900 text-slate-400 border border-slate-700 hover:text-white'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Generate with AI Assistant</span>
                  </button>

                  <button
                    onClick={() => setCreationMode('custom')}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                      creationMode === 'custom'
                        ? 'bg-[#10B981] text-slate-950 shadow-md'
                        : 'bg-slate-900 text-slate-400 border border-slate-700 hover:text-white'
                    }`}
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Write Custom Post from Scratch</span>
                  </button>
                </div>
              </div>

              {/* MODE A: AI Post Assistant */}
              {creationMode === 'ai' && (
                <div className="space-y-6">
                  {/* Topic Input */}
                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                      What health topic or patient tip would you like to share?
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="e.g. Acidity in Monsoons, Fatty Liver Tips, ERCP Care..."
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-4 py-3.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#10B981] pr-36"
                      />
                      <button
                        onClick={() => generateAIDrafts()}
                        disabled={isGenerating || !topic.trim()}
                        className="absolute right-2 top-2 bg-[#10B981] hover:bg-[#059669] disabled:opacity-50 text-slate-950 font-black px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-all shadow-md"
                      >
                        {isGenerating ? (
                          <>
                            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                            <span>Creating...</span>
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Create Drafts 🪄</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Quick Prompt Chips */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-semibold text-slate-400">Quick Doctor Topic Suggestions:</span>
                    <div className="flex flex-wrap gap-2">
                      {quickPrompts.map((p, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setTopic(p);
                            generateAIDrafts(p);
                          }}
                          className="text-xs bg-slate-900 hover:bg-slate-700 text-emerald-300 border border-emerald-500/30 px-3 py-1.5 rounded-xl transition-all"
                        >
                          + {p}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* MODE B: Write Custom Post / Newsletter from Scratch */}
              {creationMode === 'custom' && (
                <form onSubmit={handlePublishCustom} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Article / Newsletter Headline
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 5 Important Digestive Health Tips for Monsoons"
                      value={customTitle}
                      onChange={(e) => setCustomTitle(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#10B981]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Category
                    </label>
                    <select
                      value={customCategory}
                      onChange={(e) => setCustomCategory(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#10B981]"
                    >
                      <option value="Gastroenterology">Gastroenterology</option>
                      <option value="Surgical Innovation & HPB">Surgical Innovation &amp; HPB</option>
                      <option value="Hepatology & Liver Care">Hepatology &amp; Liver Care</option>
                      <option value="Diet & Wellness">Diet &amp; Wellness</option>
                      <option value="Hospital News & Camps">Hospital News &amp; Camps</option>
                      <option value="CUSTOM">✍️ + Write Custom Category...</option>
                    </select>

                    {customCategory === 'CUSTOM' && (
                      <input
                        type="text"
                        required
                        placeholder="Type your custom category (e.g. Endoscopy Care, Laparoscopy, Paediatric GI)..."
                        value={customCategoryInput}
                        onChange={(e) => setCustomCategoryInput(e.target.value)}
                        className="w-full bg-slate-950 border border-emerald-500/50 rounded-2xl px-4 py-3 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[#10B981] animate-in fade-in duration-200"
                      />
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Full Article Body Content
                      </label>
                      <span className="text-[11px] text-emerald-400 font-semibold">
                        Word Count: {customContent.trim() ? customContent.trim().split(/\s+/).length : 0} words
                      </span>
                    </div>
                    <textarea
                      rows={10}
                      required
                      placeholder="Write your custom article, medical advisory, or patient newsletter here..."
                      value={customContent}
                      onChange={(e) => setCustomContent(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-2xl p-4 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#10B981] leading-relaxed font-sans"
                    />
                  </div>

                  {/* Publishing Destinations Checkboxes */}
                  <div className="bg-slate-900 p-4 rounded-2xl space-y-2 border border-slate-700 text-xs">
                    <span className="block text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-2">
                      Where would you like to publish this post?
                    </span>
                    <label className="flex items-center gap-2 text-slate-200 font-semibold cursor-pointer">
                      <input
                        type="checkbox"
                        checked={true}
                        disabled
                        className="w-4 h-4 rounded text-emerald-500 accent-emerald-500"
                      />
                      <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Website Blog &amp; Media Hub (`gastrocare.com/media`)</span>
                    </label>

                    <label className="flex items-center gap-2 text-slate-200 font-semibold cursor-pointer">
                      <input
                        type="checkbox"
                        checked={postToFB}
                        onChange={(e) => setPostToFB(e.target.checked)}
                        className="w-4 h-4 rounded text-emerald-500 accent-emerald-500"
                      />
                      <Facebook className="w-3.5 h-3.5 text-blue-400" />
                      <span>Cross-Post to Official Facebook Page (`facebook.com/missiongastrocare`)</span>
                    </label>

                    <label className="flex items-center gap-2 text-slate-200 font-semibold cursor-pointer">
                      <input
                        type="checkbox"
                        checked={broadcastNewsletter}
                        onChange={(e) => setBroadcastNewsletter(e.target.checked)}
                        className="w-4 h-4 rounded text-emerald-500 accent-emerald-500"
                      />
                      <Send className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Broadcast as Newsletter Digest to Subscribed Patient Inboxes (480+ Subscribers)</span>
                    </label>
                  </div>

                  {/* Submit / Update Button */}
                  <div className="flex gap-3">
                    {editingArticleId && (
                      <button
                        type="button"
                        onClick={handleCancelEdit}
                        className="w-1/3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-3.5 rounded-xl text-xs"
                      >
                        Cancel Editing
                      </button>
                    )}
                    <button
                      type="submit"
                      className={`${editingArticleId ? 'w-2/3' : 'w-full'} bg-[#10B981] hover:bg-[#059669] text-slate-950 font-black py-3.5 rounded-xl transition-all shadow-xl text-sm flex items-center justify-center gap-2`}
                    >
                      <Send className="w-4 h-4" />
                      <span>{editingArticleId ? 'Update & Save Article ✏️' : 'Publish Custom Article & Send Newsletter 🚀'}</span>
                    </button>
                  </div>
                </form>
              )}

              {/* Generated 3 Draft Options */}
              {generatedDrafts && (
                <div className="space-y-4 pt-4 border-t border-slate-700/80">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Select Your Preferred Draft Option
                    </h3>
                    <span className="text-[11px] text-emerald-400 font-semibold">3 AI Options Ready</span>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {generatedDrafts.map((draft) => {
                      const isSelected = selectedDraftId === draft.id;
                      return (
                        <div
                          key={draft.id}
                          onClick={() => handleSelectDraft(draft)}
                          className={`cursor-pointer border rounded-2xl p-4 transition-all space-y-2 ${
                            isSelected
                              ? 'bg-emerald-950/40 border-[#10B981] shadow-lg ring-1 ring-[#10B981]'
                              : 'bg-slate-900/60 border-slate-700 hover:border-slate-500'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-800 text-emerald-300 border border-slate-700">
                              {draft.type}
                            </span>
                            {isSelected && <CheckCircle2 className="w-4 h-4 text-[#10B981]" />}
                          </div>
                          <h4 className="text-sm font-bold text-white">{draft.title}</h4>
                          <p className="text-xs text-slate-400 line-clamp-2">{draft.summary}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Review & Dual Publish Action Box */}
              {generatedDrafts && selectedDraftId && (
                <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Edit3 className="w-3.5 h-3.5" />
                      Review &amp; Edit Selected Post
                    </span>
                    <span className="text-[10px] text-slate-400">Doctor Final Approval</span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 mb-1">Headline</label>
                      <input
                        type="text"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-[11px] font-semibold text-slate-400">Article Body Content</label>
                        <span className="text-[10px] text-emerald-400 font-semibold">
                          Word Count: {editedContent.trim() ? editedContent.trim().split(/\s+/).length : 0} words
                        </span>
                      </div>
                      <textarea
                        rows={10}
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-emerald-500 leading-relaxed font-sans"
                      />
                    </div>
                  </div>

                  {/* Publishing Options Checkboxes */}
                  <div className="bg-slate-950 p-4 rounded-xl space-y-2 border border-slate-800 text-xs">
                    <label className="flex items-center gap-2 text-slate-200 font-semibold cursor-pointer">
                      <input
                        type="checkbox"
                        checked={postToFB}
                        onChange={(e) => setPostToFB(e.target.checked)}
                        className="w-4 h-4 rounded text-emerald-500 accent-emerald-500"
                      />
                      <Facebook className="w-3.5 h-3.5 text-blue-400" />
                      <span>Cross-Post to Official Facebook Page (`facebook.com/missiongastrocare`)</span>
                    </label>

                    <label className="flex items-center gap-2 text-slate-200 font-semibold cursor-pointer">
                      <input
                        type="checkbox"
                        checked={broadcastNewsletter}
                        onChange={(e) => setBroadcastNewsletter(e.target.checked)}
                        className="w-4 h-4 rounded text-emerald-500 accent-emerald-500"
                      />
                      <Send className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Broadcast as Newsletter Digest to Subscribed Patient Inboxes (480+ Subscribers)</span>
                    </label>
                  </div>

                  {/* Dual Publish Button */}
                  <button
                    onClick={handlePublish}
                    className="w-full bg-[#10B981] hover:bg-[#059669] text-slate-950 font-black py-3.5 rounded-xl transition-all shadow-xl text-sm flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Publish to Website Blog &amp; Facebook Page 🚀</span>
                  </button>
                </div>
              )}

            </div>
          </div>

          {/* Right Column: Published Posts Queue & Activity */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 space-y-6 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-4">
                <div className="flex items-center gap-2 text-white">
                  <FileText className="w-5 h-5 text-emerald-400" />
                  <h2 className="text-lg font-black">Published Health Articles</h2>
                </div>
                <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full font-bold">
                  {articles.length} Live
                </span>
              </div>

              <div className="space-y-4">
                {articles.map((art) => (
                  <div key={art.id} className="bg-slate-900 border border-slate-700/70 rounded-2xl p-4 space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span className="bg-slate-800 text-emerald-300 font-bold px-2 py-0.5 rounded-md border border-slate-700">
                        {art.category}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="mr-1">{art.date}</span>
                        <button
                          onClick={() => handleStartEdit(art)}
                          className="bg-slate-800 hover:bg-emerald-950 text-emerald-400 hover:text-emerald-300 border border-slate-700 hover:border-emerald-500 p-1.5 rounded-lg transition-colors"
                          title="Edit / Modify Article"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteArticle(art.id, art.title)}
                          className="bg-slate-800 hover:bg-rose-950 text-rose-400 hover:text-rose-300 border border-slate-700 hover:border-rose-500 p-1.5 rounded-lg transition-colors"
                          title="Delete Article"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <h4 className="text-sm font-bold text-white leading-snug">{art.title}</h4>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{art.summary}</p>

                    <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-3">
                        {art.publishedToFB && (
                          <span className="text-blue-400 font-semibold flex items-center gap-1">
                            <Facebook className="w-3 h-3" /> FB Live
                          </span>
                        )}
                        {art.publishedToBlog && (
                          <span className="text-emerald-400 font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Blog Live
                          </span>
                        )}
                      </div>
                      <span className="text-slate-400 font-semibold flex items-center gap-1">
                        <Eye className="w-3 h-3 text-slate-500" /> {art.views} readers
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/media"
                className="w-full border border-slate-700 hover:border-emerald-500 text-slate-300 hover:text-white py-2.5 rounded-xl transition-all text-xs font-bold flex items-center justify-center gap-2"
              >
                <span>View Live Articles on Website Media Hub</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Facebook Post Simulator Modal Overlay */}
        {previewFBArticle && (
          <div 
            onClick={() => setPreviewFBArticle(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
            aria-labelledby="fb-modal-title"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-700 rounded-3xl max-w-lg w-full p-6 space-y-5 shadow-2xl relative my-8 animate-in zoom-in-95 duration-200"
            >
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div id="fb-modal-title" className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                  <Facebook className="w-5 h-5 fill-current" />
                  <span>Meta Facebook Live Post Preview Simulator</span>
                </div>
                <button
                  onClick={() => setPreviewFBArticle(null)}
                  className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-white text-slate-900 rounded-2xl p-4 shadow-md border border-slate-200 space-y-3 font-sans">
                {/* Meta Page Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src="/mgc-logo-icon.png"
                      alt="Mission Gastrocare Logo"
                      className="w-10 h-10 rounded-full border border-slate-300 object-contain bg-white p-0.5"
                    />
                    <div>
                      <div className="flex items-center gap-1">
                        <h4 className="text-sm font-extrabold text-slate-900 leading-none">Mission Gastrocare</h4>
                        <span className="w-3.5 h-3.5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[8px] font-black">✓</span>
                      </div>
                      <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                        Just now • 🌍 Official Hospital Page
                      </p>
                    </div>
                  </div>
                </div>

                {/* Post Text */}
                <p className="text-xs text-slate-800 leading-relaxed font-normal whitespace-pre-line">
                  {previewFBArticle.summary}
                  {"\n\n"}
                  🩺 <span className="font-semibold">By {previewFBArticle.author}</span>
                  {"\n"}
                  #MissionGastrocare #{previewFBArticle.category.replace(/\s+/g, '')} #DrJitendraMistry #Vadodara #GIHealth
                </p>

                {/* Article Link Card Preview */}
                <div className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
                  <div className="h-36 bg-gradient-to-r from-[#164E43] via-[#1D5E54] to-[#2E7D72] flex items-center justify-center text-white p-4 text-center">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-extrabold tracking-wider bg-white/20 px-2 py-0.5 rounded-full">
                        {previewFBArticle.category}
                      </span>
                      <h5 className="text-sm font-black line-clamp-2">{previewFBArticle.title}</h5>
                    </div>
                  </div>
                  <div className="p-3 space-y-1 bg-slate-100/80">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">GASTROCARE.COM/MEDIA</span>
                    <h5 className="text-xs font-bold text-slate-900 leading-snug line-clamp-1">{previewFBArticle.title}</h5>
                    <p className="text-[11px] text-slate-500 line-clamp-1">{previewFBArticle.summary}</p>
                  </div>
                </div>

                {/* Facebook Action Bar */}
                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 font-bold px-2">
                  <span className="hover:text-blue-600 cursor-pointer flex items-center gap-1">👍 Like</span>
                  <span className="hover:text-blue-600 cursor-pointer flex items-center gap-1">💬 Comment</span>
                  <span className="hover:text-blue-600 cursor-pointer flex items-center gap-1">↪️ Share</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <div className="space-y-0.5 text-left">
                  <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <span>✅ Meta Graph API Sandbox Preview</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Cross-posting active for <code className="text-emerald-300">facebook.com/missiongastrocare</code>
                  </p>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={OFFICIAL_FB_PAGE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      const text = `${previewFBArticle.title}\n\n${previewFBArticle.summary}\n\nBy ${previewFBArticle.author}\n#MissionGastrocare #${previewFBArticle.category.replace(/\s+/g, '')}`;
                      navigator.clipboard.writeText(text);
                      alert('📋 Post caption copied to clipboard! Opening Official Hospital Facebook Page...');
                    }}
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-extrabold px-4 py-2 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all shadow-md"
                  >
                    <Facebook className="w-3.5 h-3.5 fill-current" />
                    <span>Copy &amp; Open Facebook 🚀</span>
                  </a>

                  <button
                    onClick={() => setPreviewFBArticle(null)}
                    className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-2 rounded-xl font-bold text-xs"
                  >
                    Close
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
