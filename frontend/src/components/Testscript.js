const {Builder, By, Key, util} = require("selenium-webdriver");
require("hromedriver");
async function example(){
let driver = await new Builder().forBrowser("chrome").build();
await driver.get("http://localhost:3000/vragenlijst");
await driver.findElement(By.name("TitleQ")).sendKeys("Testen. Testen. Testen.", Key.RETURN);
await driver.quit();
}
example();
