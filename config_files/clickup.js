module.exports = {
  "serviceName": "clickup",
  "officialName": "ClickUp",
  "accountData": [
    "_firstName+' '+_lastName",
    "_emailAddress",
    "password"
  ],
  "passwordRequirement": {
    "minLength": 8, 
    "maxLength": 256,
    "mustInclude": [ 
      "upperCase", "lowerCase", "number||specialChar"
    ]
  },
/*********************************************************************************************************/
  "entrypointConfig": {
    "rootDomain": "clickup.com", 
    "subDomain": "ALL.clickup.com", 
    "entrypoints": [ 
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#signup-page-new > div.login-page-new__header > div > div.login-page-new__header-right-button > a",
            "#header > div > div > a.auth__item.auth__item_sign-in"
          ]
        },
        "note": "Clicked sign in button"
      },
      {
        "type": "login",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "app.clickup.com/login",
          "elementSelectors": [
            "#login-password-input"
          ]
        },
        "note": "Refreshed upon login page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#app-root > cu-login > div > div.login-page-new__header > div > div.login-page-new__header-right-button > a",
            "body > div.mail-catcher > div.mail-catcher-form.mail-catcher-form-step1 > div.mail-catcher-form__body > div",
            "body > div.section.section_header-white.section_header-white_main-landing.section_header-white_main-landing_v2.section_header-white_main-landing_with-gradient.section_header-white_main-landing_homepage.greybg > div.wrapper.wrapper_horizontal > div:nth-child(1) > div.email-collector > button"
          ]
        },
        "note": "Clicked sign up button"
      },
      {
        "type": "signup",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "app.clickup.com/signup"
        },
        "note": "Refreshed upon signup page"
      },
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#app-root > cu-login > div > div.login-page-new__header > div > div.login-page-new__header-right-button > a"
          ]
        },
        "note": "Clicked forgot password button"
      },
      {
        "type": "recovery",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "app.clickup.com/login/forgot",
          "elementSelectors": [
            "#forgot-password-input"
          ]
        },
        "note": "Refreshed upon recovery page"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
            "includedString": "app.clickup.com",
            "elementSelectors": [
              "#app-root > cu-manager > div.cu-manager2__container.ng-tns-c614-0.layout-size_default > div > div.cu-manager2__router-outlet.ng-tns-c614-0 > div > cu-dashboard > cu-left-sidebar > div > cu-simple-bar > div > div.cu-simple-bar__top.ng-tns-c585-7 > div > a.cu-simple-bar__logo-text.ng-tns-c585-7.ng-star-inserted"
            ]
        },
        "note": "returned after login"
      },
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "app.clickup.com/onboarding"
        },
        "note": "Redirected after signup"
      },
			
			// "app.clickup.com/signup/validate-email"
    ]
  },
/*********************************************************************************************************/
  "loginConfig": { 
    "navigation": [
      {
        "type": "delay",
        "content": {
          "duration": 0.1
        },
        "note": "Wait for 0.1 seconds"  
      },
      {
        "type": "elementClearSendkeys",
        "content": {
          "fetch": true,
          "elementSelectors": [
            "#login-email-input",
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
            "#login-password-input",
          ],
          "value": "[account:password]"
        },
        "note": "Type in password"
      },
      {
        "type": "delay",
        "content": {
          "duration": 0.05
        },
        "note": "Wait for 0.05 seconds"  
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "button[type='submit']"
          ]
        },
        "note": "Click on 'Log in' button"
      },
    ]
  },
/*********************************************************************************************************/
  "signupConfig": {
    "agreements": [
      {
        "title": "___",
        "directLink": "___",
        "link": "https://_____" 
      }
    ],
    "customQuestions": [ 
      {
        "question": "___",
        "answer": {
          "type": "___", 
          "value": {
            "questions": [
              "___"
            ],
            "maxAnswers": "___" 
          } 
        }
      }
    ],
    "navigation": [
      {
        "type": "___",
        "content": {
          "___": "___"
        },
        "note": "___"
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
              "#login-email-input"
            ]
          },
          "note": "Read in email address"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#login-password-input"
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
              "button[type='submit']"
            ]
          },
          "note": "Clicked on log in button"
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
              "#signup-email"
            ]
          },
          "note": "Read in email address"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#signup-password-input"
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
              "button[type='submit']"
            ]
          },
          "note": "Clicked on signup button"
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