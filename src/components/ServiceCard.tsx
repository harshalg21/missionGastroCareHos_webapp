import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  procedures: string[];
  icon: React.ReactNode;
  imageUrl?: string;
}

export default function ServiceCard({ id, title, category, description, procedures, icon, imageUrl }: ServiceCardProps) {
  // Short clean service title for action button
  const shortTitle = title.includes('&') 
    ? title.split('&')[0].trim() 
    : title.split(' ')[0];

  const bgImage = imageUrl || `/services/${id}.png`;

  return (
    <div 
      id={id} 
      className="relative rounded-3xl overflow-hidden border border-[#A9C3C9] hover:border-[#2E7D72] shadow-md hover:shadow-2xl transition-all duration-500 card-hover-effect flex flex-col justify-between group hover:-translate-y-1 min-h-[450px] bg-[#0F172A]"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#0F172A]">
        {/* Default State: Image is vivid, crisp, clear (opacity-85). Hover State: Image dims down into dark background (opacity-20) */}
        <img 
          src={bgImage} 
          alt={title} 
          className="w-full h-full object-cover opacity-85 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500 ease-out"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        
        {/* Dynamic Gradient Overlay: Light bottom gradient on static state -> Rich dark backdrop on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-black/20 group-hover:from-[#0F172A]/95 group-hover:via-[#0F172A]/90 group-hover:to-[#0F172A]/95 transition-all duration-500 backdrop-blur-[0px] group-hover:backdrop-blur-[2px]" />
      </div>

      {/* Content Layer: Smooth text focus transformation */}
      <div className="relative z-10 p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between text-white">
        
        <div className="space-y-4">
          
          {/* Icon & Category Header */}
          <div className="flex items-center justify-between gap-2 border-b border-white/20 pb-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#3A9D8F] border border-emerald-400/40 flex items-center justify-center text-white shadow-md group-hover:scale-110 group-hover:bg-[#2E7D72] transition-all duration-300 shrink-0">
              {icon}
            </div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1D5E54] bg-[#E1F2EE]/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#BDE3DB] shrink-0 shadow-md">
              {category}
            </span>
          </div>

          {/* Card Title - Always Crisp with Drop Shadow */}
          <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-[#BDE3DB] transition-colors leading-snug drop-shadow-md">
            {title}
          </h3>

          {/* Description - Fades into 100% full clarity on hover */}
          <p className="text-xs text-slate-100 font-medium leading-relaxed line-clamp-3 drop-shadow-md opacity-90 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </p>

          {/* Key Procedures Checklist - Highlights on hover */}
          <div className="space-y-2 pt-3 border-t border-white/20">
            <span className="text-[11px] font-extrabold text-[#BDE3DB] uppercase tracking-wider block drop-shadow-sm">Key Procedures:</span>
            <div className="space-y-2">
              {procedures.map((proc, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-white font-semibold drop-shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#3A9D8F] shrink-0 group-hover:scale-110 group-hover:text-[#4DE2D1] transition-transform" />
                  <span className="line-clamp-1">{proc}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Card Action Link - Glowing CTA on Hover */}
        <div className="pt-4 border-t border-white/20 mt-4">
          <Link
            to={`/book-appointment?service=${encodeURIComponent(title)}`}
            className="inline-flex items-center gap-2 text-xs font-extrabold text-[#BDE3DB] group-hover:text-white hover:underline transition-colors"
          >
            <span>Book Consultation for {shortTitle}</span>
            <ArrowRight className="w-4 h-4 text-[#3A9D8F] group-hover:translate-x-1.5 group-hover:text-white transition-transform duration-200" />
          </Link>
        </div>

      </div>
    </div>
  );
}
