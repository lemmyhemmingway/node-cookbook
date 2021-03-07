const assert = require("assert");
const puppeteer = require("puppeteer");

async function runTest() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://twitch.tv")
    const title = await page.$eval("title", (el) => el.innerText);
    console.log("Title value", title)
    assert.strictEqual(title, "Twitch")

    browser.close();
}

runTest();