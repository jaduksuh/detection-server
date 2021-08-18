/*
* This code was made based on the US wikepedia (en.wikipedia.org)
* NOT COMPATIBLE for other regions
*/

module.exports = {
  "serviceName": "wikipedia",
  "officialName": "Wikipedia",
  "accountData": [
    "_username",
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
    "rootDomain": "wikipedia.org", 
    "subDomain": "ALL.wikipedia.org", 
    "entrypoints": [ 
      {
        "type": "login",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://en.wikipedia.org/w/index.php?title=Special:UserLogin"
        },
        "note": "Refreshed upon login page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            " #pt-login > a"
          ]
        },
        "note": "Clicked Log In button"
      },
      {
        "type": "signup",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://en.wikipedia.org/w/index.php?title=Special:CreateAccount"
        },
        "note": "Refreshed upon signup page"
      },
      {
        "type": "recovery",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://en.wikipedia.org/wiki/Special:PasswordReset"
        },
        "note": "Refreshed upon recovery page"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
            "includedString": "en.wikipedia.org",
            "elementSelectors": [
              "#pt-logout > a"
            ]
        },
        "note": "returned after login"
      },
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "en.wikipedia.org",
          "elementSelectors": [
            "#pt-logout > a"
          ]
        },
        "note": "Redirected after signup"
      },
    ]
  },
  /*********************************************************************************************************/
  "loginConfig": { 
    "navigation": [
      {
        "type": "delay",
        "content": {
          "duration": 0.5
        },
      "note": "Wait for 0.5 seconds"  
    },
    {
      "type": "elementClearSendkeys",
      "content": {
        "fetch": true,
        "elementSelectors": [
          "#wpName1",
        ],
        "value": "[account:_username]"
      },
      "note": "Type in username"
    },
    {
      "type": "delay",
      "content": {
        "duration": 0.1
      },
      "note": "Wait for 0.5 seconds"  
    },
    {
      "type": "elementClearSendkeys",
      "content": {
        "fetch": true,
        "elementSelectors": [
          "#wpPassword1",
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
      "note": "Wait for 0.5 seconds"  
    },

    {
      "type": "elementClick",
      "content": {
        "elementSelectors": [
          "#wpLoginAttempt"
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
            "dataField": "_username",
            "elementSelectors": [
              "#wpName1"
            ]
          },
          "note": "Read in username"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#wpPassword1"
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
              "#wpLoginAttempt"
            ]
          },
          "note": "Clicked on Login button"
        }
      ]
    },
    "signup": {
      "listenFields": [
        {
          "type": "value",
          "content": {
            "dataField": "_username",
            "elementSelectors": [
              "#wpName2"
            ]
          },
          "note": "Read in username"
        },
        {
          "type": "value",
          "content": {
            "dataField": "_emailAddress",
            "elementSelectors": [
              "#wpEmail"
            ]
          },
          "note": "Read in email address"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#wpPassword2"
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
              "#wpCreateaccount"
            ]
          },
          "note": "Clicked on 'Create an Account' button"
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