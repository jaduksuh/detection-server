module.exports = {
  "serviceName": "zipcar",
  "officialName": "Zipcar",
  "accountData": [
    "_firstName",
    "_lastName",
    "_emailAddress",
    "_phoneNumber_countryCode_noPlus", // "1"
    "_phoneNumber_main_noHyphen", // "2345678901"
    "password"
  ],
  
  "passwordRequirement": {
    "minLength": 8,
    "maxLength": -1,
    "mustInclude": [

      "lowerCase",
      "upperCase",
      "specialChar",
      "number"
      
    ],
    "mustNotInclude": [

    ]
  },
  
  "entrypointConfig": {
    "rootDomain": "zipcar.com",
    "subDomain": "ALL.zipcar.com",
    "entrypoints": [
      
      //login entrypoints
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#main-menu > div.top-bar-right.user-links > a.custom-button-user"
          ]
        },
        "note": "CLicked login from home page"
      },
      {
        "type": "login",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://my.zipcar.com/login"
        },
        "note": "Redirects to this page for login"
      },

      //signup entrypoints
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#main-menu > div.top-bar-right.user-links > a.button.round.hollow.button--on-dark.button--medium.join-button"
          ]
        },
        "note": "Clicked sign up from home page - this redirects users to a pricing page where users get to choose what plan they want to sign up for but it still counts as a expression of wanting an account here"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#select-rates-content > div.zipcar-np-membership-plan.rate-plan-three-tiers--container.row.content-lg.rate-plan-three-tiers--us-ca.two-up > div.select-rates-column.rate-plan-three-tiers--column.rate-plan-1 > div > div.button-cta.button-cta--desktop > a"
          ]
        },
        "note": "Select plan button from the pricing page 1/2"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#select-rates-content > div.zipcar-np-membership-plan.rate-plan-three-tiers--container.row.content-lg.rate-plan-three-tiers--us-ca.two-up > div.select-rates-column.rate-plan-three-tiers--column.rate-plan-2 > div > div.button-cta.button-cta--desktop > a"
          ]
        },
        "note": "Select plan button from the pricing page 2/2"
      },
      {
        "type": "signup",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://my.zipcar.com/signup"
        },
        "note": "Redirects to this page for sign up"
      },

      //recovery entrypoints
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#root > div > div > div > form > div.remember-me-container > a"
          ]
        },
        "note": "Forgot password button at the login page"
      },
      {
        "type": "recovery",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://my.zipcar.com/login/forgot-password"
        },
        "note": "Redirects to this page for password recovery"
      },

      //signup + login success entrypoints
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://my.zipcar.com/book/welcome"
        },
        "note": "Redirected to a page that starts with the above URL upon successful account creation"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://my.zipcar.com/book"
        },
        "note": "Redirects to this page upon successful login"
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
            "#email"
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
            "#password"
          ],
          "value": "[account:password]"
        },
        "note": "Type in password"
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "#root > div > div > div > form > button"
          ]
        },
        "note": "Click on Sign in"
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
              "#email" // should be the same as in loginConfig
            ]
          },
          "note": "Email input field for login"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#password" // should be the same as in loginConfig
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
              "#root > div > div > div > form > button" // should be the same as in loginConfig
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
            "dataField": "_emailAddress",
            "elementSelectors": [
              "input[name='email_address']" // should be the same as in signupConfig
            ]
          },
          "note": "Email input field for sign up"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "input[name='password']" // should be the same as in signupConfig
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
              "#form-submit-button" // should be the same as in signupConfig
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