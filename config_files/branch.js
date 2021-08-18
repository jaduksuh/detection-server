module.exports = {
  "serviceName": "branch",
  "officialName": "Branch",
  "accountData": [
    "_firstName+' '+_lastName",
    "_emailAddress",
    "password"
  ],
  "passwordRequirement": {
    "minLength": 8, 
    "maxLength": -1,
    "mustInclude": [ 
      "lowerCase", "upperCase", "number", "specialChar"
    ]
  },
/*********************************************************************************************************/
  "entrypointConfig": {
    "rootDomain": "branch.io", 
    "subDomain": "ALL.branch.io", 
    "entrypoints": [ 
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "a[data-testid='link-to-signin']",
            "#dashboard-user"
          ]
        },
        "note": "Clicked sign in button"
      },
      {
        "type": "login",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://dashboard.branch.io/login"
        },
        "note": "Refreshed upon login page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "a[data-testid='link-to-signup']",
            "#dashboard-user > span.new-user",
            "#hp-about > div.bds-container.bds-pad-y-xl.bds-pad-lg-y-xxl.relative > div.bds-row.bds-txt-center.bds-txt-md-left.bds-pad-t-sm.bds-pad-lg-t-xxl > div > div.button-wrapper.bds-marg-t-lg > div.bds-show-at-lg > a.bds-marg-lg-l-xs.bds-marg-t-xs.bds-marg-lg-t-0.bds-btn-primary"
          ]
        },
        "note": "Clicked sign in button"
      },
      {
        "type": "signup",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "https://dashboard.branch.io",
          "elementSelectors": [
            "a[data-testid='link-to-signin']",
          ]
        },
        "note": "Refreshed upon signup page"
      },
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "a[href='https://dashboard.branch.io/reset']"
          ]
        },
        "note": "Clicked forgot password button"
      },
      {
        "type": "recovery",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://dashboard.branch.io/reset"
        },
        "note": "Refreshed upon recovery page"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
            "includedString": "dashboard.branch.io",
            "elementSelectors": [
              "#app > div > div.page-body__container.page-body__sidebar-shown > div.top-nav__container > div > div.top-nav__header-right > div:nth-child(3) > a"
            ]
        },
        "note": "returned after login"
      },
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://dashboard.branch.io/accept-email-invite"
        },
        "note": "Redirected after signup"
      }
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
            "input[name='email']",
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
            "input[name='password']",
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
              "input[name='email']"
            ]
          },
          "note": "Read in email address"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "input[name='password']"
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
              "input[name='email']"
            ]
          },
          "note": "Read in email address"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "input[name='password']"
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
          "note": "Clicke on signup button"
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