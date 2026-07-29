import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import GoogleMapLocation from '@/components/GoogleMapLocation';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#164E43] via-[#1D5E54] to-[#2E7D72] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-4 relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-emerald-100 text-xs font-bold uppercase tracking-wider">
            <Phone className="w-4 h-4" />
            24x7 Help Desk &amp; Appointments
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Contact Mission Gastrocare Institute
          </h1>
          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
            Have a clinical inquiry, appointment request, or feedback? Get in touch with our medical desk or call our 24x7 emergency helpline.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Info Cards (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white border border-[#A9C3C9] rounded-3xl p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#E1F2EE] text-[#1D5E54] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-[#0F172A]">Hospital Address</h3>
                <p className="text-xs text-[#64748B]">Vadodara, Gujarat</p>
              </div>
            </div>
            <p className="text-xs text-[#334155] leading-relaxed font-medium">
              <strong>"Doctor House"</strong>, 19 Windward Business Park, Jetalpur Road, Anandnagar, Haripura, Vadodara – 390020, Gujarat.
            </p>
            <p className="text-[11px] text-[#64748B]">Landmark: Near Alkapuri / Railway Station Exit Road</p>
          </div>

          <div className="bg-white border border-[#A9C3C9] rounded-3xl p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#E1F2EE] text-[#1D5E54] flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-[#0F172A]">Phone Numbers</h3>
                <p className="text-xs text-[#64748B]">OPD &amp; Emergency</p>
              </div>
            </div>
            <div className="space-y-2 text-xs text-[#334155] font-semibold">
              <p className="flex justify-between border-b border-slate-100 pb-1.5">
                <span>OPD Reception:</span>
                <a href="tel:02652393766" className="text-[#1D5E54] hover:underline">0265-2393766</a>
              </p>
              <p className="flex justify-between border-b border-slate-100 pb-1.5">
                <span>24x7 Helpline 1:</span>
                <a href="tel:+919099953766" className="text-[#1D5E54] hover:underline">+91 90999 53766</a>
              </p>
              <p className="flex justify-between">
                <span>Emergency Hotline 2:</span>
                <a href="tel:+919925329142" className="text-[#1D5E54] hover:underline">+91 99253 29142</a>
              </p>
            </div>
          </div>

          <div className="bg-white border border-[#A9C3C9] rounded-3xl p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#E1F2EE] text-[#1D5E54] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-[#0F172A]">OPD Hours</h3>
                <p className="text-xs text-[#64748B]">Consultation Timings</p>
              </div>
            </div>
            <div className="space-y-1.5 text-xs text-[#334155] font-semibold">
              <p className="flex justify-between border-b border-slate-100 pb-1.5">
                <span>Monday - Saturday:</span>
                <span className="text-[#1D5E54]">10:00 AM - 2:00 PM &amp; 5:00 PM - 8:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Sunday &amp; ER:</span>
                <span className="text-rose-600 font-extrabold">24x7 Emergency Active</span>
              </p>
            </div>
          </div>

        </div>

        {/* Contact Form (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-[#A9C3C9] rounded-3xl p-7 sm:p-8 shadow-md space-y-6">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1D5E54] bg-[#E1F2EE] px-2.5 py-1 rounded-full border border-[#BDE3DB]">
                Send a Message
              </span>
              <h2 className="text-2xl font-black text-[#0F172A] mt-2">Patient Inquiry Form</h2>
              <p className="text-xs text-[#64748B]">We respond to all online inquiries within 2 hours during OPD hours.</p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#E1F2EE] text-[#1D5E54] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-extrabold text-[#0F172A]">Inquiry Received!</h3>
                <p className="text-xs text-[#475569]">
                  Thank you for reaching out to Mission Gastrocare. Our patient care coordinator will call or email you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#334155] mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#FAFBFB] border border-[#A9C3C9] rounded-xl px-3.5 py-2.5 text-xs text-[#1E293B] focus:outline-none focus:border-[#2E7D72]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#334155] mb-1">Mobile Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-[#FAFBFB] border border-[#A9C3C9] rounded-xl px-3.5 py-2.5 text-xs text-[#1E293B] focus:outline-none focus:border-[#2E7D72]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#334155] mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#FAFBFB] border border-[#A9C3C9] rounded-xl px-3.5 py-2.5 text-xs text-[#1E293B] focus:outline-none focus:border-[#2E7D72]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#334155] mb-1">Subject / Department</label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full bg-[#FAFBFB] border border-[#A9C3C9] rounded-xl px-3.5 py-2.5 text-xs text-[#1E293B] focus:outline-none focus:border-[#2E7D72]"
                    >
                      <option value="">General OPD Appointment</option>
                      <option value="">Endoscopy / Colonoscopy Query</option>
                      <option value="">Laparoscopic Surgery Inquiry</option>
                      <option value="">Cashless Insurance / TPA Query</option>
                      <option value="">Feedback &amp; Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#334155] mb-1">Your Message / Medical Details</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your symptoms or questions..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#FAFBFB] border border-[#A9C3C9] rounded-xl px-3.5 py-2.5 text-xs text-[#1E293B] focus:outline-none focus:border-[#2E7D72]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl font-bold text-xs text-white pastel-emerald-gradient hover:opacity-95 transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Hospital Desk</span>
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

      {/* Embedded Google Map Section */}
      <div className="pt-4">
        <GoogleMapLocation />
      </div>

    </div>
  );
}
