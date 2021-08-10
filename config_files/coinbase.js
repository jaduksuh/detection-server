module.exports = {
  "serviceName": "coinbase",
  "officialName": "Coinbase",
  "accountData": [
    "_firstName",
    "_lastName",
    "_emailAddress",
    "password"
  ],
  "passwordRequirement": {
    "minLength": -1, 
    "maxLength": -1,
    "mustInclude": []
  },
/*********************************************************************************************************/
  "entrypointConfig": {
    "rootDomain": "coinbase.com", 
    "subDomain": "ALL.coinbase.com", 
    "entrypoints": [ 
      {
        "type": "login",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://www.coinbase.com/signin"
        },
        "note": "Refreshed upon login page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
              "#root > div.Layout__Container-tuminz-0.cXANxY > div:nth-child(1) > header > div > div > div > div.sc-fznBMq.ekttti > a > span",
              "#root > div.Layout__Container-tuminz-0.hEPvkL > header > div > div > div > div.sc-fznBMq.ekttti > a > span",
              "#main > div.Flex-l69ttv-0.Signup__SignupFormContainer-sc-1nmo5j5-1.heLomK > div > p > a:nth-child(1)"
          ]
        },
        "note": "Pressed 'Get started' on main page"
      },
      {
        "type": "signup",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://www.coinbase.com/signup"
        },
        "note": "Refreshed upon signup page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#root > div > div:nth-child(1) > section > div > div.Flex-l69ttv-0.HeroVariant__LeftSection-sc-1o7093z-2.bpiymu > div.Flex-l69ttv-0.HomeHero__EmailCTAContainer-sc-11pptpd-0.lkplgq > form > div.EmailCTA__ButtonContainer-sc-69ff6x-1.emzZhN > button",
            "#root > div > section.Banner__Container-sc-1ezuqog-2.dNGPCl > div:nth-child(1) > div > div > button",
            "#root > div.Layout__Container-tuminz-0.cXANxY > div:nth-child(1) > section > div > div.Flex-l69ttv-0.HeroVariant__LeftSection-sc-1o7093z-2.bpiymu > div.Flex-l69ttv-0.HomeHero__EmailCTAContainer-sc-11pptpd-0.lkplgq > form > div.EmailCTA__ButtonContainer-sc-69ff6x-1.emzZhN > button",
            "#root > div.Layout__Container-tuminz-0.cXANxY > div:nth-child(1) > header > div > div > div > div.sc-fznBMq.ekttti > span > button",
            "#application_menu > ul:nth-child(2) > li.signup"
          ]
        },
        "note": "Pressed signup button"
      },
      {
        "type": "recovery",
        "identifierType": "urlStartWith",
        "identifier": {
          "startUrl": "https://www.coinbase.com/password_resets/new"
        },
        "note": "Refreshed upon recovery page"
      },
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
              "#page > div > div.account-extras > p:nth-child(1) > a:nth-child(1)"
          ]
        },
        "note": "Clicked on recovery button"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://www.coinbase.com/dashboard"
        },
        "note": "dashboard page after login"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://www.coinbase.com/signin_step_two"
        },
        "note": "additional check page after login"
      },
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "www.coinbase.com/setup"
        },
        "note": "returned to main page after signup"
      },
    ]
  },
/*********************************************************************************************************/
  "loginConfig": { 
    "navigation": [
      {
        "type": "delay",
        "content": {
          "duration": 0.1
        },
        "note": "Wait for 0.1 seconds"  
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
          "duration": 0.5
        },
        "note": "Wait for 0.5 seconds"  
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "#signin_button"
          ]
        },
        "note": "Click on 'Log in' button"
      },
      {
        "type": "delay",
        "content": {
          "duration": 0.1
        },
        "note": "Wait for 0.1 seconds"  
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
              "#signin_button"
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
            "dataField": "_emailAddress",
            "elementSelectors": [
              "#main > div.Flex-l69ttv-0.Signup__SignupFormContainer-sc-1nmo5j5-1.heLomK > div > form > div.Flex-l69ttv-0.Input__Container-sc-5d3t3r-5.jAQFzs.Fields__StyledInput-sc-1396sjh-6.jyZDPI > input",
              "body > div:nth-child(17) > div > div > div > div.Flex-l69ttv-0.ModalBody-sc-1hv5vpe-0.jXPbPf > div > div > form > div.Flex-l69ttv-0.Input__Container-sc-5d3t3r-5.jAQFzs.Fields__StyledInput-sc-1396sjh-6.jyZDPI > input"
            ]
          },
          "note": "Read in email address"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#main > div.Flex-l69ttv-0.Signup__SignupFormContainer-sc-1nmo5j5-1.heLomK > div > form > div.Flex-l69ttv-0.Fields__StyledPasswordFieldContainer-sc-1396sjh-0.eogPyZ > div > div.Flex-l69ttv-0.Input__Container-sc-5d3t3r-5.jAQFzs > input",
              "body > div:nth-child(17) > div > div > div > div.Flex-l69ttv-0.ModalBody-sc-1hv5vpe-0.jXPbPf > div > div > form > div.Flex-l69ttv-0.Fields__StyledPasswordFieldContainer-sc-1396sjh-0.eogPyZ > div > div.Flex-l69ttv-0.Input__Container-sc-5d3t3r-5.jAQFzs > input"
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
              "#main > div.Flex-l69ttv-0.Signup__SignupFormContainer-sc-1nmo5j5-1.heLomK > div > form > button",
              "body > div:nth-child(17) > div > div > div > div.Flex-l69ttv-0.ModalBody-sc-1hv5vpe-0.jXPbPf > div > div > form > button"
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
/*********************************************************************************************************/