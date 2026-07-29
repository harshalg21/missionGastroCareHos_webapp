import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Award, RefreshCw, CheckCircle2, User } from 'lucide-react';

export interface Doctor {
  id: string;
  name: string;
  role: string;
  qualifications: string;
  experience: string;
  specialties: string[];
  opdDays: string;
  bio: string;
  photoUrl: string;
}

export default function DoctorCard({ doctor }: { doctor: Doctor }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Custom object positioning: Dr. Jitendra's face is centered at 60% vertical alignment
  const getImagePositionClass = (photoUrl: string) => {
    if (photoUrl.includes('Jitendra')) return 'object-[50%_20%]';
    return 'object-top';
  };

  return (
    <div
      className="h-[490px] perspective-1000 group cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* 3D Inner Card Container */}
      <div
        className={`relative w-full h-full duration-700 transform-style-3d transition-transform group-hover:rotate-y-180 ${isFlipped ? 'rotate-y-180' : ''
          }`}
      >

        {/* FRONT SIDE OF CARD */}
        <div className="absolute inset-0 backface-hidden bg-white border border-[#A9C3C9] rounded-3xl p-6 shadow-sm hover:border-[#2E7D72] flex flex-col justify-between overflow-hidden">

          <div className="space-y-3">
            {/* Doctor Photo Header - Perfect Face Alignment */}
            <div className="relative w-full h-44 rounded-2xl overflow-hidden border border-[#A9C3C9] bg-gradient-to-b from-[#E1F2EE] to-[#FAFBFB] shadow-inner group/img">
              {!imgError ? (
                <img
                  src={doctor.photoUrl}
                  alt={doctor.name}
                  onError={() => setImgError(true)}
                  className={`w-full h-full object-cover ${getImagePositionClass(doctor.photoUrl)} hover:scale-105 transition-transform duration-500`}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#E1F2EE] text-[#1D5E54] font-extrabold text-2xl">
                  <User className="w-12 h-12 text-[#2E7D72]" />
                </div>
              )}

              {/* Experience Badge */}
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-[#BDE3DB] text-[#1D5E54] text-[10px] font-extrabold uppercase tracking-wider shadow-sm flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-[#1D5E54]" />
                <span>{doctor.experience} Exp</span>
              </div>
            </div>

            {/* Doctor Info */}
            <div>
              <h3 className="text-lg font-extrabold text-[#0F172A] leading-tight">
                {doctor.name}
              </h3>
              <p className="text-xs font-semibold text-[#1D5E54] mt-0.5">{doctor.role}</p>
              <p className="text-[11px] text-[#64748B] font-medium">{doctor.qualifications}</p>
            </div>

            {/* Specialties Chips */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-extrabold text-[#334155] uppercase tracking-wider block">Specialties:</span>
              <div className="flex flex-wrap gap-1">
                {doctor.specialties.slice(0, 3).map((spec, i) => (
                  <span key={i} className="text-[10px] font-semibold text-[#334155] bg-[#EBF0F5] border border-[#CFDAE6] px-2 py-0.5 rounded-lg">
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* OPD Days Bar */}
            <div className="flex items-center gap-1.5 text-xs text-[#1D5E54] bg-[#E1F2EE] border border-[#BDE3DB] px-3 py-2 rounded-xl font-bold">
              <Calendar className="w-3.5 h-3.5 text-[#2E7D72] shrink-0" />
              <span className="line-clamp-1">{doctor.opdDays}</span>
            </div>

          </div>

          {/* Flip Prompt Footer */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1D5E54] group-hover:text-[#164E43]">
            <span className="flex items-center gap-1.5 text-[11px]">
              <RefreshCw className="w-3.5 h-3.5 text-[#2E7D72] animate-spin-slow" />
              Hover Card to Flip &amp; Read Bio
            </span>
            <span>→</span>
          </div>

        </div>

        {/* BACK SIDE OF CARD (Flipped 180deg) */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-[#164E43] via-[#1D5E54] to-[#2E7D72] text-white border border-[#1D5E54] rounded-3xl p-6 shadow-xl flex flex-col justify-between overflow-hidden">

          <div className="space-y-4">

            {/* Header on Back */}
            <div className="flex items-center gap-3 border-b border-white/20 pb-3">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md p-0.5 border border-white/30 shrink-0 overflow-hidden">
                {!imgError ? (
                  <img
                    src={doctor.photoUrl}
                    alt={doctor.name}
                    className={`w-full h-full object-cover ${getImagePositionClass(doctor.photoUrl)} rounded-lg`}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-bold text-xs text-white">
                    {doctor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
              </div>
              <div>
                <h4 className="text-base font-extrabold text-white leading-snug">{doctor.name}</h4>
                <p className="text-[11px] text-emerald-200 font-semibold">{doctor.qualifications}</p>
              </div>
            </div>

            {/* About / Bio Section */}
            <div className="space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-200 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20">
                About Specialist
              </span>
              <p className="text-xs text-emerald-50 leading-relaxed font-medium">
                {doctor.bio}
              </p>
            </div>

            {/* Specialties & Clinical Focus */}
            <div className="space-y-1.5 pt-2 border-t border-white/10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-200 block">Clinical Expertise:</span>
              <div className="space-y-1">
                {doctor.specialties.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-white font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Action CTA on Back */}
          <div className="pt-4 border-t border-white/20">
            <Link
              to={`/book-appointment?doctor=${encodeURIComponent(doctor.name)}`}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-xs bg-white text-[#164E43] hover:bg-emerald-50 transition-colors shadow-md active:scale-95"
            >
              <Calendar className="w-4 h-4 text-[#164E43]" />
              <span>Book OPD Consultation</span>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
