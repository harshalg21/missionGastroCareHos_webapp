import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '@/components/HeroSlider';
import ServiceCard from '@/components/ServiceCard';
import DoctorCard, { Doctor } from '@/components/DoctorCard';
import SymptomChecker from '@/components/SymptomChecker';
import ReviewSystem from '@/components/ReviewSystem';
import InsurancePartners from '@/components/InsurancePartners';
import GoogleMapLocation from '@/components/GoogleMapLocation';
import PatientFAQ from '@/components/PatientFAQ';
import { 
  Stethoscope, 
  Activity, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  PhoneCall, 
  Building2,
  Microscope
} from 'lucide-react';

const homeServices = [
  {
    id: "gi-surgery",
    title: "GI Surgery & Laparoscopic",
    category: "Minimally Invasive",
    description: "Advanced laparoscopic surgeries for complex gastrointestinal disorders, hernia, gallbladder, and intestinal resection with minimal scar and fast recovery.",
    procedures: ["Laparoscopic Cholecystectomy", "Complex Hernia Repair", "Colorectal Surgery"],
    icon: <Activity className="w-6 h-6 text-[#1D5E54]" />
  },
  {
    id: "hpb",
    title: "Hepato-Pancreato-Biliary (HPB)",
    category: "Super Specialty",
    description: "Comprehensive surgical management of complex liver cirrhosis, pancreatic tumors, gallbladder cancer, and liver resection procedures.",
    procedures: ["Pancreaticoduodenectomy (Whipple)", "Liver Resection", "Bile Duct Reconstruction"],
    icon: <Stethoscope className="w-6 h-6 text-[#1D5E54]" />
  },
  {
    id: "bariatric",
    title: "Bariatric & Metabolic Surgery",
    category: "Weight Loss",
    description: "Laparoscopic sleeve gastrectomy & gastric bypass for morbid obesity, Type-2 Diabetes remission, and metabolic health restoration.",
    procedures: ["Sleeve Gastrectomy", "Roux-en-Y Gastric Bypass", "Metabolic Surgery"],
    icon: <Award className="w-6 h-6 text-[#1D5E54]" />
  },
  {
    id: "gi-cancer",
    title: "GI Cancer & Tumor Board",
    category: "Surgical Oncology",
    description: "Multidisciplinary tumor board protocol for gastric, esophageal, colon, pancreatic, and liver cancers with advanced staging and surgical care.",
    procedures: ["Oncology Staging", "Minimal Access GI Cancer Resection", "Multidisciplinary Care"],
    icon: <ShieldCheck className="w-6 h-6 text-[#1D5E54]" />
  },
  {
    id: "endoscopy",
    title: "Medical Gastroenterology & Endoscopy",
    category: "Diagnostic & Therapeutic",
    description: "High-definition diagnostic & therapeutic Endoscopy, Colonoscopy, Capsule Endoscopy, and ERCP for bile duct stones.",
    procedures: ["Therapeutic ERCP", "Polypectomy & ESD", "High-Def Colonoscopy"],
    icon: <Microscope className="w-6 h-6 text-[#1D5E54]" />
  },
  {
    id: "general-gi",
    title: "General GI & Emergency Care",
    category: "24x7 Emergency",
    description: "24x7 emergency response for acute intestinal obstruction, severe GI bleeding, perforation peritonitis, and acute abdomen.",
    procedures: ["Emergency Laparotomy", "GI Bleed Management", "Acute Abdomen Triage"],
    icon: <PhoneCall className="w-6 h-6 text-[#1D5E54]" />
  }
];

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
    photoUrl: "/doctors/Dr_Jitendra_Mistry.jpg"
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
  }
];

export default function Home() {
  return (
    <div className="space-y-16 pb-16 bg-transparent text-[#1E293B]">
      
      {/* Hero Carousel Section */}
      <HeroSlider />

      {/* 6 Core Homepage Specialties Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 border-b border-[#A9C3C9] pb-6">
          <div>
            <span className="text-[#1D5E54] font-extrabold text-xs uppercase tracking-wider block mb-1">
              Super-Specialty Excellence
            </span>
            <h2 className="text-3xl font-extrabold text-[#0F172A]">Comprehensive Gastrointestinal Services</h2>
            <p className="text-xs text-[#475569] mt-1 max-w-2xl font-medium">
              From advanced therapeutic ERCP to laparoscopic cancer resections, Mission Gastrocare provides state-of-the-art digestive healthcare in Vadodara.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#A9C3C9] text-[#1D5E54] text-xs font-bold hover:bg-[#F0F7FA] transition-colors shadow-sm"
          >
            <span>View All Clinical Departments</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeServices.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </section>

      {/* Interactive Symptom Checker Router */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SymptomChecker />
      </section>

      {/* Specialist Doctor Roster Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 border-b border-[#A9C3C9] pb-6">
          <div>
            <span className="text-[#1D5E54] font-extrabold text-xs uppercase tracking-wider block mb-1">
              Renowned Medical Faculty
            </span>
            <h2 className="text-3xl font-extrabold text-[#0F172A]">Meet Our Specialist Doctors</h2>
            <p className="text-xs text-[#475569] mt-1 max-w-2xl font-medium">
              Leading gastroenterologists, HPB surgeons, and critical care specialists committed to clinical precision and patient safety.
            </p>
          </div>
          <Link
            to="/doctors"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#A9C3C9] text-[#1D5E54] text-xs font-bold hover:bg-[#F0F7FA] transition-colors shadow-sm"
          >
            <span>View Doctor Profiles &amp; Schedules</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </section>

      {/* Hospital Facilities & Infrastructure Banner */}
      <section className="bg-gradient-to-r from-[#BFD4D9] via-[#CADBE0] to-[#B4C6CC] border-y border-[#A9C3C9] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-[#1D5E54] font-extrabold text-xs uppercase tracking-wider">
              State-of-the-Art Infrastructure
            </span>
            <h2 className="text-3xl font-extrabold text-[#0F172A]">Built for High-Complexity GI Procedures</h2>
            <p className="text-xs text-[#475569] font-medium">
              Equipped with modular laminar airflow operation theatres, high-definition Olympus endoscopy towers, and dedicated GI intensive care units.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-[#A9C3C9] p-6 rounded-3xl space-y-3 shadow-sm">
              <Building2 className="w-8 h-8 text-[#2E7D72]" />
              <h3 className="text-base font-bold text-[#0F172A]">Modular OTs</h3>
              <p className="text-xs text-[#475569]">Laminar airflow Operation Theatres equipped for advanced laparoscopic &amp; open HPB procedures.</p>
            </div>

            <div className="bg-white border border-[#A9C3C9] p-6 rounded-3xl space-y-3 shadow-sm">
              <Microscope className="w-8 h-8 text-[#2E7D72]" />
              <h3 className="text-base font-bold text-[#0F172A]">Endoscopy Suite</h3>
              <p className="text-xs text-[#475569]">High-Definition Olympus endoscopy &amp; ERCP suites with video recording and sterilization.</p>
            </div>

            <div className="bg-white border border-[#A9C3C9] p-6 rounded-3xl space-y-3 shadow-sm">
              <Activity className="w-8 h-8 text-[#2E7D72]" />
              <h3 className="text-base font-bold text-[#0F172A]">GI ICU &amp; HDU</h3>
              <p className="text-xs text-[#475569]">Dedicated high-dependency unit for post-operative monitoring and acute pancreatitis care.</p>
            </div>

            <div className="bg-white border border-[#A9C3C9] p-6 rounded-3xl space-y-3 shadow-sm">
              <ShieldCheck className="w-8 h-8 text-[#2E7D72]" />
              <h3 className="text-base font-bold text-[#0F172A]">Diagnostic &amp; Pharmacy</h3>
              <p className="text-xs text-[#475569]">In-house pathology lab, digital radiology, ultrasound, and 24x7 emergency pharmacy.</p>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link
              to="/facilities"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white pastel-emerald-gradient font-bold text-xs hover:opacity-95 shadow-md"
            >
              <span>Explore All Hospital Facilities &amp; Ward Rooms</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Patient Reviews & Ratings System */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ReviewSystem />
      </section>

      {/* Cashless Mediclaim & Insurance TPA Partners Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InsurancePartners />
      </section>

      {/* Google Maps Location & Directions Hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GoogleMapLocation />
      </section>

      {/* Patient FAQ Accordion */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PatientFAQ />
      </section>

    </div>
  );
}
