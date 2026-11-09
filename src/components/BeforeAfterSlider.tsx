import React, { useState } from 'react';
import { BEFORE_AFTER_CASES } from '../data/clinicData';
import { Sparkles, ArrowLeftRight, Clock, Award } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100

  const currentCase = BEFORE_AFTER_CASES[selectedCaseIdx];

  return (
    <section id="cases" className="py-16 sm:py-24 bg-white border-b border-slate-200/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Клинические результаты</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Преображения улыбок пациентов Lumina Clinic
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Реальные клинические кейсы, выполненные врачами клиники. Сдвигайте интерактивный ползунок вправо и влево для сравнения результата до и после.
          </p>

          {/* Case Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {BEFORE_AFTER_CASES.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedCaseIdx(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCaseIdx === idx
                    ? 'bg-teal-600 text-white shadow-medical'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
                }`}
              >
                {item.category}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Interactive Visual Slider */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 shadow-medical-lg select-none">
              {/* After Image (Full width underneath) */}
              <img
                src={currentCase.afterUrl}
                alt={`${currentCase.title} — После лечения`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                ПОСЛЕ
              </div>

              {/* Before Image (Clipped above) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={currentCase.beforeUrl}
                  alt={`${currentCase.title} — До лечения`}
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: '100%', height: '100%' }}
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-slate-900/80 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  ДО
                </div>
              </div>

              {/* Slider Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-white text-teal-600 shadow-md flex items-center justify-center border border-teal-200">
                  <ArrowLeftRight className="w-4 h-4" />
                </div>
              </div>

              {/* Range input overlay for full touch & drag accessibility */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full"
                aria-label="Сравнение до и после"
              />
            </div>
            <div className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center gap-1.5">
              <ArrowLeftRight className="w-3.5 h-3.5" />
              <span>Потяните ползунок, чтобы увидеть разницу</span>
            </div>
          </div>

          {/* Case Information Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-bold text-teal-600 uppercase tracking-wider">
                {currentCase.category}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                {currentCase.title}
              </h3>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {currentCase.description}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                <Award className="w-4 h-4 text-teal-600 shrink-0" />
                <div>
                  <span className="text-slate-400">Лечащий врач: </span>
                  <span className="font-bold text-slate-900">{currentCase.doctorName}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                <Clock className="w-4 h-4 text-teal-600 shrink-0" />
                <div>
                  <span className="text-slate-400">Срок преображения: </span>
                  <span className="font-bold text-slate-900">{currentCase.duration}</span>
                </div>
              </div>
            </div>

            {/* Technologies used */}
            <div className="pt-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Примененные технологии:
              </div>
              <div className="flex flex-wrap gap-2">
                {currentCase.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold bg-teal-50 text-teal-800 px-3 py-1 rounded-full border border-teal-200/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
