module.exports = {
  "serviceName": "rottentomatoes",
  "officialName": "rottentomatoes",
  "accountData": [
    "_firstName+' '+_lastName",
    "_emailAddress",
    "password"
  ],
  "passwordRequirement": {
    "minLength": 8, 
    "maxLength": -1,
    "mustInclude": [ 
      "number||specialChar"
    ]
  },
  /*********************************************************************************************************/
  "entrypointConfig": {
    "rootDomain": "rottentomatoes.com", 
    "subDomain": "ALL.rottentomatoes.com", 
    "entrypoints": [ 
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#masthead-show-login-btn"
          ]
        },
        "note": "Pressed login button"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#masthead-show-login-btn"
          ]
        },
        "note": "Clicked sign in button"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#masthead-show-registration-btn"
          ]
        },
        "note": "Pressed signup button"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#masthead-show-registration-btn"
          ]
        },
        "note": "Clicked register button"
      },
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#login-form-recover-password-btn"
          ]
        },
        "note": "Pressed forgot password button"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#login-form-recover-password-btn"
          ]
        },
        "note": "Clicked forgot password button"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
            "includedString": "www.rottentomatoes.com",
            "elementSelectors": [
              "#navbar > ul > li.js-masthead-account-links-user",
              "#navbar > ul > li.js-masthead-account-links-user > a > img"
            ]
        },
        "note": "returned to main page after login"
      },
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
            "includedString": "www.rottentomatoes.com",
            "elementSelectors": [
              "#navbar > ul > li.js-masthead-account-links-user",
							"#navbar > ul > li.js-masthead-account-links-user > a > img",
							"img[src='https://d2a5cgar23scu2.cloudfront.net/static/images/redesign/actor.default.tmb.gif']"
            ]
        },
        "note": "returned to main page after signup"
      },
      {
        "type": "triggerInitialContact",
        "identifierType": "elementClickedOn&delay",
        "identifier": {
            "elementSelectors": [
              "#masthead-show-login-btn",
              "#masthead-show-registration-btn",
              "#login-form-recover-password-btn",
              "#login-form-submit-btn",
              "#registrationForm_submitBtn"
            ],
            "delay": 1.0
        },
        "note": ""
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
            "#login-form-username",
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
            "#login-form-password",
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
            "#login-form-submit-btn",
            "button[type='submit']"
          ]
        },
        "note": "Click on 'Sign in' button"
      },
      {
        "type": "delay",
        "content": {
          "duration": 1
        },
        "note": "Wait for 1 seconds"  
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "#masthead-logo"
          ]
        },
        "note": "Click on masthead button to reload to main page"
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
              "#login-form-username"
            ]
          },
          "note": "Read in email address"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#login-form-password"
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
              "#login-form-submit-btn",
              "button[type='submit']"
            ]
          },
          "note": "Clicked on log in button"
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
              "input[type='submit']",
              "#registrationForm_submitBtn"
            ]
          },
          "note": "Clicked on CREATE YOUR ACCOUNT button"
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