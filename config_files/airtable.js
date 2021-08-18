module.exports = {
  "serviceName": "airtable",
  "officialName": "Airtable",
  "accountData": [
    "_firstName+' '+_lastName",
    "_emailAddress",
    "password"
  ],
  "passwordRequirement": {
    "minLength": 8, 
    "maxLength": 3000,
    "mustInclude": []
  },
/*********************************************************************************************************/
  "entrypointConfig": {
    "rootDomain": "airtable.com", 
    "subDomain": "ALL.airtable.com", 
    "entrypoints": [ 
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "a[href='https://airtable.com/login']"
          ]
        },
        "note": "Clicked sign in button"
      },
      {
        "type": "login",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://airtable.com/login"
        },
        "note": "Refreshed upon login page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "a[href='https://airtable.com/signup']"
          ]
        },
        "note": "Clicked sign in button"
      },
      {
        "type": "signup",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://airtable.com/signup"
        },
        "note": "Refreshed upon login page"
      },
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "a[href='https://airtable.com/forgot']"
          ]
        },
        "note": "Clicked sign in button"
      },
      {
        "type": "recovery",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://airtable.com/forgot"
        },
        "note": "Refreshed upon login page"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
            "includedString": "airtable.com",
            "elementSelectors": [
              "#homeScreen > div.homeScreenTopBar > header > nav > div.flex-none.flex.items-center > div.relative > span"
            ]
        },
        "note": "returned after login"
      },
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
            "includedString": "airtable.com",
            "elementSelectors": [
              "#homeScreen > div.homeScreenTopBar > header > nav > div.flex-none.flex.items-center > div.relative > span"
            ]
        },
        "note": "returned after login"
      },
    ]
  },
/*********************************************************************************************************/
  "loginConfig": { 
    "navigation": [
      {
        "type": "delay",
        "content": {
          "duration": 0.05
        },
        "note": "Wait for 0.05 seconds"  
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
        "note": "Type in email address"
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
          "duration": 0.05
        },
        "note": "Wait for 0.05 seconds"  
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "#sign-in-form-fields-root > div > label:nth-child(3) > button"
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
              "#multiStepSignupForm > div > div > div > div > div.col-12.px3.pb3 > div > div > div.col-12 > div > label > form:nth-child(1) > div > button"
            ]
          },
          "note": "Clicke on signup button"
        },
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              "input[type='submit']"
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