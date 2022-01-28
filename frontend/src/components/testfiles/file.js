const {Builder, By, Key, util} = require("selenium-webdriver");
require("chromedriver");
async function example(){
let driver = await new Builder().forBrowser("chrome").build();
await driver.get("http://localhost:3000/vragenlijst");
await driver.findElement(By.id("SeleniumBtn")).click();
await driver.findElement(By.id("InputSeleniumQ1")).sendKeys("chromedriver");
let data = await driver.findElement(By.id("SeleniumQ1")).getText();
console.log('Result is:'+ data);
await driver.quit();
}
example();

