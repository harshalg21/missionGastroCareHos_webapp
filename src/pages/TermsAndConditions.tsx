import React from 'react';
import { FileCheck, AlertTriangle, Stethoscope, Phone, Shield, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#164E43] via-[#1D5E54] to-[#2E7D72] text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-4">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-emerald-100 text-xs font-bold uppercase tracking-wider">
          <FileCheck className="w-4 h-4 text-emerald-300" />
          Hospital Portal Terms of Service
        </span>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
          Terms &amp; Conditions
        </h1>
        <p className="text-emerald-100 text-xs sm:text-sm max-w-2xl leading-relaxed">
          Please review the terms of service governing website access, OPD appointment requests, patient advisories, and clinical information provided by Mission Gastrocare, Vadodara.
        </p>
      </div>

      {/* Main Content */}
      <div className="bg-white border border-[#A9C3C9] rounded-3xl p-6 sm:p-10 space-y-8 shadow-sm text-[#0F172A]">
        
        {/* Section 1: Emergency Notice */}
        <div className="bg-rose-50 border border-rose-200 p-5 rounded-2xl space-y-2">
          <div className="flex items-center gap-2 text-rose-800 font-black text-sm">
            <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
            <span>CRITICAL MEDICAL EMERGENCY DISCLAIMER</span>
          </div>
          <p className="text-xs text-rose-950 font-medium leading-relaxed">
            Online OPD booking forms and AI symptom triage guides are intended strictly for elective consultation scheduling and informational guidance. If you or a family member are experiencing acute severe abdominal pain, high-grade GI bleeding, persistent vomiting, or loss of consciousness, <strong className="font-extrabold">do not wait for an online response</strong>. Proceed immediately to the Mission Gastrocare 24x7 Emergency Room or call our emergency hotline: <strong className="underline">+91 99253 29142</strong>.
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-3">
          <h2 className="text-lg font-black text-[#1D5E54] flex items-center gap-2">
            <Stethoscope className="w-5 h-5 text-[#2E7D72]" />
            1. Scope of Hospital Services
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-medium">
            Mission Gastrocare provides super-specialty medical care in Gastroenterology, Hepato-Pancreato-Biliary (HPB) Surgery, Advanced Therapeutic Endoscopy &amp; ERCP, Bariatric Surgery, and GI Oncology. All clinical procedures and surgical evaluations are performed under the direction of Dr. Jitendra Mistry and qualified specialist surgeons.
          </p>
        </div>

        {/* Section 3 */}
        <div className="space-y-3 pt-4 border-t border-slate-100">
          <h2 className="text-lg font-black text-[#1D5E54] flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#2E7D72]" />
            2. OPD Appointments &amp; Slot Confirmations
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-medium">
            Submitting an online OPD request schedules a appointment slot with our hospital reception desk. Slot confirmation timings are subject to emergency doctor availability and emergency surgical procedure schedules.
          </p>
        </div>

        {/* Section 4 */}
        <div className="space-y-3 pt-4 border-t border-slate-100">
          <h2 className="text-lg font-black text-[#1D5E54] flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-[#2E7D72]" />
            3. Intellectual Property &amp; Official Links
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-medium">
            All text, health guides, infographics, scraped surgical gallery images, and hospital logos are property of Mission Gastrocare. External links to Dr. Jitendra Mistry’s official portal (<a href="http://drjitendramistry.com/index.html" target="_blank" rel="noopener noreferrer" className="text-[#1D5E54] font-bold underline">drjitendramistry.com</a>) are provided for patient information.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-[#1D5E54]">
          <Link to="/privacy-policy" className="hover:underline flex items-center gap-1">
            &larr; View Privacy Policy
          </Link>
          <Link to="/book-appointment" className="bg-[#1D5E54] text-white px-5 py-2.5 rounded-xl hover:bg-[#164E43] transition-all">
            Book OPD Appointment &rarr;
          </Link>
        </div>

      </div>

    </div>
  );
}
