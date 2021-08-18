module.exports = {
  "serviceName": "linkedin",
  "officialName": "LinkedIn",
  "accountData": [
    "_emailAddress",
    "password"
  ],
  "passwordRequirement": {
    "minLength": 6, 
    "maxLength": -1,
    "mustInclude": []
  },
  /*********************************************************************************************************/
  "entrypointConfig": {
    "rootDomain": "linkedin.com", 
    "subDomain": "ALL.linkedin.com", 
    "entrypoints": [ 
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "body > nav > div > a.nav__button-secondary"
          ]
        },
        "note": "Clicked sign in button"
      },
      {
        "type": "login",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://www.linkedin.com/login"
        },
        "note": "Refreshed upon login page"
      },
      {
        "type": "signup",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://www.linkedin.com/signup"
        },
        "note": "Refreshed upon register page"
      },
      {
        "type": "recovery",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://www.linkedin.com/checkpoint/rp/request-password-reset"
        },
        "note": "Refreshed upon recovery page"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
            "includedString": "www.linkedin.com",
            "elementSelectors": [
              "#global-nav-typeahead > input",
              "#ember33"
            ]
        },
        "note": "returned to main page after login"
      },
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
            "includedString": "www.linkedin.com",
            "elementSelectors": [
              "#global-nav-typeahead > input",
              "#ember33"
            ]
        },
        "note": "returned to main page after login"
      },
      {
        "type": "triggerInitialContact",
        "identifierType": "elementClickedOn&delay",
        "identifier": {
            "elementSelectors": [],
            "delay": 0.5
        },
        "note": ""
      }
    ]
  },
  /*********************************************************************************************************/
  "loginConfig": { 
    "navigation": [
      {
        "type": "delay",
        "content": {
          "duration": 0.2
        },
        "note": "Wait for 0.2 seconds"  
      },
      {
        "type": "elementClearSendkeys",
        "content": {
          "fetch": true,
          "elementSelectors": [
            "#username",
            "input[name='session_key']"
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
            "input[name='session_password']"
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
        "note": "Wait for 0.1 seconds"  
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "#organic-div > form > div.login__form_action_container > button",
            "button[type='submit']"
          ]
        },
        "note": "Click on 'Sign in' button"
      },
      {
        "type": "delay",
        "content": {
          "duration": 0.5
        },
        "note": "Wait for 0.5 seconds"  
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
              "#username",
              "input[name='session_key']"
            ]
          },
          "note": "Read in email address"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#password",
              "input[name='session_password']"
            ]
          },
          "note": "Read in email address"
        }
      ],
      "triggerEvents": [
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              "#organic-div > form > div.login__form_action_container > button",
              "button[type='submit']"
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
              "#email-or-phone",
              "input[name='email-or-phone']"
            ]
          },
          "note": "Read in email address"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#password",
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
              "button[type='submit']"
            ]
          },
          "note": "_____"
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