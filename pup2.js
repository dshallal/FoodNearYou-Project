puppeteer = require("puppeteer");

(async () => {
    const express = require('express');
    const cors = require('cors'); 
    const app = express();
    app.listen(3011, () => {
        console.log(`Server is running on port 3010.`);
      });
     const browser = await puppeteer.launch({headless: false});
    const context = await browser.createBrowserContext();
    await context.overridePermissions("https://google.com/", ["geolocation"]);
    const page = await context.newPage();
    await page.goto("https://www.google.com/", {waitUntil: "domcontentloaded"});
   // await page.waitForSelector('#APjFqb', {visible: true});
    await page.type('#APjFqb', "Dine In Restaurants Near Me");
    await page.keyboard.press("Enter");
    await page.waitForNavigation();
    const link3 = await page.evaluate(()=> {
        const link2 =  document.querySelector("#Odp5De > div:nth-child(1) > div > div > div > div > div > div.ixix9e > div.av9nEd > div > div.kuydt > div:nth-child(2) > div > h3 > g-more-link > a");
        const link_src = link2.getAttribute("href");
        return link_src;
    });
    await page.goto("https://google.com/" + link3);
    const details3 = await page.evaluate(() =>{
        const image = document.querySelectorAll(".rllt__details");
        let quotesArr = [];
        image.forEach((tag) => {
            quotesArr.push(tag.innerText);
        });

        return quotesArr;
    });
    console.log(details3);
    var quotesArr10 = [];
    for(let i  = 1; i < details3.length; i++){
        let indexes = details3[i].split("\n");
        quotesArr10.push(indexes[0]);
    }
    console.log(quotesArr10);
    var quotesArr11 = [];
    for(let i = 0; i < quotesArr10.length; i++){
        await page.goto("https://images.google.com/", {waitUntil: "domcontentloaded"});
        await page.waitForSelector('#APjFqb', {visible: true});
        await page.type('#APjFqb', quotesArr10[i] + "Restaurant");
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
        quotesArr11.push(images4);
        console.log(quotesArr11);
    }
        
        app.use(cors());
        app.use(express.json());
        app.get("/details3", (req, res) => {
            res.json({"details3": details3});
        })
        
        app.get("/details4", (req, res) => {
            res.json({"details4": quotesArr11});
        })
          await browser.close();
})();