const {Builder} = require("selenium-webdriver");
require("chromedriver");

async function example(){
let driver = await new Builder().forBrowser("chrome").build();
await driver.get("http://localhost:3000/vragenlijst");
 }
example();
