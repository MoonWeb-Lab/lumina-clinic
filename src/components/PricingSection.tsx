import React, { useState } from 'react';
import { SERVICES } from '../data/clinicData';
import { Tag, Search, ShieldCheck, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectService }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = SERVICES.filter((s) =>
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white border-b border-slate-200/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5" />
            <span>Прейскурант услуг в белорусских рублях (BYN)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Честные и фиксированные цены на лечение
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            В Lumina Clinic стоимость фиксируется в официальном плане лечения до начала манипуляций. Никаких непредвиденных доплат за расходные материалы.
          </p>

          {/* Search bar */}
          <div className="relative max-w-md mx-auto pt-4">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Поиск по услугам (виниры, пломба, имплант...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm text-slate-900 placeholder-slate-400 transition-all"
            />
          </div>
        </div>

        {/* Pricing List Table / Cards */}
        <div className="max-w-4xl mx-auto space-y-3">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 hover:border-teal-400 shadow-sm hover:shadow-medical transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                    {service.title}
                  </h3>
                  {service.popular && (
                    <span className="bg-teal-50 text-teal-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-teal-200">
                      Хит
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 max-w-xl">
                  {service.description}
                </p>
                <div className="text-[11px] text-teal-600 font-medium">
                  Длительность: {service.duration}
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                <div className="text-right">
                  <div className="text-xl sm:text-2xl font-black text-slate-900">
                    {service.priceBYN.toLocaleString('ru-RU')} BYN
                  </div>
                  {service.priceOldBYN && (
                    <div className="text-xs text-slate-400 line-through">
                      {service.priceOldBYN} BYN
                    </div>
                  )}
                </div>

                <button
                  onClick={() => onSelectService(service.id)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 active:scale-95 shadow-sm transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Записаться</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {filteredServices.length === 0 && (
            <div className="text-center py-12 text-slate-500 text-sm">
              По вашему запросу услуг не найдено. Пожалуйста, уточните запрос или позвоните нам.
            </div>
          )}
        </div>

        {/* Pricing Guarantee Banner */}
        <div className="max-w-4xl mx-auto mt-8 p-4 sm:p-5 rounded-2xl bg-teal-50 border border-teal-200/80 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="text-xs sm:text-sm text-teal-900 leading-relaxed">
            <span className="font-bold">Швейцарский стандарт прозрачности: </span>
            Все цены указаны «Под ключ». В стоимость включены первичная консультация, компьютерный снимок, анестезия и расходные стерильные материалы.
          </div>
        </div>
      </div>
    </section>
  );
};
