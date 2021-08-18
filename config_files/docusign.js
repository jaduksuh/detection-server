module.exports = {
  "serviceName": "docusign",
  "officialName": "DocuSign",
  "accountData": [
    "_emailAddress",
    "password"
  ],
  "passwordRequirement": {
    "minLength": -1,
    "maxLength": -1,
    "mustInclude": [],
    "mustNotInclude": []
  },
  "entrypointConfig": {
    "rootDomain": "docusign.com",
    "subDomain": "ALL.docusign.com",
    "entrypoints": [
      {
        "type": "login",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://account.docusign.com/oauth/auth?response_type=code"
        },
        "note": "Refreshed upon login page"
      },
      {
        "type": "login",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://account.docusign.com/username"
        },
        "note": "Refreshed upon login page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "body > div.dialog-off-canvas-main-canvas.js-stickybit-parent > nav.utility-nav.black > div > div > div.utility-nav--links-container > a:nth-child(4)"
          ]
        },
        "note": "Clicked on 'Log in' button from main page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            'a[data-ga=“navigation|top|login"]'
          ]
        },
        "note": "Clicked on 'Log in' button from sign up page"
      },
      {
        "type": "signup",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://go.docusign.com/o/trial/"
        },
        "note": "Refreshed upon sign up page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "body > div.dialog-off-canvas-main-canvas.js-stickybit-parent > nav.navbar.js-navbar.search-allowed > div.container-wide > div > div > div > div.navbar-ctas > a.button.header-cta.header-trial",
            'a[data-ga="navigation|cta|free trial"]'
          ]
        },
        "note": "Clicked on 'Create one' button from sign in page"
      },
      // {
      //   "type": "recovery",
      //   "identifierType": "urlStartWith",
      //   "identifier": {
      //     "startUrl": "https://myaccount.nytimes.com/auth/forgot-password"
      //   },
      //   "note": "Refreshed upon recovery page"
      // },
      // {
      //   "type": "recovery",
      //   "identifierType": "elementClickedOn",
      //   "identifier": {
      //     "elementSelectors": [
      //       "#myAccountAuth > div.css-1xd1ug7-Container.edabiy60 > div > form > div > div.css-1s4tz8r-AnimatedDiv.e1e6zg6614 > div.css-1l3s0e2-TwoColumns.e1e6zg666 > a"
      //     ]
      //   },
      //   "note": "Clicked on 'Forgot your password?' button from login page"
      // },

      // {
      //   "type": "signupSuccess",
      //   "identifierType": "urlIncludes&elementPresent",
      //   "identifier": {
      //     "includedString": "https://www.nytimes.com/", 
      //     "elementSelectors": [
      //       'body > div:nth-child(45) > div > div > section > a > button'
      //     ]
      //   },
      //   "note": ""
      // },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://app.docusign.com/home"
        },
        "note": "_______"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://app.docusign.com/authentication"
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
            "#username",
            'input[name="email"]',
            'input[data-qa="username"]'
          ],
          "value": "[account:_emailAddress]"
        },
        "note": "Type in email address"
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            'button[data-qa="submit-username"]'
          ]
        },
        "note": "Click on 'Sign in' button"
      },
      {
        "type": "delay",
        "content": {
          "duration": "1.0"
        },
        "note": "_______"
      },
      {
        "type": "elementClearSendkeys",
        "content": {
          "fetch": true,
          "elementSelectors": [
            "#password",
            'input[data-qa="password"]'
          ],
          "value": "[account:password]"
        },
        "note": "Type in password"
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "body > div > div > div > main > section > div:nth-child(1) > div > form > div > div:nth-child(4) > button > div"
          ]
        },
        "note": "Click on 'Sign in' button"
      }
    ]
  },
  "signupConfig": {
    "agreements": [
      {
        "title": "Terms of Service",
        "link": "https://help.nytimes.com/hc/en-us/articles/115014893428-Terms-of-service"
      },
      {
        "title": "Privacy Policy",
        "link": "https://www.nytimes.com/privacy/privacy-policy"
      }
    ],
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
              "#username"
            ]
          },
          "note": "_____"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#password"
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
              'button[data-qa="submit-username"]',
              'button[data-qa="submit-password"]'
            ]
          },
          "note": "_____"
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
              'input[name="email"]'
            ]
          },
          "note": "_____"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#password"
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
              "#submitMainText_0",
              "#activateNewUser > div:nth-child(7) > button"
            ]
          },
          "note": "_____"
        }
      ]
    },
    "recovery": {}
  }
};