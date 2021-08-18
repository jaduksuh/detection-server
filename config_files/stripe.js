module.exports = {
  "serviceName": "stripe",
  "officialName": "Stripe",
  "accountData": [
    "_emailAddress",
    "_firstName+' '+_lastName",
    "_residence_country_informal1",
    "password"
  ],
  "passwordRequirement": {
    "minLength": 10,
    "maxLength": -1,
    "mustInclude": []
  },
/*********************************************************************************************************/
  "entrypointConfig": {
    "rootDomain": "stripe.com",
    "subDomain": "ALL.stripe.com",
    "entrypoints": [
      {
        "type": "login",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://dashboard.stripe.com/login"
        },
        "note": "Refreshed upon login page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "body > header > div.SiteHeader__container > div > nav.SiteHeader__ctaNav > a",
            "body > div > div.db-RegisterAndLoginLayout.db-RegisterAndLoginLayout--login.db-RegisterAndLoginLayout--isDesktop.Box-root.Flex-flex.Flex-direction--column > div.db-RegisterAndLoginLayout-contentWrapper.Box-root > div > div.Card-root.Card--radius--all.Card--shadow--large.db-RegisterAndLoginLayout-card.Box-root.Box-hideIfEmpty.Box-background--white > div > div > div > div > div:nth-child(3) > div > div > div > div > span > span > a"
          ]
        },
        "note": "Clicked on login button"
      },
      {
        "type": "signup",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://dashboard.stripe.com/register"
        },
        "note": "Refreshed upon signup page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "body > section.Section.HomepageHero.theme--White.accent--Slate.Section--bleed1.Section--bleed2.Section--paddingNormal.Section--hasGuides > div > div.Section__container > div > div > div > section > footer > div > a.CtaButton.variant--Button.CtaButton--arrow.HomepageHero__cta"
          ]
        },
        "note": "Clicked on 'Start now' button from landing page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "body > div > div.db-RegisterAndLoginLayout.db-RegisterAndLoginLayout--login.db-RegisterAndLoginLayout--isMobile.Box-root.Flex-flex.Flex-direction--column > div.db-RegisterAndLoginLayout-contentWrapper.Box-root > div > div:nth-child(3) > div > div > div > span > a"
          ]
        },
        "note": "Clicked on 'Signup' button from login or recovery page"
      },
      {
        "type": "recovery",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://dashboard.stripe.com/reset"
        },
        "note": "Refreshed upon recovery page"
      },
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "body > div > div.db-RegisterAndLoginLayout.db-RegisterAndLoginLayout--login.db-RegisterAndLoginLayout--isMobile.Box-root.Flex-flex.Flex-direction--column > div.db-RegisterAndLoginLayout-contentWrapper.Box-root > div > div.Card-root.Card--radius--all.Card--shadow--large.db-RegisterAndLoginLayout-card.Box-root.Box-hideIfEmpty.Box-background--white > div > div > div > div > div > div > div:nth-child(2) > form > div > div > div > div:nth-child(3) > div > div > div:nth-child(1) > div > div:nth-child(1) > label > span > div > div > div:nth-child(2) > a"
          ]
        },
        "note": "Clicked on 'Forgot your password?' button from login page"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
            "includedString": "dashboard.stripe.com/test/dashboard"
        },
        "note": "returned after login"
      },
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "dashboard.stripe.com/test/dashboard"
        },
        "note": "Redirected after signup"
      },
    ]
  },
/*********************************************************************************************************/
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
        "note": "Type in email address"
      },
      {
        "type": "elementClearSendkeys",
        "content": {
          "fetch": true,
          "elementSelectors": [
            "#old-password"
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
        "note": "Click on 'Continue' button"
      }
    ]
  },
/*********************************************************************************************************/
  "signupConfig": {
    "agreements": [
      {
        "title": "Privacy Policy",
        "directLink": true,
        "link": "https://stripe.com/privacy"
      }
    ],
    "customQuestions": [],
    "navigation": [
      /*
      {
        "type": "gotoUrl",
        "content": {
          "url": "https://dashboard.stripe.com/register"
        },
        "note": "_______"
      },
      {
        "type": "elementClearType",
        "content": {
          "elementSelectors": [
            "body > div.db-RegisterApp-root.db-RegisterApp--v4.db-RegisterApp--default > div.db-RegisterApp-containerSizeListener > div > div.db-RegisterAndLoginLayout-contentWrapper.Box-root > div.db-RegisterAndLoginLayout-formContainer.Box-root > div.Card-root.Card--radius--all.Card--shadow--large.db-RegisterAndLoginLayout-card.Box-root.Box-hideIfEmpty.Box-background--white > div > div > form > div > div > div:nth-child(1) > div > div > div:nth-child(2) > div > div > div > div > div > div > div.PressableCore-base.Box-root > input"
          ],
          "fetch": true,
          "value": "[profile:ORDER_emailAddress]",
          "millisecondBetweenChar": 0
        },
        "note": "_______"
      },
      {
        "type": "elementClearType",
        "content": {
          "elementSelectors": [
            "body > div.db-RegisterApp-root.db-RegisterApp--v4.db-RegisterApp--default > div.db-RegisterApp-containerSizeListener > div > div.db-RegisterAndLoginLayout-contentWrapper.Box-root > div.db-RegisterAndLoginLayout-formContainer.Box-root > div.Card-root.Card--radius--all.Card--shadow--large.db-RegisterAndLoginLayout-card.Box-root.Box-hideIfEmpty.Box-background--white > div > div > form > div > div > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div > div > div > div > div.PressableCore-base.Box-root > input"
          ],
          "fetch": true,
          "value": "[profile:_firstName]",
          "millisecondBetweenChar": 0
        },
        "note": "_______"
      },
      {
        "type": "type",
        "content": {
          "fetch": false,
          "value": " "
        },
        "note": "_______"
      },
      {
        "type": "type",
        "content": {
          "fetch": true,
          "value": "[profile:_lastName]"
        },
        "note": "_______"
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "body > div.db-RegisterApp-root.db-RegisterApp--v4.db-RegisterApp--default > div.db-RegisterApp-containerSizeListener > div > div.db-RegisterAndLoginLayout-contentWrapper.Box-root > div.db-RegisterAndLoginLayout-formContainer.Box-root > div.Card-root.Card--radius--all.Card--shadow--large.db-RegisterAndLoginLayout-card.Box-root.Box-hideIfEmpty.Box-background--white > div > div > form > div > div > div:nth-child(3) > div > div > div:nth-child(2) > div > div > div > div > div > div > div.PressableCore-base.Box-root > div > div > div.PressableCore-base.Box-root > button > div.Box-root.Padding-right--16 > div > span"
          ]
        },
        "note": "_______"
      },
      {
        "type": "type",
        "content": {
          "fetch": true,
          "value": "[profile:primary_residence_country_informal1]"
        },
        "note": "_______"
      },
      {
        "type": "pressEnter",
        "content": {
          "number": 1,
        },
        "note": "_______"
      },
      {
        "type": "elementClearType",
        "content": {
          "elementSelectors": [
            "body > div.db-RegisterApp-root.db-RegisterApp--v4.db-RegisterApp--default > div.db-RegisterApp-containerSizeListener > div > div.db-RegisterAndLoginLayout-contentWrapper.Box-root > div.db-RegisterAndLoginLayout-formContainer.Box-root > div.Card-root.Card--radius--all.Card--shadow--large.db-RegisterAndLoginLayout-card.Box-root.Box-hideIfEmpty.Box-background--white > div > div > form > div > div > div.db-RegisterPage-passwordInputContainer.Box-root.Margin-bottom--12 > div > div:nth-child(2) > div > div > div > div > div > div.db-RegisterPasswordInput--fieldWrapper > div > div > div > div.PressableCore-base.Box-root > input"
          ],
          "fetch": true,
          "value": "[profile:DEFAULT_PASSWORD]",
          "millisecondBetweenChar": 0
        },
        "note": "_______"
      },
      {
        "type": "____",
        "content": {
          "___": "___"
        },
        "note": "_______"
      }
      */
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
              "#old-password"
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
          "note": "Clicked on Log in button"
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
              "input[name='email']"
            ]
          },
          "note": "Read in email address"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "input[name='password']"
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
          "note": "Clicked on Create Account button"
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