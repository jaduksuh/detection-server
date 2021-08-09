module.exports = {
  "serviceName": "fandom",
  "officialName": "FANDOM",
  "accountData": [
    "_emailAddress",
    "_username",
    "password"
  ],
  "passwordRequirement": {
    "minLength": 1, 
    "maxLength": -1,
    "mustInclude": []
  },
  /*********************************************************************************************************/
  "entrypointConfig": {
    "rootDomain": "fandom.com", 
    "subDomain": "ALL.fandom.com", 
    "entrypoints": [ 
      {
        "type": "login",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://www.fandom.com/signin"
        },
        "note": "Refreshed upon login page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "body > div.wds-global-navigation-wrapper.anon > div > div > div.wds-global-navigation__account-menu.wds-dropdown > div.wds-dropdown__content.wds-is-right-aligned.wds-global-navigation__dropdown-content > ul > li:nth-child(1) > a"
          ]
        },
        "note": "Clicked on login button"
      },
      {
        "type": "signup",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://www.fandom.com/register"
        },
        "note": "Refreshed upon register page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "body > div.wds-global-navigation-wrapper.anon > div > div > div.wds-global-navigation__account-menu.wds-dropdown > div.wds-dropdown__content.wds-is-right-aligned.wds-global-navigation__dropdown-content > ul > li:nth-child(2) > a"
          ]
        },
        "note": "Clicked on register button"
      },
      {
        "type": "recovery",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://www.fandom.com/forgot-password"
        },
        "note": "Refreshed upon recovery page"
      },
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#loginForm > div:nth-child(2) > a"
          ]
        },
        "note": "Clicked on forgot password button"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
            "includedString": "www.fandom.com",
            "elementSelectors": [
              "body > div.wds-global-navigation-wrapper.logged-in > div > div > div.wds-global-navigation__user-menu.wds-dropdown > div.wds-dropdown__toggle.wds-global-navigation__dropdown-toggle"
            ]
        },
        "note": "returned to main page after login"
      },
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
            "includedString": "www.fandom.com/",
            "elementSelectors": [
              "body > div.wds-global-navigation-wrapper.logged-in > div > div > div.wds-global-navigation__user-menu.wds-dropdown > div.wds-dropdown__toggle.wds-global-navigation__dropdown-toggle"
            ]
        },
        "note": "returned to main page after signup"
      },
      {
        "type": "triggerInitialContact",
        "identifierType": "elementClickedOn&delay",
        "identifier": {
            "elementSelectors": [
              "#signupSubmit",
              "button[type='submit']"
            ],
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
          "duration": 0.5
        },
        "note": "Wait for 0.5 seconds"  
      },
      {
        "type": "elementClearSendkeys",
        "content": {
          "fetch": true,
          "elementSelectors": [
            "#loginUsername",
          ],
          "value": "[account:_username]"
        },
        "note": "Type in username"
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
            "#loginPassword",
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
            "#loginSubmit",
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
            "dataField": "_username",
            "elementSelectors": [
              "#loginUsername"
            ]
          },
          "note": "Read in username"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#loginPassword"
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
              "#loginSubmit",
              "button[type='submit']"
            ]
          },
          "note": "Pressed on Sign in button"
        }
      ]
    },
    "signup": {
      "listenFields": [
        {
          "type": "value",
          "content": {
            "dataField": "_username",
            "elementSelectors": [
              "#signupUsername",
							"[name=userame]"
            ]
          },
          "note": "Read in username"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#signupPassword",
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
              "#signupSubmit",
              "button[type='submit']"
            ]
          },
          "note": "Clicked on Register button"
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