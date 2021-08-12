module.exports = {
  //WHEN TESTING LOCALLY: set ikejin_park@college.harvard.edu as _emailAddress in content.js with password Plus1234!@#$
  "serviceName": "apollo",
  "officialName": "Apollo",
  "accountData": [
    "_firstName+' '+_lastName",
    "_emailAddress",
    "password"
  ],
  "passwordRequirement": {
    "minLength": 10,
    "maxLength": -1,
    "mustInclude": [
      "number"      
    ],
    "mustNotInclude": []
  },
/*********************************************************************************************************/
  "entrypointConfig": {
    "rootDomain": "apollo.io",
    "subDomain": "ALL.apollo.io",
    "entrypoints": [
      
      //login entrypoints
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "body > div.outer-wrapper.light > main > div.home-hero.home-hero--relative.margin-bottom-zero > div > div > div:nth-child(1) > header > div > nav.navbar.navbar--right > ul > li:nth-child(1) > a"
          ]
        },
        "note": "CLicked login from home page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "body > div.outer-wrapper.light > main > div.home-hero.home-hero--relative.margin-bottom-zero > div > div > div:nth-child(1) > header > div > nav.navbar.navbar--right > ul > li:nth-child(1)"
          ]
        },
        "note": "CLicked login from signup page"
      },
      {
        "type": "login",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "app.apollo.io/#/login?"
        },
        "note": "Redirects to this page for login"
      },

      //signup entrypoints
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "body > div.outer-wrapper.light > main > div.home-hero.home-hero--relative.margin-bottom-zero > div > div > div:nth-child(1) > header > div > nav.navbar.navbar--right > ul > li:nth-child(3) > a"
          ]
        },
        "note": "Clicked sign up for free from home page "
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#t28v2s7u5bpp"
          ]
        },
        "note": "Clicked get started from home page "
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#provider-mounter > div > div.zp_2Pnik > div.zp_2YB95 > div > div.zp_1QN2s > div > div.zp_mtt5S.zp_3bYfW > div > div > div.zp-tabs.zp_3ZvTL.zp_1kqQr.zp_189QT > a:nth-child(2)"
          ]
        },
        "note": "Clicked sign up from login page"
      },
      {
        "type": "signup",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://www.apollo.io/signup/"
        },
        "note": "Redirects to this page for sign up"
      },
      {
        "type": "signup",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://app.apollo.io/#/claim?token"
        },
        "note": "Redirects to this page for completing sign up"
      },

      //recovery entrypoints
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#provider-mounter > div > div.zp_2Pnik > div.zp_2YB95 > div > div.zp_1QN2s > div > div.zp_p7Ra4.zp_2ZLGm > div > form > div.zp_2ireQ > div > a"
          ]
        },
        "note": "Reset it here button"
      },
      {
        "type": "recovery",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://app.apollo.io/#/forgot"
        },
        "note": "Redirects to this page for password recovery"
      },

      //signup + login success entrypoints
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "onboarding",
          "elementSelectors": [
            "#account-menu-wrapper-root"
          ]
        },
        "note": "Refreshes to this onboarding page upon successful account creation"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "cockpit",
          "elementSelectors": [
            "#account-menu-wrapper-root"
          ]
        },
        "note": "Home, Search, Engage, Enrich, Settings button located on the top banner of the page - you only see this after successfully logging in to your account"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "people",
          "elementSelectors": [
            "#account-menu-wrapper-root"
          ]
        },
        "note": ""
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "companies",
          "elementSelectors": [
            "#account-menu-wrapper-root"
          ]
        },
        "note": ""
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "sequences",
          "elementSelectors": [
            "#account-menu-wrapper-root"
          ]
        },
        "note": ""
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "emails",
          "elementSelectors": [
            "#account-menu-wrapper-root"
          ]
        },
        "note": ""
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "phone-calls",
          "elementSelectors": [
            "#account-menu-wrapper-root"
          ]
        },
        "note": ""
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "tasks",
          "elementSelectors": [
            "#account-menu-wrapper-root"
          ]
        },
        "note": ""
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "templates",
          "elementSelectors": [
            "#account-menu-wrapper-root"
          ]
        },
        "note": ""
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "analytics",
          "elementSelectors": [
            "#account-menu-wrapper-root"
          ]
        },
        "note": ""
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "enrichment-status",
          "elementSelectors": [
            "#account-menu-wrapper-root"
          ]
        },
        "note": ""
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "job-changes",
          "elementSelectors": [
            "#account-menu-wrapper-root"
          ]
        },
        "note": ""
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "settings/account",
          "elementSelectors": [
            "#account-menu-wrapper-root"
          ]
        },
        "note": ""
      },
    ]
  },
/*********************************************************************************************************/
  //login config navigation
  "loginConfig": {
    "navigation": [
      {
        "type": "elementClearSendkeys",
        "content": {
          "fetch": true,
          "elementSelectors": [
            "#o3-input"
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
            "#o4-input"
          ],
          "value": "[account:password]"
        },
        "note": "Type in password"
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "#provider-mounter > div > div.zp_2Pnik > div.zp_2YB95 > div > div.zp_1QN2s > div > div.zp_p7Ra4.zp_2ZLGm > div > form > div.zp_18q8k > div"
          ]
        },
        "note": "Click on Log in"
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
            "dataField": "_emailAddress",
            "elementSelectors": [
              "#o3-input11" // should be the same as in loginConfig
            ]
          },
          "note": "Email input field for login"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#o4-input" // should be the same as in loginConfig
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
              "#provider-mounter > div > div.zp_2Pnik > div.zp_2YB95 > div > div.zp_1QN2s > div > div.zp_p7Ra4.zp_2ZLGm > div > form > div.zp_18q8k > div" // should be the same as in loginConfig
            ]
          },
          "note": "Submit button for login"
        }
      ]
    },
    "signup": { //MULTIPAGE SIGN UP PROCESS
      "listenFields": [
        {
          "type": "value",
          "content": {
            "dataField": "_emailAddress",
            "elementSelectors": [
              "#e9u699834oox > input" // should be the same as in signupConfig
            ]
          },
          "note": "Email input field that you see in the landing page of the service - you put down your email address and click 'get started' to receive an email"
        },
        {
          "type": "value",
          "content": {
            "dataField": "_emailAddress",
            "elementSelectors": [
              "#email-input" // should be the same as in signupConfig
            ]
          },
          "note": "Email input field for sign up form - you only put your email address down, at which point they send you an email to create your password"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#claim-password" // should be the same as in signupConfig
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
              "#t28v2s7u5bpp" // should be the same as in signupConfig
            ]
          },
          "note": "Get started button you click after typing your email address in the landing page"
        },
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              "#signup-form-submit" // should be the same as in signupConfig
            ]
          },
          "note": "Sign up button you click on the page where you ONLY write down your email address"
        },
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              "#provider-mounter > div > div.zp_2Pnik > div.zp_2YB95 > div > div.zp_1QN2s > div > form > div:nth-child(5) > div" // should be the same as in signupConfig
            ]
          },
          "note": "Sign up button you click on the page where set your password"
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