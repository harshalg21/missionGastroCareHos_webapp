import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FacilityCard from '@/components/FacilityCard';
import { 
  Building2, 
  Microscope, 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  Bed, 
  Users, 
  Stethoscope,
  ArrowRight
} from 'lucide-react';

const facilitiesList = [
  {
    id: "modular-ot",
    title: "Modular Operation Theatres",
    category: "Sterile Operating Theater",
    description: "Equipped with HEPA laminar airflow filtration to maintain zero-infection sterile environments. Advanced Karl Storz & Stryker 4K laparoscopic towers for minimal-access GI, bariatric, and HPB cancer procedures.",
    features: [
      "HEPA Laminar Airflow & Anti-Bacterial Walls",
      "High-Definition 4K Laparoscopic Towers",
      "Dedicated Anaesthesia Workstations & Invasive Monitoring"
    ],
    icon: <Building2 className="w-6 h-6 stroke-[2.5]" />,
    imageUrl: "/facilities/modular-ot.jpg"
  },
  {
    id: "endoscopy-suite",
    title: "Advanced Endoscopy & ERCP Suite",
    category: "Diagnostic & ERCP",
    description: "Dedicated video endoscopy room featuring Olympus Narrow Band Imaging (NBI) endoscopy systems for early cancer detection, therapeutic ERCP stone extraction, and esophageal motility testing.",
    features: [
      "Olympus High-Def Upper GI Endoscopes & Colonoscopes",
      "C-Arm Fluoroscopy for Precision ERCP",
      "Automated Endoscope Reprocessing & Disinfection"
    ],
    icon: <Microscope className="w-6 h-6 stroke-[2.5]" />,
    imageUrl: "/facilities/endoscopy-suite.png"
  },
  {
    id: "icu",
    title: "GI Intensive Care Unit (ICU & HDU)",
    category: "24x7 Critical Care",
    description: "Multi-bed critical care unit staffed 24x7 by intensivists and trained ICU nurses. Specialized for severe acute pancreatitis, GI bleeding, acute liver failure, and post-major HPB surgery recovery.",
    features: [
      "Mechanical Ventilators & Infusion Pumps",
      "Central Hemodynamic & ABG Monitoring",
      "1:1 Nurse-to-Patient Ratio for Critical GI Cases"
    ],
    icon: <Activity className="w-6 h-6 stroke-[2.5]" />,
    imageUrl: "/facilities/icu.jpg"
  },
  {
    id: "radiology-lab",
    title: "Radiology, CT Scan & 24x7 Pharmacy",
    category: "Advanced Diagnostics",
    description: "In-house diagnostic center for rapid CT scanning, color Doppler ultrasound, digital X-rays, histopathology biopsies, liver biochemistry, and a fully stocked 24x7 hospital pharmacy.",
    features: [
      "Multi-Slice CT Scan & Color Doppler Ultrasound",
      "Rapid Histopathology & Biopsy Staging",
      "24x7 Emergency In-House Pharmacy"
    ],
    icon: <ShieldCheck className="w-6 h-6 stroke-[2.5]" />,
    imageUrl: "/facilities/ct-scan.jpg"
  },
  {
    id: "tumor-board",
    title: "Joint GI Tumor Board Facility",
    category: "Multidisciplinary Panel",
    description: "Dedicated conference and tumor board facility where GI surgeons, medical oncologists, radiologists, and pathologists meet to formulate personalized cancer treatment plans.",
    features: [
      "Joint Surgical Oncology Conferences",
      "Multidisciplinary Cancer Staging Protocols",
      "Comprehensive Care under One Roof"
    ],
    icon: <Users className="w-6 h-6 stroke-[2.5]" />,
    imageUrl: "/facilities/tumor-board.jpg"
  },
  {
    id: "opd-clinic",
    title: "Out-Patient OPD Clinics & Waiting Suite",
    category: "Consultation Suite",
    description: "Spacious, comfortable out-patient consultation rooms equipped with digital health records, private examination couches, and comfortable waiting lounges for patients and families.",
    features: [
      "Private Specialist Consultation Suites",
      "Digital Electronic Medical Record Integration",
      "Spacious Patient & Family Waiting Lounges"
    ],
    icon: <Stethoscope className="w-6 h-6 stroke-[2.5]" />,
    imageUrl: "/facilities/opd-clinic.jpg"
  }
];

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
          Hospital Facilities &amp; In-Patient Infrastructure
        </h1>
        <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-medium">
          Designed specifically for complex gastrointestinal surgeries, endoscopic interventions, and acute critical care with strict NABH safety protocols.
        </p>
      </div>

      {/* Facilities Grid with 2-State Interactive Background Image Hover Transformation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilitiesList.map((facility) => (
          <FacilityCard key={facility.id} {...facility} />
        ))}
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
            Book Appointment Now
          </Link>
          <Link to="/contact" className="px-6 py-3 rounded-xl bg-[#EBF0F5] border border-[#CFDAE6] text-[#2C4A6F] font-bold text-xs hover:bg-[#DEE7F0]">
            Get Hospital Location &amp; Directions
          </Link>
        </div>
      </div>

    </div>
  );
}
