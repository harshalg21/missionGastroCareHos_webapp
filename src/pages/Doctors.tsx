import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DoctorCard, { Doctor } from '@/components/DoctorCard';
import { Stethoscope, Calendar, ShieldCheck, Users } from 'lucide-react';

const doctors: Doctor[] = [
  {
    id: "doc-1",
    name: "Dr. Jitendra Mistry",
    role: "Director & Senior Gastroenterologist",
    qualifications: "MD, DM (Gastroenterology), Fellow Endoscopy",
    experience: "18+ Years",
    specialties: ["Therapeutic ERCP", "Advanced Endoscopy", "Inflammatory Bowel Disease (IBD)", "Liver Care"],
    opdDays: "Mon - Sat (10 AM - 2 PM)",
    bio: "Pioneer in therapeutic ERCP and diagnostic gastroenterology in Vadodara with over 15,000 successful endoscopic procedures.",
    photoUrl: "/doctors/Dr_Jitendra_Mistry.jpg",
    website: "http://drjitendramistry.com/index.html"
  },
  {
    id: "doc-2",
    name: "Dr. Saurabh Dey",
    role: "Senior Consultant GI & Laparoscopic Surgeon",
    qualifications: "MS, DNB (GI Surgery), FIAGES",
    experience: "15+ Years",
    specialties: ["Laparoscopic GI Surgery", "Bariatric Surgery", "Colorectal Surgery", "Hernia"],
    opdDays: "Mon - Sat (11 AM - 5 PM)",
    bio: "Expert laparoscopic and bariatric surgeon specializing in minimally invasive gastrointestinal and metabolic surgeries.",
    photoUrl: "/doctors/dr-saurabh.png"
  },
  {
    id: "doc-3",
    name: "Dr. Deepali Mistry",
    role: "Consultant Gastroenterologist",
    qualifications: "MD, DNB (Gastroenterology)",
    experience: "12+ Years",
    specialties: ["Functional Bowel Disorders", "GERD & Acidity", "Female GI Health", "Colonoscopy"],
    opdDays: "Mon - Fri (10 AM - 4 PM)",
    bio: "Specialist in functional digestive disorders, GERD management, ulcerative colitis, and preventive GI health.",
    photoUrl: "/doctors/dr-deepali.jpg"
  },
  {
    id: "doc-4",
    name: "Dr. Himani Patel",
    role: "Consultant HPB & Liver Specialist",
    qualifications: "MS, MCh (HPB Surgery)",
    experience: "10+ Years",
    specialties: ["Liver Resection", "Gallbladder Cancer", "Pancreatic Disorders", "Bile Duct Repair"],
    opdDays: "Tue, Thu, Sat (2 PM - 6 PM)",
    bio: "Dedicated Hepato-Pancreato-Biliary surgeon focusing on complex liver surgeries and pancreatic neoplasm management.",
    photoUrl: "/doctors/dr-himani.jpg"
  },
  {
    id: "doc-5",
    name: "Dr. Parul Mistry",
    role: "Consultant Anesthesiologist & Critical Care",
    qualifications: "MD (Anesthesiology), IDCCM",
    experience: "14+ Years",
    specialties: ["GI Intensive Care", "Sedation in Endoscopy", "Post-Op Recovery", "Pain Management"],
    opdDays: "Mon - Sat (24x7 ICU)",
    bio: "Heading the GI ICU and Anaesthesia department, ensuring utmost patient safety during complex surgeries and endoscopic procedures.",
    photoUrl: "/doctors/dr-parul-mistry.jpg"
  }
];

export default function Doctors() {
  const [selectedDept, setSelectedDept] = useState("All");

  const deptFilters = [
    "All",
    "Gastroenterology & ERCP",
    "Laparoscopic & GI Surgery",
    "HPB & Liver Surgery",
    "Critical Care & ICU"
  ];

  const filteredDoctors = selectedDept === "All"
    ? doctors
    : doctors.filter(doc => {
        if (selectedDept === "Gastroenterology & ERCP") return doc.role.includes("Gastroenterologist");
        if (selectedDept === "Laparoscopic & GI Surgery") return doc.role.includes("Laparoscopic");
        if (selectedDept === "HPB & Liver Surgery") return doc.role.includes("HPB");
        if (selectedDept === "Critical Care & ICU") return doc.role.includes("Critical Care");
        return true;
      });

  return (
    <div className="space-y-16 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent text-[#1E293B]">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[#1D5E54] font-extrabold text-xs uppercase tracking-wider bg-[#E1F2EE] px-3 py-1 rounded-full border border-[#BDE3DB]">
          Multidisciplinary Medical Faculty
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A]">
          Meet Our Specialist Doctors &amp; Tumor Board
        </h1>
        <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-medium">
          Our senior consultants bring decades of clinical excellence in gastroenterology, minimally invasive laparoscopic surgery, hepato-pancreato-biliary care, and GI intensive care.
        </p>
      </div>

      {/* Department Filter Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-[#A9C3C9] pb-6">
        <span className="text-xs font-bold text-[#334155] mr-2 flex items-center gap-1.5">
          <Users className="w-4 h-4 text-[#2E7D72]" />
          Filter Faculty:
        </span>
        {deptFilters.map((dept, i) => (
          <button
            key={i}
            onClick={() => setSelectedDept(dept)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedDept === dept
                ? 'bg-[#1D5E54] text-white shadow-sm'
                : 'bg-white border border-[#A9C3C9] text-[#334155] hover:bg-[#F0F7FA]'
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Doctor Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDoctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>

      {/* Multidisciplinary GI Tumor Board Showcase */}
      <div className="bg-white border border-[#A9C3C9] p-8 sm:p-12 rounded-3xl space-y-6 shadow-md">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-2xl pastel-emerald-gradient flex items-center justify-center text-white shrink-0 shadow-md">
            <ShieldCheck className="w-8 h-8 stroke-[2.5]" />
          </div>

          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#1D5E54] bg-[#E1F2EE] px-2.5 py-0.5 rounded border border-[#BDE3DB]">
              Multidisciplinary Protocol
            </span>
            <h2 className="text-2xl font-extrabold text-[#0F172A]">Joint GI Tumor Board &amp; Complex Care Panel</h2>
            <p className="text-xs text-[#475569] leading-relaxed max-w-3xl font-medium">
              Complex GI cases, liver tumors, pancreatic lesions, and gastrointestinal cancers are routinely evaluated by our joint panel comprising GI Surgeons, Medical Gastroenterologists, Radiologists, and Critical Care Specialists to determine the optimal therapeutic path.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
