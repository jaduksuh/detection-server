module.exports = {
  "serviceName": "quizlet",
  "officialName": "Quizlet",
  "accountData": [
      "_birthday_year_fourDigits",
      "_birthday_month_alphabetical_unabbreviated",
      "_birthday_day",
      "_emailAddress",
      "_username",
      "password"
  ],
  "passwordRequirement": {
    "minLength": 8,
    "maxLength": -1,
    "mustInclude": []
  },
  "entrypointConfig": {
    "rootDomain": "quizlet.com",
    "subDomain": "NONE.quizlet.com",
    "entrypoints": [
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "button[aria-label='Log in']",
            "body > div.UIModal.UIModal-container.is-white.is-open.UIModal--fullScreen.SignupPromptModalNew--fullPageExperiment > div > div.UIModalBody > section > div.avsxyiq > div > div.auu3mjs > h3:nth-child(2)" 
          ]
        },
        "note": "Pressed login button"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "button[aria-label='Sign up']",
            "#page > section.PrismicTextCallout.PrismicTextCallout--secondaryIndigoBackground.PrismicTextCallout--rightImage.PrismicTextCallout--noImage.PrismicTextCallout--smallPadding.PrismicTextCallout--carousel > div > div > div.PrismicTextCallout-description > div.UIDiv.PrismicTextCallout-cta.PrismicTextCallout--descriptionLeft > a",
            "#page > section:nth-child(8) > div > div > div > div.UIDiv.PrismicTextCallout-cta.PrismicTextCallout--descriptionCenter > a",
            "body > div.UIModal.UIModal-container.is-white.is-open.UIModal--fullScreen.SignupPromptModalNew--fullPageExperiment > div > div.UIModalBody > section > div.avsxyiq > div > div.auu3mjs > h3:nth-child(1)"
          ]
        },
        "note": "Pressed Sign up button"
      },
      {
        "type": "recovery",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://quizlet.com/forgotten"
        },
        "note": "Refreshed upon recovery page"
      },
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "body > div.UIModal.UIModal-container.is-white.is-open.UIModal--fullScreen.SignupPromptModalNew--fullPageExperiment > div > div.UIModalBody > section > div.avsxyiq > div > form > div > label:nth-child(2) > div.UIInput-labelRow > div.UIInput-labelRowRight"
           ]
        },
        "note": "Pressed Forgot? button"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "quizlet.com",
          "elementSelectors": [
            "#TopNavigationReactTarget > header > div > div.TopNavigation-contentLeft > div.TopNavigation-menuItems > div.NavigationTabs > a.UILink.is-Popover.UIOverlayTrigger-target"
          ]
        },
        "note": "returned to main page after login"
      },
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://quizlet.com/upgrade"
        },
        "note": "returned to upgrade page after signup"
      },
    ]
  },
  "loginConfig": {
    "navigation": [
      {
        "type": "delay",
        "content": {
          "duration": 0.5
        },
        "note": "Wait for one second"
      },
      {
        "type": "elementClearSendkeys",
        "content": {
          "fetch": true,
          "elementSelectors": [
            "#username"
          ],
          "value": "[account:_username]"
        },
        "note": "Type in username"
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
            "button[type='submit']"
          ]
        },
        "note": "Click on 'Log in' button"
      }
    ]
  },
  "signupConfig": {
    "agreements": [
      {
        "title": "Terms of Service",
        "directLink": true,
        "link": "https://quizlet.com/tos"
      },
      {
        "title": "Privacy Policy",
        "directLink": true,
        "link": "https://quizlet.com/privacy"
      }
    ],
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
            "dataField": "_username",
            "elementSelectors": [
              "#username"
            ]
          },
          "note": "Read in username"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#password"
            ]
          },
          "note": "Read in password"
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
          "note": "Clicked on 'Sign in' button"
        }
      ]
    },
    "signup": {
      "listenFields": [
        {
          "type": "value",
          "content": {
            "dataField": "_username",
            "elementSelectors": [
              "#username"
            ]
          },
          "note": "Read in username"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#password1"
            ]
          },
          "note": "Read in password"
        }
      ],
      "triggerEvents": [
        {
          "type": "elementClickedOn",
          "content": {
            "elementSelectors": [
              "button[type='submit']",
              "body > div.UIModal.UIModal-container.is-white.is-open.UIModal--fullScreen.SignupPromptModalNew--fullPageExperiment > div > div.UIModalBody > section > div.avsxyiq > div > form > button"
            ]
          },
          "note": "Clicked on Sign up button"
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