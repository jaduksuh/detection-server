module.exports = {
  "serviceName": "atlassian",
  "officialName": "Atlassian",
  "accountData": [
    "_firstName+' '+_lastName",
    "_emailAddress",
    "password"
  ],
  
  "passwordRequirement": {
    "minLength": 8,
    "maxLength": -1,
    "mustInclude": [],
    "mustNotInclude": []
  },
  
  "entrypointConfig": {
    "rootDomain": "atlassian.com",
    "subDomain": "ALL.atlassian.com",
    "entrypoints": [
      
      //login entrypoints
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#uid1 > div > div > div:nth-child(2) > div"
          ]
        },
        "note": "CLicked login from home page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#already-have-an-account"
          ]
        },
        "note": "Clicked login from sign up page"
      },
      {
        "type": "login",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://id.atlassian.com/login"
        },
        "note": "Redirects to this page for login"
      },

      //signup entrypoints
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#signup"
          ]
        },
        "note": "Clicked sign up from login page"
      },
      {
        "type": "signup",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://id.atlassian.com/signup"
        },
        "note": "Redirects to this page for sign up"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#signup"
          ]
        },
        "note": "Clicked create account from login page"
      },

      //recovery entrypoints
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#resetPassword"
          ]
        },
        "note": "Forgot password button"
      },
      {
        "type": "recovery",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://id.atlassian.com/login/resetpassword"
        },
        "note": "Redirects to this page for password recovery"
      },

      //signup + login success entrypoints
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "start.atlassian.com"
        },
        "note": "Upon account creation, atlassian asks you to confirm your email in this url"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://start.atlassian.com/"
        },
        "note": "_______"
      },

      // triggerInitialContact
      
    ]
  },

  //login config navigation
  "loginConfig": {
    "navigation": [
      {
        "type": "delay",
        "content": {
          "duration": 0.1
        },
        "note": "Wait 0.1 seconds"
      },
      {
        "type": "elementClearSendkeys",
        "content": {
          "fetch": true,
          "elementSelectors": [
            "#username"
          ],
          "value": "[account:_emailAddress]"
        },
        "note": "Type in account email address"
      },
      {
        "type": "delay",
        "content": {
          "duration": 0.1
        },
        "note": "Wait 0.1 seconds"
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "#login-submit"
          ]
        },
        "note": "Click on Continue to make password input field available"
      },
      {
        "type": "delay",
        "content": {
          "duration": 0.5
        },
        "note": "Wait till password input field becomes available"
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
        "type": "delay",
        "content": {
          "duration": 0.1
        },
        "note": "Wait 0.1 seconds"
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "#login-submit"
          ]
        },
        "note": "Click on Submit once again"
      },
      {
        "type": "delay",
        "content": {
          "duration": 0.5
        },
        "note": "Wait 0.5 seconds"
      }
    ]
  },
  "signupConfig": {
    "agreements": [],
    "customQuestions": [],
    "navigation": []
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
              "input[name='username']"
            ]
          },
          "note": "_____"
        },
        {
          "type": "innerText",
          "content": {
            "dataField": "_emailAddress",
            "elementSelectors": [
              "#form-login > div:nth-child(1) > div"
            ]
          },
          "note": "_____"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#password"
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
              "button[type='submit']"
            ]
          },
          "note": "_____"
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
              "#email"
            ]
          },
          "note": "_____"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#password"
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
              "#signup-submit"
            ]
          },
          "note": "_____"
        },
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              "button[type='submit']"
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


