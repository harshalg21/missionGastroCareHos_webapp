import React from 'react';
import { MapPin, Navigation, Phone, Clock, Mail, ShieldAlert } from 'lucide-react';

export default function GoogleMapLocation() {
  const mapSearchUrl = "https://www.google.com/maps/search/?api=1&query=Doctor+house+19+Windward+Business+Park+Jetalpur+Road+Anandnagar+Haripura+Vadodara+Gujarat+390020";

  return (
    <section className="bg-white border border-[#A9C3C9] rounded-3xl p-6 sm:p-8 shadow-md space-y-8 text-[#1E293B]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full pastel-teal-badge text-xs font-bold uppercase tracking-wider mb-2">
            <MapPin className="w-4 h-4 text-[#1D5E54]" />
            <span>Hospital Location &amp; Directions</span>
          </div>
          <h2 className="text-2xl font-extrabold text-[#0F172A]">Visit Mission Gastrocare Vadodara</h2>
          <p className="text-xs text-[#475569] mt-1 font-medium">Located in central Vadodara on Jetalpur Road with dedicated emergency ambulance bay &amp; parking.</p>
        </div>

        <a
          href={mapSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 rounded-xl text-white pastel-emerald-gradient font-bold text-xs hover:opacity-95 transition-all shadow-md shrink-0"
        >
          <Navigation className="w-4 h-4" />
          <span>Get Directions on Google Maps</span>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Location Details & Contact Cards */}
        <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
          
          <div className="bg-[#FAFBFB] border border-[#A9C3C9] p-5 rounded-2xl space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#2E7D72] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-extrabold text-sm text-[#0F172A]">Hospital Address</h3>
                <p className="text-xs text-[#475569] mt-1 leading-relaxed font-medium">
                  &quot;Doctor House&quot;, 19, Windward Business Park, Jetalpur Road, Anandnagar, Haripura, Vadodara – 390020, Gujarat, India.
                </p>
                <p className="text-[11px] text-[#1D5E54] font-bold mt-1">Landmark: Opposite Windward Park, Jetalpur Road</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-[#FAFBFB] border border-[#A9C3C9] p-4 rounded-2xl space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0F172A]">
                <Clock className="w-4 h-4 text-[#2E7D72]" />
                <span>OPD Timings</span>
              </div>
              <p className="text-[11px] text-[#475569] font-medium">Mon - Sat: 10 AM - 8 PM</p>
              <p className="text-[10px] text-[#1D5E54] font-bold">Sunday: On-Call Emergency</p>
            </div>

            <div className="bg-[#FAFBFB] border border-[#A9C3C9] p-4 rounded-2xl space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0F172A]">
                <Phone className="w-4 h-4 text-[#2E7D72]" />
                <span>Hospital Desk</span>
              </div>
              <p className="text-[11px] text-[#475569] font-medium">0265-2393766</p>
              <p className="text-[11px] text-[#475569] font-medium">(+91) 99253 29142</p>
            </div>
          </div>

          {/* Emergency Hotline Alert */}
          <div className="bg-rose-50 border border-rose-200 p-4 rounded-2xl flex items-center justify-between gap-3 text-xs text-rose-900">
            <div className="flex items-center gap-2.5">
              <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0" />
              <div>
                <span className="font-extrabold text-rose-900 block text-xs">24x7 GI Emergency Hotline</span>
                <span className="text-[11px] font-semibold text-rose-700">(+91) 90999 53766</span>
              </div>
            </div>
            <a
              href="tel:+919099953766"
              className="px-3.5 py-1.5 rounded-lg bg-rose-600 text-white font-bold text-[11px] hover:bg-rose-700 transition-colors shrink-0 shadow-sm"
            >
              Call 24x7
            </a>
          </div>

          <div className="bg-[#FAFBFB] border border-[#A9C3C9] p-4 rounded-2xl flex items-center gap-3 text-xs text-[#475569] font-medium">
            <Mail className="w-4 h-4 text-[#2E7D72] shrink-0" />
            <span>Official Email: missiongastrocare@gmail.com</span>
          </div>

        </div>

        {/* Right Column: Embedded Interactive Google Map iFrame */}
        <div className="lg:col-span-7 h-80 lg:h-full min-h-[320px] rounded-2xl overflow-hidden border border-[#A9C3C9] shadow-inner relative">
          <iframe
            title="Mission Gastrocare Hospital Map Vadodara"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.371900135894!2d73.167812!3d22.301825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE4JzA2LjYiTiA3M8KwMTAnMDQuMSJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>

      </div>

    </section>
  );
}
