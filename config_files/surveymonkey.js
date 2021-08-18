module.exports = {
  "serviceName": "surveymonkey",
  "officialName": "SurveyMonkey",
  "accountData": [
    "_username",
    "_firstName",
    "_lastName",
    "_emailAddress",
    "password"
  ],
  
  "passwordRequirement": {
    "minLength": 8,
    "maxLength": -1,
    "mustInclude": [

    ],
    "mustNotInclude": [

    ]
  },
  
  "entrypointConfig": {
    "rootDomain": "surveymonkey.com",
    "subDomain": "ALL.surveymonkey.com",
    "entrypoints": [
      
      //login entrypoints
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#root > div > div.sm-header > div > div.wds-display--none.wds-display--md-block > div > a.wds-button.wds-button--charcoal.wds-button--text.wds-button--sm",
          ]
        },
        "note": "Login button from home screen, as well as www.surveymonkey.com/welcome which as an alternative appearnce but they both have the same elementSelectors for the login button"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#sign-up > div > div:nth-child(1) > p > a",
          ]
        },
        "note": "Login button clicked from sign up screen"
      },
      {
        "type": "login",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://www.surveymonkey.com/user/sign-in"
        },
        "note": "Redirects upon clicking"
      },

      //signup entrypoints
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#root > div > div.sm-header > div > div.wds-display--none.wds-display--md-block > div > a.wds-button.wds-button--upgrade.wds-button--solid.wds-button--sm"
          ]
        },
        "note": "Sign up button from home screen"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "body > div.content-wrapper > div.bd > div > div > div.clearfix.account-header > div.already.two-column-header > p:nth-child(2) > a"
          ]
        },
        "note": "Sign up button from home screen"
      },
      {
        "type": "signup",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://www.surveymonkey.com/user/sign-up/"
        },
        "note": "Redirects upon clicking"
      },

      //recovery entrypoints
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#sign_in_form > fieldset > div > div:nth-child(4) > div:nth-child(1) > a"
          ]
        },
        "note": "Forgot password button"
      },
      {
        "type": "recovery",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://www.surveymonkey.com/user/forgot-password/"
        },
        "note": "Redirects upon clicking"
      },

      //signup + login success entrypoints
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://www.surveymonkey.com/profile/"
        },
        "note": "First, redirects to profile/ and then redirects to /create"
      },
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://www.surveymonkey.com/create"
        },
        "note": "First, redirects to profile/ and then redirects to /create"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://www.surveymonkey.com/dashboard/"
        },
        "note": "Redirects here after successful login"
      }
    ]
  },

  //login config navigation
  "loginConfig": {
    "navigation": [
      {
        "type": "elementClearSendkeys",
        "content": {
          "fetch": true,
          "elementSelectors": [
            "#username"
          ],
          "value": "[account:_username]"
        },
        "note": "Type in account username"
      },
      {
        "type": "elementClearSendkeys",
        "content": {
          "fetch": true,
          "elementSelectors": [
            "#password"
          ],
          "value": "[account:password]"
        },
        "note": "Type in password"
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "#sign_in_form > fieldset > div > div:nth-child(5) > button"
          ]
        },
        "note": "Click on submit"
      }
    ]
  },
  "signupConfig": {
    "agreements": [],
    "customQuestions": [],
    "navigation": []
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
            "dataField": "_username",
            "elementSelectors": [
              "#username" // should be the same as in loginConfig
            ]
          },
          "note": "Username input field"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#password" // should be the same as in loginConfig
            ]
          },
          "note": "Password input field"
        }
      ],
      "triggerEvents": [
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              "#sign_in_form > fieldset > div > div:nth-child(5) > button" // should be the same as in loginConfig
            ]
          },
          "note": "clicked submit button"
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
              "#username" // should be the same as in signupConfig
            ]
          },
          "note": "Username input field for sign up form"
        },
        {
          "type": "value",
          "content": {
            "dataField": "_emailAddress",
            "elementSelectors": [
              "#email" // should be the same as in signupConfig
            ]
          },
          "note": "Email input field for sign up form"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#password" // should be the same as in signupConfig
            ]
          },
          "note": "Password input field for sign up form"
        }
      ],
      "triggerEvents": [
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              "#submitform" // should be the same as in signupConfig
            ]
          },
          "note": "Submit button"
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