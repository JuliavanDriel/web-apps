const {Builder, By, Key, util} = require("selenium-webdriver");
require("");
async function example(){
let driver = await new Builder().forBrowser("").build();
await driver.get("");
await driver.quit();
 }
example();