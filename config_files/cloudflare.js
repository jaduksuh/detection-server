module.exports = {
  "serviceName": "cloudflare",
  "officialName": "Cloudflare",
  "accountData": [
    "_emailAddress",
    "password"
  ],
  
  "passwordRequirement": {
    "minLength": 8,
    "maxLength": -1,
    "mustInclude": [

      "specialChar",
      "number"
      
    ],
    "mustNotInclude": [

    ]
  },
  
  "entrypointConfig": {
    "rootDomain": "cloudflare.com",
    "subDomain": "ALL.cloudflare.com",
    "entrypoints": [
      
      //login entrypoints
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "a[href='https://dash.cloudflare.com/login']"
          ]
        },
        "note": "CLicked login from home page"
      },
      {
        "type": "login",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://dash.cloudflare.com/login"
        },
        "note": "Redirects to this page for login"
      },

      //signup entrypoints
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "a[href='https://dash.cloudflare.com/sign-up']"
          ]
        },
        "note": "CLicked login from home page"
      },
      {
        "type": "signup",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://dash.cloudflare.com/sign-up"
        },
        "note": "Redirects to this page for sign up"
      },

      //recovery entrypoints
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "a[href='https://dash.cloudflare.com/forgot-password']"
          ]
        },
        "note": "Forgot password button"
      },
      {
        "type": "recovery",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://dash.cloudflare.com/forgot-password"
        },
        "note": "Redirects to this page for password recovery"
      },

      //signup + login success entrypoints
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "https://dash.cloudflare.com/",
          "elementSelectors": [
            "div.c_q.c_c"
          ]
        },
        "note": "Asks for more cusstom questions in the page that starts with the above domain, followed by random numbers"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "https://dash.cloudflare.com/",
          "elementSelectors": [
            "div.c_q.c_c"
          ]
        },
        "note": "Goes to a url that starts with the above, followed by random numbers"
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
            "input[data-testid='login-input-email']"
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
            "input[data-testid='login-input-password']"
          ],
          "value": "[account:password]"
        },
        "note": "Type in password"
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "button[data-testid='login-submit-button']"
          ]
        },
        "note": "Click on ______"
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
              "input[data-testid='login-input-email']" // should be the same as in loginConfig
            ]
          },
          "note": "Login email input field"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "input[data-testid='login-input-password']" // should be the same as in loginConfig
            ]
          },
          "note": "Login password input field"
        }
      ],
      "triggerEvents": [
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              "button[data-testid='login-submit-button']" // should be the same as in loginConfig
            ]
          },
          "note": "Login submit button"
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
              "input[data-testid='signup-input-email']" // should be the same as in signupConfig
            ]
          },
          "note": "Email input field"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "input[data-testid='signup-input-password']" // should be the same as in signupConfig
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
              "button[data-testid='signup-submit-button']" // should be the same as in signupConfig
            ]
          },
          "note": "Create Account button"
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