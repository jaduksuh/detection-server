module.exports = {
  "serviceName": "wordpress",
  "officialName": "WordPress",
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
    "rootDomain": "wordpress.com",
    "subDomain": "NONE.wordpress.com",
    "entrypoints": [
      {
        "type": "login",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://wordpress.com/log-in"
        },
        "note": "Refreshed upon login page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            'a[title="Log In"]'
          ]
        },
        "note": "Clicked on 'Log in' button from main page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            '#step-header > p > a'
          ]
        },
        "note": "Clicked on 'Log in' button from signup page"
      },
      {
        "type": "signup",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://wordpress.com/start/user"
        },
        "note": "Refreshed upon sign up page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            'a[title="Get Started"]'
          ]
        },
        "note": "Clicked on 'Sign up' button from sign in page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            '#header > div > a > span'
          ]
        },
        "note": "Clicked on 'Sign up' button from sign in page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            'a[href="/start?user_email="]'
          ]
        },
        "note": "Clicked on 'Create a new account' button from sign in page"
      },
      {
        "type": "recovery",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://wordpress.com/wp-login.php?action=lostpassword"
        },
        "note": "Refreshed upon recovery page"
      },
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            'a[href="https://wordpress.com/wp-login.php?action=lostpassword"]'
          ]
        },
        "note": "Clicked on 'Lost your password?' button from login page"
      },
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://wordpress.com/start/domains"
        },
        "note": "_______"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://wordpress.com/read"
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
            '#usernameOrEmail'
          ],
          "value": "[account:_emailAddress]"
        },
        "note": "Type in email address"
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "#primary > div > main > div.wp-login__container > div > form > div.card.login__form > div.login__form-action > button"
          ]
        },
        "note": "Click on 'Continue' button"
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
            '#password'
          ],
          "value": "[account:password]"
        },
        "note": "Type in password"
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "#primary > div > main > div.wp-login__container > div > form > div.card.login__form > div.login__form-action > button"
          ]
        },
        "note": "Click on 'Log in' button"
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
              '#usernameOrEmail' // should be the same as in loginConfig
            ]
          },
          "note": "_____"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              '#password' // should be the same as in loginConfig
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
              "#primary > div > main > div.wp-login__container > div > form > div.card.login__form > div.login__form-action > button" // should be the same as in loginConfig
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
              '#email' // should be the same as in signupConfig
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
              'button[type="submit"]' // should be the same as in signupConfig
            ]
          },
          "note": "_____"
        }
      ]
    },
    "recovery": {}
  }
};