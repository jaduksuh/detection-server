module.exports = {
    "serviceName": "twitch",
    "officialName": "Twitch",
    "accountData": [
      "_username",
      "_emailAddress",
      "_birthday_month_alphabetical_unabbreviated",
      "_birthday_day",
      "_birthday_year_fourDigits",
      "password"
    ],
    "passwordRequirement": {
      "minLength": 8,
      "maxLength": -1,
      "mustInclude": []
    },
    "entrypointConfig": {
      "rootDomain": "twitch.tv",
      "subDomain": "ALL.twitch.tv",
      "entrypoints": [
        {
          "type": "login",
          "identifierType": "elementClickedOn",
          "identifier": {
            "elementSelectors": [
              "#root > div > div.sc-AxjAm.tlQbp > nav > div > div.sc-AxjAm.heIqmc > div.sc-AxjAm.kDfOjx > div > div.sc-AxjAm.bEURDn.anon-user > div:nth-child(1) > button"
            ]
          },
          "note": "Clicked on 'Login' button"
        },
        {
            "type": "login",
            "identifierType": "elementClickedOn",
            "identifier": {
              "elementSelectors": [
                "body > div.ReactModalPortal > div > div > div > div > div > div.sc-AxjAm.bIviRh > div > div > div.sc-AxjAm.hcgJuc > div > div > ul > li.InjectLayout-sc-588ddc-0.WQbWe > button > div > div.ScTextWrapper-sc-18v7095-1.buNIXE > p"
              ]
            },
            "note": "Clicked on 'Login' button from signup page"
        },
        {
            "type": "signup",
            "identifierType": "elementClickedOn",
            "identifier": {
              "elementSelectors": [
                "#root > div > div.sc-AxjAm.tlQbp > nav > div > div.sc-AxjAm.heIqmc > div.sc-AxjAm.kDfOjx > div > div.sc-AxjAm.bEURDn.anon-user > div:nth-child(2) > button"
              ]
            },
            "note": "Clicked on 'Sign up' button"
        },
        {
            "type": "signup",
            "identifierType": "elementClickedOn",
            "identifier": {
              "elementSelectors": [
                "body > div.ReactModalPortal > div > div > div > div > div > div.sc-AxjAm.bIviRh > div > div > div.sc-AxjAm.hcgJuc > div > div > ul > li.InjectLayout-sc-588ddc-0.WQbWe > button > div > div.ScTextWrapper-sc-18v7095-1.buNIXE > p"
              ]
            },
            "note": "Clicked on 'Sign up' button from login page"
        },
        {
            "type": "signup",
            "identifierType": "elementClickedOn",
            "identifier": {
              "elementSelectors": [
                "#a3b8ad5969a34875bf05c6c2a0ec1732 > div > div > div > div > button > div"
              ]
            },
            "note": "Clicked on 'Sign up' button from left hand side of main page"
        },
        
        {
          "type": "recovery",
          "identifierType": "urlStartWith",
          "identifier": {
            "startUrl": "https://www.twitch.tv/user/account-recovery"
          },
          "note": "Refreshed upon recovery page"
        },
        {
          "type": "loginSuccess",
          "identifierType": "urlIncludes&elementPresent",
          "identifier": {
              "includedString": "www.twitch.tv",
              "elementSelectors": [
                "#root > div > div.sc-AxjAm.tlQbp > nav > div > div.sc-AxjAm.fqUaXq > div:nth-child(3) > div > div:nth-child(1) > div.sc-AxjAm.iQJgyG > a > div > div.sc-AxjAm.hTBwNv > div.sc-AxjAm.VCmPc > p",
                "#root > div > div.sc-AxjAm.tlQbp > nav > div > div.sc-AxjAm.heIqmc > div.sc-AxjAm.kDfOjx > div > div > div > div > button > div > figure"
              ]
          },
          "note": "returned to main page after login"
        },
        {
          "type": "signupSuccess",
          "identifierType": "urlIncludes&elementPresent",
          "identifier": {
              "includedString": "www.twitch.tv",
              "elementSelectors": [
                "#root > div > div.sc-AxjAm.tlQbp > nav > div > div.sc-AxjAm.fqUaXq > div:nth-child(3) > div > div:nth-child(1) > div.sc-AxjAm.iQJgyG > a > div > div.sc-AxjAm.hTBwNv > div.sc-AxjAm.VCmPc > p",
                "#root > div > div.sc-AxjAm.tlQbp > nav > div > div.sc-AxjAm.heIqmc > div.sc-AxjAm.kDfOjx > div > div > div > div > button > div > figure"
              ]
          },
          "note": "returned to main page after login"
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
            "note": "Wait for 0.5 seconds"  
        },
        {
          "type": "elementClearSendkeys",
          "content": {
            "fetch": true,
            "elementSelectors": [
              "#login-username"
            ],
            "value": "[account:_username]"
          },
          "note": "Type in username"
        },
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
              "#password-input"
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
              "body > div.ReactModalPortal > div > div > div > div > div > div.sc-AxjAm.bIviRh > div > div > div.sc-AxjAm.gbrRBA > form > div > div:nth-child(3) > button > div > div"
            ]
          },
          "note": "Click on 'Log In' button"
        }
      ]
    },
    "signupConfig": {
      "agreements": [
        {
          "title": "Terms of Service",
          "directLink": true,
          "link": "https://www.twitch.tv/p/en/legal/terms-of-service"
        },
        {
            "title": "Privacy Notice",
            "directLink": true,
            "link": "https://www.twitch.tv/p/en/legal/privacy-notice"
        }
      ],
      "customQuestions": [],
      "navigation": [
        /* Open up the webpage */
        {
            "type": "gotoUrl",
            "content": {
                "url": "https://www.twitch.tv/"
            },
            "note": "Open Twitch main webpage"
        },
        {
            "type": "delay",
            "content": {
                "duration": 1.0
            },
            "note": "Wait for 1.0 seconds"
        },

        /* Change language to English */
        {
            "type": "elementClick",
            "content": {
                "elementSelectors": [
                  "#root > div > div.sc-AxjAm.tlQbp > nav > div > div.sc-AxjAm.heIqmc > div.sc-AxjAm.kDfOjx > div > div.sc-AxjAm.hhPPLr > div > div > button"
                ]
            },
            "note": "Click on 'Account Settings' button"
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
                  "body > div.ScReactModal-sc-14fx378-0.kvCBnB.tw-dialog-layer.tw-root--theme-light > div > div > div > div > div > div > div > div > div > div > div > div.simplebar-scroll-content > div > div > div:nth-child(1) > button > div > div.sc-AxjAm.dVmHJR"
                ]
            },
            "note": "Click on 'Languages' button"
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
                  "body > div.ScReactModal-sc-14fx378-0.kvCBnB.tw-dialog-layer.tw-root--theme-light > div > div > div > div > div > div > div > div > div > div > div > div > div.simplebar-scroll-content > div > div > div:nth-child(1) > button > div > div"
                ]
            },
            "note": "Click on 'English' button"
        },
        {
            "type": "delay",
            "content": {
                "duration": 2.0
            },
            "note": "Wait 2 seconds for the page to reload"
        },

        /* Open up signup page */
        {
            "type": "elementClick",
            "content": {
                "elementSelectors": [
                  "#root > div > div.sc-AxjAm.tlQbp > nav > div > div.sc-AxjAm.heIqmc > div.sc-AxjAm.kDfOjx > div > div.sc-AxjAm.bEURDn.anon-user > div:nth-child(2) > button"
                ]
            },
            "note": "Click on 'Sign up' button"
        },
        {
            "type": "delay",
            "content": {
                "duration": 1.0
            },
            "note": "Wait for 1.0 seconds"
        },

        /* Type in username & password information */
        {
            "type": "elementClearType",
            "content": {
              "elementSelectors": [
                "#signup-username"
              ],
              "fetch": true,
              "value": "[profile:ORDER_username]",
              "millisecondBetweenChar": 1
            },
            "note": "Type in username"
        },
        {
            "type": "delay",
            "content": {
                "duration": 0.5
            },
            "note": "Wait for 0.5 seconds"
        },
        {
            "type": "elementClearType",
            "content": {
              "elementSelectors": [
                "#password-input"
              ],
              "fetch": true,
              "value": "[profile:DEFAULT_PASSWORD]",
              "millisecondBetweenChar": 1
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
            "type": "elementClearType",
            "content": {
              "elementSelectors": [
                "#password-input-confirmation"
              ],
              "fetch": true,
              "value": "[profile:DEFAULT_PASSWORD]",
              "millisecondBetweenChar": 1
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

        /* Type in Date of Birth information */
        {
            "type": "elementClick",
            "content": {
              "elementSelectors": [
                "body > div.ReactModalPortal > div > div > div > div > div > div.sc-AxjAm.bIviRh > div > div > div.sc-AxjAm.gbrRBA > form > div > div:nth-child(3) > div > div.sc-AxjAm.jiKWjM > div.sc-AxjAm.fzeiWJ > select"
              ]
            },
            "note": "Click on the 'Month' button"
        },
        {
            "type": "type",
            "content": {
              "fetch": true,
              "value": "[profile:_birthday_month_alphabetical_unabbreviated]",
              "millisecondBetweenChar": 1
            },
            "note": "Type in birthday month in the 'Month' button"
        },
        {
            "type": "pressEnter",
            "content": {
              "number": 1
            },
            "note": "Type in newline to choose month from 'Month' button"
        },
        {
            "type": "delay",
            "content": {
              "duration": 0.5
            },
            "note": "Wait for 0.5 seconds"
        },

        {
            "type": "elementClearType",
            "content": {
              "elementSelector": [
                "body > div.ReactModalPortal > div > div > div > div > div > div.sc-AxjAm.bIviRh > div > div > div.sc-AxjAm.gbrRBA > form > div > div:nth-child(3) > div > div.sc-AxjAm.jiKWjM > div:nth-child(2) > div > input"
              ],
              "fetch": true,
              "value": "[profile:_birthday_day]",
              "millisecondBetweenChar": 1
            },
            "note": "Type in birthday day in the 'Day' input window"
        },
        {
            "type": "delay",
            "content": {
              "duration": 0.5
            },
            "note": "Wait for 0.5 seconds"
        },

        {
            "type": "elementClearType",
            "content": {
              "elementSelector": [
                "body > div.ReactModalPortal > div > div > div > div > div > div.sc-AxjAm.bIviRh > div > div > div.sc-AxjAm.gbrRBA > form > div > div:nth-child(3) > div > div.sc-AxjAm.jiKWjM > div:nth-child(3) > div > input"
              ],
              "fetch": true,
              "value": "[profile:_birthday_year_fourDigits]",
              "millisecondBetweenChar": 1
            },
            "note": "Type in birthday year in the 'Year' input window"
        },
        {
            "type": "delay",
            "content": {
              "duration": 0.5
            },
            "note": "Wait for 0.5 seconds"
        },
        
        /* Type in email address information */
        {
            "type": "elementClearType",
            "content": {
              "elementSelectors": [
                "#email-input"
              ],
              "fetch": true,
              "value": "[profile:ORDER_emailAddress]",
              "millisecondBetweenChar": 1
            },
            "note": "Type in email address information in the 'Email' input window"
        },
        {
            "type": "delay",
            "content": {
              "duration": 0.5
            },
            "note": "Wait for 0.5 seconds"
        },
      ]
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
              "#login-username"
            ]
          },
          "note": "Read in email address"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#password-input"
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
              "body > div.ReactModalPortal > div > div > div > div > div > div.sc-AxjAm.bIviRh > div > div > div.sc-AxjAm.gbrRBA > form > div > div:nth-child(3) > button > div > div"
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
              "#signup-username"
            ]
          },
          "note": "Read in email address"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#password-input"
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
              "body > div.ReactModalPortal > div > div > div > div > div > div.sc-AxjAm.bIviRh > div > div > div.sc-AxjAm.gbrRBA > form > div > div:nth-child(5) > button"
            ]
          },
          "note": "Clicked on sign up button"
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