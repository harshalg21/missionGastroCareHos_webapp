import React from 'react';
import { Phone, Clock, MapPin, ShieldAlert, Award } from 'lucide-react';
import QRCodeModal from './QRCodeModal';

export default function EmergencyBanner() {
  return (
    <div className="bg-[#1D5E54] text-slate-100 text-xs py-2 px-4 border-b border-[#164E43] shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
          <span className="flex items-center gap-1.5 font-semibold text-white">
            <ShieldAlert className="w-4 h-4 text-[#FDE047] animate-pulse" />
            24x7 Emergency GI Hotline:
            <a href="tel:+919925329142" className="hover:underline text-[#FDE047] font-extrabold ml-1">
              (+91) 99253 29142
            </a>
          </span>
          <span className="hidden sm:inline text-[#14473F]">|</span>
          <span className="flex items-center gap-1 text-[#E1F2EE]">
            <Phone className="w-3 h-3 text-[#BDE3DB]" />
            <a href="tel:02652393766" className="hover:underline">Landline: 0265-2393766</a>
          </span>
          <span className="hidden sm:inline text-[#14473F]">|</span>
          <span className="flex items-center gap-1 text-[#E1F2EE]">
            <MapPin className="w-3 h-3 text-[#FDE047]" />
            <span>Alkapuri, Vadodara, Gujarat</span>
          </span>
        </div>

        <div className="flex items-center gap-3 text-[11px] font-medium text-[#E1F2EE]">
          <span className="flex items-center gap-1 bg-[#164E43] px-2 py-0.5 rounded text-[#BDE3DB] border border-[#2E7D72]">
            <Award className="w-3 h-3 text-[#FDE047]" />
            NABH Accredited Hospital
          </span>
          <span className="hidden lg:flex items-center gap-1">
            <Clock className="w-3 h-3 text-[#BDE3DB]" />
            OPD: 10 AM - 8 PM
          </span>
          <QRCodeModal variant="banner" />
        </div>
      </div>
    </div>
  );
}
