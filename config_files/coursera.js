module.exports = {
  "serviceName": "coursera",
  "officialName": "Coursera",
  "accountData": [
      "_firstName", 
      "_lastName",
      "_emailAddress",
      "password"
  ],
  "passwordRequirement": {
    "minLength": 8, 
    "maxLength": 72,
    "mustInclude": []
  },
/*********************************************************************************************************/
  "entrypointConfig": {
    "rootDomain": "coursera.org", 
    "subDomain": "www.coursera.org", 
    "entrypoints": [ 
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "body > div._1widl7g > div > div > section > section > p._lh07qbv > span > button",
            "#__next > header > div > div > div > div._pu0m129.context-header__child.context-header__child--right > ul > li.c-ph-right-nav-button.c-ph-log-in.isLohpRebrand"
          ]
        },
        "note": "Pressed Login button"
      },
      {
        "type": "signup",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://www.coursera.org/?authMode=signup"
        },
        "note": "Refreshed upon signup page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#__next > header > div > div > div > div._pu0m129.context-header__child.context-header__child--right > ul > li.c-ph-right-nav-button.c-ph-sign-up.isLohpRebrand.c-ph-right-nav-no-border > a",
            "#__next > main > section.rc-HeroBannerRedesign._1t9pzbn > div > div._egfx4z > button"
          ]
        },
        "note": "Pressed signup button"
      },
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#password-hint > button"
          ]
        },
        "note": "Pressed 'Forgot password?' button"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "https://www.coursera.org/",
          "elementSelectors": [
            "#right-nav-dropdown-btn"
          ]
        },
        "note": "returned to main page after login"
      },
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://www.coursera.org/?isNewUser=true"
        },
        "note": "Redirected after signup"
      },
      {
        "type": "triggerInitialContact",
        "identifierType": "elementClickedOn&delay",
        "identifier": {
          "elementSelectors": [
            "body > div._1widl7g > div > div > section > section > p._lh07qbv > span > button",
            "#__next > header > div > div > div > div._pu0m129.context-header__child.context-header__child--right > ul > li.c-ph-right-nav-button.c-ph-log-in.isLohpRebrand",
            "#__next > header > div > div > div > div._pu0m129.context-header__child.context-header__child--right > ul > li.c-ph-right-nav-button.c-ph-sign-up.isLohpRebrand.c-ph-right-nav-no-border > a",
            "#__next > main > section.rc-HeroBannerRedesign._1t9pzbn > div > div._egfx4z > button"
          ],
          "delay": 0.5
          },
        "note": "Rescan the page when clicked on these buttons"
      }
    ]
  },
/*********************************************************************************************************/
  "loginConfig": { 
    "navigation": [
      {
        "type": "delay",
        "content": {
          "duration": 0.5
        },
        "note": "Wait for 0.5 seconds"  
      },
      {
        "type": "elementClearSendkeys",
        "content": {
          "fetch": true,
          "elementSelectors": [
            "#email",
          ],
          "value": "[account:_emailAddress]"
        },
        "note": "Type in email address"
      },
      {
        "type": "elementClearSendkeys",
        "content": {
          "fetch": true,
          "elementSelectors": [
            "#password",
          ],
          "value": "[account:password]"
        },
        "note": "Type in password"
      },
      {
        "type": "delay",
        "content": {
          "duration": 0.2
        },
        "note": "Wait for 0.2 seconds"  
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "body > div._1widl7g > div > div > section > section > div:nth-child(2) > form > button"
          ]
        },
        "note": "Click on 'Login' button"
      },
    ]
  },
/*********************************************************************************************************/
  "signupConfig": {
    "agreements": [
      {
        "title": "___",
        "directLink": "___",
        "link": "https://_____" 
      }
    ],
    "customQuestions": [ 
      {
        "question": "___",
        "answer": {
          "type": "___", 
          "value": {
            "questions": [
              "___"
            ],
            "maxAnswers": "___" 
          } 
        }
      }
    ],
    "navigation": [
      {
        "type": "___",
        "content": {
          "___": "___"
        },
        "note": "___"
      }
    ]
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
              "#email"
            ]
          },
          "note": "Read in email address"
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
              "body > div._1widl7g > div > div > section > section > div:nth-child(2) > form > button"
            ]
          },
          "note": "Clicked on login button"
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
              "#email"
            ]
          },
          "note": "Read in email address"
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
              "body > div._1widl7g > div > div > section > section > div:nth-child(2) > form > button"
            ]
          },
          "note": "Clicked on 'Join for free' button"
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