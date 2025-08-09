const puppeteer = require('puppeteer');
(async () => {
    // 1. Start a new browser
    const browser = await puppeteer.launch({ headless: false }); // headless: false means we SEE the browser window

    // 2. Open a new tab/page
    const page = await browser.newPage();

    // 3. Go to a website
    await page.goto('https://example.com');

    // 4. Get the page title and print it in the console
    console.log('Page title:', await page.title());

    // 5. Close the browser
    await browser.close();
})();