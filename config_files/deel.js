module.exports = {
  "serviceName": "deel",
  "officialName": "Deel",
  "accountData": [
    "_firstName+' '+_lastName",
    "_emailAddress",
    "password"
  ], 
  "passwordRequirement": {
    "minLength": 10,
    "maxLength": -1,
    "mustInclude": [
      "lowerCase",
      "upperCase",
      "specialChar",
      "number" 
    ],
    "mustNotInclude": []
  },
/*********************************************************************************************************/
  "entrypointConfig": {
    "rootDomain": "letsdeel.com",
    "subDomain": "ALL.letsdeel.com",
    "entrypoints": [
      
      //login entrypoints
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "body > div.overflow > nav > div.nav-transparent.w-nav > div.nav-trans-cont > div.navigation-right > div.login-buttons > a.login-btn.w-nav-link"
          ]
        },
        "note": "CLicked login from home page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#root > div.signup-container.container > div:nth-child(3) > div.pt-2.col-lg-12.col-md-12.col-sm-12.col-12 > p > a > button"
          ]
        },
        "note": "Clicked login from signup page"
      },
      {
        "type": "login",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://app.letsdeel.com/login"
        },
        "note": "Redirects to this page for login"
      },

      //signup entrypoints
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#root > div.login-container.container > div:nth-child(4) > div > p > a > button"
          ]
        },
        "note": "Clicked sign up from login page"
      },
      {
        "type": "signup",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "app.letsdeel.com/signup"
        },
        "note": "Redirects to this page for sign up"
      },

      //recovery entrypoints
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#root > div.login-container.container > div:nth-child(4) > div > div > div > form > a > button"
          ]
        },
        "note": "Forgot password button"
      },
      {
        "type": "recovery",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://app.letsdeel.com/reset-password"
        },
        "note": "Redirects to this page for password recovery"
      },

      //signup + login success entrypoints
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://app.letsdeel.com/confirmation"
        },
        "note": "Redirects you to a page that reads 'We've sent you a confirmation email'"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "https://app.letsdeel.com/",
          "elementSelectors": [
            "#root > div > div > div > div.mb-10 > div > div > div > div:nth-child(1) > h1",
            "#root > div > nav > div > div.sidebar-inner-div > ul > div:nth-child(1) > a > li > div.flex.align-items-center.w-100",
            "#root > div > nav > div > div.sidebar-inner-div > ul > div:nth-child(2) > a > li > div.flex.align-items-center.w-100",
            "#root > div > nav > div > div.sidebar-inner-div > ul > div:nth-child(3) > a > li > div.flex.align-items-center.w-100"
          ]
        },
        "note": "Stuff in the side bar and main page you only see once you've logged in"
      },

      // triggerInitialContact entrypoints
      {
        "type": "triggerInitialContact",
        "identifierType": "elementClickedOn&delay",
        "identifier": {
          "elementSelectors": [
            "#root > div.signup-container.container > div:nth-child(3) > div.pt-2.col-lg-12.col-md-12.col-sm-12.col-12 > p > a > button"
          ],
          "delay": 1.0 
        },
        "note": "Upon clicking on 'Log in' from the Sign up page, trigger initialContact again such that the triggerInitialContact for the 'Log in' submit button is attached"
      },
      {
        "type": "triggerInitialContact",
        "identifierType": "elementClickedOn&delay",
        "identifier": {
          "elementSelectors": [
            "#root > div.signup-container.container > div:nth-child(3) > div.pl-6.mb-9.col-lg-6.col-md-6.col-sm-12.col-12",
            "#root > div.signup-container.container > div:nth-child(3) > div.pt-2.col-lg-12.col-md-12.col-sm-12.col-12 > button",
          ],
          "delay": 0.1
        },
        "note": ""
      },
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
            "#root > div.login-container.container > div:nth-child(4) > div > div > div > form > div.flex.flex-dir-col > div.input-container > div.input > input"
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
            "#root > div.login-container.container > div:nth-child(4) > div > div > div > form > div.flex.flex-dir-col > div.mt-9 > div > div.input > input[type=password"
          ],
          "value": "[account:password]"
        },
        "note": "Type in password"
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "#root > div.login-container.container > div:nth-child(4) > div > div > div > form > button"
          ]
        },
        "note": "Click on Log In"
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
              "#root > div.login-container.container > div:nth-child(4) > div > div > div > form > div.flex.flex-dir-col > div.input-container > div.input > input" // should be the same as in loginConfig
            ]
          },
          "note": "Email input field for login"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#root > div.login-container.container > div:nth-child(4) > div > div > div > form > div.flex.flex-dir-col > div.mt-9 > div > div.input > input[type=password]" // should be the same as in loginConfig
            ]
          },
          "note": "Password input field for login"
        }
      ],
      "triggerEvents": [
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              "#root > div.login-container.container > div:nth-child(4) > div > div > div > form > button" // should be the same as in loginConfig
            ]
          },
          "note": "Submit button for Log In"
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
          "note": "Email input field for sign up"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "input[name='password']"
            ]
          },
          "note": "Password input field for sign up"
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
          "note": "Submit button for sign up"
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