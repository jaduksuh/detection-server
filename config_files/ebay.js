module.exports = {
    "serviceName": "ebay",
    "officialName": "eBay",
    "accountData": [
      "_firstName",
      "_lastName",
      "_emailAddress",
      "password"
    ],
    "passwordRequirement": {
      "minLength": 6, 
      "maxLength": -1,
      "mustInclude": [ 
        "lowerCase||upperCase", "specialChar||number"
      ]
    },
    "entrypointConfig": {
      "rootDomain": "ebay.com", 
      "subDomain": "ALL.ebay.com", 
      "entrypoints": [ 
        {
            "type": "login",
            "identifierType": "urlStartWith",
            "identifier": {
              "startUrl": "https://signin.ebay.com"
            },
            "note": "Refreshed upon login page"
        },
        {
          "type": "login",
          "identifierType": "elementClickedOn",
          "identifier": {
            "elementSelectors": [
              "#gh-ug > a",
              "#gh-wl-click-body > div > div > div > a",
              "#gh-eb-My > div > a.gh-eb-li-a.gh-rvi-menu",
              "#mainContent > div.hl-cat-nav > ul > li.saved > a"
            ]
          },
          "note": "Clicked on login button"
        },
        {
            "type": "signup",
            "identifierType": "urlStartWith",
            "identifier": {
              "startUrl": "https://signup.ebay.com"
            },
            "note": "Refreshed upon signup page"
        },
        {
          "type": "signup",
          "identifierType": "elementClickedOn",
          "identifier": {
            "elementSelectors": [
              "#create-account-link"
            ]
          },
          "note": "Clicked on signup button"
        },
        {
            "type": "recovery",
            "identifierType": "elementClickedOn",
            "identifier": {
                "elementSelectors": [
                    "#email-btn"
                ]
            },
            "note": "pressed 'Receive email' button from reset password page"
        },
        {
          "type": "recovery",
          "identifierType": "elementClickedOn",
          "identifier": {
            "elementSelectors": [
              "#fyp-btn"
            ]
          },
          "note": "Clicked on reset password button"
        },
        {
          "type": "loginSuccess",
          "identifierType": "urlIncludes",
          "identifier": {
              "includedString": [
                  "www.ebay.com"
              ]
          },
          "note": "returned to main page after login"
        },
        {
          "type": "signupSuccess",
          "identifierType": "urlIncludes",
          "identifier": {
              "includedString": [
                  "www.ebay.com"
              ]
          },
          "note": "returned to main page after signup"
        },
      ]
    },
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
                "#userid"
              ],
              "value": "[account:_emailAddress]"
            },
            "note": "Type in email address"
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
                "#signin-continue-btn"
              ]
            },
            "note": "Click on 'Continue' button"
        },
        {
            "type": "delay",
            "content": {
              "duration": 2.0
            },
            "note": "Wait for 2.0 seconds"  
        },
        {
            "type": "elementClearSendkeys",
            "content": {
              "fetch": true,
              "elementSelectors": [
                "#pass"
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
                "#sgnBt"
              ]
            },
            "note": "Click on 'Sign in' button"
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
                "#userid"
              ]
            },
            "note": "Find email address"
          },
          {
            "type": "value",
            "content": {
              "dataField": "password",
              "elementSelectors": [
                "#pass"
              ]
            },
            "note": "Find password"
          }
        ],
        "triggerEvents": [
          {
            "type": "elementClickedOn",
            "content": {
              "elementSelectors": [
                "#sgnBt" 
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
              "dataField": "_firstName",
              "elementSelectors": [
                "#firstname"
              ]
            },
            "note": "Read in first name"
          },
          {
            "type": "value",
            "content": {
              "dataField": "_lastName",
              "elementSelectors": [
                "#lastname"
              ]
            },
            "note": "Read in last name"
          },
          {
            "type": "value",
            "content": {
              "dataField": "_emailAddress",
              "elementSelectors": [
                "#Email"
              ]
            },
            "note": "Read in email"
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
                "#EMAIL_REG_FORM_SUBMIT"
              ]
            },
            "note": "Pressed 'Create Account' button"
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