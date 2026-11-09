import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, CreditCard, Sparkles, Percent } from 'lucide-react';

interface SmileCalculatorProps {
  onProceedWithEstimate: (estimateDetails: { total: number; summary: string }) => void;
}

export const SmileCalculator: React.FC<SmileCalculatorProps> = ({ onProceedWithEstimate }) => {
  // Configurable options
  const [includeScan, setIncludeScan] = useState(true); // 60 BYN
  const [includeHygiene, setIncludeHygiene] = useState(false); // 190 BYN
  const [includeZoom, setIncludeZoom] = useState(false); // 850 BYN
  const [veneersCount, setVeneersCount] = useState<number>(0); // 980 BYN each
  const [implantsCount, setImplantsCount] = useState<number>(0); // 2300 BYN each
  const [includeAligners, setIncludeAligners] = useState(false); // 4900 BYN

  // Pricing constants in BYN
  const SCAN_PRICE = 60;
  const HYGIENE_PRICE = 190;
  const ZOOM_PRICE = 850;
  const VENEER_PRICE = 980;
  const IMPLANT_PRICE = 2300;
  const ALIGNERS_PRICE = 4900;

  // Calculate total
  const totalBYN =
    (includeScan ? SCAN_PRICE : 0) +
    (includeHygiene ? HYGIENE_PRICE : 0) +
    (includeZoom ? ZOOM_PRICE : 0) +
    veneersCount * VENEER_PRICE +
    implantsCount * IMPLANT_PRICE +
    (includeAligners ? ALIGNERS_PRICE : 0);

  // Installment per month (12 months 0%)
  const monthlyInstallment = totalBYN > 0 ? Math.round(totalBYN / 12) : 0;

  // Assemble summary string
  const selectedItems: string[] = [];
  if (includeScan) selectedItems.push('3D-сканирование iTero (60 BYN)');
  if (includeHygiene) selectedItems.push('SPA-комплекс Air Flow (190 BYN)');
  if (includeZoom) selectedItems.push('Отбеливание Zoom 4 (850 BYN)');
  if (veneersCount > 0) selectedItems.push(`Виниры E.max (${veneersCount} шт. = ${veneersCount * VENEER_PRICE} BYN)`);
  if (implantsCount > 0) selectedItems.push(`Импланты Straumann BLX (${implantsCount} шт. = ${implantsCount * IMPLANT_PRICE} BYN)`);
  if (includeAligners) selectedItems.push('Элайнеры Spark (4900 BYN)');

  const summaryText = selectedItems.join(', ');

  const handleApply = () => {
    onProceedWithEstimate({
      total: totalBYN,
      summary: summaryText || 'Консультация и диагностика',
    });
  };

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Прозрачный онлайн-расчёт в BYN</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Калькулятор стоимости создания вашей улыбки
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Выберите необходимые процедуры и получите мгновенный расчёт плана лечения с возможностью беспроцентной рассрочки в белорусских рублях.
          </p>
        </div>

        {/* Interactive Calculator Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-lg font-bold text-slate-900">1. Диагностика и профилактика</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                <label className="flex items-center gap-3 p-3.5 rounded-2xl border border-slate-200 cursor-pointer hover:border-teal-400 transition-colors">
                  <input
                    type="checkbox"
                    checked={includeScan}
                    onChange={(e) => setIncludeScan(e.target.checked)}
                    className="w-4 h-4 text-teal-600 rounded border-slate-300 focus:ring-teal-500"
                  />
                  <div className="text-xs">
                    <div className="font-semibold text-slate-800">3D-сканирование iTero</div>
                    <div className="text-teal-700 font-bold">{SCAN_PRICE} BYN</div>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3.5 rounded-2xl border border-slate-200 cursor-pointer hover:border-teal-400 transition-colors">
                  <input
                    type="checkbox"
                    checked={includeHygiene}
                    onChange={(e) => setIncludeHygiene(e.target.checked)}
                    className="w-4 h-4 text-teal-600 rounded border-slate-300 focus:ring-teal-500"
                  />
                  <div className="text-xs">
                    <div className="font-semibold text-slate-800">SPA-гигиена Air Flow</div>
                    <div className="text-teal-700 font-bold">{HYGIENE_PRICE} BYN</div>
                  </div>
                </label>
              </div>
            </div>

            {/* Aesthetics & Veneers Slider */}
            <div className="border-b border-slate-100 pb-5 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">2. Керамические виниры E.max</h3>
                  <p className="text-xs text-slate-500">Швейцарско-немецкая керамика, 980 BYN за 1 зуб</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-teal-700">{veneersCount}</span>
                  <span className="text-xs text-slate-500 ml-1">ед.</span>
                </div>
              </div>

              <input
                type="range"
                min="0"
                max="16"
                step="1"
                value={veneersCount}
                onChange={(e) => setVeneersCount(parseInt(e.target.value, 10))}
                className="w-full accent-teal-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-medium text-slate-400">
                <span>0 (без виниров)</span>
                <span>4 (зона улыбки)</span>
                <span>8 (полный ряд)</span>
                <span>16 (обе челюсти)</span>
              </div>
            </div>

            {/* Implantation Slider */}
            <div className="border-b border-slate-100 pb-5 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">3. Имплантаты Straumann BLX</h3>
                  <p className="text-xs text-slate-500">Премиум-класс (Швейцария), 2 300 BYN за имплант под ключ</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-teal-700">{implantsCount}</span>
                  <span className="text-xs text-slate-500 ml-1">импл.</span>
                </div>
              </div>

              <input
                type="range"
                min="0"
                max="6"
                step="1"
                value={implantsCount}
                onChange={(e) => setImplantsCount(parseInt(e.target.value, 10))}
                className="w-full accent-teal-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-medium text-slate-400">
                <span>0</span>
                <span>1 имплант</span>
                <span>2 импланта</span>
                <span>4 (All-on-4)</span>
                <span>6 (All-on-6)</span>
              </div>
            </div>

            {/* Extra Aesthetic Options */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900">4. Отбеливание и исправление прикуса</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex items-center gap-3 p-3.5 rounded-2xl border border-slate-200 cursor-pointer hover:border-teal-400 transition-colors">
                  <input
                    type="checkbox"
                    checked={includeZoom}
                    onChange={(e) => setIncludeZoom(e.target.checked)}
                    className="w-4 h-4 text-teal-600 rounded border-slate-300 focus:ring-teal-500"
                  />
                  <div className="text-xs">
                    <div className="font-semibold text-slate-800">Отбеливание Zoom 4</div>
                    <div className="text-teal-700 font-bold">{ZOOM_PRICE} BYN</div>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3.5 rounded-2xl border border-slate-200 cursor-pointer hover:border-teal-400 transition-colors">
                  <input
                    type="checkbox"
                    checked={includeAligners}
                    onChange={(e) => setIncludeAligners(e.target.checked)}
                    className="w-4 h-4 text-teal-600 rounded border-slate-300 focus:ring-teal-500"
                  />
                  <div className="text-xs">
                    <div className="font-semibold text-slate-800">Курс элайнеров Spark</div>
                    <div className="text-teal-700 font-bold">{ALIGNERS_PRICE} BYN</div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Result Card Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-8 shadow-medical-lg space-y-6 lg:sticky lg:top-28">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Итоговый расчёт</span>
              </span>
              <span className="text-xs text-slate-400">Цены зафиксированы</span>
            </div>

            {/* Total Price Display */}
            <div>
              <div className="text-xs text-slate-400 mb-1">Ориентировочная сумма лечения:</div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-baseline gap-2">
                <span>{totalBYN.toLocaleString('ru-RU')}</span>
                <span className="text-teal-400 text-xl font-bold">BYN</span>
              </div>
            </div>

            {/* Installment Badge */}
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-teal-300">
                <Percent className="w-4 h-4 text-teal-400" />
                <span>0% Беспроцентная рассрочка на 12 месяцев</span>
              </div>
              <div className="text-xl font-bold text-white">
                от {monthlyInstallment.toLocaleString('ru-RU')} BYN / месяц
              </div>
              <div className="text-[11px] text-slate-300 flex items-center gap-1.5">
                <CreditCard className="w-3.5 h-3.5" />
                <span>Карты «Халва», «Карта покупок», «Черепаха»</span>
              </div>
            </div>

            {/* Included in this quote */}
            <div className="space-y-2 text-xs text-slate-300">
              <div className="font-semibold text-white">В ваш план лечения входит:</div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>Бесплатный повторный осмотр и гарантия</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>Анестезия последнего поколения без доплат</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>Бесплатное парковочное место в БЦ Riviera Plaza</span>
              </div>
            </div>

            {/* Action CTA */}
            <button
              onClick={handleApply}
              className="w-full py-4 px-6 rounded-2xl font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 active:scale-95 shadow-teal-glow transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <span>Зафиксировать расчет и записаться</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
