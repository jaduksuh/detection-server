module.exports = {
  "serviceName": "webmd",
  "officialName": "WebMD",
  "accountData": [
    "_emailAddress",
    "_birthday_year_fourDigits",
    "_birthday_month_number_noZero",
    "_birthday_day",
    "password"
  ],

  "passwordRequirement": {
    "minLength": 8,
    "maxLength": 30,
    "mustInclude": [
      "number"
    ],
    "mustNotInclude": []
  },

  "entrypointConfig": {
    "rootDomain": "webmd.com",
    "subDomain": "ALL.webmd.com",
    "entrypoints": [
      {
        "type": "login",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://member.webmd.com/signin"
        },
        "note": "Scenario: Page refreshed after clickoing on sign in"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#masthead > div.masthead-nav-shell > div.masthead-nav-userlinks-shell.cf > div.masthead-userlogin-shell.cf > div.masthead-userlogin-notloggedin > span.masthead-reg > a.masthead-reg-signin",
          ]
        },
        "note": "Clicked on sign in"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#ContentPane1 > nav > div.global-nav-wrapper > div.global-nav-right-container > ul > li.global-nav-sign-in.global-nav-hide-mobile > a",
          ]
        },
        "note": "Clicked on sign in"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#signupForm > div > div > div.reg-mod > div.wrapper.signup-content > form > fieldset > div.input.submit > span:nth-child(3) > a"
          ]
        },
        "note": "Clicked on sign in in the sign up form box"
      },
      {
        "type": "signup",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://member.webmd.com/register"
        },
        "note": "Scenario: Clicked on sign up"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#masthead > div.masthead-nav-shell > div.masthead-nav-userlinks-shell.cf > div.masthead-userlogin-shell.cf > div.masthead-userlogin-notloggedin > span.masthead-reg > a.masthead-reg-signup"
          ]
        },
        "note": "DOM element for the sign up button in the top"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#signinForm > div > div > div > div > form > fieldset > div.input.submit > span:nth-child(3) > a"
          ]
        },
        "note": "DOM element for the sign up button sign in form box"
      },
      {
        "type": "recovery",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://member.webmd.com/password-reset"
        },
        "note": "Scenario: Refreshed to this page after clicking on forgot password"
      },
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#signinForm > div > div > div > div > form > fieldset > a"
          ]
        },
        "note": "DOM element for 'forgot your password' button"
      },

      //signup + login success entrypoints
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://www.webmd.com/"
        },
        "note": "Redirects to this URL upon successful account creation"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://www.webmd.com/"
        },
        "note": "Redirects to this URL upon successful login attempt"
      },
    ]
  },
  "loginConfig": {
    "navigation": [
      {
        "type": "elementClearSendkeys",
        "content": {
          "fetch": true,
          "elementSelectors": [
            "input[name='user_name']"
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
            "#signinForm > div > div > div > div > form > fieldset > div:nth-child(3) > div.input-wrapper.wtext > input"
          ],
          "value": "[account:password]"
        },
        "note": "Type in password"
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "#signinForm > div > div > div > div > form > fieldset > div.input.submit > span:nth-child(1) > input"
          ]
        },
        "note": "Click on 'Sign in''"
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
              "input[name='user_name']" // should be the same as in loginConfig
            ]
          },
          "note": "Login email input field"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#signinForm > div > div > div > div > form > fieldset > div:nth-child(3) > div.input-wrapper.wtext > input" // should be the same as in loginConfig
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
              "#signinForm > div > div > div > div > form > fieldset > div.input.submit > span:nth-child(1) > input" // should be the same as in loginConfig
            ]
          },
          "note": "Sign in button"
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
              "input[name='user_name']" // should be the same as in loginConfig
            ]
          },
          "note": "signup form input field for email"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#signupForm > div > div > div.reg-mod > div.wrapper.signup-content > form > fieldset > div:nth-child(2) > div.input-wrapper.wtext > input" // should be the same as in loginConfig
            ]
          },
          "note": "sign up form input field for password"
        }
      ],
      "triggerEvents": [
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              "#signupForm > div > div > div.reg-mod > div.wrapper.signup-content > form > fieldset > div.input.submit > span:nth-child(1) > input" // should be the same as in loginConfig
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