module.exports = {
  "serviceName": "monday",
  "officialName": "monday",
  "accountData": [
    "_emailAddress",
    "password"
  ],
  "passwordRequirement": {
    "minLength": 1,
    "maxLength": -1,
    "mustInclude": [],
    "mustNotInclude": []
  },
  "entrypointConfig": {
    "rootDomain": "monday.com",
    "subDomain": "ALL.monday.com",
    "entrypoints": [
      {
        "type": "login",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://auth.monday.com/auth/login_monday"
        },
        "note": "Refreshed upon login page"
      },
      {
        "type": "login",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": ".monday.com/auth/login_monday"
        },
        "note": "Refreshed upon login page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#__next > div.jsx-652734982.template-content-wrapper > div > div.jsx-197098977.base-layout-segment-component.base-layout-segment-component-0 > div > div.jsx-308082724.desktop-wrapper > header > div > div > div > nav > div.right-side-header-links > div:nth-child(2)",
            "#soft-signup-form-container > div > div > div > div.signup-step-system-layout-content-wrapper > div > div.soft-signup-form-component > div > div.soft-signup-content-wrapper > div.soft-signup-login-button-wrapper > div > a"
          ]
        },
        "note": "Clicked on 'Log in' button"
      },
      {
        "type": "signup",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://auth.monday.com/users/sign_up"
        },
        "note": "Refreshed upon sign up page"
      },
      {
        "type": "signup",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://auth.monday.com/users/invitation/accept"
        },
        "note": "Refreshed upon sign up page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#myAccountAuth > div.css-1xd1ug7-Container.edabiy60 > div > form > div > footer > span > a"
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
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&urlExcludes",
        "identifier": {
          "includedString": ".monday.com",
          "excludedString": "auth"
        },
        "note": "_______"
      },
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes&urlExcludes",
        "identifier": {
          "includedString": ".monday.com",
          "excludedString": "auth"
        },
        "note": "_______"
      },
      {
        "type": "triggerInitialContact",
        "identifierType": "elementClickedOn&delay",
        "identifier": {
            "elementSelectors": [
              "#login-monday-container > div > div.router-wrapper > div > div.email-page > div > div.next-button-wrapper > div > button"
            ],
            "delay": 0.3
        },
        "note": ""
      },
    ]
  },
  "loginConfig": {
    "navigation": [
      {
        "type": "delay",
        "content": {
          "duration": 0.2
        },
      "note": "Wait for 0.2 seconds"  
      },
      {
        "type": "elementClearSendkeys",
        "content": {
          "fetch": true,
          "elementSelectors": [
            "#user_email"
          ],
          "value": "[account:_emailAddress]"
        },
        "note": "Type in email address"
      },
      {
        "type": "delay",
        "content": {
          "duration": 0.2
        },
      "note": "Wait for 0.2 seconds"  
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "#login-monday-container > div > div.router-wrapper > div > div.email-page > div > div.next-button-component > button"
          ]
        },
        "note": "Click on 'Sign in' button"
      },
      {
        "type": "delay",
        "content": {
          "duration": 0.2
        },
      "note": "Wait for 0.2 seconds"  
      },
      {
        "type": "elementClearSendkeys",
        "content": {
          "fetch": true,
          "elementSelectors": [
            "#user_password"
          ],
          "value": "[account:password]"
        },
        "note": "Type in password"
      },
      {
        "type": "delay",
        "content": {
          "duration": 0.5
        },
      "note": "Wait for 0.2 seconds"  
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "#login-monday-container > div > div.router-wrapper > div > div.email-page > div > div.next-button-wrapper > div > button"
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
        "link": ""
      },
      {
        "title": "Privacy Policy",
        "link": ""
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
              "#user_email"
            ]
          },
          "note": "Read in email address"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#user_password"
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
              "#login-monday-container > div > div.router-wrapper > div > div.email-page > div > div.next-button-wrapper > div > button"
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
              "#softSignupEmailInput"
            ]
          },
          "note": "Read in email address"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "input[type='password']"
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
              "#soft-signup-form-container > div > div > div > div.signup-step-system-layout-content-wrapper > div > div.soft-signup-form-component > div > div.soft-signup-content-wrapper > div.soft-signup-form-wrapper > form > div.submit-button-wrapper > button"
            ]
          },
          "note": "Clicked on signup button"
        },
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              "#signup-form-container > div > div > div.signup-step-system-layout-content-wrapper > div > div.signup-form-above-the-system-wrapper.is-unified > div.signup-form-above-the-system-component > div.content > div.submit-button-wrapper > button"
            ]
          },
          "note": "Clicked on signup button"
        },
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              "#signup-form-container > div > div > div.signup-step-system-layout-content-wrapper > div > div.signup-form-above-the-system-wrapper.is-unified > div.signup-form-above-the-system-component > div.content > div.submit-button-wrapper"
            ]
          },
          "note": "Clicked on signup button"
        }
      ]
    },
    "recovery": {}
  }
};