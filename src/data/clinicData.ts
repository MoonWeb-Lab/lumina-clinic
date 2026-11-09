import { Doctor, ServiceItem, TechSpec, BeforeAfterCase } from '../types';

export const CLINIC_INFO = {
  name: 'Lumina Clinic',
  fullName: 'ООО «Люмина Клиник»',
  slogan: 'Центр цифровой стоматологии и эстетики улыбки',
  city: 'г. Минск',
  address: 'пр-т Победителей, 106, БЦ «Riviera Plaza»',
  parking: 'Собственный бесплатный подземный паркинг для пациентов',
  metro: 'ст. м. «Минск-Арена» / «Пушкинская»',
  phoneMain: '+375 (29) 310-88-00',
  phoneCity: '+375 (17) 220-88-00',
  email: 'info@lumina-clinic.by',
  hoursWeekday: '08:30 – 21:00',
  hoursWeekend: '09:00 – 19:00',
  unp: '193618492',
  license: 'Лицензия Минздрава РБ № 02040/8391 от 14.04.2021',
};

export const CLINIC_STATS = [
  { value: '12+', label: 'лет безупречной практики' },
  { value: '14 500+', label: 'здоровых и сияющих улыбок' },
  { value: '99.4%', label: 'приживаемость имплантов Straumann' },
  { value: '0 BYN', label: 'скрытых доплат и платежей' },
];

export const DOCTORS: Doctor[] = [
  {
    id: 'razumovsky',
    name: 'Александр Разумовский',
    role: 'Главный врач клиники',
    specialization: 'Челюстно-лицевой хирург, имплантолог-эксперт',
    expYears: 17,
    category: 'Высшая квалификационная категория',
    education: 'БГМУ, стажировки в Клинике Бернского университета (Швейцария)',
    certifications: ['Сертификат ITI Straumann Fellow', 'Dentsply Sirona Implantation Gold Award'],
    photoUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    rating: 5.0,
    availableDays: ['Пн', 'Вт', 'Чт', 'Пт'],
  },
  {
    id: 'voropaeva',
    name: 'Елена Воропаева',
    role: 'Ведущий стоматолог-ортопед',
    specialization: 'Эстетическая реставрация, микропротезирование и виниры E.max',
    expYears: 13,
    category: 'Высшая квалификационная категория',
    education: 'БГМУ, мастер-классы Style Italiano (Италия), Лихтенштейн (Ivoclar)',
    certifications: ['Член European Academy of Esthetic Dentistry (EAED)', 'Ivoclar Vivadent Certified Master'],
    photoUrl: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=800&q=80',
    rating: 4.98,
    availableDays: ['Пн', 'Ср', 'Пт', 'Сб'],
  },
  {
    id: 'chernov',
    name: 'Максим Чернов',
    role: 'Стоматолог-ортодонт',
    specialization: 'Цифровая ортодонтия, элайнеры Spark / Invisalign, биомеханика прикуса',
    expYears: 10,
    category: 'Первая квалификационная категория',
    education: 'БГМУ, клиническая ординатура, аккредитация Ormco & Align Technology',
    certifications: ['Diamond Provider Spark Aligners Belarus', 'World Federation of Orthodontists (WFO)'],
    photoUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
    rating: 4.96,
    availableDays: ['Вт', 'Ср', 'Чт', 'Вс'],
  },
  {
    id: 'markevich',
    name: 'Ольга Маркевич',
    role: 'Стоматолог-терапевт, микроскопист',
    specialization: 'Лечение каналов под микроскопом Carl Zeiss, художественная реставрация',
    expYears: 9,
    category: 'Первая квалификационная категория',
    education: 'БГМУ, резидентура по микроинвазивной эндодонтии (Германия)',
    certifications: ['Zeiss Dental Academy Member', 'StyleItaliano Endodontics Course Certified'],
    photoUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    rating: 4.99,
    availableDays: ['Пн', 'Вт', 'Ср', 'Пт', 'Сб'],
  },
];

export const TECHNOLOGIES: TechSpec[] = [
  {
    id: 'zeiss',
    name: 'Carl Zeiss Extaro 300',
    manufacturer: 'Carl Zeiss Meditec AG',
    country: 'Германия',
    flag: '🇩🇪',
    tagline: 'Операционный микроскоп с 30-кратным оптическим увеличением',
    description: 'Обеспечивает сверхточную визуализацию анатомии зуба. Позволяет спасать зубы даже при самых сложных и труднопроходимых каналах без риска повреждения здоровых тканей.',
    benefits: [
      '30-кратное увеличение тончайших каналов',
      'Флуоресцентная подсветка скрытого кариеса',
      'Минимально инвазивное щадящее препарирование',
    ],
    photoUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'itero',
    name: 'iTero Element 5D Plus',
    manufacturer: 'Align Technology',
    country: 'США / Швейцария',
    flag: '🇨🇭',
    tagline: 'Цифровой 3D-сканер нового поколения с инфракрасной технологией NIRI',
    description: 'Создание безупречной высокоточной 3D-модели челюсти за 60 секунд без дискомфортных слепочных ложек и паст. Мгновенная симуляция результата исправления прикуса.',
    benefits: [
      'Без рвотного рефлекса и слепочной массы',
      'Инфракрасная детекция поддесневого кариеса',
      '3D-моделирование будущей улыбки прямо на приёме',
    ],
    photoUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'straumann',
    name: 'Straumann BLX SLActive',
    manufacturer: 'Straumann Group',
    country: 'Швейцария',
    flag: '🇨🇭',
    tagline: 'Мировой золотой стандарт имплантации с гидрофильной поверхностью',
    description: 'Швейцарские премиальные имплантаты с запатентованным материалом Roxolid и гидрофильной поверхностью SLActive, сокращающей срок приживления до 3–4 недель.',
    benefits: [
      'Пожизненная международная гарантия производителя',
      'Установка коронки в день операции при одномоментном протоколе',
      'Приживаемость 99.4% даже при недостатке костной ткани',
    ],
    photoUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'zoom4',
    name: 'Philips Zoom 4 WhiteSpeed',
    manufacturer: 'Philips Healthcare',
    country: 'США',
    flag: '🇺🇸',
    tagline: 'Безопасное клиническое отбеливание с холодным LED-светом',
    description: 'Аппарат последнего поколения с регулируемой интенсивностью холодного светодиодного излучения. Осветляет эмаль до 8 тонов без термического воздействия на нерв зуба.',
    benefits: [
      'Осветление до 8 тонов за один визит (45 минут)',
      'Формула с фосфатом кальция (Relief ACP) укрепляет эмаль',
      'Абсолютный комфорт без повышенной чувствительности',
    ],
    photoUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80',
  },
];

export const SERVICES: ServiceItem[] = [
  // Diagnostic
  {
    id: 'diag-scan',
    title: '3D-сканирование iTero + Цифровая консультация',
    category: 'diagnostic',
    duration: '45 мин',
    priceBYN: 60,
    priceOldBYN: 90,
    description: 'Оптическое цифровое сканирование обеих челюстей с составлением интерактивного 3D-плана лечения и визуализацией результата.',
    includes: ['Цифровой снимок iTero 5D', 'NIRI-диагностика скрытого кариеса', 'Консультация двух профильных врачей', 'Фотопротокол улыбки'],
    popular: true,
  },
  {
    id: 'diag-ct',
    title: 'Компьютерная 3D-томография (КЛКТ) с расшифровкой',
    category: 'diagnostic',
    duration: '30 мин',
    priceBYN: 85,
    description: 'Низкодозовая конусно-лучевая томография с точным расчетом плотности костной ткани и анатомии каналов.',
    includes: ['Снимок высокого разрешения', '3D-реконструкция суставов ВНЧС', 'Запись исследования на защищенный диск / облако'],
  },

  // Aesthetics & Veneers
  {
    id: 'aes-veneer',
    title: 'Керамический винир E.max (Германия) «Под ключ»',
    category: 'aesthetics',
    duration: 'от 2 визитов',
    priceBYN: 980,
    priceOldBYN: 1150,
    description: 'Сверхтонкие керамические накладки индивидуального послойного нанесения. Полная гармония цвета, прозрачности и прочности родной эмали.',
    includes: ['Digital Smile Design (DSD)', 'Тест-драйв улыбки (Mock-up)', 'Препарирование под микроскопом Zeiss', 'Анестезия и временный винир', 'Фиксация на японский адгезив'],
    popular: true,
  },
  {
    id: 'aes-zoom',
    title: 'Клиническое отбеливание Philips Zoom 4 WhiteSpeed',
    category: 'aesthetics',
    duration: '60 мин',
    priceBYN: 850,
    priceOldBYN: 990,
    description: 'Премиальное бережное отбеливание на оригинальном аппарате Philips с нанесением защитного геля Relief ACP.',
    includes: ['Изоляция дёсен и мягких тканей', '4 цикла по 15 минут холодным LED-светом', 'Реминерализирующая терапия эмали', 'Набор для домашней поддержки'],
    popular: true,
  },
  {
    id: 'aes-hygiene',
    title: 'Швейцарский SPA-комплекс гигиены Air Flow Prophylaxis',
    category: 'aesthetics',
    duration: '50 мин',
    priceBYN: 190,
    description: 'Атравматичное удаление зубного камня и налета аппаратом EMS Air Flow с порошком на основе глицина и эритритола.',
    includes: ['Ультразвуковой скейлинг', 'Air Flow микрогранулами', 'Полировка нанопастой', 'Фторирование и укрепление эмали'],
  },

  // Implantation
  {
    id: 'imp-straumann',
    title: 'Имплантат Straumann BLX SLActive (Швейцария) «Под ключ»',
    category: 'implantation',
    duration: '60 мин',
    priceBYN: 2300,
    priceOldBYN: 2600,
    description: 'Премиальная система №1 в мире. Приживаемость 99.4%, пожизненный гарантийный паспорт Straumann с международным ID.',
    includes: ['Оригинальный швейцарский имплантат', 'Компьютерный навигационный шаблон', 'Анестезия премиум-класса', 'Формирователь десны и швы', 'Контрольные осмотры и снимки'],
    popular: true,
  },
  {
    id: 'imp-osstem',
    title: 'Имплантат Osstem TS III (Южная Корея) «Под ключ»',
    category: 'implantation',
    duration: '45 мин',
    priceBYN: 1350,
    description: 'Надежная система с превосходной первичной стабилизацией и микропористой биосовместимой поверхностью SA.',
    includes: ['Имплантат Osstem', 'Хирургический протокол', 'Анестезия Ubistesin Forte', 'Послеоперационное ведение'],
  },

  // Orthodontics
  {
    id: 'ortho-aligners',
    title: 'Лечение на цифровых элайнерах Spark (Курс под ключ)',
    category: 'orthodontics',
    duration: 'от 6 месяцев',
    priceBYN: 4900,
    priceOldBYN: 5400,
    description: 'Прозрачные гибкие капы из полимера TruGEN™. Незаметны на зубах при разговоре, не натирают слизистую и снимаются во время еды.',
    includes: ['Полный набор индивидуальных капп', '3D-симуляция перемещения зубов', 'Регулярные онлайн-чекапы', 'Ретейнеры после завершения лечения'],
    popular: true,
  },
  {
    id: 'ortho-damon',
    title: 'Брекет-система Damon Clear (Эстетическая керамика)',
    category: 'orthodontics',
    duration: 'от 12 месяцев',
    priceBYN: 1850,
    description: 'Пассивное самолигирование обеспечивает комфортное перемещение зубов с минимальным давлением и без удаления здоровых премоляров.',
    includes: ['Установка системы на 1 челюсть', 'Первичная дуга CuNiTi', 'Адаптационный набор гигиены'],
  },

  // Therapy
  {
    id: 'ther-caries',
    title: 'Лечение кариеса под микроскопом Carl Zeiss',
    category: 'therapy',
    duration: '50 мин',
    priceBYN: 180,
    description: 'Микроинвазивная обработка только пораженных тканей с микроскопическим увеличением и реставрация нанокомпозитом Enamel Plus (Германия).',
    includes: ['Анестезия', 'Изоляция коффердамом', 'Лечение под оптикой 30x', 'Анатомическая художественная пломба'],
  },
  {
    id: 'ther-endo',
    title: 'Сложное эндодонтическое лечение каналов под микроскопом',
    category: 'therapy',
    duration: '90 мин',
    priceBYN: 320,
    description: 'Спасение сложных «безнадежных» зубов с изогнутыми или облитерированными каналами с 3D-обтурацией горячей гуттаперчей.',
    includes: ['Микроскопная ревизия', 'Механическая очистка никель-титановыми файлами', 'Ультразвуковая ирригация', 'Пломбирование каналов'],
  },
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: 'case-veneers-10',
    title: 'Тотальная реставрация зоны улыбки: 10 виниров E.max',
    category: 'Эстетика и виниры',
    doctorName: 'Елена Воропаева',
    duration: '14 дней (3 визита)',
    description: 'Жалобы пациентки на сколы, флюорозные пятна и старые композитные пломбы. Выполнено цифровое планирование DSD и установлены ультратонкие цельнокерамические виниры оттенка Bleach 3.',
    beforeUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80',
    afterUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80',
    technologies: ['Carl Zeiss 30x', 'Ivoclar E.max Press', 'Digital Smile Design'],
  },
  {
    id: 'case-implant-frontal',
    title: 'Одномоментная имплантация во фронтальной зоне',
    category: 'Хирургия и имплантация',
    doctorName: 'Александр Разумовский',
    duration: '1 визит (с временной коронкой)',
    description: 'Пациент обратился с переломом корня центрального резца после травмы. Удаление зуба, установка имплантата Straumann BLX и фиксация индивидуальной временной коронки за 1 час.',
    beforeUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=900&q=80',
    afterUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80',
    technologies: ['Straumann BLX SLActive', 'Навигационный шаблон', 'CAD/CAM цирконий'],
  },
  {
    id: 'case-spark-aligners',
    title: 'Исправление скученности и глубокого прикуса на элайнерах Spark',
    category: 'Ортодонтия',
    doctorName: 'Максим Чернов',
    duration: '10 месяцев (без брекетов)',
    description: 'Скученность нижнего и верхнего зубного ряда, разворот клыков. Лечение проводилось на незаметных капах Spark TruGEN. Результат: ровная эстетичная дуга и правильное смыкание.',
    beforeUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80',
    afterUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80',
    technologies: ['iTero Element 5D Plus', 'Spark TruGEN Aligners', '3D ClinCheck'],
  },
];

export const TIME_SLOTS = [
  '09:00', '10:15', '11:30', '13:00', '14:30', '16:00', '17:30', '19:00', '20:15'
];

export const FAQ_ITEMS = [
  {
    question: 'Больно ли лечить зубы и устанавливать импланты в вашей клинике?',
    answer: 'Нет, лечение проходит абсолютно безболезненно. Мы используем современную компьютерную и карпульную анестезию с ультратонкими иглами и щадящие швейцарские протоколы. Для пациентов с повышенной тревогой возможно лечение в условиях седации (медикаментозного сна).',
  },
  {
    question: 'Сколько служит швейцарский имплантат Straumann?',
    answer: 'Имплантаты Straumann имеют пожизненную международную гарантию производителя. Каждый пациент получает официальный паспорт имплантата с индивидуальным номером партии, действующий в любой авторизованной клинике мира.',
  },
  {
    question: 'Нужно ли обтачивать свои зубы под керамические виниры?',
    answer: 'Мы работаем исключительно под микроскопом Carl Zeiss с 30-кратным увеличением. Это позволяет выполнять микроинвазивное препарирование только в пределах эмали (0.2–0.4 мм), сохраняя витальность зуба и максимальный объем здоровых тканей.',
  },
  {
    question: 'Можно ли оплатить лечение в рассрочку?',
    answer: 'Да, в Lumina Clinic действует беспроцентная рассрочка по картам «Халва» (МТБанк), «Карта покупок» (Белгазпромбанк), «Черепаха» (ВТБ), а также внутренняя поэтапная оплата стоматологических услуг без переплат.',
  },
  {
    question: 'Как добраться до клиники и где оставить автомобиль?',
    answer: 'Мы находимся в Минске на пр-те Победителей, 106 (БЦ «Riviera Plaza»). Для всех пациентов клиники предоставляется бесплатный доступ в отапливаемый подземный паркинг Riviera Plaza (въезд со стороны ул. Радужная).',
  },
];
