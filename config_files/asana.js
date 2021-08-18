module.exports = {
  "serviceName": "asana",
  "officialName": "asana",
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
    "rootDomain": "asana.com",
    "subDomain": "ALL.asana.com",
    "entrypoints": [
      {
        "type": "login",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://app.asana.com/-/login"
        },
        "note": "Refreshed upon login page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            '#__next > div:nth-child(1) > header > div.siteHeader__row > div > div:nth-child(2) > a.navigation__link.navigation__sign-in.hidden-logged-in.sign-in.css-0'
          ]
        },
        "note": "Clicked on 'Log in' button from main page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            'a[href="https://app.asana.com/-/login"]'
          ]
        },
        "note": "Clicked on 'Log in' button from main page"
      },
      {
        "type": "signup",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://asana.com/create-account"
        },
        "note": "Refreshed upon sign up page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#__next > div:nth-child(1) > header > div.siteHeader__row > div > div:nth-child(2) > div.siteHeader-buttons.hidden-device-mobile > a.siteHeader-button.button.hidden-logged-in.css-0"
          ]
        },
        "note": "Clicked on 'Create one' button from sign in page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#Login-appRoot > div > div.LoginCardLayout-card--withCaptchaNotice.LoginCardLayout-card > div.LoginDefaultView-content > div.LoginDefaultView-signUp > a"
          ]
        },
        "note": "Clicked on 'Create one' button from sign in page"
      },
      {
        "type": "recovery",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://app.asana.com/-/forgot_password"
        },
        "note": "Refreshed upon recovery page"
      },
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#Login-appRoot > div > div.LoginCardLayout-card--withCaptchaNotice.LoginCardLayout-card > div.LoginDefaultView-content > form > a > span"
          ]
        },
        "note": "Clicked on 'Forgot your password?' button from login page"
      },
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "https://app.asana.com/0/account_setup",
          "elementSelectors": [
            '#lui_1 > span'
          ]
        },
        "note": ""
      },
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "https://app.asana.com/0/account_setup",
          "elementSelectors": [
            '#asana_full_page > div > div.NuxRedesignedScreenStructure.NuxRedesignedInviteScreen > div > div > div.NuxRedesignedScreenStructure-leftContent > div.NuxRedesignedScreenStructure-panel.NuxRedesignedScreenStructure-panel--narrow > div:nth-child(4) > div'
          ]
        },
        "note": ""
      },
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "https://app.asana.com/0/",
          "elementSelectors": [
            'body > div:nth-child(21) > div > div.ModalBuffer > div.ModalBuffer-content > div > div > div.UnconfirmedTrialBaseDialog-ctas > div',
            'body > div:nth-child(21) > div > div.ModalBuffer > div.ModalBuffer-content > div > div',
            '#lui_20 > div',
            '#lui_21 > div > div.Menu.TopbarSettingsMenu > a.StaticMenuItemBase-button.is-highlighted.StaticMenuItemBase--medium.StaticMenuItemBase--select.MenuItemBase.TopbarSettingsMenu-logout.Menu-menuItem'
          ]
        },
        "note": ""
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://app.asana.com/0/home/"
        },
        "note": "_______"
      },
      {
        "type": "triggerInitialContact",
        "identifierType": "elementClickedOn&delay",
        "identifier": {
          "elementSelectors": [
            "#asana_full_page > div > div > div > div.NuxRedesignedScreenStructure-leftContent > div.NuxRedesignedScreenStructure-panel.NuxRedesignedScreenStructure-panel--medium > div:nth-child(3) > div"
          ],
          "delay": 0.5 // time it takes for the login or signup to complete
        },
        "note": ""
      },
      {
        "type": "triggerInitialContact",
        "identifierType": "elementClickedOn&delay",
        "identifier": {
          "elementSelectors": [
            "#asana_full_page > div > div > div > div.NuxRedesignedScreenStructure-leftContent > div.NuxRedesignedScreenStructure-panel.NuxRedesignedScreenStructure-panel--medium > div:nth-child(3) > div"
          ],
          "delay": 0.5 // time it takes for the login or signup to complete
        },
        "note": ""
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
            'input[name="e"]'
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
            'input[name="p"]'
          ],
          "value": "[account:password]"
        },
        "note": "Type in password"
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "#Login-appRoot > div > div.LoginCardLayout-card--withCaptchaNotice.LoginCardLayout-card > div.LoginDefaultView-content > form > div.AbstractThemeableRectangularButton--isEnabled.AbstractThemeableRectangularButton.AbstractThemeableRectangularButton--large.NuxButton.LoginEmailPasswordForm-logInButton"
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
              'input[name="e"]' // should be the same as in loginConfig
            ]
          },
          "note": "_____"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              'input[name="p"]' // should be the same as in loginConfig
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
              "#Login-appRoot > div > div.LoginCardLayout-card--withCaptchaNotice.LoginCardLayout-card > div.LoginDefaultView-content > form > div.AbstractThemeableRectangularButton--isEnabled.AbstractThemeableRectangularButton.AbstractThemeableRectangularButton--large.NuxButton.LoginEmailPasswordForm-logInButton" // should be the same as in loginConfig
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
              'input[name="email"]' // should be the same as in signupConfig
            ]
          },
          "note": "_____"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              'input[type="password"]' // should be the same as in signupConfig
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
              "#__next > div > section > div > div.row.-center.hero-row > div > form > div > div > button",
              "#asana_full_page > div > div > div > div.NuxRedesignedScreenStructure-leftContent > div.NuxRedesignedScreenStructure-panel.NuxRedesignedScreenStructure-panel--medium > div:nth-child(3) > div",
              "#asana_full_page > div > div.NuxRedesignedScreenStructure.NuxRedesignedInviteScreen > div > div > div.NuxRedesignedScreenStructure-leftContent > div.NuxRedesignedScreenStructure-panel.NuxRedesignedScreenStructure-panel--narrow > div:nth-child(4) > div" // should be the same as in signupConfig
            ]
          },
          "note": "_____"
        }
      ]
    },
    "recovery": {}
  }
};