// import chrome and Selenium, create a chromedriver en run it
const RunChomeHeadless = true;
const chromeDriver = require('@sitespeed.io/chromedriver');
const Chrome = require('selenium-webdriver/chrome');

const {Builder, By, Key, util} = require("selenium-webdriver");

const getDriver = async () => {

    // options to disable functionalities on the Chromedriver
    const options = new Chrome.Options;
    options.addArguments('--no-sandbox'); //This is the important one
    // options.addArguments('--incognito');
    // options.addArguments('--disable-popup-blocking');
    // options.addArguments('--disable-default-apps');
    // options.addArguments('--disable-infobars');
    // options.addArguments('--disable-extensions');

    options.headless();

    // Create a path for the chromedriver
    const service = new Chrome.ServiceBuilder(chromeDriver.binPath());

    // Built a driver
    const driver = await new Builder().forBrowser('chrome')
          .setChromeService(service)
          .setChromeOptions(options).build();

    const timeouts = {
        implicit: 0,
        pageLoad: 6000,
        script: 3000
    };

    await driver.manage().setTimeouts(timeouts);
    return driver;
};

// Function with the test inside
async function main() {
    // Get the driver
    const driver = await getDriver();

    // The Selenium testscript 
    const testScriptSelenium = async () => {
        try {
            const foo = await driver.get('https://www.computest.nl/nl/');
            let data = await driver.findElement(By.className("article__subtitle")).getText();
            console.log(data);
            console.log("The test worked!!!")
        }
        finally {
            await driver.quit();
        }
    };
    testScriptSelenium();

    console.log("End: The test worked");

}

main();