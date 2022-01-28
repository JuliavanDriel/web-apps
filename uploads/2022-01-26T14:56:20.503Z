const {Builder, By, Key, util} = require("selenium-webdriver");
require("test");
async function example(){
let driver = await new Builder().forBrowser("test").build();
await driver.get("test");
await driver.findElement(By.name("test")).sendKeys("test", Key.RETURN);}
example();