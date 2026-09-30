import React from 'react';
import { ShieldCheck, Lock, FileText, CheckCircle2, Phone, Mail, Clock } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#164E43] via-[#1D5E54] to-[#2E7D72] text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-4">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-emerald-100 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-emerald-300" />
          Patient Confidentiality &amp; Data Protection
        </span>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
          Privacy Policy
        </h1>
        <p className="text-emerald-100 text-xs sm:text-sm max-w-2xl leading-relaxed">
          At Mission Gastrocare, we are committed to protecting patient health data, personal details, and clinical confidentiality in strict adherence to medical ethics and data protection standards.
        </p>
        <div className="pt-2 text-[11px] text-emerald-200 font-medium">
          Effective Date: September 30, 2026 | Last Updated: 2026
        </div>
      </div>

      {/* Main Privacy Policy Content */}
      <div className="bg-white border border-[#A9C3C9] rounded-3xl p-6 sm:p-10 space-y-8 shadow-sm text-[#0F172A]">
        
        {/* Section 1 */}
        <div className="space-y-3">
          <h2 className="text-lg font-black text-[#1D5E54] flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#2E7D72]" />
            1. Information We Collect
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-medium">
            When you schedule an OPD appointment, submit an inquiry, or interact with our digital health portal, Mission Gastrocare collects only necessary clinical and contact details, including:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs font-bold text-[#0F172A]">
            <li className="flex items-center gap-2 bg-[#E1F2EE] p-3 rounded-2xl border border-[#BDE3DB]">
              <CheckCircle2 className="w-4 h-4 text-[#1D5E54] shrink-0" />
              <span>Patient Name &amp; Contact Number</span>
            </li>
            <li className="flex items-center gap-2 bg-[#E1F2EE] p-3 rounded-2xl border border-[#BDE3DB]">
              <CheckCircle2 className="w-4 h-4 text-[#1D5E54] shrink-0" />
              <span>Preferred Specialty &amp; OPD Date</span>
            </li>
            <li className="flex items-center gap-2 bg-[#E1F2EE] p-3 rounded-2xl border border-[#BDE3DB]">
              <CheckCircle2 className="w-4 h-4 text-[#1D5E54] shrink-0" />
              <span>General Symptom Briefs (AI Triage)</span>
            </li>
            <li className="flex items-center gap-2 bg-[#E1F2EE] p-3 rounded-2xl border border-[#BDE3DB]">
              <CheckCircle2 className="w-4 h-4 text-[#1D5E54] shrink-0" />
              <span>Email for Prescription &amp; Health Updates</span>
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="space-y-3 pt-4 border-t border-slate-100">
          <h2 className="text-lg font-black text-[#1D5E54] flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#2E7D72]" />
            2. How We Use Patient Data
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-medium">
            All collected information is strictly used for hospital OPD scheduling, clinical consultation coordination, diagnostic follow-ups, and delivering emergency care advisories. We <strong className="text-[#0F172A]">never sell, trade, or leak</strong> patient phone numbers or medical records to third-party telemarketers or external advertisers.
          </p>
        </div>

        {/* Section 3 */}
        <div className="space-y-3 pt-4 border-t border-slate-100">
          <h2 className="text-lg font-black text-[#1D5E54] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#2E7D72]" />
            3. Medical Data Confidentiality &amp; Security
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-medium">
            Our hospital infrastructure utilizes encrypted SSL channels, protected administrative access controls, and role-based permissions to safeguard electronic medical records (EMR). Access to clinical details is restricted solely to authorized attending gastroenterologists, surgeons, and nursing staff.
          </p>
        </div>

        {/* Section 4 */}
        <div className="space-y-3 pt-4 border-t border-slate-100">
          <h2 className="text-lg font-black text-[#1D5E54] flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#2E7D72]" />
            4. Patient Rights &amp; Data Deletion Requests
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-medium">
            Patients retain full rights to update, inspect, or request deletion of their contact records from our digital health notification system at any time.
          </p>
        </div>

        {/* Contact Box */}
        <div className="bg-[#E1F2EE]/60 border border-[#BDE3DB] p-6 rounded-3xl space-y-2">
          <h3 className="text-sm font-black text-[#0F172A]">Questions Regarding Privacy &amp; Data Rights?</h3>
          <p className="text-xs text-[#475569] font-medium">
            Contact Mission Gastrocare’s Executive Helpdesk:
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2 text-xs font-bold text-[#1D5E54]">
            <span className="flex items-center gap-1.5">
              <Phone className="w-4 h-4" />
              +91 99253 29142 / 0265-2393766
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-4 h-4" />
              info@missiongastrocare.com
            </span>
          </div>
        </div>

      </div>

    </div>
  );
}
