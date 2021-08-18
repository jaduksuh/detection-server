module.exports = {
  "serviceName": "brex",
  "officialName": "Brex",
  "accountData": [
    "_firstName",
    "_lastName",
    "_emailAddress",
    "password"
  ],
  "passwordRequirement": {
    "minLength": 8, 
    "maxLength": -1,
    "mustInclude": []
  },
  /*********************************************************************************************************/
  "entrypointConfig": {
    "rootDomain": "brex.com", 
    "subDomain": "ALL.brex.com", 
    "entrypoints": [ 
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#gatsby-focus-wrapper > div.css-1mea469.e8kbb5q1 > header > div > div > div > div > div > div > div > div.css-13yzc0m.e8kbb5q3 > a > span"
          ]
        },
        "note": "Clicked sign in button"
      },
      {
        "type": "login",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://accounts.brex.com/login"
        },
        "note": "Refreshed upon login page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#gatsby-focus-wrapper > div.css-1mea469.e8kbb5q1 > header > div > div > div > div > div > div > div > div.css-178rjve.e8kbb5q4 > a"
          ]
        },
        "note": "Clicked sign in button"
      },
      {
        "type": "signup",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://www.brex.com/signup/"
        },
        "note": "Refreshed upon signup page"
      },
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#login-form > div.form-actions > a"
          ]
        },
        "note": "Clicked sign in button"
      },
      {
        "type": "recovery",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://dashboard.brex.com/forgot-password"
        },
        "note": "Refreshed upon recovery page"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
            "includedString": "dashboard.brex.com"
        },
        "note": "redirected after login"
      },
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
            "includedString": "dashboard.brex.com"
        },
        "note": "Redirected after signup"
      },
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
            "#email",
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
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "#login-button"
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
              "#email"
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
              "#login-button"
            ]
          },
          "note": "Clicked on 'Sign in' button"
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
              "#workEmail-input"
            ]
          },
          "note": "Read in email address"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#password-input"
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
              "#gatsby-focus-wrapper > main > div.css-g3ycis.ekdwkhx0 > div > form > div.css-e1ldsg.e11364wo14 > div > div > button"
            ]
          },
          "note": "Clicked on 'Start Application' button"
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