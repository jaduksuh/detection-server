module.exports = {
  "serviceName": "triplebyte",
  "officialName": "Triplebyte",
  "accountData": [
    "_firstName",
    "_lastName",
    "_emailAddress",
    "password"
  ],
  "passwordRequirement": {
    "minLength": 8, 
    "maxLength": -1,
    "mustInclude": []
  },
  /*********************************************************************************************************/
  "entrypointConfig": {
    "rootDomain": "triplebyte.com", 
    "subDomain": "NONE.triplebyte.com", 
    "entrypoints": [ 
      {
        "type": "login",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://triplebyte.com/users/sign_in#Login"
        },
        "note": "Refreshed upon login page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#js-navigation-tools > ul > li:nth-child(4) > a",
            "#signup-right-panel > div > div.text-grey-dark > p:nth-child(2) > a"
          ]
        },
        "note": "Clicked sign in button"
      },
      {
        "type": "signup",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://triplebyte.com/users/sign_up"
        },
        "note": "Refreshed upon signup page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#js-navigation-tools > ul > li:nth-child(4) > a",
            "#v2-registration > div.tab-menu.tab-menu--horizontal.tab-menu--large-white > ul > li:nth-child(1) > a"
          ]
        },
        "note": "Clicked sign in button"
      },
      {
        "type": "recovery",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://triplebyte.com/users/password/new"
        },
        "note": "Refreshed upon recovery page"
      },
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#new_user > div.flex-between-center.mt-4 > div > a"
          ]
        },
        "note": "Clicked sign in button"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "triplebyte.com/candidates",
          "elementSelectors": [
            "#navbar-avatar"
          ]
        },
        "note": "returned to main page after login"
      },
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "triplebyte.com/candidates",
          "elementSelectors": [
            "#navbar-avatar"
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
            "#user_email",
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
            "#user_password",
          ],
          "value": "[account:password]"
        },
        "note": "Type in password"
      },
      {
        "type": "delay",
        "content": {
          "duration": 0.1
        },
        "note": "Wait for 0.1 seconds"  
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "input[type='submit']"
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
              "#user_email"
            ]
          },
          "note": "Read in email address"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#user_password"
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
              "input[type='submit']"
            ]
          },
          "note": "Clicked on 'Log in' button"
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
              "#user_email"
            ]
          },
          "note": "Read in email address"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#user_password"
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
              "input[type='submit']"
            ]
          },
          "note": "Clicked on 'Sign up' button"
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