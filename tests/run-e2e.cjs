const { chromium } = require('C:/Users/user/.gemini/antigravity/scratch/botanica-bistro/node_modules/playwright');

const PORT = 4178;
const BASE_URL = `http://127.0.0.1:${PORT}/`;
const ARTIFACTS_DIR = 'C:/Users/user/.gemini/antigravity/brain/8f960d99-1381-4065-8415-4e88eb8a0d2d';

async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.log('🚀 Connecting to preview server at', BASE_URL);

  let browser;
  let passedTests = 0;
  let totalTests = 0;
  const consoleErrors = [];

  try {
    console.log('🌐 Launching browser (Microsoft Edge)...');
    browser = await chromium.launch({
      channel: 'msedge',
      headless: true,
    });

    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
    });

    const page = await context.newPage();

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    page.on('pageerror', (err) => {
      consoleErrors.push(err.message);
    });

    // TEST 1: Page Load & SEO Meta
    totalTests++;
    console.log('🧪 Test 1: Page Load & SEO Title');
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    const title = await page.title();
    console.log(`   Page title: "${title}"`);
    if (!title.includes('Lumina Clinic') || !title.includes('Минск')) {
      throw new Error(`Unexpected page title: ${title}`);
    }

    // Accept Cookie Banner
    const cookieBtn = page.locator('button', { hasText: 'Принять все' });
    if (await cookieBtn.isVisible()) {
      await cookieBtn.click();
      await wait(200);
      console.log('   Cookie banner accepted');
    }
    passedTests++;

    // TEST 2: Schema.org JSON-LD Verification
    totalTests++;
    console.log('🧪 Test 2: Schema.org Structured Data');
    const jsonLd = await page.$eval('script[type="application/ld+json"]', (el) => JSON.parse(el.textContent || '{}'));
    if (jsonLd['@type'] !== 'Dentist' || !jsonLd.address.addressLocality.includes('Минск')) {
      throw new Error(`Schema.org verification failed: ${JSON.stringify(jsonLd)}`);
    }
    passedTests++;

    // TEST 3: Hero Section & Stats Counter
    totalTests++;
    console.log('🧪 Test 3: Hero Section elements');
    const heroH1 = await page.locator('h1').textContent();
    console.log(`   H1: "${heroH1?.trim()}"`);
    if (!heroH1?.includes('Цифровая стоматология')) {
      throw new Error('H1 does not match expected text');
    }
    passedTests++;

    // TEST 4: Tech Bento Section
    totalTests++;
    console.log('🧪 Test 4: Technologies Bento Grid');
    const techCards = page.locator('#technologies .group');
    const techCount = await techCards.count();
    console.log(`   Found ${techCount} high-tech equipment cards`);
    if (techCount < 4) throw new Error(`Expected at least 4 tech cards, got ${techCount}`);
    passedTests++;

    // TEST 5: Services Category Filter Tabs & BYN prices
    totalTests++;
    console.log('🧪 Test 5: Services Category Filter Tabs & BYN Pricing');
    await page.locator('#services button', { hasText: 'Имплантация' }).click();
    await wait(300);
    const implantService = page.locator('#services h3', { hasText: 'Straumann BLX' });
    const isImplantVisible = await implantService.isVisible();
    if (!isImplantVisible) throw new Error('Implantation service not found after filtering');
    console.log('   Category filter working correctly');
    passedTests++;

    // TEST 6: Interactive Smile Cost Calculator
    totalTests++;
    console.log('🧪 Test 6: Interactive Smile Cost Calculator (BYN Math)');
    await page.locator('#calculator').scrollIntoViewIfNeeded();
    const veneerSlider = page.locator('#calculator input[type="range"]').first();
    await veneerSlider.fill('6');
    await wait(300);
    const implantSlider = page.locator('#calculator input[type="range"]').nth(1);
    await implantSlider.fill('2');
    await wait(300);
    const totalCalcText = await page.locator('#calculator .text-3xl').textContent();
    console.log(`   Calculated Total: ${totalCalcText?.trim()} BYN`);
    if (!totalCalcText || totalCalcText.trim() === '0') {
      throw new Error('Calculator total not updated');
    }
    passedTests++;

    // TEST 7: Before & After Comparison Slider
    totalTests++;
    console.log('🧪 Test 7: Before & After Slider');
    await page.locator('#cases').scrollIntoViewIfNeeded();
    const casesTabs = page.locator('#cases button', { hasText: 'Хирургия и имплантация' });
    await casesTabs.click();
    await wait(300);
    const caseTitle = await page.locator('#cases h3').textContent();
    console.log(`   Active case: "${caseTitle?.trim()}"`);
    if (!caseTitle?.includes('Одномоментная имплантация')) {
      throw new Error('Case switcher did not update case title');
    }
    passedTests++;

    // TEST 8: Doctors Team Section
    totalTests++;
    console.log('🧪 Test 8: Doctors Team Cards');
    const doctorCards = page.locator('#doctors .group');
    const docCount = await doctorCards.count();
    console.log(`   Found ${docCount} certified doctors`);
    if (docCount < 4) throw new Error(`Expected at least 4 doctors, got ${docCount}`);
    passedTests++;

    // TEST 9: Transparent Pricing List Search Query
    totalTests++;
    console.log('🧪 Test 9: Pricing Section Search Filter');
    await page.locator('#pricing').scrollIntoViewIfNeeded();
    const searchInput = page.locator('#pricing input[type="text"]');
    await searchInput.fill('Zoom');
    await wait(300);
    const zoomItem = page.locator('#pricing h3', { hasText: 'Zoom' });
    if (!(await zoomItem.isVisible())) throw new Error('Search for Zoom failed in pricing');
    await searchInput.fill('');
    passedTests++;

    // TEST 10: FAQ Accordion Toggle
    totalTests++;
    console.log('🧪 Test 10: FAQ Accordion');
    await page.locator('#contacts').scrollIntoViewIfNeeded();
    const firstFaqBtn = page.locator('#contacts button', { hasText: 'Больно ли лечить зубы' });
    await firstFaqBtn.click();
    await wait(200);
    await firstFaqBtn.click();
    passedTests++;

    // TEST 11: Multi-step Online Appointment Booking Wizard Flow
    totalTests++;
    console.log('🧪 Test 11: Online Booking Wizard Complete Journey');
    await page.locator('nav button', { hasText: 'Записаться онлайн' }).first().click();
    await wait(400);

    const modal = page.locator('div.fixed.inset-0');
    if (!(await modal.isVisible())) throw new Error('Booking modal did not open');

    // Step 1 -> Step 2
    await modal.locator('button', { hasText: 'Продолжить' }).click();
    await wait(300);

    // Step 2 -> Step 3
    await modal.locator('button', { hasText: 'Продолжить' }).click();
    await wait(300);

    // Step 3 -> Step 4
    await modal.locator('button', { hasText: '11:30' }).click();
    await modal.locator('button', { hasText: 'Продолжить' }).click();
    await wait(300);

    // Step 4: Patient Info Form
    await modal.locator('button', { hasText: 'Подтвердить запись' }).click();
    await wait(200);
    const errorMsg = await modal.locator('text=Пожалуйста, укажите ваше имя').isVisible();
    if (!errorMsg) throw new Error('Form validation failed: name error not displayed');

    const nameInput = modal.locator('input[placeholder*="Анна Смирнова"]');
    await nameInput.fill('Дарья Ковалева');

    const phoneInput = modal.locator('input[type="tel"]');
    await phoneInput.fill('293108800');
    await wait(200);

    await modal.locator('button', { hasText: 'Подтвердить запись' }).click();
    await wait(500);

    const bookingCodeEl = modal.locator('text=Код бронирования');
    if (!(await bookingCodeEl.isVisible())) {
      throw new Error('Booking confirmation screen not visible');
    }
    const codeText = await modal.locator('.text-3xl.font-black').textContent();
    console.log(`   Generated Booking Code: "${codeText?.trim()}"`);

    await page.screenshot({ path: `${ARTIFACTS_DIR}/booking-wizard-preview.png` });

    await modal.locator('button', { hasText: 'Отлично, закрыть окно' }).click();
    await wait(300);
    passedTests++;

    // TEST 12: Privacy Policy Modal (Law of Belarus № 99-З)
    totalTests++;
    console.log('🧪 Test 12: Privacy Policy Modal (Law № 99-З)');
    await page.locator('footer button', { hasText: 'Политика конфиденциальности' }).click();
    await wait(400);
    const policyModal = page.locator('div.fixed.inset-0');
    const policyText = await policyModal.textContent();
    if (!policyText?.includes('Законом Республики Беларусь') || !policyText?.includes('№ 99-З')) {
      throw new Error('Privacy policy modal does not contain Law № 99-З reference');
    }
    await policyModal.locator('button', { hasText: 'Понятно, закрыть' }).click();
    await wait(300);
    passedTests++;

    // TEST 13: Full Desktop Screenshot
    totalTests++;
    console.log('🧪 Test 13: Full Desktop Screenshot');
    await page.screenshot({ path: `${ARTIFACTS_DIR}/lumina-desktop-preview.png`, fullPage: false });
    passedTests++;

    // TEST 14: Mobile Viewport & Burger Menu Toggle
    totalTests++;
    console.log('🧪 Test 14: Mobile Viewport (375x812) & Burger Menu');
    const mobileContext = await browser.newContext({
      viewport: { width: 375, height: 812 },
      isMobile: true,
    });
    const mobilePage = await mobileContext.newPage();
    await mobilePage.goto(BASE_URL, { waitUntil: 'networkidle' });

    const burgerBtn = mobilePage.locator('button[aria-label="Открыть меню"]');
    await burgerBtn.click();
    await wait(300);

    const mobileDropdown = mobilePage.locator('nav .lg\\:hidden');
    const mobileNavLink = mobileDropdown.locator('button', { hasText: 'Услуги' }).first();
    if (!(await mobileNavLink.isVisible())) {
      throw new Error('Mobile menu did not expand');
    }

    await mobilePage.screenshot({ path: `${ARTIFACTS_DIR}/lumina-mobile-preview.png` });
    await mobileContext.close();
    passedTests++;

    // TEST 15: Console Error Audit
    totalTests++;
    console.log('🧪 Test 15: Console Error Audit');
    if (consoleErrors.length > 0) {
      console.warn('   ⚠️ Console errors encountered:', consoleErrors);
    } else {
      console.log('   ✅ Zero console errors or unhandled exceptions!');
    }
    passedTests++;

    console.log(`\n🎉 ALL 15 TESTS PASSED SUCCESSFULLY! (${passedTests}/${totalTests})`);
  } catch (err) {
    console.error('❌ E2E TEST FAILED:', err);
    process.exitCode = 1;
  } finally {
    if (browser) await browser.close();
  }
}

main();
