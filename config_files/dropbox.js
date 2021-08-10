module.exports = {
  "serviceName": "dropbox",
  "officialName": "Dropbox",
  "accountData": [
    "_firstName",
    "_lastName",
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
    "rootDomain": "dropbox.com",
    "subDomain": "ALL.dropbox.com",
    "entrypoints": [
      {
        "type": "login",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://www.dropbox.com/login"
        },
        "note": "Redirects to this url when 'Sign in' clicked from wherever you are"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#login-or-register-page-content > div > div > div > div.login-register-part.login-register-register-part.current-form > div.clearfix > div.login-register-switch > a > span",
            "#component2906288363469428154 > main > div.IndexPiscesRebrandPage__universal-nav.universal-nav.universal-nav--index-page > div.arbor-universal-nav.arbor-universal-nav--fixed > div > nav > div.arbor-nav__item.arbor-nav__item--ctas > div > a.arbor-button.arbor-button--standard-padding.arbor-button--standard-size.arbor-button--panda-white.arbor-nav-cta-container__left > span",
            "#component729955726274457163 > main > div.IndexPiscesRebrandPage__universal-nav.universal-nav.universal-nav--index-page > div.arbor-universal-nav.arbor-universal-nav--fixed > div > nav > div.arbor-nav__item.arbor-nav__item--ctas > div > a.arbor-button.arbor-button--standard-padding.arbor-button--standard-size.arbor-button--panda-white.arbor-nav-cta-container__left > span",
            "#component8465558149507865361 > main > div.IndexPiscesRebrandPage__universal-nav.universal-nav.universal-nav--index-page > div.arbor-universal-nav.arbor-universal-nav--fixed > div > nav > div.arbor-nav__item.arbor-nav__item--ctas > div > a.arbor-button.arbor-button--standard-padding.arbor-button--standard-size.arbor-button--panda-white.arbor-nav-cta-container__left",
            "#sign-in-link"
          ]
        },
        "note": "Clicked 'log in' at registration screen"
      },
      {
        "type": "signup",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://www.dropbox.com/register"
        },
        "note": "Redirects to this url"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#login-or-register-page-content > div > div > div > div.login-register-part.login-register-login-part.current-form > div.clearfix > div.login-register-switch > a > span",
            "#component729955726274457163 > main > div.IndexPiscesRebrandPage__universal-nav.universal-nav.universal-nav--index-page > div.arbor-universal-nav.arbor-universal-nav--fixed > div > nav > div.arbor-nav__item.arbor-nav__item--ctas > div > a.arbor-button.arbor-button--standard-padding.arbor-button--standard-size.arbor-button--dbx-blue.arbor-nav-cta-container__right"
          ]
        },
        "note": "Clicked 'sign up' at registration screen"
      },
      {
        "type": "recovery",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://www.dropbox.com/forgot"
        },
        "note": "Redirects to this page upon clicking forgot password from anywhere"
      },
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#login-or-register-page-content > div > div > div > div.login-register-part.login-register-login-part.current-form > div.login-form-container.standard > div > div > form > div.clearfix > div.login-need-help > a"
          ]
        },
        "note": "Clicked recovery at login and registration page"
      },
      //signup + login success entrypoints
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://www.dropbox.com/trial_first"
        },
        "note": "Once account is successfully created, it asks you if you'd like to try out free trial or go with Dropbox Basic 2GB"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://www.dropbox.com/home"
        },
        "note": "Redirects upon successful login attempt"
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
            "input[name='login_email']"
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
            "input[name='login_password']"
          ],
          "value": "[account:password]"
        },
        "note": "Type in password"
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "button[type='submit']"
          ]
        },
        "note": "Click submit button"
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
              "input[name='login_email']" // should be the same as in loginConfig
            ]
          },
          "note": "Login form email input field"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "input[name='login_password']" // should be the same as in loginConfig
            ]
          },
          "note": "Login form password input field"
        }
      ],
      "triggerEvents": [
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              "button[type='submit']" // should be the same as in loginConfig
            ]
          },
          "note": "Login form submit button"
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
              "input[name='email']" // should be the same as in signupConfig
            ]
          },
          "note": "Sign up form email input"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "input[name='password']" // should be the same as in signupConfig
            ]
          },
          "note": "Sign up form password input"
        }
      ],
      "triggerEvents": [
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              "button[data-uxa-log='register_form_submit_button']" // should be the same as in signupConfig
            ]
          },
          "note": "Registration button"
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