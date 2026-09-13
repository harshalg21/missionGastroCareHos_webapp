import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

const articles = [
  {
    id: "cancer-warning-signs",
    title: "Warning Signs of Gastrointestinal Cancers You Should Never Ignore",
    category: "GI Oncology",
    date: "July 20, 2026",
    readTime: "5 min read",
    author: "Dr. Jitendra Mistry",
    summary: "Recognizing early indicators of esophageal, stomach, colon, and liver cancer—including unexplained weight loss, persistent acidity, difficulty swallowing, and rectal bleeding."
  },
  {
    id: "familial-colorectal-cancer",
    title: "Familial Colorectal Cancer: Understanding Genetic Risk & Screening",
    category: "Preventive Care",
    date: "June 15, 2026",
    readTime: "6 min read",
    author: "Dr. Deepali Mistry",
    summary: "If you have a family history of colon polyps or colorectal cancer, early screening colonoscopy can detect and remove precancerous polyps before they turn malignant."
  },
  {
    id: "what-is-gi-surgery",
    title: "What is GI Surgery? Laparoscopic vs Open Surgical Techniques Explained",
    category: "Surgical Guidance",
    date: "May 28, 2026",
    readTime: "4 min read",
    author: "Dr. Saurabh Dey",
    summary: "An in-depth guide on how laparoscopic gastrointestinal surgery reduces post-operative pain, speeds up hospital discharge, and minimizes scarring."
  },
  {
    id: "medical-dynamics-liver",
    title: "Medical Dynamics: Misconceptions vs Facts in Fatty Liver & Cirrhosis",
    category: "Hepatology",
    date: "April 10, 2026",
    readTime: "7 min read",
    author: "Dr. Himani Patel",
    summary: "Debunking common myths around fatty liver disease (NAFLD/NASH), alcohol-related liver damage, and modern medical strategies to reverse early fibrosis."
  },
  {
    id: "manikarnika-healthcare",
    title: "MANIKARNIKA - Women's Health & Society",
    category: "Community Health",
    date: "March 08, 2026",
    readTime: "5 min read",
    author: "Dr. Parul Mistry",
    summary: "Addressing silent digestive issues in women, nutritional anemia, functional bowel syndromes, and empowering healthcare awareness."
  },
  {
    id: "pseudopatriotism-health",
    title: "Pseudopatriotism & Public Health Responsibility in Modern India",
    category: "Healthcare Policy",
    date: "February 14, 2026",
    readTime: "6 min read",
    author: "Dr. Jitendra Mistry",
    summary: "Reflections on ethical medical practice, patient safety standards, institutional responsibility, and raising the bar for super-specialty healthcare."
  }
];

export default function Blog() {
  return (
    <div className="space-y-16 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent text-[#1E293B]">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[#1D5E54] font-extrabold text-xs uppercase tracking-wider bg-[#E1F2EE] px-3 py-1 rounded-full border border-[#BDE3DB]">
          Medical Insights &amp; Articles
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A]">
          Health Corner &amp; GI Educational Blog
        </h1>
        <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-medium">
          Stay informed with evidence-based articles on digestive disorders, liver health, surgical innovations, and preventive GI screenings.
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div key={article.id} className="bg-white border border-[#A9C3C9] rounded-3xl p-6 hover:border-[#3A9D8F] hover:shadow-xl transition-all card-hover-effect flex flex-col justify-between group shadow-sm">
            <div className="space-y-4">
              
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1D5E54] bg-[#E1F2EE] px-2.5 py-1 rounded-full border border-[#BDE3DB]">
                  {article.category}
                </span>
                <span className="text-[11px] text-[#64748B] font-medium flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#2E7D72]" />
                  {article.readTime}
                </span>
              </div>

              <h2 className="text-lg font-extrabold text-[#0F172A] group-hover:text-[#1D5E54] transition-colors line-clamp-2">
                {article.title}
              </h2>

              <p className="text-xs text-[#475569] leading-relaxed line-clamp-3 font-medium">
                {article.summary}
              </p>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#64748B] font-medium">
                <span className="flex items-center gap-1 font-bold text-[#1E293B]">
                  <User className="w-3 h-3 text-[#2E7D72]" />
                  {article.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {article.date}
                </span>
              </div>

            </div>

            <div className="pt-5">
              <Link
                to="/media"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#1D5E54] hover:text-[#164E43] hover:underline"
              >
                <span>Read Full Article on Media &amp; Health Hub</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
