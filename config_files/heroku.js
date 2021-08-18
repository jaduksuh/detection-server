module.exports = {
  "serviceName": "heroku",
  "officialName": "Heroku",
  "accountData": [
    "_firstName",
    "_lastName",
    "_emailAddress",
    "password",
  ],
  "passwordRequirement": {
    "minLength": 8,
    "maxLength": -1,
    "mustInclude": [],
    "mustNotInclude": []
  },
  "entrypointConfig": {
    "rootDomain": "heroku.com",
    "subDomain": "ALL.heroku.com",
    "entrypoints": [
      {
        "type": "login",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://id.heroku.com/login"
        },
        "note": "Refreshed upon login page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#navigation > div > div.nav-wrapper > ul.tool-nav > li.user > a:nth-child(1)"
          ]
        },
        "note": "Clicked on 'Sign in' button from main page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "body > div.wrapper > div > div.header-main > div > a"
          ]
        },
        "note": "Clicked on 'Sign in' button from sign up page"
      },
      {
        "type": "signup",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://signup.heroku.com/login"
        },
        "note": "Refreshed upon sign up page"
      },
      {
        "type": "signup",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://signup.heroku.com/confirm"
        },
        "note": "Refreshed upon sign up page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#navigation > div > div.nav-wrapper > ul.tool-nav > li.user > a.sign-up.highlight"
          ]
        },
        "note": "Clicked on 'Sign up' button from main page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#login > a > span"
          ]
        },
        "note": "Clicked on 'Sign up' button from sign in page"
      },
      {
        "type": "recovery",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://id.heroku.com/account/password/reset"
        },
        "note": "Refreshed upon recovery page"
      },
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "body > div.page-wrap.gradient-primary > div > div > a:nth-child(3)"
          ]
        },
        "note": "Clicked on 'Forgot your password?' button from login page"
      },
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://signup.heroku.com/account/accept/ok"
        },
        "note": "_______"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://dashboard.heroku.com/login"
        },
        "note": "_______"
      }
    ]
  },
  "loginConfig": {
    "navigation": [
      {
        "type": "elementClearSendkeys",
        "content": {
          "fetch": true,
          "elementSelectors": [
            "#email"
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
            "#password"
          ],
          "value": "[account:password]"
        },
        "note": "Type in password"
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "#login > form > button"
          ]
        },
        "note": "Click on 'Next' button"
      }
    ]
  },
  "signupConfig": {
    "agreements": [
      {
        "title": "Terms of Service",
        "link": ""
      },
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
              "#email" // should be the same as in loginConfig
            ]
          },
          "note": "_____"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#password" // should be the same as in loginConfig
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
              "#login > form > button" // should be the same as in loginConfig
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
              '#email'
            ]
          },
          "note": "_____"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              'input[name="password"]'
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
              "input[value='Create Free Account']"
            ]
          },
          "note": "_____"
        },
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              "input[value='Set password and log in']"
            ]
          },
          "note": "_____"
        }
      ]
    },
    "recovery": {}
  }
};