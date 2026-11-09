import React from 'react';
import { ShieldCheck, Sparkles, ArrowRight, Calculator, CheckCircle2, Award, Zap } from 'lucide-react';
import { CLINIC_STATS } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenCalculator }) => {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-100 gradient-mesh">
      {/* Background soft ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* High-tech pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
              <span>Швейцарские протоколы ITI • Минск, пр-т Победителей</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Цифровая стоматология и эстетика улыбки <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-500 to-sky-600">
                нового поколения
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Лечение зубов под операционным микроскопом Carl Zeiss с 30-кратным увеличением, швейцарские импланты Straumann и цельнокерамические виниры E.max. Прогнозируемый результат без боли и страха.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-bold text-white bg-teal-600 hover:bg-teal-700 active:scale-95 shadow-medical hover:shadow-teal-glow transition-all duration-200 cursor-pointer text-base"
              >
                <span>Записаться на консультацию</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenCalculator}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm active:scale-95 transition-all duration-200 cursor-pointer text-base"
              >
                <Calculator className="w-5 h-5 text-teal-600" />
                <span>Рассчитать стоимость</span>
              </button>
            </div>

            {/* Trust bullet features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium bg-white/70 backdrop-blur-sm p-2.5 rounded-xl border border-slate-200/60 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>3D-сканирование за 60 сек</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium bg-white/70 backdrop-blur-sm p-2.5 rounded-xl border border-slate-200/60 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Пожизненная гарантия</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium bg-white/70 backdrop-blur-sm p-2.5 rounded-xl border border-slate-200/60 shadow-sm">
                <Zap className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Лечение во сне (седация)</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-tech Visual & Live Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Framed Showcase Card */}
              <div className="p-3 bg-white rounded-[32px] border border-slate-200/90 shadow-medical-lg">
                {/* Photo Container */}
                <div className="relative rounded-[22px] overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                    alt="Цифровой кабинет Lumina Clinic Минск"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />

                  {/* Top-Left Live Status Pill */}
                  <div className="absolute top-3.5 left-3.5 bg-slate-900/85 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full border border-white/15 flex items-center gap-2 text-xs font-semibold shadow-sm z-10">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Цифровой кабинет № 1</span>
                  </div>

                  {/* Top-Right Protocol Rating */}
                  <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-md text-slate-900 px-3 py-1.5 rounded-full border border-white/80 flex items-center gap-1.5 text-xs font-bold shadow-sm z-10">
                    <span className="text-amber-500">★ 5.0</span>
                    <span className="text-[10px] text-slate-500 font-medium">ITI Protocol</span>
                  </div>

                  {/* Bottom Integrated Gradient Dock */}
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-slate-950/95 via-slate-900/75 to-transparent text-white z-10">
                    <div className="text-[11px] font-bold text-teal-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Швейцарские стандарты медицины</span>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
                      Оптика Carl Zeiss + 3D Scanner iTero 5D
                    </div>
                  </div>
                </div>

                {/* Sub-cards: High-Tech Spec Highlights */}
                <div className="grid grid-cols-2 gap-2.5 mt-3">
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 flex items-center gap-3 hover:bg-teal-50/60 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-teal-100/80 text-teal-700 flex items-center justify-center shrink-0">
                      <Sparkles className="w-5 h-5 text-teal-600" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-slate-500 font-medium leading-none mb-1">Точность оптики</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Carl Zeiss 30x</div>
                    </div>
                  </div>

                  <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 flex items-center gap-3 hover:bg-sky-50/60 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-sky-100/80 text-sky-700 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-sky-600" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-slate-500 font-medium leading-none mb-1">Швейцария</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Straumann Expert</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clinic Statistics Bar */}
        <div className="mt-14 sm:mt-20 pt-8 sm:pt-10 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {CLINIC_STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">
                  {stat.value}
                </span>
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
