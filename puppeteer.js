const puppeteer = require("puppeteer");

const LOGIN_URL = "サイトのURL";
const width = 1280,
  height = 800;

(async () => {
  // 動作確認するために headless を一時的に false
  // 動作確認しやすいように操作を遅延させる
  const browser = await puppeteer.launch({ headless: false, slowMo: 300 });

  const page = await browser.newPage();
  await page.setViewport({ width, height });

  await page.goto(LOGIN_URL, { waitUntil: "domcontentloaded" });

  await page.type("#loginId", "ログイン時のID");
  await page.type("#loginPassword", "login時のPassword");

  await page.click('input[type="submit"]');

  await page.screenshot({ path: "test_screenshot.png", fullPage: true });

  await page.waitFor(5000);

  browser.close();
})().catch((e) => console.log(e));
