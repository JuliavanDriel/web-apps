const {Builder, By, Key, util} = require("selenium-webdriver");
require("chromedriver");
async function example(){
let driver = await new Builder().forBrowser("chrome").build();
await driver.get("http://localhost:3000/");
await driver.findElement(By.name("txt")).sendKeys("hello", Key.RETURN);}
example();

