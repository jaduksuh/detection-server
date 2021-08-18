module.exports = {
  "serviceName": "mixpanel",
  "officialName": "Mixpanel",
  "accountData": [
    "_firstName+' '+_lastName",
    "_emailAddress",
    "password"
    //custom question: Department for work, Company name, Phone number, Company size, # of monthly active users
  ],
  "passwordRequirement": {
    "minLength": 8,
    "maxLength": 64,
    "mustInclude": [],
    "mustNotInclude": []
  },
/*********************************************************************************************************/
  "entrypointConfig": {
    "rootDomain": "mixpanel.com",
    "subDomain": "NONE.mixpanel.com",
    "entrypoints": [
      
      //login entrypoints
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#header-nav-secondary > ul > li:nth-child(3) > a"
          ]
        },
        "note": "CLicked login from home page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#signup > div.auth-form-footer > a"
          ]
        },
        "note": "CLicked login from sign up page"
      },
      {
        "type": "login",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://mixpanel.com/login/"
        },
        "note": "Redirects to this page for login"
      },

      //signup entrypoints
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#header-nav-secondary > ul > li:nth-child(4) > a"
          ]
        },
        "note": "Clicked sign up from home page - there are two"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#wrapper > div.parallax-container--over > section.home-hero-section > div.intro-row > div > ul > li:nth-child(2) > a"
          ]
        },
        "note": "Clicked sign up from home page - there are two"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#mpSignInForm > div.auth-form-footer > a"
          ]
        },
        "note": "Clicked sign up from login page"
      },
      {
        "type": "signup",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "mixpanel.com/register"
        },
        "note": "Redirects to this page for sign up"
      },

      //recovery entrypoints
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#mpSignInForm > div.mp-sign-in-extra-row > a"
          ]
        },
        "note": "Forgot password button"
      },
      {
        "type": "recovery",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://mixpanel.com/forgot-password/"
        },
        "note": "Redirects to this page for password recovery"
      },

      //signup + login success entrypoints
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://mixpanel.com/report/"
        },
        "note": "Redirects to this page upon successful account creation"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://mixpanel.com/project/"
        },
        "note": "Redirects to a dashboard page that starts with the above URL upon successful login attempt"
      },
      {
        "type": "triggerInitialContact",
        "identifierType": "elementClickedOn&delay",
        "identifier": {
          "elementSelectors": [
            "mp-button[role='button']"
          ],
          "delay": 0.1
        },
        "note": "Create account button - need to reload the whole thing to check for signupSucces element"
      }
    ]
  },
/*********************************************************************************************************/
  //login config navigation
  "loginConfig": {
    "navigation": [
      {
        "type": "elementClearSendkeys",
        "content": {
          "fetch": true,
          "elementSelectors": [
            "#id_email"
          ],
          "value": "[account:_emailAddress]"
        },
        "note": "Type in account email address"
      },
      {
        "type": "elementClearSendkeys",
        "content": {
          "fetch": true,
          "elementSelectors": [
            "#id_password"
          ],
          "value": "[account:password]"
        },
        "note": "Type in password"
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "#mpSignInForm > div:nth-child(5) > mp-button"
          ]
        },
        "note": "Click on Sign n"
      }
    ]
  },
/*********************************************************************************************************/
  "signupConfig": {
    "agreements": [],
    "customQuestions": [],
    "navigation": []
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
              "#id_email" // should be the same as in loginConfig
            ]
          },
          "note": "Login input field"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#id_password" // should be the same as in loginConfig
            ]
          },
          "note": "PW input field"
        }
      ],
      "triggerEvents": [
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              "#mpSignInForm > div:nth-child(5) > mp-button" // should be the same as in loginConfig
            ]
          },
          "note": "Log in button"
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
              "#email" // should be the same as in signupConfig
            ]
          },
          "note": "Email input field"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#password" // should be the same as in signupConfig
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
              "mp-button[role='button']" // should be the same as in signupConfig
            ]
          },
          "note": "Get started button - at Mixpanel, you type in email and password and click get started. The page does not redirect but you get a fresh new set of questionaire asking for more info. The elementSelector listed here is the button that you click after inputting email and password"
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