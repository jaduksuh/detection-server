module.exports = {
  "serviceName": "clerky",
  "officialName": "Clerky",
  "accountData": [
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
    "rootDomain": "clerky.com",
    "subDomain": "ALL.clerky.com",
    "entrypoints": [

       //signup entrypoints - placed above login entrypoint because url overlaps
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#navbar-collapse > ul.nav.navbar-nav.navbar-right > li:nth-child(2) > a"
          ]
        },
        "note": "Clicked get started from home page - there are two get started buttons"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#main > section.section-custom > div > div > div:nth-child(2) > div > a"
          ]
        },
        "note": "Clicked get started from home page - there are two"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "body > div:nth-child(2) > div > div.col-sm-8.col-sm-offset-2.col-lg-4.col-lg-offset-4 > a"
          ]
        },
        "note": "Clicked 'need an acccount?' from login page"
      },
      {
        "type": "signup",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://app.clerky.com/signup"
        },
        "note": "Redirects to this exact url for sign up"
      },

      //login entrypoints
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#navbar-collapse > ul.nav.navbar-nav.navbar-right > li.nav-link-log-in > a"
          ]
        },
        "note": "CLicked login from home page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "body > div:nth-child(2) > div > div > p > a"
          ]
        },
        "note": "'alreay have an account' from sign up pages"
      },
      {
        "type": "login",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "https://app.clerky.com/",
          "elementSelectors": [
            "input[name='user[email_address]']"
          ]
        },
        "note": "This exact url is the login page"
      },

     
      //recovery entrypoints
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#inline_reset_password > div > div > form > div.modal-footer > input"
          ]
        },
        "note": "Reset password button only pops up after failed login attempt"
      },

      //signup + login success entrypoints
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://app.clerky.com/new_account_confirmation_requests"
        },
        "note": "Asks you to verify your email upon successfully inputing your new password and email"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "https://app.clerky.com/",
          "elementSelectors": [
            "#main-links"
          ]
        },
        "note": "Refreshes to this page after successful login - same url with the login screen"
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
            "#inline_user_email_address"
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
            "#inline_user_password"
          ],
          "value": "[account:password]"
        },
        "note": "Type in password"
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "#inline_new_session > input.btn.btn-primary.btn-block.mb-3"
          ]
        },
        "note": "Click on Sign in button"
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
              "#inline_user_email_address" // should be the same as in loginConfig
            ]
          },
          "note": "_____"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#inline_user_password" // should be the same as in loginConfig
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
              "#inline_new_session > input.btn.btn-primary.btn-block.mb-3" // should be the same as in loginConfig
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
              "#email_address" // should be the same as in signupConfig
            ]
          },
          "note": "email input field for sign up form"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#password" // should be the same as in signupConfig
            ]
          },
          "note": "password input field for sign up form"
        }
      ],
      "triggerEvents": [
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              "body > div:nth-child(2) > div > div > form > div > div > div:nth-child(4) > input" // should be the same as in signupConfig
            ]
          },
          "note": "Get started button"
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