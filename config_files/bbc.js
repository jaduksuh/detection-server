module.exports = {
  "serviceName": "bbc",
  "officialName": "BBC",
  "accountData": [
    "_emailAddress",
    "_birthday_year_fourDigits",
    "_birthday_month_number_noZero",
    "_birthday_day",
    "_residence_country_formal",
    "password"
    //custom questions: are you 16 or over?
  ],
  
  "passwordRequirement": {
    "minLength": 8,
    "maxLength": -1,
    "mustInclude": [

      "specialChar",
      "number"
      
    ],
    "mustNotInclude": []
  },

  "entrypointConfig": {
    "rootDomain": "bbc.com",
    "subDomain": "ALL.bbc.com",
    "entrypoints": [
      
      //recovery entrypoints - this is above login because the links overlap (login link is shorter)
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#signin-page > div.page__wrapper > div.page__grid-wrapper > div.page__content-wrapper > div.page__content.page__content--flex > form > p > a"
          ]
        },
        "note": "Need help signing in button"
      },
      {
        "type": "recovery",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://account.bbc.com/signin/help"
        },
        "note": "Redirects to this page for password recovery"
      }, 

      //login entrypoints
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#idcta-link"
          ]
        },
        "note": "Clicked login from home page"
      },
      {
        "type": "login",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://account.bbc.com/signin"
        },
        "note": "Redirects to this page for login"
      },

      //signup + login success entrypoints
       {
        "type": "signupSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "https://account.bbc.com/register/thanks",
          "elementSelectors": [
            "#submit-button", //continue button
            "#container > div > div.page__wrapper > div.page__grid-wrapper > div.page__content-wrapper > div > h1", //success message
          ]
        },
        "note": "_______"
      },

      //signup entrypoints
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#signin-page > div.page__wrapper > div.page__grid-wrapper > div.page__content-wrapper > div.page__content.page__content--secondary > a"
          ]
        },
        "note": "'Register now' button'"
      },
      {
        "type": "signup",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://account.bbc.com/register"
        },
        "note": "Redirects to this page for registration"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "https://www.bbc.com/",
          "elementSelectors": [
            "#idcta-username"
          ]
        },
        "note": "Refreshes and redirects to main page"
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
            "#user-identifier-input"
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
            "#password-input"
          ],
          "value": "[account:password]"
        },
        "note": "Type in password"
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "#submit-button"
          ]
        },
        "note": "Click on ______"
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
              "#user-identifier-input" // should be the same as in loginConfig
            ]
          },
          "note": "Email input field for login"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#password-input" // should be the same as in loginConfig
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
              "#submit-button" // should be the same as in loginConfig
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
              "#user-identifier-input" // should be the same as in signupConfig
            ]
          },
          "note": "Email input field for sign up"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#password-input" // should be the same as in signupConfig
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
              "#submit-button" // should be the same as in signupConfig
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