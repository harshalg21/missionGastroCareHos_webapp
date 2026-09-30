import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, AlertTriangle, Search, Phone, FileX } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col items-center justify-center">
      
      {/* Executive 404 Dark Error Card */}
      <div className="w-full bg-[#0A1F1C] text-white rounded-3xl p-8 sm:p-12 border border-[#1D5E54]/50 shadow-2xl relative overflow-hidden text-center space-y-8">
        
        {/* Giant Glowing 404 Background Watermark */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-10 text-[180px] sm:text-[240px] font-black tracking-tighter text-emerald-300 font-mono">
          404
        </div>

        {/* Warning Badge */}
        <div className="relative z-10 flex justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-black uppercase tracking-widest backdrop-blur-md shadow-sm">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span>HTTP 404 • Page Not Found</span>
          </span>
        </div>

        {/* Hero Visual Icon */}
        <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-3xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-inner">
          <FileX className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-400" />
        </div>

        {/* Error Heading & Description */}
        <div className="relative z-10 max-w-xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            404 - Page Not Found
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
            The page, medical guide, or resource you are trying to access does not exist, has been removed, or has been relocated.
          </p>
        </div>

        {/* Single Primary Action Button (OPD Booking Removed) */}
        <div className="relative z-10 pt-2 flex justify-center">
          <Link
            to="/"
            className="bg-emerald-500 hover:bg-emerald-400 text-[#0A1F1C] font-black text-xs sm:text-sm px-8 py-3.5 rounded-2xl transition-all shadow-xl hover:scale-105 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home Page</span>
          </Link>
        </div>

        {/* Subtle Quick Links Grid */}
        <div className="relative z-10 pt-6 border-t border-emerald-900/60 text-left space-y-3">
          <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block text-center sm:text-left">
            Need help finding something?
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <Link to="/about" className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-center font-bold transition-all">
              About Us
            </Link>
            <Link to="/services" className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-center font-bold transition-all">
              Specialties
            </Link>
            <Link to="/doctors" className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-center font-bold transition-all">
              Doctors Team
            </Link>
            <Link to="/media" className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-center font-bold transition-all">
              Media &amp; News
            </Link>
          </div>
        </div>

        {/* Emergency Assistance Footer Bar */}
        <div className="relative z-10 pt-4 border-t border-emerald-900/40 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <span className="flex items-center gap-1.5 font-medium">
            <Phone className="w-3.5 h-3.5 text-rose-400" />
            24x7 GI Emergency: <strong className="text-white">+91 99253 29142</strong>
          </span>
          <Link to="/contact" className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors">
            Contact Hospital &rarr;
          </Link>
        </div>

      </div>

    </div>
  );
}
