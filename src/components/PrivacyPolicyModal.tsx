import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-5 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Политика обработки персональных данных</h2>
              <div className="text-xs text-slate-400">
                В соответствии с Законом Республики Беларусь № 99-З
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Policy Body */}
        <div className="p-6 overflow-y-auto text-xs sm:text-sm text-slate-600 space-y-4 leading-relaxed">
          <div className="p-4 bg-teal-50 rounded-2xl border border-teal-200/80 text-teal-900 space-y-1">
            <div className="font-bold flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-teal-600" />
              <span>Официальные реквизиты оператора персональных данных:</span>
            </div>
            <div>{CLINIC_INFO.fullName}, УНП: {CLINIC_INFO.unp}</div>
            <div>Юридический адрес: {CLINIC_INFO.city}, {CLINIC_INFO.address}</div>
            <div>{CLINIC_INFO.license}</div>
          </div>

          <h3 className="font-bold text-slate-900 text-base">1. Общие положения</h3>
          <p>
            Настоящая Политика определяет порядок обработки и защиты персональных данных физических лиц (пациентов), пользующихся услугами {CLINIC_INFO.fullName} (далее — Оператор), в строгом соответствии с Законом Республики Беларусь от 7 мая 2021 г. № 99-З «О защите персональных данных» и рекомендациями Национального центра защиты персональных данных Республики Беларусь (НЦЗПД).
          </p>

          <h3 className="font-bold text-slate-900 text-base">2. Цели сбора и обработки данных</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Организация предварительной записи на прием к врачам-специалистам стоматологической клиники.</li>
            <li>Оказание специализированной медицинской помощи в соответствии с клиническими протоколами Министерства здравоохранения Республики Беларусь.</li>
            <li>Информирование пациента о времени и дате предстоящего визита посредством телефонных звонков или СМС-сообщений.</li>
            <li>Предоставление консультаций, расчётов стоимости стоматологических услуг и оформление медицинской документации (амбулаторной карты).</li>
          </ul>

          <h3 className="font-bold text-slate-900 text-base">3. Категории обрабатываемых данных</h3>
          <p>
            Оператор обрабатывает следующие персональные данные: фамилия, имя, отчество, контактный номер телефона, адрес электронной почты, история обращений и данные о состоянии здоровья полости рта, добровольно предоставленные пациентом.
          </p>

          <h3 className="font-bold text-slate-900 text-base">4. Права субъекта персональных данных</h3>
          <p>
            Пациент имеет право в любое время отозвать свое согласие на обработку персональных данных, требовать ознакомления со своими данными, внесения изменений или прекращения их обработки, направив официальное письменное заявление по адресу: {CLINIC_INFO.city}, {CLINIC_INFO.address} либо на email: {CLINIC_INFO.email}.
          </p>

          <h3 className="font-bold text-slate-900 text-base">5. Меры безопасности</h3>
          <p>
            Оператор применяет современные организационные, технические и криптографические средства защиты для предотвращения несанкционированного доступа к персональным и медицинским данным пациентов.
          </p>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-slate-900 hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Понятно, закрыть
          </button>
        </div>
      </div>
    </div>
  );
};
