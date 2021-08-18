module.exports = {
    "serviceName": "stackoverflow",
    "officialName": "Stack Overflow",
    "accountData": [
      "_username",
      "_emailAddress",
      "password"
    ],
    "passwordRequirement": {
      "minLength": 8, 
      "maxLength": -1,
      "mustInclude": [ 
        "number", "upperCase||lowerCase"
      ]
    },
    "entrypointConfig": {
      "rootDomain": "stackoverflow.com", 
      "subDomain": "NONE.stackoverflow.com", 
      "entrypoints": [ 
        {
          "type": "login",
          "identifierType": "urlStartWith",
          "identifier": {
            "startUrl": "https://stackoverflow.com/users/login"
          },
          "note": "Refreshed upon login page"
        },
        {
          "type": "login",
          "identifierType": "elementClickedOn",
          "identifier": {
            "elementSelectors": [
              "a[class='login-link s-btn s-btn__filled py8 js-gps-track']"
            ]
          },
          "note": "Clicked sign in button"
        },
        {
          "type": "signup",
          "identifierType": "urlStartWith",
          "identifier": {
            "startUrl": "https://stackoverflow.com/users/signup"
          },
          "note": "Refreshed upon signup page"
        },
        {
          "type": "signup",
          "identifierType": "elementClickedOn",
          "identifier": {
            "elementSelectors": [
              "a[class='login-link s-btn s-btn__primary py8']"
            ]
          },
          "note": "Clicked sign up button"
        },
        {
          "type": "recovery",
          "identifierType": "urlStartWith",
          "identifier": {
            "startUrl": "https://stackoverflow.com/users/account-recovery"
          },
          "note": "Refreshed upon recovery page"
        },
        {
          "type": "recovery",
          "identifierType": "elementClickedOn",
          "identifier": {
            "elementSelectors": [
              "#login-form > div.grid.fd-column-reverse.gs4.gsy.js-auth-item > div.grid.ai-center.ps-relative.jc-space-between > a"
            ]
          },
          "note": "Clicked on forgot password button"
        },
        {
          "type": "loginSuccess",
          "identifierType": "urlIncludes&elementPresent",
          "identifier": {
              "includedString": "https://stackoverflow.com/",
              "elementSelectors": [
                "body > header > div > ol.overflow-x-auto.ml-auto.-secondary.d-flex.ai-center.list-reset.h100.user-logged-in" //search bar you see in the main page only after you get logged in 
              ]
          },
          "note": "returned to main page after login"
        },
        {
          "type": "signupSuccess",
          "identifierType": "urlIncludes&elementPresent",
          "identifier": {
            "includedString": "https://stackoverflow.com/users/signup",
            "elementSelectors": [
              "svg[class='fc-success svg-icon iconCheckmarkLg']"
            ]
          },
          "note": "Redirected after signup"
        },
      ]
    },
    "loginConfig": { 
      "navigation": [
        {
          "type": "delay",
          "content": {
            "duration": 0.3
          },
          "note": "Wait for 0.5 seconds"  
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
              "#submit-button"
            ]
          },
          "note": "Click on 'Log in' button"
        },
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
                "#submit-button"
              ]
            },
            "note": "Clicked on 'Log in' button"
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
                    "#display-name"
                  ]
                },
                "note": "Read in username"
            },
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
                        "#submit-button"
                    ]
                },
                    "note": "Detect 'Sign up' button click"
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