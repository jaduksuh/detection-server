module.exports = {
  "serviceName": "walmart",
  "officialName": "Walmart",
  "accountData": [
    "_firstName",
    "_lastName",
    "_emailAddress",
    "password"
  ],
  "passwordRequirement": {
    "minLength": 8,
    "maxLength": 100,
    "mustInclude": ["lowerCase", "upperCase"],
    "mustNotInclude": []
  },
  "entrypointConfig": {
    "rootDomain": "walmart.com",
    "subDomain": "www.walmart.com",
    "entrypoints": [
      {
        "type": "login",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://www.walmart.com/account/login"
        },
        "note": "Refreshed upon login page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#vh-account-menu-root > div.r_a.r_o > div > a:nth-child(1) > div > span > div"
          ]
        },
        "note": "Clicked on 'Sign in' button from sidebar"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#main-content > span > div.hide-content-max-m > div > nav > div.sub-nav-heading-web.m-margin-bottom > div > a.xxs-margin-right"
          ]
        },
        "note": "Clicked on 'Sign in' button from Account"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#sign-up-form > button.button.ghost.text-inherit"
          ]
        },
        "note": "Clicked on 'Sign in' button from Sign up"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "body > div.js-content > div > div > div.js-body-content.page-content-wrapper > div:nth-child(3) > div > div.EasyReorder-login-container > div:nth-child(4) > a"
          ]
        },
        "note": "Clicked on 'Sign in or create account' button from My Items - Buy again"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "body > div.js-content > div > div > div.js-body-content.page-content-wrapper > div.LandingPage > div.LandingPage-Wrapper.ResponsiveContainer > div > div.LST-LO-content.l-xl-padding-ends > a"
          ]
        },
        "note": "Clicked on 'Sign in or create account' button from My Items - Lists"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#main-content > form > p.copy-base-ny.copy-type-accent.have-account > a > span"
          ]
        },
        "note": "Clicked on 'Sign in' button from Track Orders"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#login-top"
          ]
        },
        "note": "Clicked on 'Sign in' button from Walmart plus"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#cart-root-container-content-skip > div > div > div.text-left.Grid > div.Grid-col.u-size-1.u-size-9-12-m.u-size-9-12-l > div > div.cart-lists-wrapper.cart-use-new-ny-styling > div:nth-child(1) > div.cart-sign-in-widget-container > div > button"
          ]
        },
        "note": "Clicked on 'Sign in to see' button from Cart"
      },
      {
        "type": "signup",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://www.walmart.com/account/signup"
        },
        "note": "Refreshed upon signup page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#sign-in-form > div:nth-child(2) > button"
          ]
        },
        "note": "Clicked on 'Create account' button from sign in page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#main-content > span > div.hide-content-max-m > div > nav > div.sub-nav-heading-web.m-margin-bottom > div > a.xxs-margin-left"
          ]
        },
        "note": "Clicked on 'create an account' button from account page"
      },
      {
        "type": "recovery",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://www.walmart.com/account/forgotpassword"
        },
        "note": "Refreshed upon recovery page"
      },
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#sign-in-form > div:nth-child(1) > div > div.text-right > button"
          ]
        },
        "note": "Clicked on 'Forgot password?' button from login page"
      },
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "action=Create&rm="
        },
        "note": "_______"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "action=SignIn&rm="
        },
        "note": "_______"
      },
      // triggerInitialContact entrypoints
      {
        "type": "triggerInitialContact",
        "identifierType": "elementClickedOn&delay",
        "identifier": {
          "elementSelectors": [
            "#sign-in-form > div:nth-child(2) > button"
          ],
          "delay": 1.0 
        },
        "note": "Upon clicking on 'Create account' from the sign in page, trigger initialContact again such that the triggerInitialContact for the '_____' submit button is attached"
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
            "#email"
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
            "#sign-in-form > div:nth-child(1) > div > button"
          ]
        },
        "note": "Click on 'Sign in' button"
      }
    ]
  },
  "signupConfig": {
    "agreements": [
      {
        "title": "Terms of Use",
        "link": "https://www.walmart.com/help/article/walmart-com-terms-of-use/f25b207926d84d79b57e6ae2327bbf12"
      },
      {
        "title": "Privacy Policy",
        "link": "https://corporate.walmart.com/privacy-security/walmart-privacy-policy"
      }
    ],
    "customQuestions": [],
    "navigation": [
      {
        "type": "gotoUrl",
        "content": {
          "url": "https://www.walmart.com/account/signup"
        },
        "note": "_______"
      },
      {
        "type": "elementClearType",
        "content": {
          "elementSelectors": [
            "#first-name-su"
          ],
          "fetch": true,
          "value": "[profile:_firstName]"
        },
        "note": "_______"
      },
      {
        "type": "elementClearType",
        "content": {
          "elementSelectors": [
            "#last-name-su"
          ],
          "fetch": true,
          "value": "[profile:_lastName]"
        },
        "note": "_______"
      },
      {
        "type": "elementClearType",
        "content": {
          "elementSelectors": [
            "#email-su"
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
            "#password-su"
          ],
          "fetch": true,
          "value": "[profile:DEFAULT_PASSWORD]"
        },
        "note": "_______"
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "#remember-me-su"
          ]
        },
        "note": "_______"
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "#su-newsletter"
          ]
        },
        "note": "_______"
      },
      {
        "type": "breakpoint",
        "note": "_______"
      },
      // {
      //   "type": "elementClick",
      //   "content": {
      //     "elementSelectors": [
      //       "#sign-up-form > button.button.s-margin-top.text-inherit"
      //     ]
      //   },
      //   "note": "_______"
      // },
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
              "#email" // should be the same as in loginConfig
            ]
          },
          "note": "_____"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#password" // should be the same as in loginConfig
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
              "#sign-in-form > div:nth-child(1) > div > button" // should be the same as in loginConfig
            ]
          },
          "note": "_____"
        }
      ]
    },
    "signup": {
      "listenFields": [
        /*{
          "type": "value",
          "content": {
            "dataField": "_firstName",
            "elementSelectors": [
              "#first-name-su" // should be the same as in loginConfig
            ]
          },
          "note": "_____"
        },
        {
          "type": "value",
          "content": {
            "dataField": "_lastName",
            "elementSelectors": [
              "#last-name-su" // should be the same as in loginConfig
            ]
          },
          "note": "_____"
        }, */
        {
          "type": "value",
          "content": {
            "dataField": "_emailAddress",
            "elementSelectors": [
              "#email-su" // should be the same as in loginConfig
            ]
          },
          "note": "_____"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#password-su" // should be the same as in loginConfig
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
              "button[type='submit']" // should be the same as in signupConfig
            ]
          },
          "note": "_____"
        },
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              "#sign-up-form > button.button.s-margin-top.text-inherit" // should be the same as in signupConfig
            ]
          },
          "note": "_____"
        },
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              "#sign-up-form > button.button.m-margin-top.text-inherit" // should be the same as in signupConfig
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