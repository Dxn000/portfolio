import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, Code, GraduationCap, Briefcase } from 'lucide-react';

export default function StatsSection() {
  const icons = [GraduationCap, Code, Briefcase, Award];

  return (
    <section className="py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {portfolioData.stats.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={stat.label}
                className="relative group p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#111726]/80 to-[#0c111d]/90 border border-slate-800/80 hover:border-amber-500/40 transition-all duration-300 shadow-xl backdrop-blur-md overflow-hidden"
              >
                {/* Glow on hover */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-amber-500/10 rounded-full blur-xl group-hover:bg-amber-500/20 transition-all duration-500" />

                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded border border-slate-700/50">
                    CV Verified
                  </span>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight group-hover:text-amber-400 transition-colors">
                    {stat.value}
                  </span>
                  <span className="text-amber-400 font-bold text-lg">{stat.suffix}</span>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                  {stat.label}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {stat.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
