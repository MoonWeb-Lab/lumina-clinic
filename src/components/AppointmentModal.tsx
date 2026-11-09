import React, { useState, useEffect } from 'react';
import { DOCTORS, SERVICES, TIME_SLOTS } from '../data/clinicData';
import { formatBYPhone, isValidBYPhone } from '../utils/phoneValidation';
import { X, Calendar, Clock, User, Phone, CheckCircle2, ChevronRight, ChevronLeft, ShieldCheck } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialDoctorId?: string;
  calculatorSummary?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  initialDoctorId,
  calculatorSummary,
}) => {
  // Step tracker: 1 = Service, 2 = Doctor, 3 = Date & Time, 4 = Contact Form, 5 = Success
  const [step, setStep] = useState<number>(1);

  // Form State
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialServiceId || SERVICES[0].id);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>(initialDoctorId || 'any');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [patientName, setPatientName] = useState<string>('');
  const [patientPhone, setPatientPhone] = useState<string>('+375');
  const [patientComment, setPatientComment] = useState<string>(calculatorSummary || '');
  const [agreePolicy, setAgreePolicy] = useState<boolean>(true);

  // Validation errors
  const [errors, setErrors] = useState<{ name?: string; phone?: string; policy?: string }>({});
  const [bookingCode, setBookingCode] = useState<string>('');

  // Sync initial props
  useEffect(() => {
    if (initialServiceId) setSelectedServiceId(initialServiceId);
    if (initialDoctorId) setSelectedDoctorId(initialDoctorId);
    if (calculatorSummary) setPatientComment(calculatorSummary);
  }, [initialServiceId, initialDoctorId, calculatorSummary]);

  // Generate next 7 available dates (excluding past dates)
  const availableDates = React.useMemo(() => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 7; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      const dayName = nextDate.toLocaleDateString('ru-RU', { weekday: 'short' });
      const dayNum = nextDate.getDate();
      const monthName = nextDate.toLocaleDateString('ru-RU', { month: 'short' });
      const isoStr = nextDate.toISOString().split('T')[0];
      dates.push({ iso: isoStr, label: `${dayName}, ${dayNum} ${monthName}` });
    }
    return dates;
  }, []);

  // Pre-select first date if empty
  useEffect(() => {
    if (availableDates.length > 0 && !selectedDate) {
      setSelectedDate(availableDates[0].iso);
    }
    if (!selectedTime) {
      setSelectedTime(TIME_SLOTS[1]); // 10:15
    }
  }, [availableDates, selectedDate, selectedTime]);

  if (!isOpen) return null;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatBYPhone(e.target.value);
    setPatientPhone(formatted);
    if (errors.phone && isValidBYPhone(formatted)) {
      setErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };

  const handleNextStep = () => {
    if (step === 4) {
      // Validate form
      const newErrors: { name?: string; phone?: string; policy?: string } = {};
      if (!patientName.trim()) {
        newErrors.name = 'Пожалуйста, укажите ваше имя';
      }
      if (!isValidBYPhone(patientPhone)) {
        newErrors.phone = 'Укажите корректный номер Беларуси: +375 (29/33/44/25/17) XXX-XX-XX';
      }
      if (!agreePolicy) {
        newErrors.policy = 'Необходимо согласие на обработку персональных данных';
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      // Generate random booking confirmation code
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      setBookingCode(`LUM-${randomNum}`);
      setStep(5);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const handleResetAndClose = () => {
    setStep(1);
    setPatientName('');
    setPatientPhone('+375');
    setErrors({});
    onClose();
  };

  const currentService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];
  const currentDoctor = DOCTORS.find((d) => d.id === selectedDoctorId);

  return (
    <div className="fixed inset-0 z-[70] overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-teal-700 via-teal-600 to-teal-700 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center">
              <Calendar className="w-5 h-5 text-teal-200" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">
                {step === 5 ? 'Запись успешно подтверждена' : 'Онлайн-запись на приём'}
              </h2>
              <div className="text-xs text-teal-100 flex items-center gap-1.5 mt-0.5">
                <span>Lumina Clinic • Минск, пр-т Победителей 106</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Bar (hidden on step 5) */}
        {step < 5 && (
          <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-500">
            <div className={`flex items-center gap-1.5 ${step >= 1 ? 'text-teal-700 font-bold' : ''}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${step >= 1 ? 'bg-teal-600 text-white' : 'bg-slate-200'}`}>1</span>
              <span className="hidden sm:inline">Услуга</span>
            </div>
            <div className="w-6 h-[1px] bg-slate-200" />
            <div className={`flex items-center gap-1.5 ${step >= 2 ? 'text-teal-700 font-bold' : ''}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${step >= 2 ? 'bg-teal-600 text-white' : 'bg-slate-200'}`}>2</span>
              <span className="hidden sm:inline">Врач</span>
            </div>
            <div className="w-6 h-[1px] bg-slate-200" />
            <div className={`flex items-center gap-1.5 ${step >= 3 ? 'text-teal-700 font-bold' : ''}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${step >= 3 ? 'bg-teal-600 text-white' : 'bg-slate-200'}`}>3</span>
              <span className="hidden sm:inline">Дата и время</span>
            </div>
            <div className="w-6 h-[1px] bg-slate-200" />
            <div className={`flex items-center gap-1.5 ${step >= 4 ? 'text-teal-700 font-bold' : ''}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${step >= 4 ? 'bg-teal-600 text-white' : 'bg-slate-200'}`}>4</span>
              <span className="hidden sm:inline">Контакты</span>
            </div>
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* STEP 1: Select Service */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="text-sm font-bold text-slate-800">
                Шаг 1 из 4: Выберите стоматологическую услугу
              </div>
              <div className="space-y-2.5 max-h-[360px] overflow-y-auto pr-1">
                {SERVICES.map((srv) => (
                  <label
                    key={srv.id}
                    onClick={() => setSelectedServiceId(srv.id)}
                    className={`p-3.5 rounded-2xl border flex items-center justify-between gap-3 cursor-pointer transition-all ${
                      selectedServiceId === srv.id
                        ? 'border-teal-500 bg-teal-50/50 ring-2 ring-teal-500/20 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                        selectedServiceId === srv.id ? 'border-teal-600 bg-teal-600 text-white' : 'border-slate-300'
                      }`}>
                        {selectedServiceId === srv.id && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                          {srv.title}
                        </div>
                        <div className="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
                          <span>{srv.duration}</span>
                          <span>•</span>
                          <span className="text-teal-700 font-semibold">{srv.includes[0]}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-sm sm:text-base font-extrabold text-slate-900 font-sans">
                        {srv.priceBYN} BYN
                      </div>
                      {srv.priceOldBYN && (
                        <div className="text-[10px] text-slate-400 line-through">
                          {srv.priceOldBYN} BYN
                        </div>
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Select Doctor */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="text-sm font-bold text-slate-800">
                Шаг 2 из 4: Выберите специалиста клиники
              </div>

              {/* Option: Any Doctor */}
              <label
                onClick={() => setSelectedDoctorId('any')}
                className={`p-3.5 rounded-2xl border flex items-center justify-between gap-3 cursor-pointer transition-all ${
                  selectedDoctorId === 'any'
                    ? 'border-teal-500 bg-teal-50/50 ring-2 ring-teal-500/20'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      Любой свободный профильный врач
                    </div>
                    <div className="text-xs text-slate-500">
                      Администратор назначит ближайшее свободное окно специалиста
                    </div>
                  </div>
                </div>
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                  selectedDoctorId === 'any' ? 'border-teal-600 bg-teal-600 text-white' : 'border-slate-300'
                }`}>
                  {selectedDoctorId === 'any' && <CheckCircle2 className="w-3.5 h-3.5" />}
                </div>
              </label>

              {/* Doctor list */}
              <div className="space-y-2.5 max-h-[300px] overflow-y-auto pr-1">
                {DOCTORS.map((doc) => (
                  <label
                    key={doc.id}
                    onClick={() => setSelectedDoctorId(doc.id)}
                    className={`p-3.5 rounded-2xl border flex items-center justify-between gap-3 cursor-pointer transition-all ${
                      selectedDoctorId === doc.id
                        ? 'border-teal-500 bg-teal-50/50 ring-2 ring-teal-500/20'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={doc.photoUrl}
                        alt={doc.name}
                        className="w-11 h-11 rounded-xl object-cover shrink-0"
                      />
                      <div>
                        <div className="text-sm font-bold text-slate-900">{doc.name}</div>
                        <div className="text-xs text-teal-600 font-medium">{doc.role}</div>
                        <div className="text-[11px] text-slate-500">{doc.expYears} лет опыта • {doc.category}</div>
                      </div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                      selectedDoctorId === doc.id ? 'border-teal-600 bg-teal-600 text-white' : 'border-slate-300'
                    }`}>
                      {selectedDoctorId === doc.id && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Select Date & Time */}
          {step === 3 && (
            <div className="space-y-5">
              <div className="text-sm font-bold text-slate-800">
                Шаг 3 из 4: Выберите дату и время визита
              </div>

              {/* Date selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Доступные даты:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {availableDates.map((dateItem) => (
                    <button
                      key={dateItem.iso}
                      type="button"
                      onClick={() => setSelectedDate(dateItem.iso)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        selectedDate === dateItem.iso
                          ? 'border-teal-600 bg-teal-600 text-white font-bold shadow-sm'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-teal-300'
                      }`}
                    >
                      <div className="text-xs">{dateItem.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time slot selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Свободное время:
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {TIME_SLOTS.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`p-2.5 rounded-xl border text-center text-xs font-bold transition-all cursor-pointer ${
                        selectedTime === time
                          ? 'border-teal-600 bg-teal-50 text-teal-800 ring-2 ring-teal-600'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                <Clock className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Ориентировочная длительность приёма: {currentService.duration}</span>
              </div>
            </div>
          )}

          {/* STEP 4: Patient Info Form */}
          {step === 4 && (
            <div className="space-y-4">
              <div className="text-sm font-bold text-slate-800">
                Шаг 4 из 4: Контактные данные пациента
              </div>

              {/* Summary of chosen service & slot */}
              <div className="p-3.5 rounded-2xl bg-teal-50/70 border border-teal-200 text-xs space-y-1">
                <div className="font-bold text-teal-900">{currentService.title}</div>
                <div className="text-teal-700">
                  {currentDoctor ? currentDoctor.name : 'Любой свободный врач'} • {selectedDate} в {selectedTime}
                </div>
                <div className="font-black text-slate-900 mt-1">Стоимость: {currentService.priceBYN} BYN</div>
              </div>

              {/* Patient Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Фамилия и Имя пациента <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Например: Анна Смирнова"
                    value={patientName}
                    onChange={(e) => {
                      setPatientName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                    }}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                      errors.name ? 'border-red-500 bg-red-50/20' : 'border-slate-200 bg-white'
                    }`}
                  />
                </div>
                {errors.name && <div className="text-xs text-red-500 mt-1">{errors.name}</div>}
              </div>

              {/* Patient Phone (Belarusian Mask) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Номер телефона (Беларусь) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    placeholder="+375 (29) 000-00-00"
                    value={patientPhone}
                    onChange={handlePhoneChange}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                      errors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-200 bg-white'
                    }`}
                  />
                </div>
                {errors.phone ? (
                  <div className="text-xs text-red-500 mt-1">{errors.phone}</div>
                ) : (
                  <div className="text-[11px] text-slate-500 mt-1">Формат: +375 (29/33/44/25/17) XXX-XX-XX</div>
                )}
              </div>

              {/* Comment / Note */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Пожелания или жалобы (необязательно)
                </label>
                <textarea
                  rows={2}
                  placeholder="Опишите ваши симптомы или прикрепите расчет калькулятора..."
                  value={patientComment}
                  onChange={(e) => setPatientComment(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* Policy Checkbox */}
              <div>
                <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreePolicy}
                    onChange={(e) => {
                      setAgreePolicy(e.target.checked);
                      if (errors.policy) setErrors((prev) => ({ ...prev, policy: undefined }));
                    }}
                    className="w-4 h-4 text-teal-600 rounded border-slate-300 mt-0.5 focus:ring-teal-500"
                  />
                  <span>
                    Я даю согласие на обработку персональных данных в соответствии с Законом Республики Беларусь № 99-З «О защите персональных данных».
                  </span>
                </label>
                {errors.policy && <div className="text-xs text-red-500 mt-1">{errors.policy}</div>}
              </div>
            </div>
          )}

          {/* STEP 5: Success Confirmation Screen */}
          {step === 5 && (
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mx-auto shadow-teal-glow">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">
                  Код бронирования
                </span>
                <div className="text-3xl font-black text-slate-900 tracking-wider">
                  #{bookingCode}
                </div>
                <p className="text-sm text-slate-600 max-w-md mx-auto pt-1">
                  Уважаемый(ая) <span className="font-bold text-slate-900">{patientName}</span>, ваша запись в Lumina Clinic успешно зарегистрирована! СМС-подтверждение отправлено на номер {patientPhone}.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-slate-50 rounded-2xl p-4 text-left border border-slate-200/80 text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-slate-400">Услуга:</span>
                  <span className="font-bold text-slate-900">{currentService.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Специалист:</span>
                  <span className="font-bold text-slate-900">
                    {currentDoctor ? currentDoctor.name : 'Дежурный специалист'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Дата и время:</span>
                  <span className="font-bold text-teal-700">{selectedDate} в {selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Адрес:</span>
                  <span className="font-bold text-slate-900">Минск, пр-т Победителей 106 (Riviera Plaza)</span>
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-2">
                  <span className="text-slate-500 font-semibold">Сумма к оплате:</span>
                  <span className="font-extrabold text-slate-900 text-sm">{currentService.priceBYN} BYN</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-teal-700 bg-teal-50 py-2.5 px-4 rounded-xl max-w-md mx-auto">
                <ShieldCheck className="w-4 h-4" />
                <span>Бесплатный подземный паркинг зарезервирован</span>
              </div>

              <button
                onClick={handleResetAndClose}
                className="w-full max-w-md py-3 rounded-xl font-bold text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-medical cursor-pointer"
              >
                Отлично, закрыть окно
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer Controls (Step 1-4) */}
        {step < 5 && (
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
            {step > 1 ? (
              <button
                type="button"
                onClick={handlePrevStep}
                className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Назад</span>
              </button>
            ) : (
              <div />
            )}

            <button
              type="button"
              onClick={handleNextStep}
              className="px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-teal-600 hover:bg-teal-700 active:scale-95 shadow-medical transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>{step === 4 ? 'Подтвердить запись' : 'Продолжить'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
