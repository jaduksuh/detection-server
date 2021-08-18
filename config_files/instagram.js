module.exports = {
  "serviceName": "instagram",
  "officialName": "Instagram",
  "accountData": [
    "_firstName+' '+_lastName",
    "_emailAddress",
    "_username",
    "_phoneNumber_main_noHyphen", 
    "password"
  ],
  
  "passwordRequirement": {
    "minLength": 8,
    "maxLength": -1,
    "mustInclude": [],
    "mustNotInclude": [

    ]
  },
  
  "entrypointConfig": {
    "rootDomain": "instagram.com",
    "subDomain": "ALL.instagram.com",
    "entrypoints": [
      
       //signup entrypoints
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#react-root > section > main > article > div.rgFsT > div:nth-child(2) > div > p > a"
          ]
        },
        "note": "Clicked sign up from home page"
      },
      {
        "type": "signup",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://www.instagram.com/accounts/emailsignup/"
        },
        "note": "Redirects to this page for sign up"
      },

      //recovery entrypoints
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#loginForm > a"
          ]
        },
        "note": "Forgot password button"
      },
      {
        "type": "recovery",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://www.instagram.com/accounts/password/reset/"
        },
        "note": "Redirects to this page for password recovery"
      },

      //login entrypoints
      {
        "type": "login",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://www.instagram.com/accounts/login/"
        },
        "note": "Login form is in the main page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#react-root > section > main > div > div > div:nth-child(2) > p > a"
          ]
        },
        "note": "CLicked login from sign up page"
      },
      {
        "type": "login",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "https://www.instagram.com/",
          "elementSelectors": [
            "#react-root > section > main > article > div.rgFsT > div:nth-child(1) > h1"
          ]
        },
        "note": "Login form is in the main page"
      },
    

      //signup + login success entrypoints
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://www.instagram.com",
          "elementSelectors": [
            "#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.ctQZg > div > div:nth-child(1) > div > a"
          ]
        },
        "note": "_______"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "https://www.instagram.com",
          "elementSelectors": [
            "#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.ctQZg > div > div:nth-child(1) > div > a"
          ]
        },
        "note": "_______"
      }
    ]
  },

  //login config navigation
  "loginConfig": {
    "navigation": [


      {
        "type": "elementClearSendkeys",
        "content": {
          "fetch": true,
          "elementSelectors": [
            "#loginForm > div > div:nth-child(1) > div > label > input"
          ],
          "value": "[account:_emailAddress]"
        },
        "note": "Type in account email address, same DOM element for both home page and standalone login page"
      },
      {
        "type": "elementClearSendkeys",
        "content": {
          "fetch": true,
          "elementSelectors": [
            "#loginForm > div > div:nth-child(2) > div > label > input"
          ],
          "value": "[account:password]"
        },
        "note": "Type in password"
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "#loginForm > div > div:nth-child(3) > button"
          ]
        },
        "note": "Click on Log In"
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
              "#loginForm > div > div:nth-child(1) > div > label > input", // should be the same as in loginConfig
            ]
          },
          "note": "_____"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#loginForm > div > div:nth-child(2) > div > label > input" // should be the same as in loginConfig
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
              "#loginForm > div > div:nth-child(3) > button" // should be the same as in loginConfig
            ]
          },
          "note": "_____"
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
              "#react-root > section > main > div > div > div:nth-child(1) > div > form > div:nth-child(4) > div > label > input" // should be the same as in signupConfig
            ]
          },
          "note": "_____"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#react-root > section > main > div > div > div:nth-child(1) > div > form > div:nth-child(7) > div > label > input" // should be the same as in signupConfig
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
              "#react-root > section > main > div > div > div:nth-child(1) > div > form > div:nth-child(8) > div > button" // should be the same as in signupConfig
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
