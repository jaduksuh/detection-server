const puppeteer = require('puppeteer');
const cron = require('node-cron');
const fs = require('fs');
//const moment = require('moment');
const nodemailer = require('nodemailer');

let rawjson = fs.readFileSync('./websites_signup.json');
let websites = JSON.parse(rawjson);

let mailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'oprah.plusidentity@gmail.com',
    pass: 'oprahPiTest*'
  }
});

// Testing
/*
(async () => {
  for(let website in websites) {
    if(website !== "wordpress") continue;
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(websites[website]["url"]);
    const title = await page.title();
    const url = await page.url();
    console.log(title, url);

    if("startButton" in websites[website]) {
      for (button of websites[website]["startButton"]) {
        await page.click(button);
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    // wait 2.5 seconds for the page to fully load
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    const findSelector = (element) => {
      let webfile = require(`./config_files/${website}.js`);
      let cssElements = [];
      switch (element) {
        case "email":
          for (let field of webfile["manualActionConfig"]["signup"]["listenFields"]) {
            if (field["content"]["dataField"] === "_emailAddress") {
              cssElements = cssElements.concat(field["content"]["elementSelectors"]);
            }
          }
          return cssElements;
          break;
        case "password":
          for (let field of webfile["manualActionConfig"]["signup"]["listenFields"]) {
            if (field["content"]["dataField"] === "password") {
              cssElements = cssElements.concat(field["content"]["elementSelectors"]);
            }
          }
          return cssElements;
          break;
        case "username":
          for (let field of webfile["manualActionConfig"]["signup"]["listenFields"]) {
            if (field["content"]["dataField"] === "_username") {
              cssElements = cssElements.concat(field["content"]["elementSelectors"]);
            }
          }
          return cssElements;
          break;
        case "button":
          for (let field of webfile["manualActionConfig"]["signup"]["triggerEvents"]) {
            cssElements = cssElements.concat(field["content"]["elementSelectors"]);
          }
          return cssElements;
          break;
        default:
          throw new Error("Unidentified element type!!");
      }
    }

    for(let element of websites[website]["elements"]) {
      let targetElements = findSelector(element); console.log(targetElements);
      let elementExists = false;
      for (targetElement of targetElements) {
        const grabElement = await page.evaluate((targetElement) => {
          return document.querySelector(targetElement);      
        }, targetElement);
        if(grabElement !== null) {
          elementExists = true; break;
        }
      }
      
      
      if(elementExists) console.log("Existing Element!");
      else {
        console.log("Non-existent element!");
        let mailDetails = {
          from: 'oprah.plusidentity@gmail.com',
          to: 'jaduksuh@plusidentity.com',
          subject: `WARNING: Change of signup process detected for ${website}!!`,
          text: `The Plusidentity detection-server just detected a change of signup process for ${website}.\nPlease resolve the issue ASAP.`
        };
        mailTransporter.sendMail(mailDetails, (err, data) => {
          if(err) {
            console.log('Error occurred while sending email.')
          } else {
            console.log('Error email sent successfully.')
          }
        });
        break;
      }
    }
    await browser.close();
  }
})();
//*/

// Real App
//*
cron.schedule("* * * *", () => {
  (async () => {
    for(let website in websites) {
      const browser = await puppeteer.launch({ headless: false });
      const page = await browser.newPage();
      await page.goto(websites[website]["url"]);
      const title = await page.title();
      const url = await page.url();
      console.log(title, url);
  
      if("startButton" in websites[website]) {
        for (button of websites[website]["startButton"]) {
          await page.click(button);
          await new Promise(resolve => setTimeout(resolve, 500));
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
  
      // wait 2.5 seconds for the page to fully load
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      const findSelector = (element) => {
        let webfile = require(`./config_files/${website}.js`);
        let cssElements = [];
        switch (element) {
          case "email":
            for (let field of webfile["manualActionConfig"]["signup"]["listenFields"]) {
              if (field["content"]["dataField"] === "_emailAddress") {
                cssElements = cssElements.concat(field["content"]["elementSelectors"]);
              }
            }
            return cssElements;
            break;
          case "password":
            for (let field of webfile["manualActionConfig"]["signup"]["listenFields"]) {
              if (field["content"]["dataField"] === "password") {
                cssElements = cssElements.concat(field["content"]["elementSelectors"]);
              }
            }
            return cssElements;
            break;
          case "username":
            for (let field of webfile["manualActionConfig"]["signup"]["listenFields"]) {
              if (field["content"]["dataField"] === "_username") {
                cssElements = cssElements.concat(field["content"]["elementSelectors"]);
              }
            }
            return cssElements;
            break;
          case "button":
            for (let field of webfile["manualActionConfig"]["signup"]["triggerEvents"]) {
              cssElements = cssElements.concat(field["content"]["elementSelectors"]);
            }
            return cssElements;
            break;
          default:
            throw new Error("Unidentified element type!!");
        }
      }
  
      for(let element of websites[website]["elements"]) {
        let targetElements = findSelector(element); console.log(targetElements);
        let elementExists = false;
        for (targetElement of targetElements) {
          const grabElement = await page.evaluate((targetElement) => {
            return document.querySelector(targetElement);      
          }, targetElement);
          if(grabElement !== null) {
            elementExists = true; break;
          }
        }
        
        
        if(elementExists) console.log("Existing Element!");
        else {
          console.log("Non-existent element!");
          let mailDetails = {
            from: 'oprah.plusidentity@gmail.com',
            to: 'jaduksuh@plusidentity.com',
            subject: `WARNING: Change of signup process detected for ${website}!!`,
            text: `The Plusidentity detection-server just detected a change of signup process for ${website}.\nPlease resolve the issue ASAP.`
          };
          mailTransporter.sendMail(mailDetails, (err, data) => {
            if(err) {
              console.log('Error occurred while sending email.')
            } else {
              console.log('Error email sent successfully.')
            }
          });
          break;
        }
      }
      await browser.close();
    }
  })();
});
//*/