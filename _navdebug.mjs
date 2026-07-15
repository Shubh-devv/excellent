import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await page.evaluate(() => window.scrollTo(0, window.innerHeight * 1.2));
await page.waitForTimeout(1000);
const count1 = await page.evaluate(() => document.querySelectorAll("header").length);
console.log("count after 1000ms:", count1);
await page.waitForTimeout(1000);
const count2 = await page.evaluate(() => document.querySelectorAll("header").length);
console.log("count after 2000ms:", count2);

if (count2 > 0) {
  const info = await page.evaluate(() => {
    const header = document.querySelector("header");
    const rect = header.getBoundingClientRect();
    let el = header.parentElement;
    const chain = [];
    while (el && chain.length < 6) {
      const cs = getComputedStyle(el);
      chain.push({ tag: el.tagName, cls: el.className, transform: cs.transform, opacity: cs.opacity, position: cs.position });
      el = el.parentElement;
    }
    return { rect, chain };
  });
  console.log(JSON.stringify(info, null, 2));
}
await browser.close();
