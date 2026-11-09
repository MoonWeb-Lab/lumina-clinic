import React from 'react';
import { TECHNOLOGIES } from '../data/clinicData';
import { Cpu, CheckCircle, ArrowRight } from 'lucide-react';

interface TechBentoSectionProps {
  onOpenBooking: () => void;
}

export const TechBentoSection: React.FC<TechBentoSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="technologies" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Цифровое оснащение экспертного уровня</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Оборудование, гарантирующее точность до микрона
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            В Lumina Clinic исключён человеческий фактор ошибки. Мы инвестировали в лучшие мировые аппараты из Швейцарии, Германии и США для прогнозируемого результата лечения.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TECHNOLOGIES.map((tech) => (
            <div
              key={tech.id}
              className="group bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 hover:border-teal-300 shadow-sm hover:shadow-medical-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Badge & Flag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{tech.flag}</span>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      {tech.manufacturer} ({tech.country})
                    </span>
                  </div>
                  <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-100">
                    Оригинал
                  </span>
                </div>

                {/* Tech Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                  {tech.name}
                </h3>
                <div className="text-sm font-medium text-teal-600 mb-4">
                  {tech.tagline}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {tech.description}
                </p>

                {/* Image Showcase */}
                <div className="relative rounded-2xl overflow-hidden mb-6 h-48 sm:h-56 bg-slate-100">
                  <img
                    src={tech.photoUrl}
                    alt={tech.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                </div>

                {/* Benefits List */}
                <div className="space-y-2.5 mb-6">
                  {tech.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <button
                onClick={onOpenBooking}
                className="w-full py-3 px-4 rounded-xl border border-slate-200 hover:border-teal-500 text-slate-700 hover:text-teal-700 font-semibold text-sm flex items-center justify-center gap-2 group-hover:bg-teal-50/50 transition-colors cursor-pointer"
              >
                <span>Записаться на процедуру</span>
                <ArrowRight className="w-4 h-4 text-teal-600 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
