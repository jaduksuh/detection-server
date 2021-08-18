module.exports = {
  "serviceName": "hackerrank",
  "officialName": "HackerRank",
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
    "rootDomain": "hackerrank.com",
    "subDomain": "ALL.hackerrank.com",
    "entrypoints": [
      {
        "type": "login",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://www.hackerrank.com/auth/login"
        },
        "note": "Refreshed upon login page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "a[href='https://www.hackerrank.com/login?h_r=login&h_l=body_middle_left_button']",
            "#menu-item-2887 > a",
            "#tab-1-item-1",
            "#content > div > div > div > div > div.page-header-wrapper.theme-m-section > nav > div > div.nav-buttons.theme-m-section > ul.pull-left.nav-wrap.mmL > li:nth-child(2)"
          ]
        },
        "note": "Clicked on 'Log in' button"
      },
      {
        "type": "signup",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://www.hackerrank.com/auth/signup"
        },
        "note": "Refreshed upon sign up page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            'a[href="https://www.hackerrank.com/signup?h_r=login&h_l=body_middle_left_text"]',
            "#content > div > div > div > div > div.page-header-wrapper.theme-m-section > nav > div > div.nav-buttons.theme-m-section > ul.pull-left.nav-wrap.mmL > li:nth-child(3) > button"
          ]
        },
        "note": "Clicked on 'Create one' button from sign in page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            '#tab-1-item-0'
          ]
        },
        "note": "Clicked on 'Create one' button from sign in page"
      },
      {
        "type": "recovery",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://gitlab.com/users/password/new"
        },
        "note": "Refreshed upon recovery page"
      },
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            'a[href="/users/password/new"]'
          ]
        },
        "note": "Clicked on 'Forgot your password?' button from login page"
      },
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://www.hackerrank.com/onboarding"
        },
        "note": "_______"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://www.hackerrank.com/dashboard"
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
            'input[name="username"]'
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
            'input[name="password"]'
          ],
          "value": "[account:password]"
        },
        "note": "Type in password"
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
            "#tab-1-content-1 > div.login-form.auth-form.theme-m > form > div.form-item.clearfix > button > div > span"
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
              'input[name="username"]' // should be the same as in loginConfig
            ]
          },
          "note": "_____"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              'input[name="password"]' // should be the same as in loginConfig
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
              'button[data-analytics="LoginPassword"]' // should be the same as in loginConfig
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
          "note": "Read in email address"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              'input[name="password"]'
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
              "#tab-1-content-0 > div.signup-form.auth-form.theme-m > form > div.form-item.clearfix > button"
            ]
          },
          "note": "Clicked on create account button"
        }
      ]
    },
    "recovery": {}
  }
};