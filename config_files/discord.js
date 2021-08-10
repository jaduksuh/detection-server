module.exports = {
  "serviceName": "discord",
  "officialName": "Discord",
  "accountData": [
    "_emailAddress",
    "_username",
    "_birthday_month_alphabetical_unabbreviated",
    "_birthday_day",
    "_birthday_year_fourDigits",
    "password"
  ],
  "passwordRequirement": {
    "minLength": -1, 
    "maxLength": -1,
    "mustInclude": []
  },
  /*********************************************************************************************************/
"entrypointConfig": {
  "rootDomain": "discord.com", 
  "subDomain": "ALL.discord.com", 
  "entrypoints": [ 
    {
      "type": "login",
      "identifierType": "elementClickedOn",
      "identifier": {
        "elementSelectors": [
          "#app-mount > div > div > div.grid-3Ykf_K.heroBackground-3m0TRU > div.row-3wW-Fx.header-Y5-yn4.colorSchemeWhite-33VuSr > header.wrapper-vInhSw.wrapperDesktop-1VrZRb > nav > div.appButton-2wSXh- > a"
        ]
      },
      "note": "Clicked sign in button"
    },
    {
      "type": "login",
      "identifierType": "urlStartWith",
      "identifier": {
        "startUrl": "https://discord.com/login"
      },
      "note": "Refreshed upon login page"
    },
    {
      "type": "signup",
      "identifierType": "elementClickedOn",
      "identifier": {
        "elementSelectors": [
          "#app-mount > div > div > div.grid-3Ykf_K.footer-2JjWU3.brand-2EpRQL > div:nth-child(2) > div > div.cta-3cmhBa > a.button-195cDm.buttonBrand-33cvhX.buttonSmall-2bnF7I"
        ]
      },
      "note": "Clicked sign in button"
    },
    {
      "type": "signup",
      "identifierType": "urlStartWith",
      "identifier": {
        "startUrl": "https://discord.com/register"
      },
      "note": "Refreshed upon register page"
    },
    {
      "type": "recovery",
      "identifierType": "elementClickedOn",
      "identifier": {
        "elementSelectors": [
          "button[type='button']"
        ]
      },
      "note": "Clicked on Forgot password button"
    },
    {
      "type": "loginSuccess",
      "identifierType": "urlIncludes",
      "identifier": {
          "includedString": "discord.com/channels/@me"
      },
      "note": "returned to main page after login"
    },
    {
      "type": "signupSuccess",
      "identifierType": "urlIncludes",
      "identifier": {
          "includedString": "discord.com/channels/@me"
      },
      "note": "returned to main page after signup"
    },
    {
      "type": "triggerInitialContact",
      "identifierType": "elementClickedOn&delay",
      "identifier": {
          "elementSelectors": [
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
        "duration": 0.2
      },
      "note": "Wait for 0.2 seconds"  
    },
    {
      "type": "elementClearSendkeys",
      "content": {
        "fetch": true,
        "elementSelectors": [
          "input[name='email']",
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
            "button[type='submit']"
          ]
        },
        "note": "Clicked on login button"
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
            "button[type='submit']"
          ]
        },
        "note": "Clicked on Continue button"
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