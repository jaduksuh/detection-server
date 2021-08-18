module.exports = {
  "serviceName": "tinyurl",
  "officialName": "Tinyurl",
  "accountData": [
    "_firstName",
    "_emailAddress",
    "password"
  ],
  "passwordRequirement": {
    "minLength": 1, 
    "maxLength": -1,
    "mustInclude": []
  },
  /*********************************************************************************************************/
  "entrypointConfig": {
    "rootDomain": "tinyurl.com", 
    "subDomain": "NONE.tinyurl.com", 
    "entrypoints": [ 
      {
        "type": "login",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://tinyurl.com/app/login"
        },
        "note": "Refreshed upon login page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#tinyurl > div.main > div:nth-child(1) > header > nav > div.flex-grow-1 > div.d-none.d-md-flex.flex-wrap.justify-content-end.align-items-center > div:nth-child(2) > div.bg-t-teal.rounded.position-relative > a:nth-child(6)"
          ]
        },
        "note": "Clicked sign in button"
      },
      {
        "type": "signup",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://tinyurl.com/app/register"
        },
        "note": "Refreshed upon signup page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#tinyurl > div.main > div:nth-child(1) > header > nav > div.flex-grow-1 > div.d-none.d-md-flex.flex-wrap.justify-content-end.align-items-center > div:nth-child(2) > div.bg-t-teal.rounded.position-relative > a:nth-child(5)"
          ]
        },
        "note": "Clicked sign in button"
      },
      {
        "type": "recovery",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://tinyurl.com/app/password/reset"
        },
        "note": "Refreshed upon recovery page"
      },
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#tinyurl > div.main > section > div > div.flex-grow-1.overflow-y-a.border-bottom > div > form > div:nth-child(3) > div.d-flex.justify-content-between.flex-wrap > a"
          ]
        },
        "note": "Clicked sign in button"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "https://tinyurl.com/app/",
          "elementSelectors": [
            "#tinyurl > div.main > div:nth-child(1) > header > nav > div.flex-grow-1 > div.d-none.d-md-flex.flex-wrap.justify-content-end.align-items-center > div:nth-child(2) > div.bg-t-teal.rounded.position-relative > a:nth-child(5) > img"
          ]
        },
        "note": "returned to main page after login"
      },
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://tinyurl.com/app/pricing"
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
        "note": "Wait for 0.5 seconds"  
      },
      {
        "type": "elementClearSendkeys",
        "content": {
          "fetch": true,
          "elementSelectors": [
            "#login_email",
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
            "#login_password",
          ],
          "value": "[account:password]"
        },
        "note": "Type in password"
      },
      {
        "type": "delay",
        "content": {
          "duration": 0.1
        },
        "note": "Wait for 0.5 seconds"  
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "#tinyurl > div.main > section > div > div.flex-grow-1.overflow-y-a.border-bottom > div > form > div:nth-child(4) > button"
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
              "#login_email"
            ]
          },
          "note": "Read in email address"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#login_password"
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
              "#tinyurl > div.main > section > div > div.flex-grow-1.overflow-y-a.border-bottom > div > form > div:nth-child(4) > button"
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
              "#register_email"
            ]
          },
          "note": "Read in email address"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#register_password"
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
              "#tinyurl > div.main > section > div > div.flex-grow-1.overflow-y-a.border-bottom > div > form > div:nth-child(5) > button"
            ]
          },
          "note": "Clicked on 'Create an account' button"
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