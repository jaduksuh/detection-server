module.exports = {
  "serviceName": "cnbc",
  "officialName": "CNBC",
  "accountData": [
    "_emailAddress",
    "password"
  ],
  
  "passwordRequirement": {
    "minLength": 8,
    "maxLength": -1,
    "mustInclude": [
      "upperCase",
      "specialChar",
      "number"
    ],
    "mustNotInclude": []
  },
  
  "entrypointConfig": {
    "rootDomain": "cnbc.com",
    "subDomain": "ALL.cnbc.com",
    "entrypoints": [
      
      //login entrypoints
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#GlobalNavigation > div.CNBCGlobalNav-globalNavigation > div > div > div.SignInMenu-signInContainer > div > div > a", //mainpage
            "#mega-menu-megaMenu > div > div.mega-links-container > div > div:nth-child(10) > div > a" // sidebar
          ]
        },
        "note": "Clicked sign in from the main page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#BrandPageWrapper > div.Modal-modalBackground > div > div > div > div.AuthForms-container > div:nth-child(2) > div > button"
          ]
        },
        "note": "Clicked sign in from the sign up modal"
      },

      //signup entrypoints
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#BrandPageWrapper > div.Modal-modalBackground > div > div > div > div.AuthForms-container > div.AuthForms-header > div.AuthForms-toggleCta > button"
          ]
        },
        "note": "Clicked sign up from the login modal"
      },

      //recovery entrypoints
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#BrandPageWrapper > div.Modal-modalBackground > div > div > div > div.AuthForms-container > button"
          ]
        },
        "note": "clicked 'forgot password'"
      },
     
      // login + signup Success
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "https://www.cnbc.com/",
          "elementSelectors": [
            ".SignInMenu-dropdownArrow"
          ]
        },
        "note": "Once login is successful, users are still redirected to this page"
      },
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "https://www.cnbc.com/",
          "elementSelectors": [
            ".SignInMenu-dropdownArrow"
          ]
        },
        "note": "Once login is successful, users are still redirected to this page"
      },

      // triggerInitialContact
      {
        "type": "triggerInitialContact",
        "identifierType": "elementClickedOn&delay",
        "identifier": {
          "elementSelectors": [
            "#GlobalNavigation > div.CNBCGlobalNav-globalNavigation > div > div > div.SignInMenu-signInContainer > div > div > a",
            // The 'Sign in' button from main page
            "#mega-menu-megaMenu > div > div.mega-links-container > div > div:nth-child(10) > div > a"
            // The 'Sign in' button from main page
          ],
          "delay": 0.1
        },
        "note": "Trigger needed for login"
      },
      {
        "type": "triggerInitialContact",
        "identifierType": "elementClickedOn&delay",
        "identifier": {
          "elementSelectors": [
            "#BrandPageWrapper > div.Modal-modalBackground > div > div > div > div.AuthForms-container > form > input",
            // The 'Sign in' button from login screen
          ],
          "delay": 2.5
        },
        "note": "Trigger needed for login"
      },
      {
        "type": "triggerInitialContact",
        "identifierType": "elementClickedOn&delay",
        "identifier": {
          "elementSelectors": [
            "#BrandPageWrapper > div.Modal-modalBackground > div > div > div > div.AuthForms-container > div.AuthForms-header > div.AuthForms-toggleCta > button",
            // 'Create account' button from login page
          ],
          "delay": 0.1
        },
        "note": "Trigger needed for signup"
      },
      {
        "type": "triggerInitialContact",
        "identifierType": "elementClickedOn&delay",
        "identifier": {
          "elementSelectors": [
            "#BrandPageWrapper > div.Modal-modalBackground > div > div > div > div.AuthForms-container > form > input",
            // 'Create account' button from signup page
          ],
          "delay": 5
        },
        "note": "Trigger needed for signup"
      },
    ]
  },

  //login config navigation
  "loginConfig": {
    "navigation": [
      {
        "type": "delay",
        "content": {
          "duration": 0.2
        },
        "note": "Wait until triggerElement is attached"
      },
      {
        "type": "elementClearSendkeys",
        "content": {
          "fetch": true,
          "elementSelectors": [
            "#BrandPageWrapper > div.Modal-modalBackground > div > div > div > div.AuthForms-container > form > div:nth-child(1) > div > div > input",
            
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
            "#BrandPageWrapper > div.Modal-modalBackground > div > div > div > div.AuthForms-container > form > div:nth-child(2) > div > div > input",
          
          ],
          "value": "[account:password]"
        },
        "note": "Type in password"
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "#BrandPageWrapper > div.Modal-modalBackground > div > div > div > div.AuthForms-container > form > input",
            "input[name='signin']",
            "input[type='submit']"
          ]
        },
        "note": "Click on submit button"
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
              "#BrandPageWrapper > div.Modal-modalBackground > div > div > div > div.AuthForms-container > form > div:nth-child(1) > div > div > input",
             // should be the same as in loginConfig
            ]
          },
          "note": "_____"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#BrandPageWrapper > div.Modal-modalBackground > div > div > div > div.AuthForms-container > form > div:nth-child(2) > div > div > input",
            // should be the same as in loginConfig
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
              "#BrandPageWrapper > div.Modal-modalBackground > div > div > div > div.AuthForms-container > form > input",
            "input[name='signin']" // should be the same as in loginConfig
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
              "#BrandPageWrapper > div.Modal-modalBackground > div > div > div > div.AuthForms-container > form > div:nth-child(1) > div > div > input" // should be the same as in loginConfig
            ]
          },
          "note": "_____"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "input[name='password']"
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
              "#BrandPageWrapper > div.Modal-modalBackground > div > div > div > div.AuthForms-container > form > input",
              "input[name='signup']"
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