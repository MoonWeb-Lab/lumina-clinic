import React from 'react';
import { DOCTORS } from '../data/clinicData';
import { Doctor } from '../types';
import { Award, Calendar, CheckCircle2, Star, Users } from 'lucide-react';

interface DoctorsSectionProps {
  onSelectDoctor: (doctorId: string) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onSelectDoctor }) => {
  return (
    <section id="doctors" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>Команда ведущих специалистов Минска</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Врачи, которым доверяют здоровье и красоту улыбки
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Врачи высшей категории с европейскими стажировками в Швейцарии, Германии и Лихтенштейне. Регулярные спикеры международных стоматологических конгрессов.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {DOCTORS.map((doctor: Doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-medical-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo & Badge */}
                <div className="relative aspect-[4/4] overflow-hidden bg-slate-100">
                  <img
                    src={doctor.photoUrl}
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-slate-900 flex items-center gap-1 shadow-sm">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>{doctor.rating}</span>
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute bottom-3 left-3 bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    {doctor.expYears} лет практики
                  </div>
                </div>

                {/* Doctor Body */}
                <div className="p-5 sm:p-6 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {doctor.name}
                    </h3>
                    <div className="text-xs font-semibold text-teal-600 mt-0.5">
                      {doctor.role}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {doctor.specialization}
                  </p>

                  <div className="text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100 space-y-1">
                    <div className="font-semibold text-slate-700">{doctor.category}</div>
                    <div>{doctor.education}</div>
                  </div>

                  {/* Certifications preview */}
                  <div className="space-y-1 pt-1">
                    {doctor.certifications.map((cert, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                        <Award className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span className="truncate">{cert}</span>
                      </div>
                    ))}
                  </div>

                  {/* Days */}
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 pt-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>Приёмные дни: {doctor.availableDays.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 sm:p-6 pt-0">
                <button
                  onClick={() => onSelectDoctor(doctor.id)}
                  className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-teal-700 bg-teal-50 hover:bg-teal-600 hover:text-white border border-teal-200 transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Записаться к доктору</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
