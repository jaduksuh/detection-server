module.exports = {
  "serviceName": "retool",
  "officialName": "Retool",
  "accountData": [
    "_firstName",
    "_lastName",
    "_emailAddress",
    "password"
  ],
  
  "passwordRequirement": {
    "minLength": 8,
    "maxLength": -1,
    "mustInclude": [],
    "mustNotInclude": [

    ]
  },
  
  "entrypointConfig": {
    "rootDomain": "retool.com",
    "subDomain": "ALL.retool.com",
    "entrypoints": [
      
      //login entrypoints
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#gatsby-focus-wrapper > div > nav > div > div > div.navbarDesktop__NavbarDesktopContainer-sc-2bw4mp-0.eIUzCD > div > a.navbarDesktop__NavbarLoginLink-sc-2bw4mp-4.iWKIeL"
          ]
        },
        "note": "CLicked login from home page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#signup-page > div > div > div > div > div.auth-subheading > a"
          ]
        },
        "note": "CLicked login from sign up page"
      },
      {
        "type": "login",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://login.retool.com/auth/login"
        },
        "note": "Redirects to this page for login"
      },

      //signup entrypoints
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#gatsby-focus-wrapper > div > nav > div > div > div.navbarDesktop__NavbarDesktopContainer-sc-2bw4mp-0.eIUzCD > div > a.navbarDesktop__NavbarSignupButton-sc-2bw4mp-5.gqljGM"
          ]
        },
        "note": "Clicked try for free from home page - there are two"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#header-section > div.pages__CenteredTitle-sc-6kvjaa-0.hoGovk > div > a > button"
          ]
        },
        "note": "Clicked try for free from home page - there are two"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#root > div > div > div > div > div > div > div > div.auth-subheading > a"
          ]
        },
        "note": "Clicked sign up from login page"
      },
      {
        "type": "signup",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://login.retool.com/auth/signup"
        },
        "note": "Redirects to this page for sign up"
      },

      //recovery entrypoints
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#root > div > div > div > div > div > div > div > div.auth-form-inner > div > div > form > div:nth-child(2) > div.ant-col.ant-col-24.ant-form-item-label > label > div > a"
          ]
        },
        "note": "Forgot password button"
      },
      {
        "type": "recovery",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://login.retool.com/auth/resetPassword"
        },
        "note": "Redirects to this page for password recovery"
      },

      //signup + login success entrypoints
      //login success entrypoint not really possible
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://login.retool.com/setup"
        },
        "note": "Redirects to this page upon successfully submitting email and password"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "retool.com"
        },
        "note": "At retool, every user has his/her own subdomain and upon succesful login attempt, users are redirected to xxxxx.retool.com. This loginSuccess config is not 100% accurate"
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
            "#email"
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
            "#root > div > div > div > div > div > div > div > div.auth-form-inner > div > div > form > div.auth-button-row > button"
          ]
        },
        "note": "Click on sign in"
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
            "dataField": "_emailAddress",
            "elementSelectors": [
              "#email" // should be the same as in loginConfig
            ]
          },
          "note": "Email input field"
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
              "#root > div > div > div > div > div > div > div > div.auth-form-inner > div > div > form > div.auth-button-row > button" // should be the same as in loginConfig
            ]
          },
          "note": "Click sign in"
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
          "note": "email input field for sign up"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#password" // should be the same as in signupConfig
            ]
          },
          "note": "pw input field for sign up"
        }
      ],
      "triggerEvents": [
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              "#signup-page > div > div > div > div > div.auth-form-inner > div > div > div > form > div.auth-button-row > button" // should be the same as in signupConfig
            ]
          },
          "note": "Sign up button"
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