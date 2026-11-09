import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { ShieldCheck, MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenBooking }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand & Legal Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-medical">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C7.58 2 4 5.58 4 10c0 3.19 1.94 6.2 3.63 8.35.7.9 1.45 1.77 2.15 2.58.55.63 1.48.63 2.03 0 .7-.81 1.45-1.68 2.15-2.58C15.65 16.2 20 13.19 20 10c0-4.42-3.58-8-8-8zm0 13a3 3 0 110-6 3 3 0 010 6z" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight flex items-center gap-1">
                  LUMINA <span className="text-teal-400">CLINIC</span>
                </span>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">
                  {CLINIC_INFO.slogan}
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Премиальная стоматологическая клиника в Минске. Экспертная диагностика 3D iTero, сохранение зубов под микроскопом Carl Zeiss, швейцарская имплантация Straumann и виниры E.max.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1 text-[11px] text-slate-400">
              <div className="font-semibold text-slate-300">{CLINIC_INFO.fullName}</div>
              <div>УНП: {CLINIC_INFO.unp}</div>
              <div className="flex items-center gap-1.5 text-teal-400 pt-0.5">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>{CLINIC_INFO.license}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Навигация
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#technologies" className="hover:text-teal-400 transition-colors">
                  Оборудование и технологии
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-400 transition-colors">
                  Услуги и методики
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-teal-400 transition-colors">
                  Калькулятор стоимости (BYN)
                </a>
              </li>
              <li>
                <a href="#cases" className="hover:text-teal-400 transition-colors">
                  Клинические кейсы До/После
                </a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-teal-400 transition-colors">
                  Врачи-специалисты
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-teal-400 transition-colors">
                  Прейскурант цен
                </a>
              </li>
              <li>
                <a href="#contacts" className="hover:text-teal-400 transition-colors">
                  Контакты и схема проезда
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts & Appointment */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Контакты в Минске
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.city}, {CLINIC_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Пн–Пт {CLINIC_INFO.hoursWeekday} | Сб–Вс {CLINIC_INFO.hoursWeekend}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href={`tel:${CLINIC_INFO.phoneMain.replace(/[^0-9+]/g, '')}`}
                  className="font-bold text-white hover:text-teal-400 transition-colors"
                >
                  {CLINIC_INFO.phoneMain}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{CLINIC_INFO.email}</span>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-teal-600 hover:bg-teal-500 shadow-md transition-all cursor-pointer"
            >
              Записаться онлайн на приём
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & MoonWeb Lab Signature */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {CLINIC_INFO.fullName}. Все права защищены.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-slate-300 transition-colors cursor-pointer underline underline-offset-2"
            >
              Политика конфиденциальности (Закон РБ № 99-З)
            </button>

            <a
              href="https://moonweb-lab.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-400 hover:text-teal-400 transition-colors group"
            >
              <span>Разработка кейса:</span>
              <span className="font-bold text-slate-200 group-hover:text-teal-300">MoonWeb Lab</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
