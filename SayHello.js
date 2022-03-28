// const driverProvider = require('./driverProvider.js');
// const webdriver = require('selenium-webdriver');
// // const fs = require('fs');

// const chromeCapabilities = webdriver.Capabilities.chrome();
// chromeCapabilities.set(
//   'chromeOptions', {
//     args: [
//       '--headless',
//       '--no-sandbox',
//     ],
//   }
// );

// const driver = new webdriver.Builder()
//   .forBrowser('chrome')
//   .withCapabilities(chromeCapabilities)
//   .build();

//   await driver.get("https://www.computest.nl/nl/");
// console.log("The test worked!!!")

// const {Builder, By, Key, util} = require("selenium-webdriver");
// // require()
// // const chromeDriver = require('@sitespeed.io/chromedriver');
// const Chrome = require('selenium-webdriver/chrome');
// const drivers = require('chromedriver');

// // const binPath = drivers.binPath();

// async function example(){
//   // const driver = driverProvider.getDriver;
//   const binPath = drivers.binPath();

// let driver = await new Builder().forBrowser("chrome").build();//.usingServer("http://localhost:4444")
// // // .build();
// await driver.get("https://www.computest.nl/nl/");
// console.log("The test worked!!!")








// let data = await driver.findElement(By.className("article__subtitle")).getText();
// // await driver.findElement(By.("")).click();
// console.log("Result is:"+ data);
// await driver.quit();
//  }
// example();

// console.log("hello")
console.log("Begin");
const driverProvider = require('./driverProvider.js');
const driver = driverProvider.getDriver();
console.log("End");
const loadGoogle = async () => {
  try {
    await driver.get('https://www.computest.nl/nl/'); 
    console.log("The test worked!!!") 
  }
  finally {
    await driver.quit();
  }
};
// loadGoogle();


// // const driverProvider = require('./driverProvider.js');
// const {Builder, By, Key, util} = require("selenium-webdriver");
// require("chromedriver");
// async function example(){
// const driver = driverProvider.getDriver();//await new Builder().forBrowser("chrome").build();//.usingServer("http://localhost:4444")
// // .build();
// await driver.get("https://www.computest.nl/nl/");
// console.log("The test worked!!!")
// let data = await driver.findElement(By.className("article__subtitle")).getText();
// // await driver.findElement(By.("")).click();
// console.log("Result is:"+ data);
// await driver.quit();
//  }
// example();

// // console.log("hello")

// const driverProvider = require('./driverProvider.js');

// const loadGoogle = async () => {
//   const driver = driverProvider.getDriver();
//   console.log("Heolloooo")
//   try {
//     await driver.get('https://www.computest.nl/nl/'); 
//     console.log("The test worked!!!") 
//   }
//   finally {
//     await driver.quit();
//   }
// };
// loadGoogle();
// // console.log("Test works!!!")


