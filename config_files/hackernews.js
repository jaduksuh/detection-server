module.exports = {
  "serviceName": "hackernews",
  "officialName": "HackerNews",
  "accountData": [
    "_username", // Usernames can only contain letters, digits, dashes and underscores, and should be between 2 and 15 characters long
    "password"
  ],
  "passwordRequirement": {
    "minLength": 8,
    "maxLength": 72,
    "mustInclude": [],
    "mustNotInclude": []
  },
/*********************************************************************************************************/
  "entrypointConfig": {
    "rootDomain": "ycombinator.com", 
    "subDomain": "ALL.ycombinator.com", //hackernews account = any account for ycombinator 
    "entrypoints": [
      
      //login entrypoints
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#hnmain > tbody > tr:nth-child(1) > td > table > tbody > tr > td:nth-child(3) > span > a"
          ]
        },
        "note": "CLicked login from home page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#hnmain > tbody > tr:nth-child(1) > td > table > tbody > tr > td:nth-child(2) > span > a:nth-child(8)"
          ]
        },
        "note": "CLicked submit from main page- it prompts you to login"
      },
      {
        "type": "login",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://news.ycombinator.com/login"
        },
        "note": "Redirects to this page for login"
      },
      {
        "type": "login",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://news.ycombinator.com/submit"
        },
        "note": "Redirects to this page when you click submit and the website makes you login. "
      },

      //signup entrypoints
      //Sign up form is located in the same page as login page but if you try to make an account with a username that already exists, the website rejects it
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#hnmain > tbody > tr:nth-child(1) > td > table > tbody > tr > td:nth-child(3) > span > a"
          ]
        },
        "note": "Clicked login from home page and you sign up from the same page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "https://news.ycombinator.com/login"
          ]
        },
        "note": "Redirects to this page for both sign up and login"
      },

      //recovery entrypoints
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "body > a"
          ]
        },
        "note": "Forgot password button"
      },
      {
        "type": "recovery",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://news.ycombinator.com/forgot"
        },
        "note": "Redirects to this page for password recovery"
      },

      //signup + login success entrypoints
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://news.ycombinator.com/news"
        },
        "note": "Redirects to this page upon successful account creation"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://news.ycombinator.com/news"
        },
        "note": "Redirects to this page upon successful account creation"
      }
    ]
  },

  //login config navigation
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
            "body > form:nth-child(4) > table > tbody > tr:nth-child(1) > td:nth-child(2) > input[type=text]",
            "body > form:nth-child(6) > table > tbody > tr:nth-child(1) > td:nth-child(2) > input[type=text]"
            
          ],
          "value": "[account:_username]"
        },
        "note": "Type in account username"
      },
      {
        "type": "elementClearSendkeys",
        "content": {
          "fetch": true,
          "elementSelectors": [
            "body > form:nth-child(4) > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=password]",
            "body > form:nth-child(6) > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=password]"

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
          "elementSelectors": [
            "body > form:nth-child(4) > input[type=submit]:nth-child(4)",
            "body > form:nth-child(6) > input[type=submit]"
          ]
        },
        "note": "Click on login"
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
            "dataField": "_username",
            "elementSelectors": [
              "body > form:nth-child(4) > table > tbody > tr:nth-child(1) > td:nth-child(2) > input[type=text]", // should be the same as in loginConfig
              "body > form:nth-child(6) > table > tbody > tr:nth-child(1) > td:nth-child(2) > input[type=text]"
            ]
          },
          "note": "Username input field for login"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "body > form:nth-child(4) > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=password]", // should be the same as in loginConfig
              "body > form:nth-child(6) > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=password]"
            ]
          },
          "note": "Password input field for login"
        }
      ],
      "triggerEvents": [
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              "input[value='login']"
            ]
          },
          "note": "Submit button for login"
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
              "input[name='acct']"                 
            ]
          },
          "note": "Username input field for sign up"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "body > form:nth-child(11) > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type='password']"
            ]
          },
          "note": "Password input field for sign up"
        }
      ],
      "triggerEvents": [
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              "input[value='create account']"
            ]
          },
          "note": "Submit button for sign up"
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
