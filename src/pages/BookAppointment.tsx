import React, { Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import AppointmentForm from '@/components/AppointmentForm';
import { Calendar, ShieldCheck } from 'lucide-react';

function AppointmentContent() {
  const [searchParams] = useSearchParams();
  const doctor = searchParams.get('doctor') || undefined;
  return <AppointmentForm initialDoctor={doctor} />;
}

export default function BookAppointment() {
  return (
    <div className="space-y-12 py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent text-[#1E293B]">
      
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-[#1D5E54] font-extrabold text-xs uppercase tracking-wider bg-[#E1F2EE] px-3 py-1 rounded-full border border-[#BDE3DB] inline-flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-[#1D5E54]" />
          Online Doctor Appointment Scheduling
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
          Book OPD Consultation
        </h1>
        <p className="text-xs sm:text-sm text-[#334155] font-medium">
          Select your specialist, date, and preferred time slot. Immediate confirmation &amp; WhatsApp reminder sent to your mobile.
        </p>
      </div>

      {/* Appointment Form Component with Suspense Fallback */}
      <Suspense fallback={<div className="p-8 text-center text-[#64748B] text-xs font-semibold">Loading appointment scheduler...</div>}>
        <AppointmentContent />
      </Suspense>

      {/* Emergency Call-out Box */}
      <div className="bg-white border border-[#A9C3C9] p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs shadow-md text-[#1E293B]">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-8 h-8 text-rose-600 shrink-0" />
          <div>
            <span className="font-extrabold text-[#0F172A] block">Facing Severe GI Emergency or Severe Bleeding?</span>
            <span className="text-[#475569] font-medium">Do not wait for an OPD slot. Call our 24x7 Emergency Line immediately.</span>
          </div>
        </div>
        <a
          href="tel:+919925329142"
          className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold shrink-0 transition-colors shadow-sm"
        >
          Call Emergency (+91 99253 29142)
        </a>
      </div>

    </div>
  );
}
