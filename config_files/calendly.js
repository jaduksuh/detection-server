module.exports = {
  "serviceName": "calendly",
  "officialName": "Calendly",
  "accountData": [
    "_emailAddress",
    "_firstName+' '+_lastName",
    "password"
  ],
  "passwordRequirement": {
    "minLength": 8, 
    "maxLength": -1,
    "mustInclude": []
  },
  /*********************************************************************************************************/
  "entrypointConfig": {
    "rootDomain": "calendly.com", 
    "subDomain": "NONE.calendly.com", 
    "entrypoints": [
      {
        "type": "login",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://calendly.com/app/login",
        },
        "note": "Refreshed upon login page"
      }, 
      {
          "type": "login",
          "identifierType": "urlStartWith",
          "identifier": {
            "startUrl": "https://calendly.com/login",
          },
          "note": "Refreshed upon login page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#gatsby-focus-wrapper > div > section.sc-dTSzeu.jToNRF > div > ul.sc-bdnxRM.htlulr > li:nth-child(1) > a"
          ]
        },
        "note": "Clicked sign in button"
      },
      {
          "type": "signup",
          "identifierType": "urlStartWith",
          "identifier": {
            "startUrl": "https://calendly.com/app/signup"
          },
          "note": "Refreshed upon signup page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#gatsby-focus-wrapper > div > section.sc-dTSzeu.jToNRF > div > ul.sc-bdnxRM.htlulr > li.skip > a",
            "#gatsby-focus-wrapper > div > section:nth-child(3) > div > div > div.sc-bdnxRM.dTmbfc > form > div.sc-eCApnc.ioPoEX > button"
          ]
        },
        "note": "Clicked sign in button"
      },
      {
          "type": "recovery",
          "identifierType": "elementClickedOn",
          "identifier": {
            "elementSelectors": [
              "#main-region > div > div.js-step-region > div > div > div > div > div > h5 > a > strong"
            ]
          },
          "note": "Pressed 'Send me a recovery email' button"
      },
      {
          "type": "loginSuccess",
          "identifierType": "urlIncludes",
          "identifier": {
              "includedString": "calendly.com/event_types/user/me"
          },
          "note": "returned to main page after login"
        },
        {
          "type": "signupSuccess",
          "identifierType": "urlIncludes&elementPresent",
          "identifier": {
              "includedString": "calendly.com/app/signup",
              "elementSelectors": [
                "#main-region > div > div.js-step-region > div > div > div > div > div > div > div > p > a"
              ]
          },
          "note": "Redirected to main page after signup"
        },
        {
          "type": "triggerInitialContact",
          "identifierType": "elementClickedOn&delay",
          "identifier": {
              "elementSelectors": [
                "[class=auth-controls]",
                "[type=submit]"
              ],
              "delay": 1
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
              "input[name=email]",
            ],
            "value": "[account:_emailAddress]"
          },
          "note": "Type in email address"
      },
      {
          "type": "elementClick",
          "content": {
            "elementSelectors": [
              "button[type='submit']"
            ]
          },
          "note": "Click on 'Log in' button"
      },
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
              "input[name=password]",
            ],
            "value": "[account:password]"
          },
          "note": "Type in password"
      },
      {
          "type": "elementClick",
          "content": {
            "elementSelectors": [
              "input[value=Continue]"
            ]
          },
          "note": "Click on 'Continue' button"
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
              "button[type='submit']"
            ]
          },
          "note": "Clicked on 'Log in' button"
        },
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              "[value=Continue]"
            ]
          },
          "note": "Clicked on 'Continue' button"
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
              "[value=Continue]"
            ]
          },
          "note": "Clicked on 'Continue' button"
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