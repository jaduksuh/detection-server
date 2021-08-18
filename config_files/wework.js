module.exports = {
  "serviceName": "wework",
  "officialName": "WeWork",
  "accountData": [
    "_emailAddress",
    "password"
  ],
  "passwordRequirement": {
    "minLength": 8, 
    "maxLength": -1,
    "mustInclude": []
  },
  "entrypointConfig": {
    "rootDomain": "wework.com", 
    "subDomain": "ALL.wework.com", 
    "entrypoints": [ 
      {
          "type": "login",
          "identifierType": "urlStartWith",
          "identifier": {
          "startUrl": "https://idp.wework.com/login"
          },
          "note": "refreshed upon login page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "body > nav > div > div > div.nav-login > a"
          ]
        },
        "note": "Clicked Log In button"
      },
      {
          "type": "recovery",
          "identifierType": "elementClickedOn",
          "identifier": {
              "elementSelectors": [
                "p.auth0-lock-alternative",
                "#auth0-lock-container-1 > div > div.auth0-lock-center > form > div > div > div > div > div.auth0-lock-content-body-wrapper > div:nth-child(2) > span > div > div > div > div > div > div > div > div > div > div > p > a"
              ]
          },
          "note": "pressed 'Forgot password?' button"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
            "includedString": "https://members.wework.com"
        },
        "note": "returned to main page after login"
      }
    ]
  },
  "loginConfig": { 
    "navigation": [
      {
          "type": "delay",
          "content": {
            "duration": 1.5
          },
          "note": "Wait for 1.5 seconds"  
      },
      {
          "type": "elementClearSendkeys",
          "content": {
            "fetch": true,
            "elementSelectors": [
              "[name=email]"
            ],
            "value": "[account:_emailAddress]"
          },
          "note": "Type in email"
      },
      {
          "type": "delay",
          "content": {
            "duration": 0.5
          },
          "note": "Wait for 0.5 seconds"  
      },
      {
          "type": "elementClearSendkeys",
          "content": {
            "fetch": true,
            "elementSelectors": [
              "[name=password]"
            ],
            "value": "[account:password]"
          },
          "note": "Type in password"
      },
      {
          "type": "delay",
          "content": {
            "duration": 0.5
          },
          "note": "Wait for 0.5 seconds"  
      },
      {
          "type": "elementClick",
          "content": {
            "elementSelectors": [
              "[name=submit]"
            ]
          },
          "note": "Click on 'Continue' button"
      }
    ]
  },
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
              "[name=email]"
            ]
          },
          "note": "Read in email address"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "[name=password]"
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
              "[name=submit]",
              "button.auth0-lock-submit"
            ]
          },
          "note": "Clicked on 'Continue' button"
        }
      ]
    },
    "signup": {
      "listenFields": [],
      "triggerEvents": []
    },
    "recovery": {}
  }
}; 