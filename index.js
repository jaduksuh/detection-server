const puppeteer = require('puppeteer');
const cron = require('node-cron');
const fs = require('fs');
const moment = require('moment');

let rawjson = fs.readFileSync('./websites.json');
let websites = JSON.parse(rawjson);

cron.schedule("* * * * *", () => {
  (async () => {
    for(let website in websites) {
      const browser = await puppeteer.launch({ headless: false });
      const page = await browser.newPage();
      await page.goto(websites[website]);
      const title = await page.title();
      const url = await page.url();
      console.log(title, url);

      let webfile = require(`./config_files/${website}.js`);
      //console.log(webfile["serviceName"]);
      for (let action of webfile["loginConfig"]["navigation"]) {
        const actionType = action["type"];
        switch (actionType) {
          case "elementClearSendkeys":
            const selector = action["content"]["elementSelectors"][0];
            await page.waitForSelector(selector);
            if (action["content"]["value"] === "[account:_emailAddress]")
              await page.type(selector, "oprah.plusidentity@gmail.com");
            else if (action["content"]["value"] === "[account:password]")
              await page.type(selector, "Plus1234!@#$");
            else if (action["content"]["value"] === "[account:_username]")
              await page.type(selector, "oprahPlusidentity");
            break;
          case "delay":
            let delayTime = action["content"]["duration"] * 1000;
            await new Promise(resolve => setTimeout(resolve, delayTime));
            break;
          case "elementClick":
            await page.waitForSelector(action["content"]["elementSelectors"][0]);
            await page.click(action["content"]["elementSelectors"][0]);
            break;
        }

      }
      await new Promise(resolve => setTimeout(resolve, 5000));
      await browser.close();
    }
  })();
});


/*
Problems:
1. Need to either unify all of the test account info for all websites, 
or store the test account info somewhere

2. Cannot use login navigation of some config files 
(Ex: login --> button --> password --> button, but configured as login --> password --> button)

3. Blocked by CAPTCHA

Solutions:
- Since the login navigaition isn't viable, instead of going through the entire login process,
we should just detect whether the CSS elements are in place. If the login process has been changed,
then it is highly likely that the CSS elements have changed as well, so this method would be able to effectively detect webpage changes.


- Someday, we would also need to store the info about signup processes as well.
- That means someday, we will have to add the url info of the signup page in websites.json as well.
- All things considered, it dawns to me that a complete revision of the system is neccessary.

REVISION:
- websites.json: key:value pairs of website name: login info.
  - Login info is a object of {email: "", username: "", password: "", etc: ""}

- In the directory config_files, we store the js files of each website.
- Each js file includes:
  - login: object
    - url: string, login url for redirection
    - elements: list, list of CSS elements to look for in above url
  - signup: object (to be implemented later)

- Expected problems: 
- While this method should be able to effectively detect a majority of changes made onto webpages,
there still may be some extremely unlikely cases where the changes made on the webpage is so small that 
it bypasses the detection method above. This should be solved by receiving bug reports from users.




*/