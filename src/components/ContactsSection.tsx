import React, { useState } from 'react';
import { CLINIC_INFO, FAQ_ITEMS } from '../data/clinicData';
import { MapPin, Phone, Clock, Mail, Car, ChevronDown, HelpCircle, Navigation } from 'lucide-react';

export const ContactsSection: React.FC = () => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <section id="contacts" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Details & Map Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold uppercase tracking-wider">
                <Navigation className="w-3.5 h-3.5" />
                <span>Локация в Минске</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Ждём вас в БЦ «Riviera Plaza»
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Панорамный вид на водохранилище Дрозды, премиальный комфорт и бесплатный подземный паркинг для пациентов.
              </p>
            </div>

            {/* Contact info list */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Адрес клиники:</div>
                  <div className="text-sm font-bold text-slate-900">{CLINIC_INFO.city}, {CLINIC_INFO.address}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{CLINIC_INFO.metro}</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Телефоны для записи и справок:</div>
                  <div className="flex flex-wrap items-center gap-3 mt-1">
                    <a
                      href={`tel:${CLINIC_INFO.phoneMain.replace(/[^0-9+]/g, '')}`}
                      className="text-sm font-bold text-slate-900 hover:text-teal-600 transition-colors"
                    >
                      {CLINIC_INFO.phoneMain} (A1 / МТС)
                    </a>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <a
                      href={`tel:${CLINIC_INFO.phoneCity.replace(/[^0-9+]/g, '')}`}
                      className="text-sm font-bold text-slate-900 hover:text-teal-600 transition-colors"
                    >
                      {CLINIC_INFO.phoneCity} (городской)
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">График работы:</div>
                  <div className="text-sm font-bold text-slate-900">
                    Будние дни: {CLINIC_INFO.hoursWeekday} <br />
                    Выходные дни: {CLINIC_INFO.hoursWeekend}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Парковка для пациентов:</div>
                  <div className="text-sm font-bold text-slate-900">{CLINIC_INFO.parking}</div>
                  <div className="text-xs text-teal-700 mt-0.5">Въезд со стороны ул. Радужная, парковочный талон валидируется у администратора</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Электронная почта:</div>
                  <div className="text-sm font-bold text-slate-900">{CLINIC_INFO.email}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold uppercase tracking-wider">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Часто задаваемые вопросы</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Ответы на главные вопросы пациентов
              </h2>
            </div>

            <div className="space-y-3 pt-2">
              {FAQ_ITEMS.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between gap-4 cursor-pointer hover:text-teal-600 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-teal-600 shrink-0 transition-transform duration-200 ${
                        openFaqIdx === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openFaqIdx === idx && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
