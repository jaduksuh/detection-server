module.exports = {
  "serviceName": "doordash",
  "officialName": "DoorDash",
  "accountData": [
    "_firstName",
    "_lastName",
    "_emailAddress",
    "_phoneNumber_countryCode_yesPlus",
    "_phoneNumber_main_noHyphen",
    "password"
  ],
  
  "passwordRequirement": {
    "minLength": 8,
    "maxLength": -1,
    "mustInclude": [

    ],
    "mustNotInclude": [

    ]
  },
  
  "entrypointConfig": {
    "rootDomain": "doordash.com",
    "subDomain": "ALL.doordash.com",
    "entrypoints": [
      
      //login entrypoints
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#root > div > div.sc-VigVT.cbSfAP > div.sc-ijnzTp.eePRFa > div > div > a.sc-kIXKos.goJQdj.sc-eTuwsz.eVxaEZ > div > div > div > span > span"
          ]
        },
        "note": "Login button in the home screen"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#sign-up-return-login-nav-button > div > span > div"
          ]
        },
        "note": "Sign in button from sign up form"
      },
      {
        "type": "login",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://identity.doordash.com/auth?client"
        },
        "note": "URL redirects after clicking login"
      },

      //signup entrypoints
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#root > div > div.sc-VigVT.cbSfAP > div.sc-ijnzTp.eePRFa > div > div > a.sc-kIXKos.aGQRz.sc-eTuwsz.eVxaEZ"
          ]
        },
        "note": "Sign up button at home page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#sign-up-nav-button > div > span > div"
          ]
        },
        "note": "Sign up button at login page"
      },
      {
        "type": "signup",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://identity.doordash.com/auth/user/signup"
        },
        "note": "Redirects to this url for sign up"
      },

      //recovery entrypoints
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#FieldWrapper-27-description > a > span > span"
          ]
        },
        "note": "Forgot your password button"
      },
      {
        "type": "recovery",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://identity.doordash.com/auth/user/password/reset"
        },
        "note": "Redirects to this page "
      },

      //signup + login success entrypoints
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://www.doordash.com/home"
        },
        "note": "Redirects after successful account creation"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://www.doordash.com/home"
        },
        "note": "Redirects after successful login attempt"
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
            "#FieldWrapper-2"
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
            "#FieldWrapper-3"
          ],
          "value": "[account:password]"
        },
        "note": "Type in password"
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "#login-submit-button > div > span > div"
          ]
        },
        "note": "Click on sign in"
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
              "#FieldWrapper-2" // should be the same as in loginConfig
            ]
          },
          "note": "Email address input field"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#FieldWrapper-3" // should be the same as in loginConfig
            ]
          },
          "note": "PW input field"
        }
      ],
      "triggerEvents": [
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              "#login-submit-button > div > span > div" // should be the same as in loginConfig
            ]
          },
          "note": "Sign in button"
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
              "#FieldWrapper-8" // should be the same as in signupConfig
            ]
          },
          "note": "Sign up form email input field"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#FieldWrapper-11" // should be the same as in signupConfig
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
              "#sign-up-submit-button > div > span > div" // should be the same as in signupConfig
            ]
          },
          "note": "Sign up form submit button"
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