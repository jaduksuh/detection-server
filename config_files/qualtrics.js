module.exports = {
  "serviceName": "qualtrics",
  "officialName": "Qualtrics",
  "accountData": [
    "_firstName",
    "_lastName",
    "_emailAddress",
    "_residence_country_formal",
    "_username",
    "_phoneNumber_countryCode_yesPlus", //"+1"
    "_phoneNumber_main_noHyphen", // "2345678901"
    "password"
    //custom questions: Organization, Job title
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
    "rootDomain": "qualtrics.com",
    "subDomain": "ALL.qualtrics.com",
    "entrypoints": [
      
      //login entrypoints
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#secondary-nav > ul > li:nth-child(1) > a"
          ]
        },
        "note": "CLicked login from home page"
      },
      {
        "type": "login",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://login.qualtrics.com/login"
        },
        "note": "Redirects to this page for login"
      },
      {
        "type": "login",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": ".az1.qualtrics.com/login"
        },
        "note": "Redirects to this page for logging into a specific account"
      },

      //signup entrypoints
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#entry > div > a"
          ]
        },
        "note": "Clicked sign up from login page"
      },
      {
        "type": "signup",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "www.qualtrics.com/free-account"
        },
        "note": "Redirects to this page upon clicking sign up from login page. Here, you type your email in"
      },
      {
        "type": "signup",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "www.qualtrics.com/au/free-account"
        },
        "note": "Redirects to this page upon clicking sign up from login page. Here, you type your email in"
      },
      {
        "type": "signup",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "az1.qualtrics.com/dg-service/account-setup"
        },
        "note": "Redirects to this page upon clicking sign up from login page. Here, you type your password in"
      },

      //recovery entrypoints
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#forgotPasswordLink"
          ]
        },
        "note": "Forgot password button - page does not redirect "
      },

      //signup + login success entrypoints
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://qfreeaccountssjc1.az1.qualtrics.com/Q/MyProjectsSection"
        },
        "note": "Signup success page 2/2 - After >1 seconds, redirects to this page again - sometimes skips the Signup success page 1/2"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://az1.qualtrics.com/login"
        },
        "note": "Login success page 1/2 - Redirects to this page upon successful login attempt for >1 seconds"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://qfreeaccountssjc1.az1.qualtrics.com/Q/MyProjectsSection"
        },
        "note": "Login success page 2/2 - After >1 seconds, redirects to this page again - sometimes skips the Login success page 1/2"
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
            "#UserName" //username = email address
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
            "#UserPassword"
          ],
          "value": "[account:password]"
        },
        "note": "Type in password"
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "#loginButton"
          ]
        },
        "note": "Click on login button"
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
              "#UserName" // should be the same as in loginConfig
            ]
          },
          "note": "Email input field for login"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#UserPassword" // should be the same as in loginConfig
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
              "#loginButton" // should be the same as in loginConfig
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
              "#email" // should be the same as in signupConfig
            ]
          },
          "note": "Email input field for sign up. You only write down email for now and submit the form. You then get an email from Qualtrics with a link. You click that link and get redirected to a page where you complete signing up and set your passwor"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#password" // should be the same as in signupConfig
            ]
          },
          "note": "Password input field for sign up. Again, password input field is on a different page that you can only access via a link you receive from Qualtrics' email to you"
        }
      ],
      "triggerEvents": [
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              "#q-free-account-form-submit-button" // should be the same as in signupConfig
            ]
          },
          "note": "Submit button you click after putting down youe email address ONLY. They email you a link you click to continue creating your account"
        },
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              "#app > div > form > button" // should be the same as in signupConfig
            ]
          },
          "note": "Submit button that you click after completing the rest of your profile"
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