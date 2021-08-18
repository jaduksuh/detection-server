module.exports = {
  "serviceName": "godaddy",
  "officialName": "GoDaddy",
  "accountData": [
    "_emailAddress",
    "_username",
    "password"
  ],
  "passwordRequirement": {
    "minLength": 8,
    "maxLength": -1,
    "mustInclude": [],
    "mustNotInclude": []
  },
  "entrypointConfig": {
    "rootDomain": "godaddy.com",
    "subDomain": "ALL.godaddy.com",
    "entrypoints": [
      {
        "type": "login",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://sso.godaddy.com/?realm=idp"
        },
        "note": "Refreshed upon login page"
      },
      {
        "type": "login",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://sso.godaddy.com/login"
        },
        "note": "Refreshed upon login page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#id-68aad88a-f732-425d-b4c3-d14407a0aa2a-flyout > div.account-info-container > div.sign-in > ul > li > a",
            "#login-link"
          ]
        },
        "note": "Clicked on 'Log in' button from main page"
      },
      {
        "type": "signup",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://sso.godaddy.com/account/create"
        },
        "note": "Refreshed upon sign up page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#id-68aad88a-f732-425d-b4c3-d14407a0aa2a-flyout > div.account-info-container > div.sign-up > ul > li > a",
            "#create_account",
            "#sign-up-email"
          ]
        },
        "note": "Clicked on 'Sign up' button"
      },
      {
        "type": "recovery",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://sso.godaddy.com/account/reset"
        },
        "note": "Refreshed upon recovery page"
      },
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#forgot_password"
          ]
        },
        "note": "Clicked on 'Forgot your password?' button from login page"
      },
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://account.godaddy.com/products"
        },
        "note": "_______"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://account.godaddy.com/products"
        },
        "note": "_______"
      }
    ]
  },
  "loginConfig": {
    "navigation": [
      {
        "type": "elementClearSendkeys",
        "content": {
          "fetch": true,
          "elementSelectors": [
            "#username"
          ],
          "value": "[account:_emailAddress]"
        },
        "note": "Type in username"
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
            "#submitBtn"
          ]
        },
        "note": "Click on 'Sign in' button"
      }
    ]
  },
  "signupConfig": {
    "agreements": [
      {
        "title": "Terms & Conditions",
        "link": "https://www.godaddy.com/legal/agreements/universal-terms-of-service-agreement"
      },
      {
        "title": "Privacy Policy",
        "link": "https://www.godaddy.com/legal/agreements/privacy-policy"
      }
    ],
    "customQuestions": [],
    "navigation": [
      {
        "type": "gotoUrl",
        "content": {
          "url": "https://sso.godaddy.com/account/create"
        },
        "note": "_______"
      },
      // {
      //   "type": "elementClick",
      //   "content": {
      //     "elementSelectors": [
      //       "#sign-up-email"
      //     ]
      //   },
      //   "note": "_______"
      // },
      {
        "type": "elementClearType",
        "content": {
          "elementSelectors": [
            "#email"
          ],
          "fetch": true,
          "value": "[profile:ORDER_emailAddress]"
        },
        "note": "_______"
      },
      {
        "type": "elementClearType",
        "content": {
          "elementSelectors": [
            "#username"
          ],
          "fetch": true,
          "value": "[profile:ORDER_username]"
        },
        "note": "_______"
      },
      {
        "type": "elementClearType",
        "content": {
          "elementSelectors": [
            "#new-password"
          ],
          "fetch": true,
          "value": "[profile:DEFAULT_PASSWORD]"
        },
        "note": "_______"
      },
      {
        "type": "breakpoint",
        "note": "_______"
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "#submitBtn"
          ]
        },
        "note": "_______"
      },
      {
        "type": "____",
        "content": {
          "___": "___"
        },
        "note": "_______"
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
              "#username"
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
              "#submitBtn"
            ]
          },
          "note": "Clicked on submit button"
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
              "#username"
            ]
          },
          "note": "Read in email address"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#new-password"
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
              "#submitBtn"
            ]
          },
          "note": "Clicked on submit button"
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