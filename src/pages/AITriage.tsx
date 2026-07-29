import React from 'react';
import { Bot, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AITriage() {
  return (
    <div className="space-y-12 py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent text-[#1E293B]">
      
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF0F5] border border-[#CFDAE6] text-[#2C4A6F] text-xs font-bold uppercase tracking-wider shadow-sm">
          <Sparkles className="w-4 h-4 text-[#2C4A6F]" />
          <span>Interactive AI Medical Assistant</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
          GastroCare AI Symptom Triage Tool
        </h1>
        <p className="text-xs sm:text-sm text-[#334155] font-medium">
          Describe your digestive symptoms or ask about procedures (Endoscopy, ERCP, Laparoscopy) to receive instant clinical navigation and specialist routing.
        </p>
      </div>

      {/* Safety Notice Box */}
      <div className="bg-amber-50 border border-amber-200 p-5 rounded-2xl space-y-2 text-xs text-amber-900 shadow-sm font-medium">
        <div className="flex items-center gap-2 font-extrabold text-amber-900">
          <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
          <span>Medical Safety Guardrail &amp; Compliance Notice:</span>
        </div>
        <p className="text-amber-800 leading-relaxed">
          This AI Assistant provides educational information and symptom guidance only. It does <strong>NOT</strong> diagnose medical conditions or prescribe medications. In case of acute emergencies (severe GI bleeding, chest pain, loss of consciousness), please call 108 Emergency or contact our hospital hotline immediately: <strong>(+91) 99253 29142</strong>.
        </p>
      </div>

      {/* Embedded Full Feature Box */}
      <div className="bg-white border border-[#A9C3C9] p-8 rounded-3xl space-y-6 text-center shadow-md">
        <div className="w-16 h-16 rounded-2xl pastel-emerald-gradient mx-auto flex items-center justify-center text-white shadow-md">
          <Bot className="w-8 h-8 stroke-[2.5]" />
        </div>

        <div className="space-y-2 max-w-lg mx-auto">
          <h2 className="text-xl font-extrabold text-[#0F172A]">Interactive AI Triage Guidance</h2>
          <p className="text-xs text-[#475569] font-medium">
            Use the interactive symptom checker or contact our hospital desk to speak with our clinical coordinator directly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-2xl mx-auto pt-4 border-t border-slate-100 font-medium">
          <div className="flex items-start gap-2 text-xs text-[#334155]">
            <CheckCircle2 className="w-4 h-4 text-[#2E7D72] shrink-0 mt-0.5" />
            <span>Symptom to Specialist Routing</span>
          </div>
          <div className="flex items-start gap-2 text-xs text-[#334155]">
            <CheckCircle2 className="w-4 h-4 text-[#2E7D72] shrink-0 mt-0.5" />
            <span>Endoscopy &amp; ERCP Preparation</span>
          </div>
          <div className="flex items-start gap-2 text-xs text-[#334155]">
            <CheckCircle2 className="w-4 h-4 text-[#2E7D72] shrink-0 mt-0.5" />
            <span>24x7 Red-Flag Emergency Alert</span>
          </div>
        </div>
      </div>

    </div>
  );
}
