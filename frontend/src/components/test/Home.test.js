const puppeteer = require('puppeteer')

//Open chrome in an test environment, Chromium called
// test("should count the tool, if function is true", async()=>{
//     const browser = puppeteer.launch({
//         headless : false,
//         slowMo: 80,
//         args:['--window-size=1920,1080']
//     });
//     const page = await (await browser).newPage();
//     // Open the website
//     await page.goto("http://localhost:3000/");
//     // Click on button 'Testscript maken'
//     await page.click("#QuestionPage");
//     // Click on checkbox functioneel
//     await page.click("#checkFunctioneel");
//     // check if the title renders the good one
//     const text = await page.$eval('h1', element =>element.textContent)
//     console.log(text)
//     expect(text).toBe('Testen. Testen. Testen.')
//     // Counts the tools that renders, because of the checkbox
//     const count = await page.$$eval('li', element =>element.length);
//     console.log("There must be 5 tools to render: "+count);
//     expect(count).toBe(5)
//     // Close page
//     await page.close();
//     // Close browser
//     (await browser).close();
// }, 30000);


// test("should create script", async()=>{
//     const browser = puppeteer.launch({
//         headless : false,
//         slowMo: 80,
//         args:['--window-size=1920,1080']
//     });
//     const page = await (await browser).newPage();
//     await page.goto("http://localhost:3000/vragenlijst");
//     await page.click("#SeleniumBtn");
//     await page.type("input#InputSeleniumQ1", "chromedriver")
//     await page.type("input#InputSeleniumQ2", "chrome")
//     await page.type("input#InputSeleniumQ3", "http://localhost:3000/vragenlijst")
//     await page.type("input#InputSeleniumQ4", "chromedriver")
//     await page.type("input#InputSeleniumQ5", "InputSeleniumQ1")
//     await page.click("#CreateScriptBtn");
//     const textid = ("#proberen")
//     const text = await page.$eval(textid.valueOf(), element =>element.textContent)
//     console.log(text)
//     expect(text).toBe('Seleniumx 1const {Builder, By, Key, util} = require("selenium-webdriver");' + "\n" +
//     '2require("chromedriver");' + "\n" +
//     "3async function example(){" +"\n" +
//     '4let driver = await new Builder().forBrowser("chrome").build();' +"\n" +
//     '5await driver.get("' +
//     "http://localhost:3000/vragenlijst" + '");' + "\n" +
//     '6await driver.findElement(By.name("' + "InputSeleniumQ1"+'")).sendKeys("' + "chromedriver" +'", Key.RETURN);}' +"\n" + 
//     "7example();")
//     // Close page
//     await page.close();
//     // Close browser
//     (await browser).close();
// },100000);



// const NaamVanVariableSearchBar = $("#IdVanDeSearchBar")
// const NaamVanVariableKnop = $("#IdVanDeButton")
// NaamVanVariableSearchBar.addValue("WatErIngevuldMoetWordenInDeZoekBar")
// NaamVanVariableKnop.click()


test("test if the file is going to be filled with data and run test", async() =>{
    const browser = puppeteer.launch({
        headless : false,
        slowMo: 80,
        args:['--window-size=1920,1080']
    });
    // Launch Chromium
    const page = await (await browser).newPage();
    //  Go to page
    await page.goto("http://localhost:3000/vragenlijst");
    // Click om Selenium button
    await page.click("#SeleniumBtn");
    // Fill in inputfield
    await page.type("input#InputSeleniumQ3", "https://www.computest.nl/nl/")
    // Click on checkbox functioneel
    await page.click("#CheckTitleid"); 
    // Fill in inputfield
    await page.type("input#BtnText", "article__subtitle") 
    // Create testscript
    await page.click("#CreateScriptBtn"); 
    // Change file
    await page.click("#executeScriptBtn");
    // Run Testscript
    await page.click("#executeScriptChangeBtn"); 
    // Wait for 10 minutes
    // await page.waitForTimeout(600000);
    // // Close page
    await page.close();
    // Close browser
    (await browser).close();
},100000);



// test("test if the results is on the page", async() =>{
//     const browser = puppeteer.launch({
//         headless : false,
//         slowMo: 80,
//         args:['--window-size=1920,1080']
//     });
//     const page = await (await browser).newPage();
//     await page.goto("http://localhost:3000/uitvoerenScript?url="); 
//     const textid = ("#RenderResultScript")
//     const text = await page.$eval(textid.valueOf(), element =>element.textContent)
//         console.log(text)
//         expect(text).toBe("say hello")
//     // Close page
//     await page.close();
//     // Close browser
//     (await browser).close();
// },100000);
    





// // Mock out all top level functions, such as get, put, delete and post:
// jest.mock("axios");

// // ...

// test("good response", () => {
//   axios.get.mockImplementation(() => Promise.resolve({ data: {} }));
//   // ...
// });


// test("should click around", async()=>{
//     const browser = puppeteer.launch({
//         headless : false,
//         slowMo: 80,
//         args:['--window-size=1920,1080']
//     });
//     const page = await (await browser).newPage();
//     await page.goto("http://localhost:3000/vragenlijst");

// },10000);


