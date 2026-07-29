import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Upload, 
  UserCheck, 
  Building2, 
  Sparkles,
  HeartHandshake
} from 'lucide-react';

interface JobOpening {
  id: string;
  title: string;
  department: string;
  type: string;
  experience: string;
  qualification: string;
  responsibilities: string[];
}

const jobOpenings: JobOpening[] = [
  {
    id: "job-1",
    title: "ICU & Staff Nurse",
    department: "Nursing & Patient Care",
    type: "Full Time (Rotational Shift)",
    experience: "1 - 4 Years in ICU / Surgical Ward",
    qualification: "B.Sc Nursing / GNM",
    responsibilities: [
      "Monitors post-operative GI surgical patients in ICU",
      "Administers prescribed IV medications and maintains clinical charts",
      "Assists Senior Intensivist & Gastroenterologists during bedside procedures"
    ]
  },
  {
    id: "job-2",
    title: "Operation Theatre (OT) Technician",
    department: "Surgical Services",
    type: "Full Time",
    experience: "2+ Years in Laparoscopic / GI OT",
    qualification: "Diploma / Degree in OT Technology",
    responsibilities: [
      "Prepares 4K Laparoscopic stack, Harmonic Scalpel, and Endoscopy towers",
      "Ensures strict sterilization and infection control protocols in OT",
      "Assists Senior GI & HPB Surgeons during surgeries"
    ]
  },
  {
    id: "job-3",
    title: "Resident Medical Officer (RMO)",
    department: "Clinical Medical Staff",
    type: "Full Time / Rotational",
    experience: "1+ Year in General Hospital / Emergency",
    qualification: "MBBS / BAMS / BHMS",
    responsibilities: [
      "Manages 24x7 GI emergency patient admissions and triage",
      "Conducts daily ICU & ward patient rounds under senior consultant supervision",
      "Responds to acute abdomen emergencies and patient calls"
    ]
  },
  {
    id: "job-4",
    title: "Front Desk & TPA Billing Executive",
    department: "Hospital Operations",
    type: "Full Time",
    experience: "1 - 3 Years in Hospital Billing / Mediclaim",
    qualification: "Graduate (Any Stream)",
    responsibilities: [
      "Handles patient registration, OPD appointments, and admission desk",
      "Processes cashless health insurance pre-authorization and TPA claims",
      "Assists patients with admission billing and discharge formalities"
    ]
  }
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    message: '',
    fileName: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedJob(null);
      setFormData({ name: '', email: '', phone: '', experience: '', message: '', fileName: '' });
    }, 4000);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-[#164E43] via-[#1D5E54] to-[#2E7D72] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-4 relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-emerald-100 text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-4 h-4" />
            Careers at Mission Gastrocare
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Build Your Career with Gujarat’s Leading GI Specialty Hospital
          </h1>
          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
            Join our multidisciplinary team of GI surgeons, gastroenterologists, nurses, and healthcare professionals dedicated to clinical precision and compassionate patient care.
          </p>
        </div>
      </div>

      {/* Why Work With Us Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-[#A9C3C9] rounded-3xl p-6 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-[#E1F2EE] text-[#1D5E54] flex items-center justify-center">
            <Building2 className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-extrabold text-[#0F172A]">State-of-the-Art Facilities</h3>
          <p className="text-xs text-[#475569] leading-relaxed">
            Work with advanced 4K Laparoscopic towers, therapeutic Endoscopy suites, and modern ICU infrastructure.
          </p>
        </div>

        <div className="bg-white border border-[#A9C3C9] rounded-3xl p-6 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-[#E1F2EE] text-[#1D5E54] flex items-center justify-center">
            <UserCheck className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-extrabold text-[#0F172A]">Continuous Education</h3>
          <p className="text-xs text-[#475569] leading-relaxed">
            Regular clinical workshops, surgical training sessions, and nursing skill enrichment programs.
          </p>
        </div>

        <div className="bg-white border border-[#A9C3C9] rounded-3xl p-6 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-[#E1F2EE] text-[#1D5E54] flex items-center justify-center">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-extrabold text-[#0F172A]">Supportive Culture</h3>
          <p className="text-xs text-[#475569] leading-relaxed">
            Collaborative team environment with competitive salaries, staff canteen, and health benefits.
          </p>
        </div>
      </div>

      {/* Current Job Openings */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black text-[#0F172A]">Current Job Openings</h2>
            <p className="text-xs text-[#475569]">Explore open positions and apply directly online</p>
          </div>
          <span className="text-xs font-bold text-[#1D5E54] bg-[#E1F2EE] px-3 py-1 rounded-full border border-[#BDE3DB]">
            {jobOpenings.length} Positions Active
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobOpenings.map((job) => (
            <div key={job.id} className="bg-white border border-[#A9C3C9] rounded-3xl p-6 hover:border-[#2E7D72] hover:shadow-lg transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1D5E54] bg-[#E1F2EE] px-2.5 py-1 rounded-full border border-[#BDE3DB]">
                    {job.department}
                  </span>
                  <span className="text-xs font-semibold text-[#64748B] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#2E7D72]" />
                    {job.type}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-[#0F172A]">{job.title}</h3>
                
                <div className="space-y-1 text-xs text-[#334155]">
                  <p className="font-semibold"><strong>Qualification:</strong> {job.qualification}</p>
                  <p className="font-semibold"><strong>Experience:</strong> {job.experience}</p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-[#334155] uppercase">Key Responsibilities:</span>
                  {job.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#475569]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D72] shrink-0" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setSelectedJob(job)}
                  className="w-full py-3 rounded-2xl font-bold text-xs text-white pastel-emerald-gradient hover:opacity-95 transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Apply For Position</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* General Resume Submission Notice */}
      <div className="bg-white border border-[#A9C3C9] rounded-3xl p-8 text-center space-y-4 shadow-sm">
        <h3 className="text-xl font-extrabold text-[#0F172A]">Don't see a matching position?</h3>
        <p className="text-xs text-[#475569] max-w-xl mx-auto">
          We are always looking for talented medical professionals, nurses, and administrative personnel. Send your CV to <strong className="text-[#1D5E54]">careers@missiongastrocare.com</strong> or call HR Desk at <strong className="text-[#1D5E54]">0265-2393766</strong>.
        </p>
      </div>

      {/* Job Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-[#A9C3C9] shadow-2xl relative space-y-5">
            
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 font-extrabold text-lg"
            >
              ✕
            </button>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#E1F2EE] text-[#1D5E54] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-extrabold text-[#0F172A]">Application Submitted Successfully!</h3>
                <p className="text-xs text-[#475569]">
                  Thank you for applying for <strong>{selectedJob.title}</strong>. Our HR team will review your application and contact you soon.
                </p>
              </div>
            ) : (
              <>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1D5E54] bg-[#E1F2EE] px-2.5 py-1 rounded-full border border-[#BDE3DB]">
                    Apply Online
                  </span>
                  <h3 className="text-xl font-extrabold text-[#0F172A] mt-2">
                    Application for {selectedJob.title}
                  </h3>
                  <p className="text-xs text-[#64748B]">{selectedJob.department} • {selectedJob.qualification}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-[#334155] mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh Kumar / Nurse Anjali"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#FAFBFB] border border-[#A9C3C9] rounded-xl px-3.5 py-2 text-xs text-[#1E293B] focus:outline-none focus:border-[#2E7D72]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#334155] mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#FAFBFB] border border-[#A9C3C9] rounded-xl px-3.5 py-2 text-xs text-[#1E293B] focus:outline-none focus:border-[#2E7D72]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#334155] mb-1">Mobile Phone</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#FAFBFB] border border-[#A9C3C9] rounded-xl px-3.5 py-2 text-xs text-[#1E293B] focus:outline-none focus:border-[#2E7D72]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#334155] mb-1">Total Years of Experience</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 3 Years in ICU Nursing"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full bg-[#FAFBFB] border border-[#A9C3C9] rounded-xl px-3.5 py-2 text-xs text-[#1E293B] focus:outline-none focus:border-[#2E7D72]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#334155] mb-1">Upload Resume (PDF / DOC)</label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setFormData({ ...formData, fileName: e.target.files?.[0]?.name || '' })}
                      className="w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#E1F2EE] file:text-[#1D5E54] hover:file:bg-[#d2ede6]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-2xl font-bold text-xs text-white pastel-emerald-gradient hover:opacity-95 transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Job Application</span>
                  </button>
                </form>
              </>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
