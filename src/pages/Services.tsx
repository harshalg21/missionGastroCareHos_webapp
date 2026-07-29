import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '@/components/ServiceCard';
import { Activity, Stethoscope, Award, ShieldCheck, Microscope, PhoneCall, HeartPulse, Sparkles } from 'lucide-react';

const allServices = [
  {
    id: "gi-surgery",
    title: "GI Surgery & Laparoscopic Surgery",
    category: "Minimally Invasive",
    description: "Advanced laparoscopic surgeries for gallstones, complex ventral & inguinal hernia, appendicitis, intestinal obstruction, and reflux disorders with minimal pain.",
    procedures: ["Laparoscopic Cholecystectomy", "Ventral & Inguinal Hernia Repair", "Reflux & Nissen Fundoplication", "Laparoscopic Appendectomy"],
    icon: <Activity className="w-6 h-6 text-[#1D5E54]" />
  },
  {
    id: "hpb",
    title: "Hepato-Pancreato-Biliary (HPB) Surgery",
    category: "Super Specialty",
    description: "Surgical management of liver cirrhosis, portal hypertension, liver tumors, gallbladder malignancies, complex bile duct injuries, and pancreatic neoplasms.",
    procedures: ["Pancreaticoduodenectomy (Whipple Procedure)", "Major Liver Resection", "Bile Duct Stricture Repair", "Distal Pancreatectomy"],
    icon: <Stethoscope className="w-6 h-6 text-[#1D5E54]" />
  },
  {
    id: "bariatric",
    title: "Bariatric & Metabolic Surgery",
    category: "Weight Loss",
    description: "Surgical weight loss procedures for morbid obesity and metabolic health restoration, leading to remission of Type-2 Diabetes, sleep apnea, and fatty liver disease.",
    procedures: ["Laparoscopic Sleeve Gastrectomy", "Roux-en-Y Gastric Bypass", "Mini Gastric Bypass (MGB)", "Metabolic Surgery"],
    icon: <Award className="w-6 h-6 text-[#1D5E54]" />
  },
  {
    id: "gi-cancer",
    title: "Gastrointestinal Cancer Surgery",
    category: "Surgical Oncology",
    description: "Multidisciplinary GI tumor board approach for early and advanced cancers of the esophagus, stomach, colon, rectum, liver, gallbladder, and pancreas.",
    procedures: ["Radical Gastrectomy", "Laparoscopic Colectomy & Rectal Resection", "Esophagectomy", "Pelvic Exenteration"],
    icon: <ShieldCheck className="w-6 h-6 text-[#1D5E54]" />
  },
  {
    id: "endoscopy",
    title: "Medical Gastroenterology & Endoscopy",
    category: "Diagnostic & Therapeutic",
    description: "State-of-the-art diagnostic and therapeutic endoscopy suite for GI bleeding control, polyp removal, stenting, foreign body removal, and capsule endoscopy.",
    procedures: ["Diagnostic Upper GI Endoscopy", "High-Definition Colonoscopy", "Endoscopic Mucosal Resection (EMR)", "GI Bleed Banding & Injection"],
    icon: <Microscope className="w-6 h-6 text-[#1D5E54]" />
  },
  {
    id: "ercp",
    title: "Therapeutic ERCP & Pancreatic Care",
    category: "Endoscopic Procedure",
    description: "Endoscopic Retrograde Cholangiopancreatography for non-surgical extraction of bile duct stones, jaundice relief, biliary stenting, and pancreatic duct interventions.",
    procedures: ["Bile Duct Stone Extraction", "Biliary Metal & Plastic Stenting", "Pancreatic Sphincterotomy", "Stricture Dilatation"],
    icon: <Sparkles className="w-6 h-6 text-[#1D5E54]" />
  },
  {
    id: "general-gi",
    title: "General GI & Acute Care",
    category: "General Surgery",
    description: "Comprehensive surgical and medical management of acute appendicitis, peritonitis, intestinal perforation, ischemic bowel, and abdominal trauma.",
    procedures: ["Emergency Exploratory Laparotomy", "Perforation Repair", "Abdominal Trauma Surgery", "Acute Pancreatitis Management"],
    icon: <PhoneCall className="w-6 h-6 text-[#1D5E54]" />
  },
  {
    id: "tumor-board",
    title: "GI Oncology & Tumor Board",
    category: "Multidisciplinary",
    description: "Joint clinical evaluation panel comprising GI surgeons, medical oncologists, radiation oncologists, and pathologists for personalized cancer treatment plans.",
    procedures: ["Pre-Operative Cancer Staging", "Neo-Adjuvant Protocol Planning", "Molecular Pathology Staging", "Post-Op Surveillance"],
    icon: <ShieldCheck className="w-6 h-6 text-[#1D5E54]" />
  },
  {
    id: "icu",
    title: "Intensive Care Unit (ICU)",
    category: "Critical Care",
    description: "High-dependency intensive care unit specialized for acute liver failure, severe necrotizing pancreatitis, septic shock, and post-operative monitoring.",
    procedures: ["Invasive Hemodynamic Monitoring", "Mechanical Ventilation", "Continuous Renal Replacement (CRRT)", "Post-Op Recovery Care"],
    icon: <HeartPulse className="w-6 h-6 text-[#1D5E54]" />
  },
  {
    id: "radiology",
    title: "Radiology & Imaging Services",
    category: "Diagnostics",
    description: "In-house imaging facility providing high-resolution sonography, color Doppler, digital X-ray, and CT scan diagnostics for rapid GI evaluation.",
    procedures: ["Abdominal Ultrasound & Color Doppler", "Digital Contrast X-Rays", "CT Abdomen Staging", "Image-Guided Drainage"],
    icon: <Microscope className="w-6 h-6 text-[#1D5E54]" />
  },
  {
    id: "pain",
    title: "Pain Management Services",
    category: "Supportive Care",
    description: "Specialized pain relief protocols for chronic abdominal pain, pancreatic cancer pain, post-surgical analgesia, and celiac plexus nerve blocks.",
    procedures: ["Celiac Plexus Block", "Patient-Controlled Analgesia (PCA)", "Post-Operative Epidural Analgesia", "Chronic GI Pain Relief"],
    icon: <Stethoscope className="w-6 h-6 text-[#1D5E54]" />
  },
  {
    id: "pathology",
    title: "Pathology & 24x7 Pharmacy",
    category: "Diagnostics & Medicines",
    description: "In-house laboratory providing histopathology biopsy evaluation, liver function tests, tumor markers, microbiology, and 24x7 in-house pharmacy.",
    procedures: ["Liver & GI Biopsy Histopathology", "Tumor Marker Panels (CEA, CA 19-9, AFP)", "Complete Liver Profile", "24x7 Medicine Supply"],
    icon: <Activity className="w-6 h-6 text-[#1D5E54]" />
  }
];

export default function Services() {
  return (
    <div className="space-y-16 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent text-[#1E293B]">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[#1D5E54] font-extrabold text-xs uppercase tracking-wider bg-[#E1F2EE] px-3 py-1 rounded-full border border-[#BDE3DB]">
          Clinical Departments &amp; Procedures
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A]">
          All 12 Super-Specialty Services
        </h1>
        <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-medium">
          Mission Gastrocare offers complete digestive healthcare from non-invasive diagnostic endoscopy to complex hepato-pancreato-biliary and laparoscopic bariatric surgeries.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allServices.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>

      {/* Booking CTA Banner */}
      <div className="bg-white border border-[#A9C3C9] p-8 sm:p-12 rounded-3xl text-center space-y-4 shadow-md">
        <h2 className="text-2xl font-extrabold text-[#0F172A]">Need Consultation for a Specific GI Condition?</h2>
        <p className="text-xs text-[#475569] max-w-xl mx-auto font-medium">
          Our specialists Dr. Jitendra Mistry, Dr. Saurabh Dey, Dr. Deepali Mistry, and Dr. Himani Patel are available for OPD and emergency consultations in Vadodara.
        </p>
        <div className="flex justify-center gap-4 pt-2">
          <Link to="/book-appointment" className="px-6 py-3.5 rounded-xl text-white pastel-emerald-gradient font-bold text-xs shadow-md">
            Schedule Appointment
          </Link>
          <Link to="/ai-triage" className="px-6 py-3.5 rounded-xl bg-[#EBF0F5] border border-[#CFDAE6] text-[#2C4A6F] font-bold text-xs hover:bg-[#DEE7F0]">
            Launch AI Symptom Triage
          </Link>
        </div>
      </div>

    </div>
  );
}
