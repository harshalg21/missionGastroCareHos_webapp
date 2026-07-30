import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';

export interface FacilityCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  imageUrl?: string;
  href?: string;
}

export default function FacilityCard({
  id,
  title,
  category,
  description,
  features,
  icon,
  imageUrl,
  href = "/facilities"
}: FacilityCardProps) {
  
  const bgImage = imageUrl || `/facilities/${id}.jpg`;

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

        {/* Gradient Scrim for readable default text */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/40 to-transparent group-hover:from-[#0F172A]/95 group-hover:via-[#0F172A]/90 group-hover:to-[#0F172A]/95 transition-colors duration-500" />
      </div>

      {/* Card Header Content */}
      <div className="relative z-10 p-7 space-y-4">
        
        {/* Top Bar: Icon + Category Badge */}
        <div className="flex items-center justify-between gap-2">
          {/* Icon stays crystal clear above image and overlay */}
          <div className="w-12 h-12 rounded-2xl bg-[#E1F2EE] border border-[#BDE3DB] flex items-center justify-center text-[#1D5E54] shadow-md group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>

          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#BDE3DB] bg-[#1D5E54]/90 px-3 py-1 rounded-full border border-[#3A9D8F] shadow-sm backdrop-blur-md">
            {category}
          </span>
        </div>

        {/* Facility Title */}
        <div className="space-y-1.5 pt-1">
          <h3 className="text-2xl font-black text-white tracking-tight leading-tight group-hover:text-emerald-300 transition-colors drop-shadow-md">
            {title}
          </h3>
        </div>

        {/* Facility Description */}
        <p className="text-xs text-slate-100 font-semibold leading-relaxed group-hover:text-slate-100 transition-colors line-clamp-3 drop-shadow">
          {description}
        </p>

        {/* Key Features Checklist */}
        <div className="space-y-2 pt-2 border-t border-white/20">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-white font-bold group-hover:text-emerald-200 transition-colors">
              <CheckCircle2 className="w-4 h-4 text-[#4DE2D1] shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Card Footer Action Link */}
      <div className="relative z-10 p-7 pt-0">
        <Link
          to={`${href}#${id}`}
          className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-[#3A9D8F] border border-white/20 text-white font-extrabold text-xs flex items-center justify-between transition-all duration-300 group-hover:bg-[#4DE2D1] group-hover:text-[#0F172A] shadow-sm active:scale-95"
        >
          <span>Explore Facility Infrastructure</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

    </div>
  );
}
