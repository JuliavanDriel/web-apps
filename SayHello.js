const {Builder, By, Key, util} = require("selenium-webdriver");
require("chromedriver");
async function example(){
let driver = await new Builder().forBrowser("chrome").usingServer("http://localhost:4444")
.build();
await driver.get("https://www.computest.nl/nl/");
console.log("The test worked!!!")
let data = await driver.findElement(By.className("article__subtitle")).getText();
// await driver.findElement(By.("")).click();
console.log("Result is:"+ data);
await driver.quit();
 }
example();

// console.log("hello")