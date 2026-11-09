import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

interface CookieBannerProps {
  onOpenPrivacy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPrivacy }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('lumina_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('lumina_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 animate-slideUp">
      <div className="bg-slate-900/95 backdrop-blur-md text-white p-4 sm:p-5 rounded-2xl shadow-2xl border border-slate-700 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
              <Cookie className="w-4 h-4" />
            </div>
            <div className="text-xs font-bold text-white">
              Использование cookie-файлов
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Закрыть уведомление"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
          Мы используем cookie для корректной работы онлайн-записи и улучшения взаимодействия с сайтом. Подробнее в нашей{' '}
          <button
            type="button"
            onClick={onOpenPrivacy}
            className="text-teal-400 hover:underline font-semibold cursor-pointer"
          >
            Политике конфиденциальности (Закон РБ № 99-З)
          </button>.
        </p>

        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={handleAccept}
            className="w-full py-2 px-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs transition-colors cursor-pointer shadow-sm text-center"
          >
            Принять все
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition-colors cursor-pointer text-center"
          >
            Только необходимые
          </button>
        </div>
      </div>
    </div>
  );
};
