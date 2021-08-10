module.exports = {
  "serviceName": "costco",
  "officialName": "CostCo",
  "accountData": [
    "_emailAddress", // additionally, there may be membership number.
    "password"
  ],
  "passwordRequirement": {
    "minLength": 8, 
    "maxLength": 20,
    "mustInclude": [ 
      "string:{<}",
      "string:{>}",
      "string:{\}",
      'string:{"}'
    ]
  },
  "entrypointConfig": {
    "rootDomain": "costco.com", 
    "subDomain": "ALL.costco.com", 
    "entrypoints": [ 
      {
        "type": "login",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://www.costco.com/LogonForm"
        },
        "note": "Refreshed upon login page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#header_sign_in"
          ]
        },
        "note": "Clicked sign in button"
      },
      {
        "type": "signup",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://www.costco.com/RegisterView"
        },
        "note": "Refreshed upon signup page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#LogonForm > fieldset > div:nth-child(10) > a"
          ]
        },
        "note": "Clicked sign in button"
      },
      {
        "type": "recovery",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://www.costco.com/ForgotPasswordView"
        },
        "note": "Refreshed upon password reset page"
      },
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#LogonForm > fieldset > div:nth-child(7) > a"
          ]
        },
        "note": "Clicked sign in button"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "www.costco.com",
          "elementSelectors": [
            "a[id='header_sign_in'][style='display: none;']"
          ]
        },
        "note": "returned after login"
      },
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "www.costco.com/LinkYourMembershipInterruptView"
        },
        "note": "returned after signup"
      },
      {
        "type": "triggerInitialContact",
        "identifierType": "elementClickedOn&delay",
        "identifier": {
            "elementSelectors": [
              "#RegisterForm > fieldset > div:nth-child(9) > input"
            ],
            "delay": 0.5
        },
        "note": "Rescan the page when clicked on these buttons"
      }
    ]
  },
/*********************************************************************************************************/
  "loginConfig": { 
    "navigation": [
      /*
      {
        "type": "delay",
        "content": {
          "duration": 0.1
        },
        "note": "Wait for 1 seconds"  
      },
      {
        "type": "elementClearSendkeys",
        "content": {
          "fetch": true,
          "elementSelectors": [
            "#logonId",
          ],
          "value": "[account:_emailAddress]"
        },
        "note": "Type in email"
      },
      {
        "type": "elementClearSendkeys",
        "content": {
          "fetch": true,
          "elementSelectors": [
            "#logonPassword"
          ],
          "value": "[account:password]"
        },
        "note": "Type in password"
      },
      {
        "type": "delay",
        "content": {
          "duration": 0.5
        },
        "note": "Wait for 0.5 seconds"  
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [,
            "input[type='submit']"
          ]
        },
        "note": "Click on 'Sign In' button"
      }
      */
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
              "#logonId"
            ]
          },
          "note": "Read in email address"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#logonPassword"
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
              "#LogonForm > fieldset > div:nth-child(6) > input"
            ]
          },
          "note": "Clicked on login button"
        },
      ]
    },
    "signup": {
      "listenFields": [
        {
          "type": "value",
          "content": {
            "dataField": "_emailAddress",
            "elementSelectors": [
              "#register_email1"
            ]
          },
          "note": "Read in email address"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#logonPassword"
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
              "#RegisterForm > fieldset > div:nth-child(9) > input"
            ]
          },
          "note": "Clicked on 'Join for free' button"
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