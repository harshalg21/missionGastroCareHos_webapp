import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqList: FAQItem[] = [
  {
    category: "Endoscopy & ERCP",
    question: "What fasting instructions must I follow before an Upper GI Endoscopy or ERCP?",
    answer: "You must remain strictly empty stomach (no water, food, or tea) for at least 6 to 8 hours prior to an Endoscopy or ERCP. If your procedure is scheduled for the morning, do not eat or drink after midnight."
  },
  {
    category: "Surgery & Laparoscopy",
    question: "How long is the hospital stay for Laparoscopic Gallbladder or Hernia Surgery?",
    answer: "Laparoscopic procedures are minimally invasive. Most patients admitted for Laparoscopic Cholecystectomy (gallbladder removal) or Hernia repair are discharged within 24 to 48 hours after surgery."
  },
  {
    category: "Mediclaim & Insurance",
    question: "Is Cashless Mediclaim facility available for emergency hospital admissions?",
    answer: "Yes! Mission Gastrocare is empanelled with major health insurance TPAs (Star Health, HDFC ERGO, ICICI Lombard, Care, Niva Bupa). Our 24x7 TPA desk assists with instant pre-authorization."
  },
  {
    category: "OPD & Appointments",
    question: "What are the OPD consultation timings and registration steps?",
    answer: "OPD operates Monday through Saturday from 10:00 AM to 8:00 PM. You can book a confirmed OPD slot online via our website booking tool or call (+91) 99253 29142."
  },
  {
    category: "Emergency & ICU",
    question: "How does the hospital manage 24x7 GI Bleeding or Acute Abdominal Emergency?",
    answer: "Our 24x7 Emergency GI Trauma Unit features on-call GI surgeons, therapeutic endoscopists, and an ICU team. Patients presenting with blood vomiting or severe abdominal pain receive immediate triage."
  }
];

export default function PatientFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white border border-[#A9C3C9] rounded-3xl p-6 sm:p-8 shadow-md space-y-8 text-[#1E293B]">
      
      {/* Header */}
      <div className="border-b border-slate-100 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full pastel-teal-badge text-xs font-bold uppercase tracking-wider mb-2">
          <HelpCircle className="w-4 h-4 text-[#1D5E54]" />
          <span>Patient Guidance &amp; Information</span>
        </div>
        <h2 className="text-2xl font-extrabold text-[#0F172A]">Frequently Asked Patient Questions</h2>
        <p className="text-xs text-[#475569] mt-1 font-medium">Clear answers regarding procedures, fasting guidelines, OPD visits, and insurance claims.</p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {faqList.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`border rounded-2xl transition-all ${
                isOpen ? 'bg-[#FAFBFB] border-[#2E7D72] shadow-sm' : 'bg-white border-[#A9C3C9] hover:border-slate-300'
              }`}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full p-4 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1D5E54] bg-[#E1F2EE] px-2.5 py-1 rounded border border-[#BDE3DB]">
                    {faq.category}
                  </span>
                  <h3 className="font-extrabold text-sm text-[#0F172A]">{faq.question}</h3>
                </div>
                <ChevronDown className={`w-5 h-5 text-[#2E7D72] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 text-xs text-[#475569] leading-relaxed font-medium border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
}
