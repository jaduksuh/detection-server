module.exports = {
  "serviceName": "leetcode",
  "officialName": "LeetCode",
  "accountData": [
      "_username",
      "_emailAddress",
      "password"
  ],
  "passwordRequirement": {
    "minLength": 8, 
    "maxLength": -1,
    "mustInclude": ["number", "lowerCase||upperCase"]
  },
  "entrypointConfig": {
    "rootDomain": "leetcode.com", 
    "subDomain": "NONE.leetcode.com", 
    "entrypoints": [ 
      {
        "type": "login",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://leetcode.com/accounts/login/"
        },
        "note": "refreshed upon login page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
            "elementSelectors": [
              "#landing-page-app > div > div.header > div.inner > div.landing-navbar-base > div > div > div.nav-right > div > a:nth-child(5) > span",
              "#app > div > div.sign-in-wrapper__2SAX > div > div.placeholder-bottom__2SYS > div > div > div > div.actions__3_WQ.sign-up-actions__3hvs > span"
            ]
        },
        "note": "Pressed 'Sign in' button from signup page"
      },
      {
        "type": "signup",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://leetcode.com/accounts/signup/"
        },
        "note": "refreshed upon signup page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
            "elementSelectors": [
                "#app > div > div.sign-in-wrapper__2SAX > div > div.placeholder-bottom__2SYS > div > div > div > div.actions__3_WQ.sign-in-actions__3uV6 > span",
                "#landing-page-app > div > div.header > div.inner > div.intro-chapter-base > div > div > div.col-md-6.intro-title > div > a"
            ]
        },
        "note": "Pressed 'Sign up' button"
      },
      {
        "type": "recovery",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://leetcode.com/accounts/password/reset/"
        },
        "note": "refreshed upon password reset page"
      },
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
            "elementSelectors": [
              "#app > div > div.sign-in-wrapper__2SAX > div > div.placeholder-bottom__2SYS > div > div > div > div.actions__3_WQ.sign-in-actions__3uV6 > a"
            ]
        },
        "note": "Pressed forgot password button from login page"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&urlExcludes",
        "identifier": {
            "includedString": "leetcode.com",
            "excludedString": "accounts"
        },
        "note": "returned to main page after login"
      },
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes&urlExcludes",
        "identifier": {
            "includedString": "leetcode.com",
            "excludedString": "accounts"
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
          "duration": 0.2
        },
        "note": "Wait for 0.2 seconds"  
      },
      {
        "type": "elementClearSendkeys",
        "content": {
          "fetch": true,
          "elementSelectors": [
            "input[name='login']"
          ],
          "value": "[account:_username]"
        },
        "note": "Type in username"
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
            "#signin_btn"
          ]
        },
        "note": "Click on 'Sign in In' button"
      },
      {
        "type": "delay",
        "content": {
          "duration": 0.1
        },
        "note": "Wait for 0.1 seconds"  
      },
    ]
  },
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
  "recoveryConfig": {
    "customQuestions": [],
    "navigation": []
  },
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
              "input[name='login']"
            ]
          },
          "note": "Read in username"
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
              "#signin_btn"
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
            "dataField": "_username",
            "elementSelectors": [
              "input[name='username']"
            ]
          },
          "note": "Read in username"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "input[name='password1']"
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
              "button[name='signup_btn']"
            ]
          },
          "note": "Clicked on Sign up button"
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