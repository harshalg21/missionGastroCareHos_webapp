import React from 'react';
import { ShieldCheck, FileText, CheckCircle2, AlertCircle, Heart, Lock, UserCheck } from 'lucide-react';

export default function PatientRights() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#164E43] via-[#1D5E54] to-[#2E7D72] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-4 relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-emerald-100 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            NABH Clinical Quality Charter
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Patient Rights &amp; Responsibilities
          </h1>
          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
            At Mission Gastrocare, we uphold the highest ethical standards of patient dignity, informed consent, medical privacy, and transparent clinical care.
          </p>
        </div>
      </div>

      {/* Grid of Rights & Responsibilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Patient Rights */}
        <div className="bg-white border border-[#A9C3C9] rounded-3xl p-7 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E1F2EE] text-[#1D5E54] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-[#0F172A]">Your Rights as a Patient</h2>
              <p className="text-xs text-[#64748B]">Guaranteed under hospital clinical governance</p>
            </div>
          </div>

          <div className="space-y-4 text-xs text-[#334155]">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#2E7D72] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#0F172A] font-bold">Right to Information &amp; Diagnosis:</strong>
                <span>Clear explanation of your medical condition, proposed surgical procedures, risks, and treatment costs.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#2E7D72] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#0F172A] font-bold">Right to Informed Consent:</strong>
                <span>Right to give or withhold consent prior to any endoscopy, ERCP, or surgical procedure.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#2E7D72] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#0F172A] font-bold">Right to Privacy &amp; Confidentiality:</strong>
                <span>Complete privacy during medical examinations and protection of medical records &amp; diagnostic scans.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#2E7D72] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#0F172A] font-bold">Right to Second Opinion:</strong>
                <span>Freedom to seek a second medical opinion from any specialist physician or surgeon.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#2E7D72] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#0F172A] font-bold">Right to Itemized Billing:</strong>
                <span>Transparent itemized billing breakdown for OPD consultations, room tariff, OT charges, and medicines.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Patient Responsibilities */}
        <div className="bg-white border border-[#A9C3C9] rounded-3xl p-7 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E1F2EE] text-[#1D5E54] flex items-center justify-center">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-[#0F172A]">Patient &amp; Visitor Responsibilities</h2>
              <p className="text-xs text-[#64748B]">Helping us maintain a safe clinical environment</p>
            </div>
          </div>

          <div className="space-y-4 text-xs text-[#334155]">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#0F172A] font-bold">Accurate Medical History:</strong>
                <span>Provide complete details of past medical conditions, allergies, current medications, and previous surgeries.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#0F172A] font-bold">Adherence to Fasting &amp; Clinical Prep:</strong>
                <span>Follow mandatory 6-8 hour fasting instructions before Endoscopy, Colonoscopy, or Laparoscopic procedures.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#0F172A] font-bold">Respect Hospital Rules &amp; Timings:</strong>
                <span>Observe visiting hours (4:00 PM - 7:00 PM), maintain quiet in ICU zones, and refrain from smoking inside hospital premises.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#0F172A] font-bold">Financial Responsibilities:</strong>
                <span>Clear admission deposits and insurance pre-authorization documentation in a timely manner.</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
