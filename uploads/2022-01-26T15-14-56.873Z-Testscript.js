const {Builder, By, Key, util} = require("selenium-webdriver");
require("chromedriver");
async function example(){
let driver = await new Builder().forBrowser("chrome").build();
await driver.get("http://localhost:3000/vragenlijst");
await driver.findElement(By.name("TitleQ")).sendKeys("Testen. Testen. Testen.", Key.RETURN);}
//driver.quit()
example();
