import React from 'react';
import { ShieldCheck, PhoneCall, FileText, CheckCircle2 } from 'lucide-react';

const insurancePartners = [
  { name: "Star Health & Allied Insurance", type: "Cashless Empanelled", code: "STAR-01" },
  { name: "HDFC ERGO Health Insurance", type: "Cashless Empanelled", code: "HDFC-02" },
  { name: "ICICI Lombard General Insurance", type: "Cashless Empanelled", code: "ICICI-03" },
  { name: "Niva Bupa Health Insurance", type: "Cashless Empanelled", code: "NIVA-04" },
  { name: "Care Health Insurance (Religare)", type: "Cashless Empanelled", code: "CARE-05" },
  { name: "Medi Assist TPA Services", type: "TPA Partner", code: "MEDI-06" },
  { name: "Bajaj Allianz General Insurance", type: "Cashless Empanelled", code: "BAJAJ-07" },
  { name: "Paramount Health TPA", type: "TPA Partner", code: "PARAM-08" },
  { name: "Vipul MedCorp TPA", type: "TPA Partner", code: "VIPUL-09" },
  { name: "Heritage Health TPA", type: "TPA Partner", code: "HERIT-10" }
];

export default function InsurancePartners() {
  return (
    <section className="bg-white border border-[#A9C3C9] rounded-3xl p-6 sm:p-8 shadow-md space-y-8 text-[#1E293B]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full pastel-teal-badge text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4 text-[#1D5E54]" />
            <span>Cashless Mediclaim &amp; Insurance Desk</span>
          </div>
          <h2 className="text-2xl font-extrabold text-[#0F172A]">Empanelled Insurance &amp; TPA Partners</h2>
          <p className="text-xs text-[#475569] mt-1 font-medium">Hassle-free 100% cashless pre-authorization for surgical admissions and ERCP procedures.</p>
        </div>

        <a
          href="tel:+919925329142"
          className="flex items-center gap-2 px-5 py-3 rounded-xl text-white pastel-emerald-gradient font-bold text-xs hover:opacity-95 transition-all shadow-md shrink-0"
        >
          <PhoneCall className="w-4 h-4" />
          <span>TPA Desk Hotline (+91 99253 29142)</span>
        </a>
      </div>

      {/* Insurance Partners Badges Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {insurancePartners.map((partner, idx) => (
          <div
            key={idx}
            className="bg-[#FAFBFB] border border-[#A9C3C9] p-4 rounded-2xl text-center space-y-1.5 shadow-sm hover:border-[#2E7D72] transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-[#E1F2EE] border border-[#BDE3DB] text-[#1D5E54] flex items-center justify-center mx-auto text-xs font-extrabold">
              ✓
            </div>
            <h3 className="font-extrabold text-xs text-[#0F172A] line-clamp-2">{partner.name}</h3>
            <span className="inline-block text-[9px] font-bold text-[#1D5E54] bg-[#E1F2EE] px-2 py-0.5 rounded border border-[#BDE3DB]">
              {partner.type}
            </span>
          </div>
        ))}
      </div>

      {/* Cashless Claim Process Steps */}
      <div className="bg-[#FAFBFB] border border-[#A9C3C9] p-6 rounded-2xl space-y-4">
        <h3 className="font-extrabold text-sm text-[#0F172A] flex items-center gap-2">
          <FileText className="w-4 h-4 text-[#2E7D72]" />
          <span>4-Step Cashless Pre-Authorization Admission Process</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-medium">
          <div className="space-y-1 bg-white border border-[#A9C3C9] p-3 rounded-xl">
            <span className="font-extrabold text-[#1D5E54] block">Step 1: ID Submission</span>
            <p className="text-[#475569] text-[11px]">Submit Health Card, Policy Number &amp; Govt Photo ID at the TPA Desk.</p>
          </div>

          <div className="space-y-1 bg-white border border-[#A9C3C9] p-3 rounded-xl">
            <span className="font-extrabold text-[#1D5E54] block">Step 2: Pre-Auth Request</span>
            <p className="text-[#475569] text-[11px]">Our TPA coordinator sends pre-auth form &amp; doctor notes to your insurer.</p>
          </div>

          <div className="space-y-1 bg-white border border-[#A9C3C9] p-3 rounded-xl">
            <span className="font-extrabold text-[#1D5E54] block">Step 3: Quick Approval</span>
            <p className="text-[#475569] text-[11px]">Initial approval letter issued within 2-4 hours by insurance panel.</p>
          </div>

          <div className="space-y-1 bg-white border border-[#A9C3C9] p-3 rounded-xl">
            <span className="font-extrabold text-[#1D5E54] block">Step 4: Cashless Treatment</span>
            <p className="text-[#475569] text-[11px]">Undergo surgery or procedure with 0 upfront cash requirement.</p>
          </div>
        </div>
      </div>

    </section>
  );
}
