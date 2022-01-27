const {Builder, By, Key, util} = require("selenium-webdriver");
require("chromedriver");
async function example(){
let driver = await new Builder().forBrowser("chrome").build();
await driver.get("http://localhost:3000/vragenlijst");
let data = await driver.findElement(By.id("id")).getText();
await driver.findElement(By.id("idknop")).click();
console.log(Result is:+ data);
await driver.quit();
 }
example();
