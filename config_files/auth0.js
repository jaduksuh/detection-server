module.exports = {
  "serviceName": "auth",
  "officialName": "auth0",
  "accountData": [
    "_emailAddress",
    "password"
  ],
  "passwordRequirement": {
    "minLength": 8, 
    "maxLength": -1,
    "mustInclude": [ 
      "lowerCase", "upperCase", "number"
    ]
  },
  /*********************************************************************************************************/
  "entrypointConfig": {
    "rootDomain": "auth0.com", 
    "subDomain": "ALL.auth0.com", 
    "entrypoints": [ 
      {
        "type": "login",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://auth0.auth0.com/u/login"
        },
        "note": "Refreshed upon login page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#__next > header > div > div > a"
          ]
        },
        "note": "Clicked sign in button"
      },
      {
        "type": "signup",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://auth0.com/signup"
        },
        "note": "Refreshed upon signup page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#__next > header > nav.sc-1755fzv-6.bNZZyU > ul > a.sc-1755fzv-16.sc-1755fzv-18.dCFZJS.fkPdSE",
            "#__next > section.sc-15vix13-0.kPilmS > div > div > div > div > div > form > button",
            "#__next > header > nav.sc-1755fzv-7.fwAqQo > section > div.sc-85iotp-15.fNjmCg > div > a:nth-child(1)"
          ]
        },
        "note": "Clicked sign up button"
      },
      {
        "type": "recovery",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://auth0.auth0.com/u/reset-password"
        },
        "note": "Refreshed upon recovery page"
      },
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "body > main > section > div > div > div > form > p > a"
          ]
        },
        "note": "Clicked forgot password button"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": [
            "https://manage.auth0.com/dashboard"
          ]
        },
        "note": "returned to main page after login"
      },
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": [
            "auth0.com/profile"
          ]
        },
        "note": "Redirected to main page after signup"
      },
    ]
  },
  /*********************************************************************************************************/
  "loginConfig": { 
    "navigation": [
      {
        "type": "elementClearSendkeys",
        "content": {
          "fetch": true,
          "elementSelectors": [
            "#username",
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
            "#password",
          ],
          "value": "[account:password]"
        },
        "note": "Type in password"
      },
      {
        "type": "delay",
        "content": {
          "duration": 0.2
        },
        "note": "Wait for 0.2 seconds"  
      },
      {
        "type": "elementClick",
        "content": {
           "elementSelectors": [
            "button[type='submit']"
          ]
        },
        "note": "Click on 'Continue' button"
      },
      {
        "type": "triggerInitialContact",
        "identifierType": "elementClickedOn&delay",
        "identifier": {
            "elementSelectors": [
              "#signup-app > div > div > form > div:nth-child(1) > button"
            ],
            "delay": 1
        },
        "note": ""
      }
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
              "#username"
            ]
          },
          "note": "Read in email address"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#password"
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
              "button[type='submit']"
            ]
          },
          "note": "Clicked on Continue button"
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
              "#signup-app > div > div > form > div:nth-child(1) > button"
            ]
          },
          "note": "Clicked on sign up button"
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