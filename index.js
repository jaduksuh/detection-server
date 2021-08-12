const puppeteer = require('puppeteer');
const cron = require('node-cron');
const fs = require('fs');
//const moment = require('moment');
const nodemailer = require('nodemailer');

let rawjson = fs.readFileSync('./websites.json');
let websites = JSON.parse(rawjson);

let mailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'oprah.plusidentity@gmail.com',
    pass: 'oprahPiTest*'
  }
});

cron.schedule("* * * * *", () => {
  (async () => {
    for(let website in websites) {
      const browser = await puppeteer.launch({ headless: false });
      const page = await browser.newPage();
      await page.goto(websites[website]["url"]);
      const title = await page.title();
      const url = await page.url();
      console.log(title, url);
      
      const findSelector = (element) => {
        let webfile = require(`./config_files/${website}.js`);
        switch (element) {
          case "email":
            for (let field of webfile["manualActionConfig"]["login"]["listenFields"]) {
              if (field["content"]["dataField"] === "_emailAddress") {
                return field["content"]["elementSelectors"][0];
              }
            }
            break;
          case "password":
            for (let field of webfile["manualActionConfig"]["login"]["listenFields"]) {
              if (field["content"]["dataField"] === "password") {
                return field["content"]["elementSelectors"][0];
              }
            }
            break;
          case "username":
            for (let field of webfile["manualActionConfig"]["login"]["listenFields"]) {
              if (field["content"]["dataField"] === "_username") {
                return field["content"]["elementSelectors"][0];
              }
            }
            break;
          case "button":
            return webfile["manualActionConfig"]["login"]["triggerEvents"][0]["content"]["elementSelectors"][0];
            break;
          default:
            throw new Error("Unidentified element type!!");
        }
      }

      
      for(let element of websites[website]["elements"]) {
        let targetElement = findSelector(element); console.log(targetElement);
        const grabElement = await page.evaluate((targetElement) => {
          return document.querySelector(targetElement);      
        }, targetElement);
        if(grabElement !== null) console.log("Existing Element!");
        else {
          console.log("Non-existent element!");
          let mailDetails = {
            from: 'oprah.plusidentity@gmail.com',
            to: 'jaduksuh@plusidentity.com',
            subject: `WARNING: Change of login process detected for ${website}!!`,
            text: `The Plusidentity detection-server just detected a change of login process for ${website}.\nPlease resolve the issue ASAP.`
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