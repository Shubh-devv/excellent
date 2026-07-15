import { chromium } from "playwright";
import path from "node:path";

const outDir = path.resolve(process.argv[2] || ".");
const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();
const errors = [];
page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
page.on("pageerror", (e) => errors.push(String(e)));

// 1. Home page at top — should show embedded nav only, no floating pill
await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await page.waitForTimeout(300);
const floatingHeaderCountAtTop = await page.evaluate(() => document.querySelectorAll("header").length);
await page.screenshot({ path: path.join(outDir, "embed-top.png") });
console.log("floating <header> count at top:", floatingHeaderCountAtTop);

// call icon check (embedded)
const callHrefEmbedded = await page.evaluate(() => {
  const a = document.querySelector('a[aria-label^="Call us"]');
  return a ? a.getAttribute("href") : null;
});
console.log("embedded call href:", callHrefEmbedded);

// 2. scroll past hero — floating pill should appear
await page.evaluate(() => window.scrollTo(0, window.innerHeight * 1.2));
await page.waitForTimeout(500);
const floatingHeaderCountScrolled = await page.evaluate(() => document.querySelectorAll("header").length);
await page.screenshot({ path: path.join(outDir, "embed-scrolled.png") });
console.log("floating <header> count after scroll:", floatingHeaderCountScrolled);

// 3. scroll back up — floating pill should disappear again
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(500);
const floatingHeaderCountBack = await page.evaluate(() => document.querySelectorAll("header").length);
console.log("floating <header> count back at top:", floatingHeaderCountBack);

// 4. other page — should show floating nav immediately
await page.goto("http://localhost:3000/about", { waitUntil: "networkidle" });
await page.waitForTimeout(300);
const aboutHeaderCount = await page.evaluate(() => document.querySelectorAll("header").length);
await page.screenshot({ path: path.join(outDir, "embed-about.png") });
console.log("about page header count:", aboutHeaderCount);

console.log("console errors:", errors);
await browser.close();
