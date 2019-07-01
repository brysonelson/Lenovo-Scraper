//imports
const puppeteer = require('puppeteer');

const sn = 'R9-0GR701';

(async () => {
    //launch the browser and go to realeflow
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://pcsupport.lenovo.com/us/en/warrantylookup');
    // await page.screenshot({ path: 'screenshots/example.png' });

    //dom element selectors for sn search
    const serialInput = ('#input_sn');
    const searchButton = ('#search-section > section > div > div > section > div.clearfix.search-input > button');

    //click into the username field and input email
    await page.click(serialInput);
    await page.keyboard.type(sn);
    await page.click(searchButton)

    await page.waitFor(5000);
    // const moreInfoChevron = ('span.icon.icon-s-down');
    await page.evaluate(() => {
        const moreInfoArrows = Array.from(document.getElementsByClassName("icon-s-down"));

        console.log(moreInfoArrows);
        for (i = 0; i < moreInfoArrows.length; i++) {
            $(moreInfoArrows[i]).click()
        }
        // return moreInfoArrows.map(arrow => {

        // })
    });

    await page.evaluate(() => {
        const warrantyTitles = Array.from(document.getElementsByClassName("introduce_title"));

        for (i = 0; i < warrantyTitles.length; i++) {
            console.log(warrantyTitles[i]);
        }
    })
    // const name = await page.$eval('.introduce_title', el => el.innerText)
    // console.log(name);
    

    // await browser.close();
})();