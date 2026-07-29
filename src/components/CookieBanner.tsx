import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cookie, X } from 'lucide-react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('gastrocare_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('gastrocare_cookie_consent', 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-[#1E293B] border border-[#334155] rounded-2xl p-4 shadow-2xl text-slate-100 flex items-start gap-3 relative">
        <div className="w-10 h-10 rounded-xl bg-[#164E43] border border-[#2E7D72] flex items-center justify-center text-[#5EEAD4] shrink-0">
          <Cookie className="w-5 h-5" />
        </div>

        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-1.5 font-bold text-white">
            <span>Patient Privacy &amp; Cookies</span>
            <ShieldCheck className="w-4 h-4 text-[#5EEAD4]" />
          </div>
          <p className="text-[#94A3B8] leading-relaxed font-medium">
            Mission Gastrocare uses cookies to optimize appointment booking and triage experience. We respect patient data security compliant with DPDP rules.
          </p>

          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={handleAccept}
              className="px-4 py-1.5 rounded-lg pastel-emerald-gradient text-white font-bold text-xs hover:opacity-95 transition-all shadow-sm"
            >
              Accept All
            </button>
            <button
              onClick={() => setVisible(false)}
              className="px-3 py-1.5 rounded-lg bg-[#334155] text-slate-300 font-bold text-xs hover:bg-[#475569] transition-colors"
            >
              Decline
            </button>
          </div>
        </div>

        <button
          onClick={() => setVisible(false)}
          className="absolute top-3 right-3 text-slate-400 hover:text-white"
          aria-label="Dismiss Cookie Banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
