module.exports = {
  "serviceName": "dailymotion",
  "officialName": "Dailymotion",
  "accountData": [
    "_emailAddress",
    "password"
  ],
  "passwordRequirement": {
    "minLength": -1,
    "maxLength": -1,
    "mustInclude": [],
    "mustNotInclude": []
  },
  "entrypointConfig": { // elementClickedOn from main page wouldn't work
    "rootDomain": "dailymotion.com",
    "subDomain": "ALL.dailymotion.com",
    "entrypoints": [
      {
        "type": "login",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://www.dailymotion.com/signin"
        },
        "note": "Refreshed upon login page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            '#root > div > div:nth-child(2) > header > div > div.ResponsiveHeader__iconsWrapper___39fqV > div.ResponsiveHeader__topRight___3Ey0E > div > div.ResponsiveHeaderTab__message___1clVv > span'
          ]
        },
        "note": "Clicked on 'Sign in with Email' button from main page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            'a[href="/signin?urlback=%2Fkr"]'
          ]
        },
        "note": "Clicked on 'Sign in' button from main page"
      },
      {
        "type": "signup",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://www.dailymotion.com/signup"
        },
        "note": "Refreshed upon sign up page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            '#root > div > div:nth-child(2) > header > div > div.ResponsiveHeader__iconsWrapper___39fqV > div.ResponsiveHeader__topRight___3Ey0E > button'
          ]
        },
        "note": "Clicked on 'Create one' button from sign in page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            'a[href="/signup?urlback=%2Fkr"]'
          ]
        },
        "note": "Clicked on 'Create one' button from sign in page"
      },
      {
        "type": "recovery",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://www.dailymotion.com/password/recover"
        },
        "note": "Refreshed upon recovery page"
      },
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            'a[href="/password/recover"]'
          ]
        },
        "note": "Clicked on 'Forgot your password?' button from login page"
      },
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://www.dailymotion.com/register/validation_code"
        },
        "note": "_______"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "https://www.dailymotion.com/",
          "elementSelectors": [
            'path[id="user-logged_svg__User-Loggued-Icon"]'
          ]
        },
        "note": ""
      },
    ]
  },
  "loginConfig": {
    "navigation": [
      {
        "type": "elementClearSendkeys",
        "content": {
          "fetch": true,
          "elementSelectors": [
            'input[name="email"]'
          ],
          "value": "[account:_emailAddress]"
        },
        "note": "Type in email address"
      },
      {
        "type": "elementClearSendkeys",
        "content": {
          "fetch": true,
          "elementSelectors": [
            'input[name="password"]'
          ],
          "value": "[account:password]"
        },
        "note": "Type in password"
      },
      {
        "type": "delay",
        "content": {
          "duration": "0.5"
        },
        "note": "_______"
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            'button[type="submit"]'
          ]
        },
        "note": "Click on 'Sign in' button"
      }
    ]
  },
  "signupConfig": {
    "agreements": [
      {
        "title": "Terms of Service",
        "link": ""
      },
      // input[name="code"]
      // button[type="submit"]
      {
        "title": "Privacy Policy",
        "link": ""
      }
    ],
    "customQuestions": [],
    "navigation": []
  },
  "recoveryConfig": {
    "customQuestions": [],
    "navigation": []
  },
  "checkConfig": {
    "navigation": []
  },
  "manualActionConfig": {
    "login": {
      "listenFields": [
        {
          "type": "value",
          "content": {
            "dataField": "_emailAddress",
            "elementSelectors": [
              'input[name="email"]' // should be the same as in loginConfig
            ]
          },
          "note": "_____"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              'input[name="password"]' // should be the same as in loginConfig
            ]
          },
          "note": "_____"
        }
      ],
      "triggerEvents": [
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              'button[type="submit"]' // should be the same as in loginConfig
            ]
          },
          "note": "_____"
        }
      ]
    },
    "signup": {
      "listenFields": [
        {
          "type": "value",
          "content": {
            "dataField": "_emailAddress",
            "elementSelectors": [
              'input[name="email"]' // should be the same as in signupConfig
            ]
          },
          "note": "_____"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              'input[name="password"]' // should be the same as in signupConfig
            ]
          },
          "note": "_____"
        }
      ],
      "triggerEvents": [
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              'button[type="submit"]' // should be the same as in signupConfig
            ]
          },
          "note": "_____"
        }
      ]
    },
    "recovery": {}
  }
};