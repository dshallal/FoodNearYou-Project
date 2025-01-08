const puppeteer = require("puppeteer");

(async () => {
    const express = require('express');
    const cors = require('cors');
    
    const app = express();
    app.listen(3010, () => {
        console.log(`Server is running on port 3010.`);
      });
    const browser = await puppeteer.launch({headless: false});
    const context = await browser.createBrowserContext();
    await context.overridePermissions("https://google.com/", ["geolocation"]);
    const page = await context.newPage();
    await page.goto("https://www.google.com/", {waitUntil: "domcontentloaded"});
    await page.waitForSelector('#APjFqb', {visible: true});
    await page.type('#APjFqb', "Fast Food Near Me");
    await page.keyboard.press("Enter");
    await page.waitForNavigation();
    //await page.click("#Odp5De > div > div > div.ixix9e > div:nth-child(2) > div.av9nEd > div > div.kuydt > div:nth-child(2) > div > h3 > g-more-link > a");
    const link = await page.evaluate(()=> {
        const element = document.querySelector('a.CHn7Qb.pYouzb');
        const href = element.getAttribute('href');
        return href;
    });
    await page.goto("https://google.com/" + link);
    await page.screenshot({path: "web.png"});
    const details = await page.evaluate(() =>{
        const image = document.querySelectorAll(".rllt__details");
        let quotesArr = [];
        image.forEach((tag) => {
            quotesArr.push(tag.innerText);
        });

        return quotesArr;
    });
    console.log(details);
    var quotesArr2 = [];
    for(let i  = 1; i < details.length; i++){
        let indexes = details[i].split("\n");
        quotesArr2.push(indexes[0]);
    }
    console.log(quotesArr2);
    var quotesArr3 = [];
    for(let i = 0; i < quotesArr2.length; i++){
        await page.goto("https://images.google.com/", {waitUntil: "domcontentloaded"});
        await page.waitForSelector('#APjFqb', {visible: true});
        await page.type('#APjFqb', quotesArr2[i]);
        await page.keyboard.press("Enter");
        await page.waitForNavigation();
        //await page.waitForNavigation();
        const images4 = await page.evaluate(() => {
            let arr3 = "";
            if(document.querySelector(".mNsIhb") != null){
            var image3 = document.querySelector(".mNsIhb img");
            arr3 = image3.src
            return arr3;
            }
            else{
                arr3 = "";
            }
        });
        quotesArr3.push(images4);
        console.log(quotesArr3);
    }

app.use(cors());
app.use(express.json());

app.get('/details1', (req, res) => {
    res.json({ "details1": details});
});

app.get("/details2", (req, res) => {
    res.json({"details2": quotesArr3});
})
    
    await browser.close();



})();
