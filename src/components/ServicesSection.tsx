import React, { useState } from 'react';
import { SERVICES } from '../data/clinicData';
import { ServiceItem } from '../types';
import { Clock, Check, Sparkles, ArrowRight, Stethoscope } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Все направления' },
    { id: 'diagnostic', label: '3D-диагностика' },
    { id: 'aesthetics', label: 'Виниры и эстетика' },
    { id: 'implantation', label: 'Имплантация' },
    { id: 'orthodontics', label: 'Элайнеры и брекеты' },
    { id: 'therapy', label: 'Лечение под микроскопом' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-200/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold uppercase tracking-wider">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Широкий спектр стоматологической помощи</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Услуги клиники с фиксированной ценой «Под ключ»
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Никаких скрытых платежей за анестезию, стерильный набор или контрольные осмотры. Вы точно знаете стоимость до начала лечения.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-teal-600 text-white shadow-medical'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {filteredServices.map((service: ServiceItem) => (
            <div
              key={service.id}
              className={`relative bg-white rounded-3xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 hover:shadow-medical-lg ${
                service.popular
                  ? 'border-teal-400 ring-2 ring-teal-400/20 shadow-medical'
                  : 'border-slate-200/90 hover:border-teal-200 shadow-sm'
              }`}
            >
              {/* Popular Flag */}
              {service.popular && (
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-teal-600 to-teal-500 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Популярный выбор</span>
                </div>
              )}

              <div>
                {/* Meta details */}
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-3">
                  <span className="flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-lg">
                    <Clock className="w-3.5 h-3.5 text-teal-600" />
                    <span>{service.duration}</span>
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* What is included */}
                <div className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    В стоимость включено:
                  </div>
                  {service.includes.map((item, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & CTA */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] font-medium text-slate-400">Фиксированная цена</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-sans">
                      {service.priceBYN.toLocaleString('ru-RU')} BYN
                    </span>
                    {service.priceOldBYN && (
                      <span className="text-xs text-slate-400 line-through font-medium">
                        {service.priceOldBYN} BYN
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => onSelectService(service.id)}
                  className="px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-teal-600 hover:bg-teal-700 active:scale-95 shadow-sm hover:shadow-medical transition-all duration-200 cursor-pointer flex items-center gap-1.5 shrink-0"
                >
                  <span>Записаться</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
