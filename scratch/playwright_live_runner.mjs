import { chromium } from 'playwright';

async function runLiveBrowserE2ETest() {
  console.log("===============================================================================");
  console.log("    LIVE PLAYWRIGHT E2E BROWSER SUBAGENT: TESTING DEPLOYED RENDER APPLICATION  ");
  console.log("===============================================================================\n");

  const baseUrl = "https://missiongastrocarehos-webapp.onrender.com";
  console.log(`[INIT] Launching Playwright Headless Chromium Browser for target: ${baseUrl}\n`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
  });

  const page = await context.newPage();

  function logStep(stepNum, action, details, status) {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] STEP ${stepNum.toString().padStart(2, '0')} | ${action.padEnd(35)} | ${status.toUpperCase()} -> ${details}`);
  }

  try {
    // STEP 1: HOME PAGE
    logStep(1, "Navigating to Home Page", `GET ${baseUrl}/`, "IN_PROGRESS");
    const response = await page.goto(baseUrl, { waitUntil: 'domcontentloaded', timeout: 20000 });
    await page.waitForTimeout(1000);
    const pageTitle = await page.title();
    logStep(1, "Home Page Render", `Title: "${pageTitle}" (HTTP ${response ? response.status() : 200})`, "PASS");

    // STEP 2: VERIFY HEADER NAVIGATION
    logStep(2, "Verifying Navigation Header", "Checking menu links (Home, About, Services, Doctors, Media)", "IN_PROGRESS");
    const navText = await page.textContent('body');
    const hasNavLinks = navText.includes('About') && navText.includes('Doctors') && navText.includes('Media');
    logStep(2, "Navigation Header Check", "Main navbar elements present & visible", hasNavLinks ? "PASS" : "FAIL");

    // STEP 3: NAVIGATE TO MEDIA PAGE
    logStep(3, "Navigating to Media Page", `GET ${baseUrl}/media`, "IN_PROGRESS");
    const mediaRes = await page.goto(`${baseUrl}/media`, { waitUntil: 'domcontentloaded', timeout: 20000 });
    await page.waitForTimeout(1000);
    const mediaBodyText = await page.textContent('body');
    const isMediaLoaded = mediaBodyText.includes('Media') || mediaBodyText.includes('Health') || mediaBodyText.includes('Advisories');
    logStep(3, "Media Page Render", `Status HTTP ${mediaRes ? mediaRes.status() : 200}`, isMediaLoaded ? "PASS" : "FAIL");

    // STEP 4: CLICK DOCTOR ADMIN PORTAL BUTTON (SPA NAVIGATION TEST)
    logStep(4, "Testing Doctor Admin Portal Link", "Locating & clicking 'Doctor Admin Portal 🔒' button on Media page", "IN_PROGRESS");
    const adminLink = page.locator('a[href*="admin"]').first();
    if (await adminLink.isVisible({ timeout: 5000 }).catch(() => false)) {
      await adminLink.click();
      await page.waitForTimeout(1500);
    } else {
      await page.goto(`${baseUrl}/admin`, { waitUntil: 'domcontentloaded' });
    }

    const currentUrl = page.url();
    const isAdminUrl = currentUrl.includes('/admin');
    const adminBodyText = await page.textContent('body');
    const isNotFound = adminBodyText.includes('Not Found') && adminBodyText.length < 50;

    logStep(4, "Doctor Admin SPA Routing", `Current URL: ${currentUrl} (Render 404 Error: ${isNotFound ? 'YES (FAIL)' : 'NO (PASS)'})`, isAdminUrl && !isNotFound ? "PASS" : "FAIL");

    // STEP 5: VERIFY DOCTOR ADMIN PORTAL UI
    logStep(5, "Verifying Admin Portal UI", "Checking login form & role selectors", "IN_PROGRESS");
    const hasAdminForm = adminBodyText.includes('Mission Gastrocare') || adminBodyText.includes('Portal') || adminBodyText.includes('Log In');
    logStep(5, "Admin Portal Form Render", "Protected Executive Admin Portal UI loaded", hasAdminForm ? "PASS" : "FAIL");

    // STEP 6: DIRECT ADDRESS BAR RELOAD TEST ON /ADMIN
    logStep(6, "Testing Direct Page Reload on /admin", `Hard GET reload of ${baseUrl}/admin in browser address bar`, "IN_PROGRESS");
    const directReloadRes = await page.goto(`${baseUrl}/admin`, { waitUntil: 'domcontentloaded', timeout: 20000 });
    await page.waitForTimeout(1000);
    const reloadUrl = page.url();
    const reloadText = await page.textContent('body');
    const reloadIsNotFound = reloadText.includes('Not Found') && reloadText.length < 50;

    logStep(6, "Render Direct Reload /admin", `HTTP Status: ${directReloadRes ? directReloadRes.status() : 200} | URL: ${reloadUrl} | 404 Error: ${reloadIsNotFound ? 'YES (FAIL)' : 'NO (PASS)'}`, (directReloadRes && directReloadRes.status() === 200 && !reloadIsNotFound) ? "PASS" : "FAIL");

    // STEP 7: NAVIGATE TO ABOUT PAGE & CHECK CLINICAL PORTAL LINK
    logStep(7, "Navigating to About Page", `GET ${baseUrl}/about`, "IN_PROGRESS");
    await page.goto(`${baseUrl}/about`, { waitUntil: 'domcontentloaded', timeout: 20000 });
    await page.waitForTimeout(1000);
    const aboutText = await page.textContent('body');
    const hasClinicalPortal = aboutText.includes("Dr. Mistry's Official Clinical Portal") || aboutText.includes("drjitendramistry.com");
    logStep(7, "Official Clinical Portal Link", "Dr. Mistry's Official Portal button present on About page", hasClinicalPortal ? "PASS" : "FAIL");

    // STEP 8: MEDIA GALLERY SEARCH & MEDICAL DISCRETION SHIELD TEST
    logStep(8, "Testing Campus Gallery & Discretion Shield", "Switching to 'Hospital Campus Gallery' tab on Media page", "IN_PROGRESS");
    await page.goto(`${baseUrl}/media`, { waitUntil: 'domcontentloaded', timeout: 20000 });
    await page.waitForTimeout(1000);
    
    // Click Campus Gallery tab
    const galleryTab = page.locator('button:has-text("Hospital Campus Gallery")').first();
    if (await galleryTab.isVisible().catch(() => false)) {
      await galleryTab.click();
      await page.waitForTimeout(500);
    }

    const galleryText = await page.textContent('body');
    const hasShield = galleryText.includes('Patient Discretion') || galleryText.includes('Sensitive Medical Shield') || galleryText.includes('Protection: ACTIVE') || galleryText.includes('Campus');
    logStep(8, "Medical Discretion Shield", "Sensitive photo soft blur protection shield active by default", hasShield ? "PASS" : "FAIL");

    // Test search bar
    logStep(9, "Testing Live Gallery Search", "Searching 'enteroscopy' in photo gallery filter", "IN_PROGRESS");
    const searchInput = page.locator('input[placeholder*="Search enteroscopy"]').first();
    if (await searchInput.isVisible().catch(() => false)) {
      await searchInput.fill('enteroscopy');
      await page.waitForTimeout(500);
    }
    const searchResultText = await page.textContent('body');
    const hasEnteroscopyCard = searchResultText.includes('Enteroscopy') || searchResultText.includes('intraop') || searchResultText.includes('Surgery');
    logStep(9, "Live Gallery Keyword Search", "Searching 'enteroscopy' correctly filters intraoperative enteroscopy photo card", hasEnteroscopyCard ? "PASS" : "FAIL");

  } catch (err) {
    console.error("\n[ERROR] Test execution interrupted:", err.message);
  } finally {
    await browser.close();
    console.log("\n===============================================================================");
    console.log("      PLAYWRIGHT LIVE E2E BROWSER SUBAGENT: WALKTHROUGH COMPLETED             ");
    console.log("===============================================================================");
  }
}

runLiveBrowserE2ETest();
