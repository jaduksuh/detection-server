module.exports = {
    "serviceName": "sendgrid",
    "officialName": "SendGrid",
    "accountData": [
      "_emailAddress",
      "_username", // under default conditions, username = email address
      "password"
    ],
    "passwordRequirement": {
      "minLength": 16, 
      "maxLength": -1,
      "mustInclude": []
    },
    /*********************************************************************************************************/
    "entrypointConfig": {
      "rootDomain": "sendgrid.com", 
      "subDomain": "ALL.sendgrid.com", 
      "entrypoints": [ 
        {
            "type": "login",
            "identifierType": "urlStartWith",
            "identifier": {
              "startUrl": "https://app.sendgrid.com/login"
            },
            "note": "Refreshed upon login page"
        },
        {
          "type": "login",
          "identifierType": "elementClickedOn",
          "identifier": {
            "elementSelectors": [
              "#gatsby-focus-wrapper > div > nav > div.css-1f7wcey.ergh2hd3 > div:nth-child(2) > a"
            ]
          },
          "note": "Clicked on login button"
        },
        {
            "type": "signup",
            "identifierType": "urlStartWith",
            "identifier": {
              "startUrl": "https://signup.sendgrid.com"
            },
            "note": "Refreshed upon signup page"
        },
        {
          "type": "signup",
          "identifierType": "elementClickedOn",
          "identifier": {
            "elementSelectors": [
              "a[href='https://signup.sendgrid.com']",
              "#gatsby-focus-wrapper > div > nav > div.css-1324b11.ergh2hd4 > button",
              "#gatsby-focus-wrapper > div > div > div > header > div > div.row.row--small > div > button",
              "#gatsby-focus-wrapper > div > div > div > header > div:nth-child(1) > button",
              "#gatsby-focus-wrapper > div > div > div > div.p-relative.p-bottom-5.text-center.bg-offset-short-light-blue-bottom > div > div > div > a.btn.btn--primary.btn--large"
            ]
          },
          "note": "Clicked on signup button"
        },
        {
            "type": "recovery",
            "identifierType": "urlStartWith",
            "identifier": {
              "startUrl": "https://app.sendgrid.com/forgot_password"
            },
            "note": "Refreshed upon recovery page"
        },
        {
          "type": "recovery",
          "identifierType": "elementClickedOn",
          "identifier": {
            "elementSelectors": [
              "body > div.layout > main > div.login-container > div > div.login-modal > div > div:nth-child(1) > div > form > div.row.login-password-options > div > a"
            ]
          },
          "note": "Clicked on Forgot your password button"
        },
        {
            "type": "loginSuccess",
            "identifierType": "urlIncludes",
            "identifier": {
                "includedString": [
                    "app.sendgrid.com"
                ]
            },
            "note": "returned to main page after login"
          },
          {
            "type": "signupSuccess",
            "identifierType": "urlIncludes",
            "identifier": {
                "includedString": [
                    "https://signup.sendgrid.com/account_details"
                ]
            },
            "note": "Redirected to additional info page after signup"
          },
          {
            "type": "triggerInitialContact",
            "identifierType": "urlIncludes",
            "identifier": {
                "includedString": []
            },
            "note": "______"
          }
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
                "#usernameContainer-input-id",
              ],
              "value": "[account:_username]"
            },
            "note": "Type in username" // under default conditions, username = email address
        },
        {
            "type": "elementClearSendkeys",
            "content": {
              "fetch": true,
              "elementSelectors": [
                "#passwordContainer-input-id",
              ],
              "value": "[account:password]"
            },
            "note": "Type in password"
        },
        {
            "type": "elementClick",
            "content": {
              "elementSelectors": [
                "body > div.layout > main > div.login-container > div > div.login-modal > div > div:nth-child(1) > div > form > div.login-btn > button"
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
              "dataField": "_username",
              "elementSelectors": [
                "#usernameContainer-input-id"
              ]
            },
            "note": "Read in username"
          },
          {
            "type": "value",
            "content": {
              "dataField": "password",
              "elementSelectors": [
                "#passwordContainer-input-id"
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
                "body > div.layout > main > div.login-container > div > div.login-modal > div > div:nth-child(1) > div > form > div.login-btn > button"
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
                "#email"
              ]
            },
            "note": "Read in email address"
          },
					{
            "type": "value",
            "content": {
              "dataField": "_username",
              "elementSelectors": [
                "#email",
              ]
            },
            "note": "Read in username (email)"
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
                "#root > main > article > section > section > button"
              ]
            },
            "note": "Clicked on 'Create Account' button"
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