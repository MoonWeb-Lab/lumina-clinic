# Lumina Clinic — Центр цифровой стоматологии и эстетики улыбки (Минск)

[![Deploy to GitHub Pages](https://github.com/MoonWeb-Lab/lumina-clinic/actions/workflows/deploy.yml/badge.svg)](https://github.com/MoonWeb-Lab/lumina-clinic/actions/workflows/deploy.yml)
[![Live Demo](https://img.shields.io/badge/demo-online-teal.svg)](https://moonweb-lab.github.io/lumina-clinic/)
[![E2E Tests](https://img.shields.io/badge/playwright-15%2F15%20passed-success.svg)](https://playwright.dev/)

> **Портфолио веб-студии MoonWeb Lab — Кейс 3**  
> Премиальный веб-сайт цифровой стоматологии экспертного уровня, спроектированный по швейцарским стандартам визуальной эстетики (Swiss High-Tech Medical Clean).

---

## 💎 Концепция и дизайн-система

В отличие от темного барбершопа (*Blade & Timber*) и теплого терракотового бистро (*Botanica Bistro*), для **Lumina Clinic** разработана кардинально новая концепция:
- **Эстетика**: Белоснежная кристальная чистота, медицинская точность, светящиеся аквамариновые и бирюзовые акценты, доверие и авторитет.
- **Цветовая палитра**:
  - `Clinic Pure White` (`#FFFFFF` / `#F8FAFC`) — стерильность, воздух и легкость.
  - `Medical Aquamarine & Deep Teal` (`#0D9488` / `#0F766E`) — высокотехнологичная медицина.
  - `Ice Mint & Glacier Cyan` (`#CCFBF1` / `#0284C7`) — мягкое технологичное свечение.
  - `Deep Navy Slate` (`#0F172A` / `#1E293B`) — контрастная, строгая типографика.
- **Шрифт**: `Plus Jakarta Sans` — ультрасовременный геометрический гротеск с превосходной читаемостью цифр и цен.

---

## ⚡ Ключевой функционал

1. **Многошаговый интерактивный визард онлайн-записи (`AppointmentModal`):**
   - Шаг 1: Выбор стоматологической услуги (3D-сканирование, микроскоп Zeiss, виниры E.max, имплантаты Straumann, элайнеры Spark).
   - Шаг 2: Выбор врача-специалиста (портрет, опыт, высшая категория, сертификаты) или опция «Любой свободный врач».
   - Шаг 3: Выбор даты и слота времени на 7 дней вперед с указанием длительности приёма.
   - Шаг 4: Форма контактов с автоматической белорусской маской `+375 (XX) XXX-XX-XX` и валидацией кодов операторов А1/МТС/Life/город (29, 33, 44, 25, 17) + согласие с Законом РБ № 99-З.
   - Шаг 5: Экран успешного бронирования с персональным кодом талона (напр. `#LUM-8101`), сохранением слота и бесплатного подземного паркинга.

2. **Интерактивный калькулятор улыбки (`SmileCalculator`):**
   - Ползунки выбора количества виниров E.max (0–16 ед.) и имплантов Straumann (0–6 ед.).
   - Чекбоксы 3D-сканирования iTero, SPA-гигиены Air Flow, Zoom 4 и элайнеров.
   - Мгновенный пересчет общей стоимости в BYN и расчет беспроцентной рассрочки 0% на 12 месяцев (карты «Халва», «Карта покупок»).
   - Кнопка «Зафиксировать расчет и записаться» передает выбранные опции в форму записи.

3. **Интерактивный слайдер До/После (`BeforeAfterSlider`):**
   - Плавное сравнение результатов лечения в реальных клинических кейсах с перетягиванием разделителя.

4. **Бенто-грид технологий (`TechBentoSection`):**
   - Carl Zeiss Extaro 300 (Германия) — увеличение до 30x.
   - iTero Element 5D Plus (Швейцария/США) — 3D-слепки за 60 секунд с NIRI-диагностикой.
   - Straumann BLX SLActive (Швейцария) — пожизненная международная гарантия.
   - Philips Zoom 4 WhiteSpeed (США) — бережное отбеливание холодным LED-светом.

5. **Локализация в Минске (Беларусь):**
   - Адрес: г. Минск, пр-т Победителей, 106 (БЦ Riviera Plaza).
   - Бесплатный отапливаемый подземный паркинг.
   - Телефоны: `+375 (29) 310-88-00`, `+375 (17) 220-88-00`.
   - Реквизиты: ООО «Люмина Клиник», УНП 193618492, Лицензия Минздрава РБ № 02040/8391.
   - Юридическая чистота: Политика конфиденциальности и Cookie-баннер соответствуют Закону РБ № 99-З «О защите персональных данных» и требованиям НЦЗПД.

---

## 🛠 Стек технологий

- **Фреймворк:** React 18 + TypeScript + Vite
- **Стилизация:** Tailwind CSS + кастомные токены теней и градиентов
- **Иконки:** Lucide React
- **Тестирование:** Playwright (автоматизированный аудит 15 тестов, Microsoft Edge)
- **CI/CD:** GitHub Actions + GitHub Pages

---

## 🧪 Результаты тестирования Playwright

```text
🧪 Test 1: Page Load & SEO Title — Passed
🧪 Test 2: Schema.org Structured Data — Passed
🧪 Test 3: Hero Section elements — Passed
🧪 Test 4: Technologies Bento Grid — Passed
🧪 Test 5: Services Category Filter Tabs & BYN Pricing — Passed
🧪 Test 6: Interactive Smile Cost Calculator (BYN Math) — Passed
🧪 Test 7: Before & After Slider — Passed
🧪 Test 8: Doctors Team Cards — Passed
🧪 Test 9: Pricing Section Search Filter — Passed
🧪 Test 10: FAQ Accordion — Passed
🧪 Test 11: Online Booking Wizard Complete Journey — Passed (Code #LUM-8101)
🧪 Test 12: Privacy Policy Modal (Law № 99-З) — Passed
🧪 Test 13: Full Desktop Screenshot — Passed
🧪 Test 14: Mobile Viewport (375x812) & Burger Menu — Passed
🧪 Test 15: Console Error Audit — Passed (0 errors)

🎉 ALL 15/15 TESTS PASSED SUCCESSFULLY!
```

---

© MoonWeb Lab. Разработано для демонстрации в коммерческом портфолио студии.
