import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, ArrowRight, ShieldAlert, ChevronRight } from 'lucide-react';

const symptomOptions = [
  {
    id: 'reflux',
    label: 'Acid Reflux, GERD & Severe Heartburn',
    dept: 'Medical Gastroenterology & Endoscopy',
    doctor: 'Dr. Jitendra Mistry / Dr. Deepali Mistry',
    action: 'Endoscopy & Anti-Reflux Evaluation',
    urgency: 'Routine / OPD'
  },
  {
    id: 'gallstones',
    label: 'Upper Right Abdominal Pain (Gallbladder/Jaundice)',
    dept: 'Hepato-Pancreato-Biliary (HPB) Surgery',
    doctor: 'Dr. Himani Patel / Dr. Saurabh Dey',
    action: 'Laparoscopic Cholecystectomy & ERCP',
    urgency: 'Prompt Evaluation Needed'
  },
  {
    id: 'obesity',
    label: 'Morbid Obesity & Metabolic Syndrome',
    dept: 'Bariatric & Metabolic Surgery',
    doctor: 'Dr. Saurabh Dey',
    action: 'Laparoscopic Sleeve / Bypass Consultation',
    urgency: 'Elective Consultation'
  },
  {
    id: 'bleeding',
    label: 'Vomiting Blood / Black Stool / Severe Pain',
    dept: '24x7 Acute Abdomen & Emergency GI Care',
    doctor: 'Emergency Medical Team & On-Call GI Surgeon',
    action: 'Immediate Emergency Evaluation & ERCP',
    urgency: 'HIGH URGENCY / EMERGENCY'
  },
  {
    id: 'piles',
    label: 'Rectal Bleeding, Anal Fissure & Piles',
    dept: 'Proctology & Minimal Access Surgery',
    doctor: 'Dr. Saurabh Dey',
    action: 'Laser Proctology & Colonoscopy',
    urgency: 'OPD Consultation'
  }
];

export default function SymptomChecker() {
  const [selectedSymptom, setSelectedSymptom] = useState(symptomOptions[0]);

  return (
    <div className="bg-white border border-[#A9C3C9] rounded-3xl p-6 sm:p-8 shadow-md space-y-6 text-[#1E293B]">
      
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full pastel-teal-badge text-xs font-bold uppercase tracking-wider mb-2">
            <Stethoscope className="w-4 h-4 text-[#1D5E54]" />
            <span>Interactive Symptom Guidance</span>
          </div>
          <h2 className="text-2xl font-extrabold text-[#0F172A]">Find the Right Gastro Department</h2>
          <p className="text-xs text-[#475569] mt-1 font-medium">Select your primary symptom below to view recommended specialist care and procedures.</p>
        </div>

        <Link
          to="/ai-triage"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#EBF0F5] border border-[#CFDAE6] text-[#2C4A6F] font-bold text-xs hover:bg-[#DEE7F0] transition-colors shadow-sm"
        >
          <span>Try AI Chatbot Triage</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Symptom Selection Buttons */}
        <div className="lg:col-span-6 space-y-2.5">
          {symptomOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelectedSymptom(opt)}
              className={`w-full text-left p-3.5 rounded-2xl border text-xs font-bold transition-all flex items-center justify-between ${
                selectedSymptom.id === opt.id
                  ? 'bg-[#E1F2EE] border-[#BDE3DB] text-[#1D5E54] shadow-sm'
                  : 'bg-[#FAFBFB] border-[#A9C3C9] text-[#334155] hover:border-[#BDE3DB] hover:bg-[#F0F7FA]'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-2.5 h-2.5 rounded-full ${selectedSymptom.id === opt.id ? 'bg-[#2E7D72]' : 'bg-slate-300'}`}></span>
                <span>{opt.label}</span>
              </div>
              <ChevronRight className={`w-4 h-4 transition-transform ${selectedSymptom.id === opt.id ? 'translate-x-1 text-[#1D5E54]' : 'text-slate-400'}`} />
            </button>
          ))}
        </div>

        {/* Selected Symptom Recommendation Panel */}
        <div className="lg:col-span-6 bg-[#FAFBFB] border border-[#A9C3C9] p-6 rounded-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#64748B]">Clinical Recommendation</span>
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border ${
              selectedSymptom.urgency.includes('EMERGENCY')
                ? 'bg-rose-100 text-rose-800 border-rose-200'
                : 'bg-[#E1F2EE] text-[#1D5E54] border-[#BDE3DB]'
            }`}>
              {selectedSymptom.urgency}
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <span className="text-[#64748B] block font-semibold">Recommended Department:</span>
              <span className="text-sm font-extrabold text-[#0F172A]">{selectedSymptom.dept}</span>
            </div>

            <div>
              <span className="text-[#64748B] block font-semibold">Attending Specialists:</span>
              <span className="text-[#1E293B] font-bold">{selectedSymptom.doctor}</span>
            </div>

            <div>
              <span className="text-[#64748B] block font-semibold">Diagnostic / Surgical Line:</span>
              <span className="text-[#1D5E54] font-bold">{selectedSymptom.action}</span>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
            {selectedSymptom.urgency.includes('EMERGENCY') ? (
              <a
                href="tel:+919925329142"
                className="w-full py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs text-center flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <ShieldAlert className="w-4 h-4 animate-bounce" />
                <span>Call 24x7 Emergency Line (+91 99253 29142)</span>
              </a>
            ) : (
              <Link
                to={`/book-appointment?doctor=${encodeURIComponent(selectedSymptom.doctor)}`}
                className="w-full py-3 rounded-xl text-white pastel-emerald-gradient font-bold text-xs text-center flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-sm"
              >
                <span>Book Consultation for this Condition</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
