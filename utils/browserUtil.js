const puppeteer = require('puppeteer');

exports.performHeadlessTasks = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');
    
    await browser.close();
};
