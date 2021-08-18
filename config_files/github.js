module.exports = {
    "serviceName": "github",
    "officialName": "Github",
    "accountData": [
      "_emailAddress",
      "_username",
      "password"
    ],
    "passwordRequirement": {
      "minLength": 8,
      "maxLength": -1,
      "mustInclude": ["lowercase", "number"]
    },
/*********************************************************************************************************/
    "entrypointConfig": {
      "rootDomain": "github.com",
      "subDomain": "NONE.github.com",
      "entrypoints": [
        {
          "type": "login",
          "identifierType": "urlStartWith",
          "identifier": {
            "startUrl": "https://github.com/login"
          },
          "note": "Refreshed upon login page"
        },
        {
          "type": "login",
          "identifierType": "elementClickedOn",
          "identifier": {
            "elementSelectors": [
              "body > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu.HeaderMenu--logged-out.position-fixed.top-0.right-0.bottom-0.height-fit.position-lg-relative.d-lg-flex.flex-justify-between.flex-items-center.flex-auto > div.d-lg-flex.flex-items-center.px-3.px-lg-0.text-center.text-lg-left > div.position-relative.mr-3 > a"
            ]
          },
          "note": "Clicked on login button"
        },
        {
          "type": "signup",
          "identifierType": "urlStartWith",
          "identifier": {
            "startUrl": "https://github.com/signup"
          },
          "note": "Refreshed upon signup page"
        },
        {
          "type": "signup",
          "identifierType": "elementClickedOn",
          "identifier": {
            "elementSelectors": [
              "body > div.application-main > main > div.overflow-hidden > div.home-hero-container.position-relative.js-webgl-globe-data > div.home-hero.position-absolute.z-1.top-0.right-0.bottom-0.left-0.overflow-hidden > div > div > div.ml-md-n3.mr-md-3.col-12.col-lg-6.text-center.text-md-left > form > div > button",
              "body > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu.HeaderMenu--logged-out.position-fixed.top-0.right-0.bottom-0.height-fit.position-lg-relative.d-lg-flex.flex-justify-between.flex-items-center.flex-auto > div.d-lg-flex.flex-items-center.px-3.px-lg-0.text-center.text-lg-left > a"
            ]
          },
          "note": "Clicked 'Sign up for GitHub' button on main page"
        },
        {
          "type": "recovery",
          "identifierType": "urlStartWith",
          "identifier": {
            "startUrl": "https://github.com/password_reset"
          },
          "note": "Refreshed upon password recovery page"
        },
        {
          "type": "recovery",
          "identifierType": "elementClickedOn",
          "identifier": {
            "elementSelectors": [
              "#login > div.auth-form-body.mt-3 > form > div > a"
            ]
          },
          "note": "Clicked on 'Forgot password?' button from login page"
        },
        {
          "type": "loginSuccess",
          "identifierType": "urlIncludes&elementPresent",
          "identifier": {
              "includedString": "github.com",
              "elementSelectors": [
                "body > div.position-relative.js-header-wrapper > header > div.Header-item.position-relative.mr-0.d-none.d-md-flex > details"
              ]
          },
          "note": "returned to main page after login"
        },
        {
          "type": "signupSuccess",
          "identifierType": "urlIncludes&elementPresent",
          "identifier": {
              "includedString": "github.com",
              "elementSelectors": [
                "body > div.position-relative.js-header-wrapper > header > div.Header-item.position-relative.mr-0.d-none.d-md-flex > details"
              ]
          },
          "note": "returned to main page after signup"
        },
      ]
    },
/*********************************************************************************************************/
    "loginConfig": {
      "navigation": [
        {
          "type": "elementClearSendkeys",
          "content": {
            "fetch": true,
            "elementSelectors": [
              "#login_field"
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
              "[type=submit]"
            ]
          },
          "note": "Click on 'Sign in' button"
        }
      ]
    },
/*********************************************************************************************************/
    "signupConfig": {
      "agreements": [
        {
          "title": "Github Terms of Service",
          "directLink": true,
          "link": "https://docs.github.com/en/github/site-policy/github-terms-of-service"
        },
        {
          "title": "Github Privacy Statement",
          "directLink": true,
          "link": "https://docs.github.com/en/github/site-policy/github-privacy-statement"
        }
      ],
      "customQuestions": [],
      "navigation": [
        {
          "type": "gotoUrl",
          "content": {
            "url": "https://github.com/signup"
          },
          "note": "Open github signup page"
        },
        {
          "type": "delay",
          "content": {
            "duration": 3.3
          },
          "note": "Wait till input box opens"
        },
        {
          "type": "elementClearType",
          "content": {
            "elementSelectors": ["#email"],
            "fetch": true,
            "value": "[profile:ORDER_emailAddress]"
          },
          "note": "Type in email to specified location"
        },
        {
          "type": "delay",
          "content": {
            "duration": 1.0
          },
          "note": "Wait till 'Continue' button activates"
        },
        {
          "type": "elementClick",
          "content": {
            "elementSelectors": [
              "#email-container > div.d-flex.flex-items-center.flex-column.flex-sm-row > button"
            ]
          },
          "note": "Click on the 'Continue' button"
        },
        {
          "type": "delay",
          "content": {
            "duration": 0.3
          },
          "note": "Wait till next input box opens"
        },
        {
          "type": "elementClearType",
          "content": {
            "elementSelectors": ["#password"],
            "fetch": true,
            "value": "[profile:DEFAULT_PASSWORD]"
          },
          "note": "Type in password into input box"
        },
        {
          "type": "delay",
          "content": {
            "duration": 1.0
          },
          "note": "Wait till 'Continue' button activates"
        },
        {
          "type": "elementClick",
          "content": {
            "elementSelectors": [
              "#password-container > div.d-flex.flex-items-center.flex-column.flex-sm-row > button"
            ]
          },
          "note": "Click on the 'Continue' button"
        },
        {
          "type": "delay",
          "content": {
            "duration": 0.3
          },
          "note": "Wait till next input box opens"
        },
        {
          "type": "elementClearType",
          "content": {
            "elementSelectors": ["#login"],
            "fetch": true,
            "value": "[profile:primary_username]"
          },
          "note": "Type in username into input box"
        },
        {
          "type": "delay",
          "content": {
            "duration": 1.0
          },
          "note": "Wait till 'Continue' button activates"
        },
        {
          "type": "elementClick",
          "content": {
            "elementSelectors": [
              "#username-container > div.d-flex.flex-items-center.flex-column.flex-sm-row > button"
            ]
          },
          "note": "Click on the 'Continue' button"
        },
        {
          "type": "delay",
          "content": {
            "duration": 0.3
          },
          "note": "Wait till next input box opens"
        },
        {
          "type": "elementClearType",
          "content": {
            "elementSelectors": ["#opt_in"],
            "fetch": false,
            "value": "n"
          },
          "note": "Type in 'n' into input box, decline receiving emails"
        },
        {
          "type": "delay",
          "content": {
            "duration": 1.0
          },
          "note": "Wait till 'Continue' button activates"
        },
        {
          "type": "elementClick",
          "content": {
            "elementSelectors": [
              "#opt-in-container > div.d-flex.flex-items-center.flex-column.flex-sm-row > button"
            ]
          },
          "note": "Click on the 'Continue' button"
        },
        {
          "type": "elementClick",
          "content": {
            "elementSelectors": ["#opt_in"]
          },
          "note": "Click on the input box again"
        },
        {
          "type": "elementClearType",
          "content": {
            "elementSelectors": ["#opt_in"],
            "fetch": false,
            "value": "n"
          },
          "note": "Type in 'n' into input box again"
        },
        {
          "type": "delay",
          "content": {
            "duration": 1.0
          },
          "note": "Wait till 'Continue' button activates"
        },
        {
          "type": "elementClick",
          "content": {
            "elementSelectors": [
              "#opt-in-container > div.d-flex.flex-items-center.flex-column.flex-sm-row > button"
            ]
          },
          "note": "Click on the 'Continue' button"
        }
      ]
    },
/*********************************************************************************************************/
    "recoveryConfig": {
      "customQuestions": [],
      "navigation": []
    },
/*********************************************************************************************************/
    "checkConfig": {
      "navigation": []
    },
/*********************************************************************************************************/
    "manualActionConfig": {
      "login": {
        "listenFields": [
          {
            "type": "value",
            "content": {
              "dataField": "_emailAddress",
              "elementSelectors": [
                "#login_field"
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
                "[type=submit]"
              ]
            },
            "note": "Clicked on 'Sign in' button"
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
                "#email"
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
                "#opt-in-container > div.d-flex.flex-items-center.flex-column.flex-sm-row > button"
              ]
            },
            "note": "_____"
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
  /*********************************************************************************************************/