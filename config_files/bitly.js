module.exports = {
    "serviceName": "bitly",
    "officialName": "bitly",
    "accountData": [
      "_username",
      "_emailAddress",
      "password"
    ],
    "passwordRequirement": {
      "minLength": 6, 
      "maxLength": -1,
      "mustInclude": [ 
        "number", "special", "lowerCase||upperCase"
      ]
    },
    /*********************************************************************************************************/
    "entrypointConfig": {
      "rootDomain": "bitly.com", 
      "subDomain": "ALL.bitly.com", 
      "entrypoints": [ 
        {
            "type": "login",
            "identifierType": "urlStartWith",
            "identifier": {
              "startUrl": "https://bitly.com/a/sign_in"
            },
            "note": "Refreshed upon login page"
        },
        {
          "type": "login",
          "identifierType": "elementClickedOn",
          "identifier": {
            "elementSelectors": [
              "#sidemenu > li.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-70 > a",
              "#sign-in-link"
            ]
          },
          "note": "Clicked on login button"
        },
        {
            "type": "signup",
            "identifierType": "urlStartWith",
            "identifier": {
              "startUrl": "https://bitly.com/a/sign_up"
            },
            "note": "Refreshed upon signup page"
        },
        {
          "type": "signup",
          "identifierType": "elementClickedOn",
          "identifier": {
            "elementSelectors": [
              "#sidemenu > li.blue.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-4016 > a",
              "#post-6438 > div > section.full-width-content.text-content.no-padding-bottom > div > div > div > h2 > a"
            ]
          },
          "note": "Clicked on login button"
        },
        {
            "type": "recovery",
            "identifierType": "urlStartWith",
            "identifier": {
              "startUrl": "https://bitly.com/a/forgot_password"
            },
            "note": "Refreshed upon recovery page"
        },
        {
          "type": "recovery",
          "identifierType": "elementClickedOn",
          "identifier": {
            "elementSelectors": [
              "#sign-in > div.susi-fields-wrapper > fieldset > a"
            ]
          },
          "note": "Clicked on recovery button"
        },
        {
            "type": "loginSuccess",
            "identifierType": "urlIncludes",
            "identifier": {
                "includedString": [
                    "app.bitly.com"
                ]
            },
            "note": "returned to main page after login"
          },
          {
            "type": "signupSuccess",
            "identifierType": "urlIncludes",
            "identifier": {
                "includedString": [
                    "app.bitly.com"
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
                "#sign-in > div.susi-fields-wrapper > fieldset > input.text",
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
                "#sign-in > div.susi-fields-wrapper > fieldset > input.pw",
              ],
              "value": "[account:password]"
            },
            "note": "Type in password"
        },
        {
            "type": "elementClick",
            "content": {
              "elementSelectors": [
                "#sign-in > div.susi-fields-wrapper > fieldset > input.button.button-primary.sign-up-in"
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
                "#sign-in > div.susi-fields-wrapper > fieldset > input.text"
              ]
            },
            "note": "Read in email address"
          },
          {
            "type": "value",
            "content": {
              "dataField": "password",
              "elementSelectors": [
                "#sign-in > div.susi-fields-wrapper > fieldset > input.pw"
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
                "#sign-in > div.susi-fields-wrapper > fieldset > input.button.button-primary.sign-up-in"
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
                "#sign-up > div.susi-fields-wrapper > fieldset > input:nth-child(2)"
                ]
            },
            "note": "Read in username"
          },
          {
            "type": "value",
            "content": {
              "dataField": "_emailAddress",
              "elementSelectors": [
                "#sign-up > div.susi-fields-wrapper > fieldset > input:nth-child(5)"
              ]
            },
            "note": "Read in email address"
          },
          {
            "type": "value",
            "content": {
              "dataField": "password",
              "elementSelectors": [
                "#sign-up > div.susi-fields-wrapper > fieldset > input.pw"
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
                "#submit"
              ]
            },
            "note": "Clicked on 'Sign up' button"
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