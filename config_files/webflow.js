module.exports = {
  "serviceName": "webflow",
  "officialName": "Webflow",
  "accountData": [
    "_emailAddress",
    "password"
  ],
  "passwordRequirement": {
    "minLength": 10, 
    "maxLength": -1,
    "mustInclude": [ 
      "lowerCase", "upperCase", "number"
    ]
  },
/*********************************************************************************************************/
  "entrypointConfig": {
    "rootDomain": "webflow.com", 
    "subDomain": "ALL.webflow.com", 
    "entrypoints": [ 
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#login-btn",
            "body > div.main-wrapper > div > section > div > div.unauth-main > div > p:nth-child(10) > a",
            "body > div.main-wrapper > nav > div > div > ul.top-nav.unauth.ng-scope > li:nth-child(1) > a"
          ]
        },
        "note": "Clicked sign in button"
      },
      {
        "type": "login",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "webflow.com/dashboard/login"
        },
        "note": "Refreshed upon login page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "body > div.main-wrapper > div > section > div > div.unauth-main > div > p:nth-child(5) > a",
            "body > div.main-wrapper > div > section > div > div > div.unauth-form > div:nth-child(2) > button"
          ]
        },
        "note": "Clicked sign up button"
      },
      {
        "type": "signup",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "webflow.com/dashboard/signup"
        },
        "note": "Refreshed upon signup page"
      },
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "body > div.main-wrapper > div > section > div > div.unauth-main > div > p.inline-link.right.ng-scope > a"
          ]
        },
        "note": "Clicked sign up button"
      },
      {
        "type": "recovery",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://webflow.com/dashboard/forgot?ref=login"
        },
        "note": "Refreshed upon recovery page"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
            "includedString": "https://webflow.com/dashboard",
            "elementSelectors": [
              "body > div.main-wrapper > nav > div > div > ul.top-nav.right.ng-scope > li.dropdown"
            ]
        },
        "note": "returned after login"
      },
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "webflow.com/dashboard/welcome"
        },
        "note": "Redirected after signup"
      }
    ]
  },
/*********************************************************************************************************/
  "loginConfig": { 
    "navigation": [
      {
        "type": "delay",
        "content": {
          "duration": 0.1
        },
        "note": "Wait for 0.1 seconds"  
      },
      {
        "type": "elementClearSendkeys",
        "content": {
          "fetch": true,
          "elementSelectors": [
            "input[name='username']",
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
            "input[name='password']",
          ],
          "value": "[account:password]"
        },
        "note": "Type in password"
      },
      {
        "type": "delay",
        "content": {
          "duration": 0.05
        },
        "note": "Wait for 0.05 seconds"  
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "button[ng-type='submit']"
          ]
        },
        "note": "Click on 'Log in' button"
      },
    ]
  },
/*********************************************************************************************************/
  "signupConfig": {
    "agreements": [
      {
        "title": "___",
        "directLink": "___",
        "link": "https://_____" 
      }
    ],
    "customQuestions": [ 
      {
        "question": "___",
        "answer": {
          "type": "___", 
          "value": {
            "questions": [
              "___"
            ],
            "maxAnswers": "___" 
          } 
        }
      }
    ],
    "navigation": [
      {
        "type": "___",
        "content": {
          "___": "___"
        },
        "note": "___"
      }
    ]
  },
/*********************************************************************************************************/
  "recoveryConfig": {
    "customQuestions": [],
    "navigation": []
  },
/*********************************************************************************************************/
  "checkConfig": {
    "navigation": []
  },
/*********************************************************************************************************/
  "manualActionConfig": {
    "login": {
      "listenFields": [
        {
          "type": "value",
          "content": {
            "dataField": "_emailAddress",
            "elementSelectors": [
              "input[name='username']"
            ]
          },
          "note": "Read in email address"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "input[name='password']"
            ]
          },
          "note": "Read in password"
        }
      ],
      "triggerEvents": [
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              "button[ng-type='submit']"
            ]
          },
          "note": "Clicked on log in button"
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
              "input[name='email']"
            ]
          },
          "note": "Read in email address"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "input[name='password']"
            ]
          },
          "note": "Read in password"
        }
      ],
      "triggerEvents": [
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              "body > div.main-wrapper > div > section > div > div.unauth-main > div > button"
            ]
          },
          "note": "Clicked on signup button"
        }
      ]
      // "successState": {
      //   "type": "urlIncludes",
      //   "content": {
      //     "includedString": "register-complete"
      //   },
      //   "note": "____"
      // }
    },
    "recovery": {}
  }
};
/*********************************************************************************************************/