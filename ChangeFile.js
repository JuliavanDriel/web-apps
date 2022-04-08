const RunChomeHeadless = true;
const chromeDriver = require('@sitespeed.io/chromedriver');
const Chrome = require('selenium-webdriver/chrome');
const {Builder, By, Key, util} = require('selenium-webdriver');
const getDriver = async () => { 
const options = new Chrome.Options; 
options.addArguments('--no-sandbox'); 
options.headless();
const service = new Chrome.ServiceBuilder(chromeDriver.binPath());
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
async function main() { 
const driver = await getDriver();
const testScriptSelenium = async () => {
try { 
const foo = await driver.get('https://www.computest.nl/nl/');
let data = await driver.findElement(By.className("article__subtitle")).getText();
console.log("Result is:"+ data);
console.log('The test worked!!!')
}
finally {
await driver.quit();
}
};
testScriptSelenium();
console.log('Test works');
}
main();