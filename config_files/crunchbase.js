module.exports = {
  "serviceName": "crunchbase",
  "officialName": "Crunchbase",
  "accountData": [
    "_emailAddress",
    "_firstName",
    "_lastName",
    "password"
  ],
/*********************************************************************************************************/
  "passwordRequirement": {
    "minLength": 8,
    "maxLength": 90,
    "mustInclude": [
      "number",
      "upperCase",
      "lowerCase"
    ],
    "mustNotInclude": []
  },
/*********************************************************************************************************/
  "entrypointConfig": {
    "rootDomain": "crunchbase.com",
    "subDomain": "ALL.crunchbase.com",
    "entrypoints": [
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "body > chrome > div > app-header > div.header-contents.mat-elevation-z3.layout-row.layout-align-space-between-center > div.hide-print.flex-noshrink.layout-row.layout-align-space-between-stretch.cb-height-100.ng-star-inserted > div > anon-nav-row > nav-action-item:nth-child(6) > nav-header-action-item > a > span.mat-button-wrapper > nav-action-item-header-layout > div > span",
            "#cdk-step-content-0-0 > mat-action-list > nav-action-item:nth-child(6) > nav-list-action-item > a > div > nav-action-item-layout > span"
          ]
        },
        "note": "Scenario: DOM elements for 'log in' button for both large and small screen size"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#mat-tab-label-5-0 > div",
            "#mat-tab-label-1-0 > div",
          ]
        },
        "note": "Scenario: DOM elements for 'log in' button for at the registration page at different browser screen size"
      },
      /*
      {
        "type": "login",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://www.crunchbase.com/login"
        },
        "note": "Redirects to this url upon clicking 'log in' from home"
      },
      */
     /*
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#mat-tab-label-6-1 > div",
            "#mat-tab-label-2-1 > div",
            "#mat-tab-label-0-1 > div",
            "#mat-tab-label-4-1 > div",
            "#mat-tab-label-0-0 > div",
            "#mat-tab-label-1-1 > div",
          ]
        },
        "note": "'Register' button at the log in modal"
      },
      */
      {
        "type": "signup",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "crunchbase.com/register"
        },
        "note": "Redirects to this url upon clicking 'register' from log in screen"
      }, 

      //recovery entrypoints
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#mat-tab-content-9-0 > div > login > div.footer > button"
          ]
        },
        "note": "CLicked on forgot password"
      },

      //signup + login success entrpoints
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://www.crunchbase.com/account-setup/use-case"
        },
        "note": "Redirects to this onboarding screen after successful account creation"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://www.crunchbase.com/home"
        },
        "note": "Redirects to this upon upon successful login"
      },
      {
        "type": "triggerInitialContact",
        "identifierType": "elementClickedOn&delay",
        "identifier": {
          "elementSelectors": [
            "#mat-tab-label-6-1 > div",
            "#mat-tab-label-2-1 > div",
            "#mat-tab-label-0-1 > div",
            "#mat-tab-label-4-1 > div",
            "#mat-tab-label-0-0 > div",
          ],
          "delay": 0.2
        },
        "note": ""
      }
    ]
  },
/*********************************************************************************************************/
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
            "input[name='email']"
          ],
          "value": "[account:_emailAddress]"
        },
        "note": "Type in account email address"
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
            "input[name='password']"
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
            "button[type='submit']"
          ]
        },
        "note": "Click on submit buttons"
      },
      {
        "type": "delay",
        "content": {
          "duration": 0.2
        },
      "note": "Wait for 0.2 seconds"  
      }
    ]
  },
/*********************************************************************************************************/
  "signupConfig": {
    "agreements": [],
    "customQuestions": [],
    "navigation": []
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
              "input[name='email']" // should be the same as in loginConfig
            ]
          },
          "note": "Email input field at the login screen"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "input[name='password']" // should be the same as in loginConfig
            ]
          },
          "note": "Password input field at the login screen"
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
          "note": "Submit button"
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
          "note": "Signup form email input field"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "input[name='newPassword']" // should be the same as in signupConfig
            ]
          },
          "note": "Signup form password input field"
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
          "note": "Signup form Continue button"
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