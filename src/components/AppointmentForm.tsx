import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Upload,
  Lock,
  CreditCard
} from 'lucide-react';

const doctorsList = [
  { name: "Dr. Jitendra Mistry", role: "Senior Gastroenterologist & GI Endoscopist", fee: "₹800" },
  { name: "Dr. Saurabh Dey", role: "Senior GI & Laparoscopic Surgeon", fee: "₹800" },
  { name: "Dr. Deepali Mistry", role: "Consultant Gastroenterologist", fee: "₹700" },
  { name: "Dr. Himani Patel", role: "Consultant HPB & Liver Specialist", fee: "₹700" },
  { name: "Dr. Parul Mistry", role: "Consultant Anesthesiologist & Critical Care", fee: "₹600" }
];

const timeSlots = ["10:00 AM", "11:30 AM", "01:00 PM", "04:00 PM", "05:30 PM", "07:00 PM"];

export default function AppointmentForm({ initialDoctor }: { initialDoctor?: string }) {
  const [step, setStep] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState(initialDoctor || doctorsList[0].name);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedSlot, setSelectedSlot] = useState(timeSlots[0]);
  const [consultType, setConsultType] = useState<'in-person' | 'online'>('in-person');
  
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Male');
  const [symptoms, setSymptoms] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const currentDocFee = doctorsList.find(d => d.name === selectedDoctor)?.fee || "₹800";

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Anti-spam bot protection
    if (step === 1) setStep(2);
    else if (step === 2) setStep(3);
    else if (step === 3) {
      setIsBooked(true);
    }
  };

  return (
    <div className="bg-white border border-[#A9C3C9] rounded-3xl p-6 sm:p-10 shadow-lg space-y-8 text-[#1E293B]">
      
      {/* Progress Header Bar */}
      {!isBooked && (
        <div className="space-y-4 border-b border-slate-100 pb-6">
          <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-[#64748B]">
            <span className={step >= 1 ? 'text-[#1D5E54]' : ''}>1. Select Doctor &amp; Slot</span>
            <span className={step >= 2 ? 'text-[#1D5E54]' : ''}>2. Patient Details</span>
            <span className={step >= 3 ? 'text-[#1D5E54]' : ''}>3. Payment &amp; Confirmation</span>
          </div>

          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full pastel-emerald-gradient transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Confirmation State */}
      {isBooked ? (
        <div className="text-center py-10 space-y-6 animate-in zoom-in-95 duration-300">
          <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-200 text-[#1D5E54] mx-auto flex items-center justify-center shadow-md">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#1D5E54] bg-[#E1F2EE] px-3 py-1 rounded-full border border-[#BDE3DB]">
              Booking Ref: MGC-{Math.floor(100000 + Math.random() * 900000)}
            </span>
            <h2 className="text-2xl font-extrabold text-[#0F172A]">Consultation Appointment Confirmed!</h2>
            <p className="text-xs text-[#475569] max-w-md mx-auto font-medium">
              Your appointment with <strong className="text-[#1D5E54]">{selectedDoctor}</strong> has been scheduled for <strong className="text-[#0F172A]">{selectedDate}</strong> at <strong className="text-[#0F172A]">{selectedSlot}</strong> ({consultType === 'in-person' ? 'In-Hospital OPD' : 'Online Video Consult'}).
            </p>
          </div>

          <div className="bg-[#FAFBFB] border border-[#A9C3C9] p-6 rounded-2xl max-w-md mx-auto text-left space-y-2 text-xs font-medium text-[#334155]">
            <div className="flex justify-between text-[#64748B]">
              <span>Patient Name:</span>
              <span className="text-[#0F172A] font-bold">{patientName || 'Patient'}</span>
            </div>
            <div className="flex justify-between text-[#64748B]">
              <span>Contact Number:</span>
              <span className="text-[#0F172A] font-bold">{phone || '+91 99253 29142'}</span>
            </div>
            <div className="flex justify-between text-[#64748B]">
              <span>Hospital Address:</span>
              <span className="text-[#1D5E54] font-bold">Vadodara, Gujarat</span>
            </div>
            <div className="flex justify-between text-[#64748B]">
              <span>Consultation Fee:</span>
              <span className="text-[#1D5E54] font-bold">{currentDocFee} (Paid)</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="https://wa.me/919925329142?text=I%20have%20booked%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-md"
            >
              Receive Booking Slip on WhatsApp
            </a>
            <button
              onClick={() => { setStep(1); setIsBooked(false); }}
              className="px-6 py-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-200 transition-colors"
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleNextStep} className="space-y-6">

          {/* STEP 1: Select Doctor & Slot */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              
              {/* Consultation Type */}
              <div className="space-y-2">
                <label className="block text-xs font-extrabold uppercase tracking-wider text-[#334155]">Consultation Mode</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setConsultType('in-person')}
                    className={`py-3 px-4 rounded-2xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      consultType === 'in-person'
                        ? 'bg-[#E1F2EE] border-[#BDE3DB] text-[#1D5E54] shadow-sm'
                        : 'bg-[#FAFBFB] border-[#A9C3C9] text-[#334155]'
                    }`}
                  >
                    <span>In-Hospital OPD Visit</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setConsultType('online')}
                    className={`py-3 px-4 rounded-2xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      consultType === 'online'
                        ? 'bg-[#E1F2EE] border-[#BDE3DB] text-[#1D5E54] shadow-sm'
                        : 'bg-[#FAFBFB] border-[#A9C3C9] text-[#334155]'
                    }`}
                  >
                    <span>Online Teleconsultation</span>
                  </button>
                </div>
              </div>

              {/* Doctor Roster Selection */}
              <div className="space-y-2">
                <label className="block text-xs font-extrabold uppercase tracking-wider text-[#334155]">Select Gastroenterology Specialist</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {doctorsList.map((doc, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedDoctor(doc.name)}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        selectedDoctor === doc.name
                          ? 'bg-[#E1F2EE] border-[#BDE3DB] text-[#1D5E54] shadow-sm'
                          : 'bg-[#FAFBFB] border-[#A9C3C9] text-[#334155] hover:border-slate-300'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <span className="font-extrabold text-xs text-[#0F172A]">{doc.name}</span>
                        <span className="text-[10px] font-bold text-[#1D5E54] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          {doc.fee}
                        </span>
                      </div>
                      <span className="block text-[11px] text-[#64748B] font-medium mt-0.5">{doc.role}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Slot Pickers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-[#334155]">Select Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-[#FAFBFB] border border-[#A9C3C9] rounded-xl p-3 text-xs text-[#1E293B] focus:outline-none focus:border-[#2E7D72] font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-[#334155]">Available Time Slots</label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((slot, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        className={`py-2 text-[11px] font-bold rounded-lg border transition-all ${
                          selectedSlot === slot
                            ? 'bg-[#2E7D72] text-white border-[#2E7D72]'
                            : 'bg-[#FAFBFB] text-[#334155] border-[#A9C3C9] hover:border-slate-300'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl text-white pastel-emerald-gradient font-bold text-xs flex items-center gap-2 hover:opacity-95 shadow-md active:scale-95"
                >
                  <span>Continue to Patient Info</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}

          {/* STEP 2: Patient Personal Details */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-[#334155]">Full Patient Name *</label>
                  <input
                    type="text"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    required
                    placeholder="e.g. Ramesh Patel"
                    className="w-full bg-[#FAFBFB] border border-[#A9C3C9] rounded-xl p-3 text-xs text-[#1E293B] placeholder-slate-400 focus:outline-none focus:border-[#2E7D72] font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-[#334155]">Mobile Phone Number *</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#FAFBFB] border border-[#A9C3C9] rounded-xl p-3 text-xs text-[#1E293B] placeholder-slate-400 focus:outline-none focus:border-[#2E7D72] font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-[#334155]">Email Address (Optional)</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="patient@example.com"
                    className="w-full bg-[#FAFBFB] border border-[#A9C3C9] rounded-xl p-3 text-xs text-[#1E293B] placeholder-slate-400 focus:outline-none focus:border-[#2E7D72] font-medium"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-[#334155]">Age</label>
                    <input
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="45"
                      className="w-full bg-[#FAFBFB] border border-[#A9C3C9] rounded-xl p-3 text-xs text-[#1E293B] placeholder-slate-400 focus:outline-none focus:border-[#2E7D72] font-medium"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-[#334155]">Gender</label>
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="w-full bg-[#FAFBFB] border border-[#A9C3C9] rounded-xl p-3 text-xs text-[#1E293B] focus:outline-none focus:border-[#2E7D72] font-medium"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Symptoms / Chief Complaint */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-[#334155]">Symptoms &amp; Chief Complaints</label>
                <textarea
                  rows={3}
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  placeholder="Describe your current GI issues (e.g., severe acidity, gallbladder pain, nausea)..."
                  className="w-full bg-[#FAFBFB] border border-[#A9C3C9] rounded-xl p-3 text-xs text-[#1E293B] placeholder-slate-400 focus:outline-none focus:border-[#2E7D72] font-medium"
                ></textarea>
              </div>

              {/* Optional Medical Report Upload */}
              <div className="border-2 border-dashed border-[#A9C3C9] rounded-2xl p-4 text-center bg-[#FAFBFB]">
                <Upload className="w-5 h-5 text-[#2E7D72] mx-auto mb-1" />
                <p className="text-xs text-[#1E293B] font-bold">Upload Previous Lab / Endoscopy Reports (Optional)</p>
                <p className="text-[10px] text-[#64748B]">PDF, JPG, PNG up to 10MB</p>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-200 flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl text-white pastel-emerald-gradient font-bold text-xs flex items-center gap-2 hover:opacity-95 shadow-md active:scale-95"
                >
                  <span>Proceed to Payment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}

          {/* STEP 3: Razorpay Payment Simulation & OTP */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              
              <div className="bg-[#FAFBFB] border border-[#A9C3C9] p-5 rounded-2xl space-y-3 font-medium text-[#334155]">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <span className="text-xs font-bold text-[#334155]">Appointment Summary</span>
                  <span className="text-xs font-bold text-[#1D5E54]">{selectedDoctor}</span>
                </div>
                <div className="flex justify-between text-xs text-[#64748B]">
                  <span>Slot &amp; Mode:</span>
                  <span className="text-[#0F172A] font-bold">{selectedDate} @ {selectedSlot} ({consultType})</span>
                </div>
                <div className="flex justify-between text-xs text-[#64748B]">
                  <span>Consultation Fee:</span>
                  <span className="text-[#1D5E54] font-extrabold text-sm">{currentDocFee}</span>
                </div>
              </div>

              {/* Payment Gateway Mock */}
              <div className="space-y-3">
                <label className="block text-xs font-extrabold uppercase tracking-wider text-[#334155]">Select Payment Method (Razorpay India)</label>
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl border border-[#BDE3DB] bg-[#E1F2EE] text-center text-xs font-extrabold text-[#1D5E54]">
                    UPI / GPay / PhonePe
                  </div>
                  <div className="p-3 rounded-xl border border-[#A9C3C9] bg-[#FAFBFB] text-center text-xs font-semibold text-[#64748B]">
                    Credit / Debit Card
                  </div>
                  <div className="p-3 rounded-xl border border-[#A9C3C9] bg-[#FAFBFB] text-center text-xs font-semibold text-[#64748B]">
                    Pay at Hospital Counter
                  </div>
                </div>
              </div>

              <div className="bg-[#FAFBFB] border border-[#A9C3C9] p-4 rounded-xl flex items-center gap-3 text-xs text-[#64748B] font-medium">
                <Lock className="w-5 h-5 text-[#2E7D72] shrink-0" />
                <span>256-Bit SSL Encrypted Healthcare Payment Gateway compliant with Indian DPDP Norms.</span>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-200 flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-xl text-white pastel-emerald-gradient font-bold text-xs flex items-center gap-2 hover:opacity-95 shadow-md active:scale-95"
                >
                  <CreditCard className="w-4 h-4 stroke-[2.5]" />
                  <span>Pay {currentDocFee} &amp; Confirm Appointment</span>
                </button>
              </div>

            </div>
          )}

        </form>
      )}

    </div>
  );
}
