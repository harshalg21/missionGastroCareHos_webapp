import React from 'react';
import { MessageSquare, PhoneCall } from 'lucide-react';

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5 items-end">
      {/* WhatsApp Quick Connect Button */}
      <a
        href="https://wa.me/919925329142?text=Hello%20Mission%20Gastrocare,%20I%20would%20like%20to%20inquire%20about%20an%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all group"
        aria-label="Contact Mission Gastrocare on WhatsApp"
      >
        <MessageSquare className="w-4 h-4 fill-current text-white" />
        <span className="hidden sm:inline">WhatsApp Booking</span>
      </a>

      {/* Direct Call Emergency Button */}
      <a
        href="tel:+919925329142"
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-lg shadow-rose-600/30 hover:scale-105 active:scale-95 transition-all animate-pulse"
        aria-label="Call 24x7 Emergency Helpline"
      >
        <PhoneCall className="w-4 h-4 text-white" />
        <span className="hidden sm:inline">24x7 ER Call</span>
      </a>
    </div>
  );
}
