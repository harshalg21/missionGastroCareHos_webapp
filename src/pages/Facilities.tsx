import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Microscope, Activity, ShieldCheck, CheckCircle2, Bed, Tv, Wifi, Wind } from 'lucide-react';

const wardRooms = [
  {
    id: "deluxe",
    name: "Deluxe Executive AC Room",
    tag: "Private Luxury Suite",
    desc: "Spacious private air-conditioned room with attendant bed, motorized patient bed, private washroom, LED TV, and dedicated nursing care.",
    amenities: ["Private Air-Conditioned Room", "Motorized Remote Bed", "Attendant Couch & Bed", "Attached Clean Washroom", "Flat Screen LED TV", "Free High-Speed Wi-Fi"],
    fee: "₹3,500 / day"
  },
  {
    id: "semi-private",
    name: "Semi-Private Twin AC Room",
    tag: "Twin Sharing",
    desc: "Air-conditioned 2-bed room with privacy curtains, attendant chair, nurse call button, and shared clean washroom.",
    amenities: ["Air-Conditioned Room", "Privacy Curtain Separation", "Attendant Chair", "Shared Attached Washroom", "Individual Nurse Call System"],
    fee: "₹2,200 / day"
  },
  {
    id: "general-ward",
    name: "General Medical & Surgical Ward",
    tag: "Economical & Clean",
    desc: "Well-ventilated multi-bed general ward with individual locker, patient bed, central oxygen line, and 24x7 nursing supervisor desk.",
    amenities: ["Spacious Clean Ward", "Central Medical Gas & Oxygen", "Personal Bedside Locker", "24x7 Ward Nurse Desk"],
    fee: "₹1,200 / day"
  }
];

export default function Facilities() {
  const [activeWard, setActiveWard] = useState(wardRooms[0]);

  return (
    <div className="space-y-16 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent text-[#1E293B]">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[#1D5E54] font-extrabold text-xs uppercase tracking-wider bg-[#E1F2EE] px-3 py-1 rounded-full border border-[#BDE3DB]">
          World-Class Medical Infrastructure
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A]">
          Hospital Facilities &amp; In-Patient Wards
        </h1>
        <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-medium">
          Designed specifically for complex gastrointestinal surgeries, endoscopic interventions, and acute critical care with strict NABH safety protocols.
        </p>
      </div>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Facility 1: Modular OTs */}
        <div id="modular-ot" className="bg-white border border-[#A9C3C9] p-8 rounded-3xl space-y-4 shadow-md">
          <div className="w-12 h-12 rounded-2xl pastel-emerald-gradient flex items-center justify-center text-white font-bold shadow-sm">
            <Building2 className="w-6 h-6 stroke-[2.5]" />
          </div>
          <h2 className="text-xl font-extrabold text-[#0F172A]">Modular Operation Theatres</h2>
          <p className="text-xs text-[#475569] leading-relaxed font-medium">
            Equipped with HEPA laminar airflow filtration to maintain sterile environments. Advanced Karl Storz &amp; Stryker laparoscopic HD towers for minimal-access GI, bariatric, and HPB cancer procedures.
          </p>
          <ul className="text-xs text-[#334155] space-y-1.5 pt-2 font-medium">
            <li>• HEPA Laminar Airflow &amp; Anti-Bacterial Seamless Walls</li>
            <li>• High-Definition 4K Laparoscopic &amp; Electrocautery Towers</li>
            <li>• Dedicated Anaesthesia Workstations with Invasive Monitoring</li>
          </ul>
        </div>

        {/* Facility 2: Endoscopy Suite */}
        <div id="endoscopy-suite" className="bg-white border border-[#A9C3C9] p-8 rounded-3xl space-y-4 shadow-md">
          <div className="w-12 h-12 rounded-2xl bg-sky-600 flex items-center justify-center text-white font-bold shadow-sm">
            <Microscope className="w-6 h-6 stroke-[2.5]" />
          </div>
          <h2 className="text-xl font-extrabold text-[#0F172A]">Advanced Endoscopy &amp; ERCP Suite</h2>
          <p className="text-xs text-[#475569] leading-relaxed font-medium">
            Dedicated video endoscopy room featuring Olympus Narrow Band Imaging (NBI) endoscopy systems for early cancer detection, therapeutic ERCP, and esophageal motility testing.
          </p>
          <ul className="text-xs text-[#334155] space-y-1.5 pt-2 font-medium">
            <li>• Olympus High-Definition Upper GI Endoscopes &amp; Colonoscopes</li>
            <li>• C-Arm Fluoroscopy for Precision ERCP Stone Extraction</li>
            <li>• Automated Endoscope Reprocessing &amp; Disinfection Protocols</li>
          </ul>
        </div>

        {/* Facility 3: ICU & HDU */}
        <div id="icu" className="bg-white border border-[#A9C3C9] p-8 rounded-3xl space-y-4 shadow-md">
          <div className="w-12 h-12 rounded-2xl bg-rose-600 flex items-center justify-center text-white font-bold shadow-sm">
            <Activity className="w-6 h-6 stroke-[2.5]" />
          </div>
          <h2 className="text-xl font-extrabold text-[#0F172A]">GI Intensive Care Unit (ICU &amp; HDU)</h2>
          <p className="text-xs text-[#475569] leading-relaxed font-medium">
            Multi-bed critical care unit staffed 24x7 by intensivists and trained ICU nurses. Specialized for severe acute pancreatitis, GI bleeding, liver failure, and post-major HPB surgery recovery.
          </p>
          <ul className="text-xs text-[#334155] space-y-1.5 pt-2 font-medium">
            <li>• Advanced Mechanical Ventilators &amp; Syringe Infusion Pumps</li>
            <li>• Central Hemodynamic &amp; Arterial Blood Gas Monitoring</li>
            <li>• 1:1 Nurse-to-Patient Ratio for Critical GI Patients</li>
          </ul>
        </div>

        {/* Facility 4: Radiology & Lab */}
        <div id="radiology-lab" className="bg-white border border-[#A9C3C9] p-8 rounded-3xl space-y-4 shadow-md">
          <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white font-bold shadow-sm">
            <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
          </div>
          <h2 className="text-xl font-extrabold text-[#0F172A]">Radiology, Pathology &amp; 24x7 Pharmacy</h2>
          <p className="text-xs text-[#475569] leading-relaxed font-medium">
            In-house diagnostic center for rapid ultrasound, color Doppler, digital X-rays, histopathology biopsies, liver biochemistry, and a fully stocked 24x7 hospital pharmacy.
          </p>
          <ul className="text-xs text-[#334155] space-y-1.5 pt-2 font-medium">
            <li>• Color Doppler Ultrasound for Liver &amp; Vascular Evaluation</li>
            <li>• Rapid Histopathology &amp; Biopsy Staging</li>
            <li>• 24x7 Emergency In-House Pharmacy</li>
          </ul>
        </div>

      </div>

      {/* Ward Rooms Showcase Section */}
      <div className="bg-white border border-[#A9C3C9] p-8 rounded-3xl space-y-8 shadow-md">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full pastel-teal-badge text-xs font-bold uppercase tracking-wider mb-2">
              <Bed className="w-4 h-4 text-[#1D5E54]" />
              <span>In-Patient Accommodations</span>
            </div>
            <h2 className="text-2xl font-extrabold text-[#0F172A]">Patient Rooms &amp; Ward Options</h2>
            <p className="text-xs text-[#475569] mt-1 font-medium">Choose from Deluxe Executive Suites, Semi-Private Twin sharing, or General Ward beds.</p>
          </div>

          <div className="flex items-center gap-2">
            {wardRooms.map((room) => (
              <button
                key={room.id}
                onClick={() => setActiveWard(room)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeWard.id === room.id
                    ? 'bg-[#1D5E54] text-white shadow-sm'
                    : 'bg-[#EBF0F5] text-[#334155] hover:bg-[#DEE7F0]'
                }`}
              >
                {room.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Ward Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAFBFB] border border-[#A9C3C9] p-6 rounded-2xl">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#1D5E54] bg-[#E1F2EE] px-2.5 py-1 rounded border border-[#BDE3DB]">
                {activeWard.tag}
              </span>
              <span className="text-xs font-extrabold text-[#1D5E54]">{activeWard.fee}</span>
            </div>

            <h3 className="text-xl font-extrabold text-[#0F172A]">{activeWard.name}</h3>
            <p className="text-xs text-[#475569] leading-relaxed font-medium">{activeWard.desc}</p>

            <div className="space-y-2 pt-2 border-t border-slate-200">
              <span className="text-xs font-bold text-[#334155] block">Included Room Amenities:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeWard.amenities.map((amenity, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#2E7D72] shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white border border-[#A9C3C9] p-6 rounded-2xl text-center space-y-4 shadow-sm">
            <Bed className="w-12 h-12 text-[#2E7D72] mx-auto" />
            <h4 className="font-extrabold text-sm text-[#0F172A]">Ward Admission Guidance</h4>
            <p className="text-xs text-[#475569]">All room categories include 24x7 nursing, resident doctor visits, and daily clinical monitoring.</p>
            <Link to="/book-appointment" className="inline-block px-5 py-2.5 rounded-xl text-white pastel-emerald-gradient font-bold text-xs shadow-md">
              Book Ward Reservation
            </Link>
          </div>
        </div>

      </div>

      {/* CTA Box */}
      <div className="bg-white border border-[#A9C3C9] p-8 rounded-3xl text-center space-y-4 shadow-md">
        <h3 className="text-xl font-extrabold text-[#0F172A]">Schedule a Visit or OPD Consultation</h3>
        <p className="text-xs text-[#475569] font-medium">Experience world-class GI care in Vadodara, Gujarat.</p>
        <div className="flex justify-center gap-4 pt-2">
          <Link to="/book-appointment" className="px-6 py-3 rounded-xl text-white pastel-emerald-gradient font-bold text-xs shadow-md">
            Book Appointment
          </Link>
        </div>
      </div>

    </div>
  );
}
