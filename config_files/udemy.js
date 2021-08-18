module.exports = {
  "serviceName": "udemy",
  "officialName": "Udemy",
  "accountData": [
    "_firstName+' '+_lastName",
    "_emailAddress",
    "password"
  ],
  
  "passwordRequirement": {
    "minLength": 6,
    "maxLength": -1,
    "mustInclude": [],
    "mustNotInclude": []
  },

  "entrypointConfig": {
    "rootDomain": "udemy.com",
    "subDomain": "ALL.udemy.com",
    "entrypoints": [
      //login entrypoints
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#udemy > div.main-content-wrapper > div.ud-app-loader.ud-component--header-v6--header.udlite-header.ud-app-loaded > div.udlite-text-sm.header--header--3sK1h.header--flex-middle--2Xqjv > div:nth-child(8) > a",
            "#udemy > div.main-content-wrapper > div.ud-app-loader.ud-component--header-v6--header.udlite-header.ud-app-loaded > div.udlite-text-sm.header--header--3sK1h.header--flex-middle--2Xqjv > div:nth-child(8)"
          ]
        },
        "note": "Login button from the home page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#udemy > div.main-content-wrapper > div.main-content > div.signup-modal-wrapper > div > div > div.loginbox-v4__footer > a"
          ]
        },
        "note": "Login button from the sign up page"
      },
      {
        "type": "login",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://www.udemy.com/join/login"
        },
        "note": "Redirects upon clicking"
      },

      //signup entrypoints
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#udemy > div.main-content-wrapper > div.ud-app-loader.ud-component--header-v6--header.udlite-header.ud-app-loaded > div.udlite-text-sm.header--header--3sK1h.header--flex-middle--2Xqjv > div:nth-child(9) > a"
          ]
        },
        "note": "Sign up button from home page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#udemy > div.main-content-wrapper > div.main-content > div.loginbox-v4.modal-content-wrapper.ud-app-loader.ud-app-loaded > div.loginbox-v4__footer > div:nth-child(1) > a"
          ]
        },
        "note": "Sign up button from login page"
      },
      {
        "type": "signup",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://www.udemy.com/join/signup-popup"
        },
        "note": "Redirects upon clicking sign up"
      },

      //recovery entrypoints
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#login-form > div.form-actions > div > a"
          ]
        },
        "note": "Clicking forgot password from login screen"
      },
      {
        "type": "recovery",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://www.udemy.com/user/forgot-password"
        },
        "note": "Redirects upon clicking"
      },

      //signup + login success entrypoints
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://www.udemy.com/occupation/explorer/"
        },
        "note": "Redirects to this page upon successful account creation"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "www.udemy.com",
          "elementSelectors": [
            "#udemy > div.main-content-wrapper > div.main-content > div.ud-component--browse--link-bar > nav > ul"
          ]
        },
        "note": "_______"
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
            "#email--1"
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
            "#submit-id-submit"
          ]
        },
        "note": "Click on submit"
      },
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
              "#email--1" // should be the same as in loginConfig
            ]
          },
          "note": "Login screen email input field"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#id_password" // should be the same as in loginConfig
            ]
          },
          "note": "Login screen password input field"
        }
      ],
      "triggerEvents": [
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              "#submit-id-submit" // should be the same as in loginConfig
            ]
          },
          "note": "Submit button"
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
              "#email--1" // should be the same as in signupConfig
            ]
          },
          "note": "_____"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#password" // should be the same as in signupConfig
            ]
          },
          "note": "_____"
        }
      ],
      "triggerEvents": [
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              "#submit-id-submit" // should be the same as in signupConfig
            ]
          },
          "note": "_____"
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