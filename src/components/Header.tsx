import React, { useState } from 'react';
import { Phone, Calendar, Clock, MapPin, Menu, X, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Технологии', href: '#technologies' },
    { label: 'Услуги', href: '#services' },
    { label: 'Калькулятор', href: '#calculator' },
    { label: 'До/После', href: '#cases' },
    { label: 'Врачи', href: '#doctors' },
    { label: 'Цены', href: '#pricing' },
    { label: 'Контакты', href: '#contacts' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top bar info */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <span className="flex items-center gap-1.5 text-teal-400 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>{CLINIC_INFO.city}, {CLINIC_INFO.address}</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5" />
              <span>Пн–Пт {CLINIC_INFO.hoursWeekday} | Сб–Вс {CLINIC_INFO.hoursWeekend}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden lg:flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>{CLINIC_INFO.license.split(' от ')[0]}</span>
            </span>
            <a
              href={`tel:${CLINIC_INFO.phoneMain.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1.5 text-white font-semibold hover:text-teal-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
              <span>{CLINIC_INFO.phoneMain}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="glass-medical border-b border-slate-200/80 shadow-sm backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-teal-600 to-teal-400 flex items-center justify-center text-white shadow-medical group-hover:scale-105 transition-transform duration-200">
              {/* High-tech stylized tooth/crystal cross */}
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C7.58 2 4 5.58 4 10c0 3.19 1.94 6.2 3.63 8.35.7.9 1.45 1.77 2.15 2.58.55.63 1.48.63 2.03 0 .7-.81 1.45-1.68 2.15-2.58C15.65 16.2 20 13.19 20 10c0-4.42-3.58-8-8-8zm0 13a3 3 0 110-6 3 3 0 010 6z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-1">
                LUMINA <span className="text-teal-600 font-extrabold">CLINIC</span>
              </span>
              <span className="text-[11px] font-medium tracking-wide text-slate-500 uppercase">
                Центр цифровой стоматологии
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Booking CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-teal-600 hover:bg-teal-700 active:scale-95 shadow-medical hover:shadow-teal-glow transition-all duration-200 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Записаться онлайн</span>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
              </span>
            </button>
          </div>

          {/* Mobile & Tablet menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="p-2.5 rounded-xl bg-teal-600 text-white shadow-sm"
              aria-label="Записаться"
            >
              <Calendar className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Открыть меню"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-lg px-6 py-6 space-y-4 shadow-xl">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-base font-medium text-slate-800 hover:text-teal-600 py-1 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl font-semibold text-white bg-teal-600 flex items-center justify-center gap-2 shadow-medical"
              >
                <Calendar className="w-5 h-5" />
                <span>Записаться на приём</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.phoneMain.replace(/[^0-9+]/g, '')}`}
                className="w-full py-2.5 text-center text-sm font-semibold text-slate-700 bg-slate-100 rounded-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                <span>{CLINIC_INFO.phoneMain}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
