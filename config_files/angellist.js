module.exports = {
  "serviceName": "angellist",
  "officialName": "AngelList",
  "accountData": [
    "_firstName+' '+_lastName",
    "_emailAddress",
    "password"
  ],
  
  "passwordRequirement": {
    "minLength": 8,
    "maxLength": -1,
    "mustInclude": [

      "number"
      
    ],
    "mustNotInclude": [

    ]
  },
  
  "entrypointConfig": {
    "rootDomain": "angel.co",
    "subDomain": "NONE.angel.co",
    "entrypoints": [
      
      //login entrypoints
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#root > div.header_nav.unmodified.dir--layouts.layouts.file--header.header._a._jm > div > div > div.s-grid-colSm24 > div.searchAndLinks.u-floatRight.u-borderBox > div > div.s-flexgrid0-colSm.linksContainer.respondToNavbarHeight.u-floatRight > div:nth-child(1) > a.auth.login.u-fontWeight300"
          ]
        },
        "note": "CLicked login from home page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#root > div:nth-child(4) > div > div > div > div > div > div > div.s-vgTop1_5.s-vgLeft2.u-fontSize14.s-vgBottom10 > a"
          ]
        },
        "note": "CLicked login from Sign up page"
      },
      {
        "type": "login",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://angel.co/login"
        },
        "note": "Redirects to this page for login"
      },

      //signup entrypoints
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#root > div.header_nav.unmodified.dir--layouts.layouts.file--header.header._a._jm > div > div > div.s-grid-colSm24 > div.searchAndLinks.u-floatRight.u-borderBox > div > div.s-flexgrid0-colSm.linksContainer.respondToNavbarHeight.u-floatRight > div:nth-child(1) > a:nth-child(1)"
          ]
        },
        "note": "Clicked sign up from home page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#root > div:nth-child(4) > div > div > div > div > div > div > div.s-vgTop1_5.s-vgLeft2.u-fontSize14.s-vgBottom10 > a"
          ]
        },
        "note": "Clicked sign up from login page"
      },
      {
        "type": "signup",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://angel.co/join"
        },
        "note": "Redirects to this page for sign up"
      },

      //recovery entrypoints
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#new_user > div:nth-child(6) > a"
          ]
        },
        "note": "Forgot password button"
      },
      {
        "type": "recovery",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://angel.co/password/"
        },
        "note": "Redirects to this page for password recovery"
      },

      //signup + login success entrypoints
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://angel.co/onboarding/welcome"
        },
        "note": "Goes to this page after successfully making an account to ask you custom questions"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://angel.co/today"
        },
        "note": "Redirects to this apge after successful login attempt"
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
            "#user_email"
          ],
          "value": "[account:_emailAddress]"
        },
        "note": "Type in account email address"
      },
      {
        "type": "elementClearSendkeys",
        "content": {
          "fetch": true,
          "elementSelectors": [
            "#user_password"
          ],
          "value": "[account:password]"
        },
        "note": "Type in password"
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "#new_user > div:nth-child(6) > input"
          ]
        },
        "note": "Click on login"
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
              "#user_email" // should be the same as in loginConfig
            ]
          },
          "note": "_____"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#user_password" // should be the same as in loginConfig
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
              "#new_user > div:nth-child(6) > input" // should be the same as in loginConfig
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
              "#user_email" // should be the same as in signupConfig
            ]
          },
          "note": "Sign up form email input field"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#user_password" // should be the same as in signupConfig
            ]
          },
          "note": "Sign up form password input field"
        }
      ],
      "triggerEvents": [
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              "#new_user > div.s-vgTop1_5.join-cta > button" // should be the same as in signupConfig
            ]
          },
          "note": "Sign up button"
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