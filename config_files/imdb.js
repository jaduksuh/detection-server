module.exports = {
  "serviceName": "imdb",
  "officialName": "IMDb",
  "accountData": [
    "_firstName+' '+_lastName",
    "_emailAddress",
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
    "rootDomain": "imdb.com",
    "subDomain": "ALL.imdb.com",
    "entrypoints": [
      
      //login entrypoints
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#signin-options > div > div:nth-child(2) > a:nth-child(1)"
          ]
        },
        "note": "Chose signin with email out of all sign in options"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#ap_register_form > div > div > div:nth-child(7) > a"
          ]
        },
        "note": "Clicked login from signup page"
      },
      {
        "type": "login",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://www.imdb.com/ap/signin"
        },
        "note": "Redirects to this page for login"
      },

      //signup entrypoints
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#signin-options > div > div:nth-child(4) > a"
          ]
        },
        "note": "Clicked sign up from sign in page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#createAccountSubmit"
          ]
        },
        "note": "Clicked sign up from login form"
      },
      {
        "type": "signup",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://www.imdb.com/ap/register"
        },
        "note": "Redirects to this page for sign up"
      },

      //recovery entrypoints
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#auth-fpp-link-bottom"
          ]
        },
        "note": "Forgot password button"
      },
      {
        "type": "recovery",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://www.imdb.com/ap/forgotpassword"
        },
        "note": "Redirects to this page for password recovery"
      },

      //signup + login success entrypoints
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "https://www.imdb.com/ap/cvf/request",
          "elementSelectors": [
            "#cvf-input-code", //verification code input field
            "#cvf-resend-link" //resend OTP 
          ]
        },
        "note": "Sign up is not complete but once you make your email and password, you are redirected to a screen where you'r asked to verify your email"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "https://www.imdb.com/",
          "elementSelectors": [
            "#imdbHeader > div.ipc-page-content-container.ipc-page-content-container--center.navbar__inner > div._3x17Igk9XRXcaKrcG3_MXQ.navbar__user.UserMenu-sc-1poz515-0.lkfvZn > div > label.ipc-button.ipc-button--single-padding.ipc-button--center-align-content.ipc-button--default-height.ipc-button--core-baseAlt.ipc-button--theme-baseAlt.ipc-button--on-textPrimary.ipc-text-button.navbar__flyout__text-button-after-mobile.navbar__user-menu-toggle__button",//user menu
            "#imdbHeader > div.ipc-page-content-container.ipc-page-content-container--center.navbar__inner > div._3x17Igk9XRXcaKrcG3_MXQ.navbar__user.UserMenu-sc-1poz515-0.lkfvZn > div > label.ipc-button.ipc-button--single-padding.ipc-button--center-align-content.ipc-button--default-height.ipc-button--core-baseAlt.ipc-button--theme-baseAlt.ipc-button--on-textPrimary.ipc-text-button.navbar__flyout__text-button-after-mobile.navbar__user-menu-toggle__button > svg", //user profile icon
            "#imdbHeader > div.ipc-page-content-container.ipc-page-content-container--center.navbar__inner > div._3x17Igk9XRXcaKrcG3_MXQ.navbar__user.UserMenu-sc-1poz515-0.lkfvZn > div > label.ipc-button.ipc-button--single-padding.ipc-button--center-align-content.ipc-button--default-height.ipc-button--core-baseAlt.ipc-button--theme-baseAlt.ipc-button--on-textPrimary.ipc-text-button.navbar__flyout__text-button-after-mobile.navbar__user-menu-toggle__button > div > span", //user name
            "#imdbHeader > div.ipc-page-content-container.ipc-page-content-container--center.navbar__inner > div._3x17Igk9XRXcaKrcG3_MXQ.navbar__user.UserMenu-sc-1poz515-0.lkfvZn > div > label.ipc-button.ipc-button--single-padding.ipc-button--center-align-content.ipc-button--default-height.ipc-button--core-baseAlt.ipc-button--theme-baseAlt.ipc-button--on-textPrimary.ipc-text-button.navbar__flyout__text-button-after-mobile.navbar__user-menu-toggle__button > div > svg", //dropdown menu right next to user profile picture
            "#navUserMenu" //user menu

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
            "#ap_email"
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
            "#ap_password"
          ],
          "value": "[account:password]"
        },
        "note": "Type in password"
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "#signInSubmit"
          ]
        },
        "note": "Click on Sign-in"
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
              "#ap_email" // should be the same as in loginConfig
            ]
          },
          "note": "Email input field for login"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#ap_password" // should be the same as in loginConfig
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
              "#signInSubmit" // should be the same as in loginConfig
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
              "#ap_email" // should be the same as in signupConfig
            ]
          },
          "note": "Email input field for sign up"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#ap_password" // should be the same as in signupConfig
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
              "#continue" // should be the same as in signupConfig
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