import React, { useState } from 'react';
import { Newspaper, Heart, Award, Image, Sparkles, ExternalLink, Calendar } from 'lucide-react';

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

const galleryImages = [
  { title: "Advanced Laparoscopic Modular OT Suite", desc: "Equipped with 4K UHD stacks & Harmonic scalpel" },
  { title: "Daycare High-Definition Endoscopy Unit", desc: "Comfortable recovery bays with continuous monitoring" },
  { title: "Deluxe In-Patient Private Suite", desc: "Spacious AC rooms with attendant lounge & WiFi" },
  { title: "24x7 Surgical ICU & High Dependency Unit", desc: "Dedicated intensivist monitoring & isolation beds" },
  { title: "Free Health Camp & Liver Screening", desc: "Community awareness drive at Vadodara" },
  { title: "Multidisciplinary Tumor Board Meeting", desc: "Specialist consultations for complex GI oncology cases" }
];

export default function Media() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#164E43] via-[#1D5E54] to-[#2E7D72] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-4 relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-emerald-100 text-xs font-bold uppercase tracking-wider">
            <Newspaper className="w-4 h-4" />
            Media Coverage &amp; Hospital Events
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            News, Press Releases &amp; Community Health Drives
          </h1>
          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
            Stay updated with clinical breakthroughs, press highlights, health camps, and hospital infrastructure milestones at Mission Gastrocare.
          </p>
        </div>
      </div>

      {/* Media Articles & Press Coverage */}
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

      {/* Hospital Photo Gallery Showcase */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black text-[#0F172A] flex items-center gap-2">
            <Image className="w-6 h-6 text-[#2E7D72]" />
            <span>Hospital Infrastructure &amp; Campus Gallery</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <div key={i} className="bg-white border border-[#A9C3C9] rounded-3xl p-5 shadow-sm hover:shadow-md transition-all space-y-3 group">
              <div className="w-full h-44 rounded-2xl bg-gradient-to-br from-[#CADBE0] to-[#B4C6CC] border border-[#A9C3C9] flex items-center justify-center text-[#1D5E54] font-extrabold text-sm group-hover:scale-102 transition-transform relative overflow-hidden">
                <div className="absolute inset-0 bg-[#164E43]/10 flex items-center justify-center p-4 text-center">
                  <span className="text-[#0F172A] font-extrabold text-base bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-[#A9C3C9] shadow-sm">
                    {img.title}
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#475569] font-medium">{img.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
