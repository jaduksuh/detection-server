module.exports = {
  "serviceName": "gusto",
  "officialName": "Gusto",
  "accountData": [
    "_firstName+' '+_lastName",
    "_emailAddress",
    "_birthday_year_fourDigits",
    "_birthday_month_number_noZero",
    "_birthday_day",
    "_username",
    "_phoneNumber_main_noHyphen", // only accepts US phone number
    "password"
  ],
  
  "passwordRequirement": {
    "minLength": 8,
    "maxLength": -1,
    "mustInclude": [
      "number"
    ],
    "mustNotInclude": [

    ]
  },

  "entrypointConfig": {
    "rootDomain": "gusto.com",
    "subDomain": "ALL.gusto.com",
    "entrypoints": [
      
      //login entrypoints
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#header-with-dev-resources-login"
          ]
        },
        "note": "CLicked login from home page"
      },
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#homepage-signup-form-wrapper > span > div > div.margin-top-25px.text-center > div.margin-bottom-15px.lp-footer-signin > a"
          ]
        },
        "note": "CLicked login from signup page"
      },
      {
        "type": "login",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://app.gusto.com/login"
        },
        "note": "Redirects to this page for login"
      },

      //signup entrypoints
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#survey-manager > div > button"
          ]
        },
        "note": "Clicked get started button from home page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#blurrable > main > div.wp-block-cgb-bam-hero-one-col.custom-cta-container > section > div > div > div > div.delay-100.fade-up-15px > a"
          ]
        },
        "note": "Clicked get started button from 'Why Gusto' page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#blurrable > main > section.wp-block-cgb-bam-two-col-image-fixed.two-col-hero-image-fixed.relative.bg-parsnip-200 > div > div.two-col-hero-image-fixed__copy.mobile-text-bottom > div > a"
          ]
        },
        "note": "Clicked get started button from 'Gusto for new business' page"
      }, 
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#blurrable > main > section.wp-block-cgb-bam-two-col-image-fixed.two-col-hero-image-fixed.relative.bg-white > div > div.two-col-hero-image-fixed__copy > div > div > div > a.wp-block-cgb-bam-button.btn.btn-secondary"
          ]
        },
        "note": "Clicked get started button from 'Switching to Gusto' page"
      },
      {
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#login-secondary > div > p:nth-child(2) > a"
          ]
        },
        "note": "Clicked 'want to sign your company up with Gusto' from login page"
      },
      {
        "type": "signup",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://gusto.com/invite/company"
        },
        "note": "Redirects to this page for sign up"
      },

      //recovery entrypoints
      {
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
            "#new_user > fieldset > div.form-group.margin-top-30px > a"
          ]
        },
        "note": "Forgot password button"
      },
      {
        "type": "recovery",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://app.gusto.com/account_access/form"
        },
        "note": "Redirects to this page for password recovery"
      },

      //signup + login success entrypoints
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "https://gusto.com/invite/onboarding/company/pending"
        },
        "note": "You're redirected to this page and are asked to check yur email address"
      },
      {
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
          "includedString": "https://app.gusto.com/",
          "elementSelectors": [
            "#app > div > header > div.layout-header.layout-header-group > div.layout-header-actions.layout-header-group > nav > button",
            "#app > div > header > div.layout-header.layout-header-group > div.layout-header-actions.layout-header-group > nav > button > span.preferred-first-name",
            "#app > div > header > div.layout-header.layout-header-group > div.layout-header-actions.layout-header-group > nav > button > span.last-name",
            "#app > div > header > div.layout-header.layout-header-group > div.layout-header-actions.layout-header-group > nav > button > span.user-role > span.layout-header-company-name",

          ]
        },
        "note": "Redirects to this page and listed elements are things you see in the right uppermost corner after successfully logging in - your first and last name, your company name"
      },
      {
        "type": "triggerInitialContact",
        "identifierType": "elementClickedOn&delay",
        "identifier": {
          "elementSelectors": [
            "#survey-signup-modal-on-invite > div > div > div > div > div > div.survey-manager > div > div.lp-survey-step > div > div.form-group.padding-top-20px > div > div:nth-child(1)",
            "#survey-signup-modal-on-invite > div > div > div > div > div > div.survey-manager > div > div.lp-survey-step > div > div.form-group.padding-top-20px > div > div:nth-child(2)"
          ],
          "delay": 0.5
        },
        "note": "Create account button - need to reload the whole thing to check for signupSucces element"
      },
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
            "#user_email"
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
            "#user_password"
          ],
          "value": "[account:password]"
        },
        "note": "Type in password"
      },
      {
        "type": "delay",
        "content": {
          "duration": 0.1
        },
        "note": "Wait for 0.1 seconds"  
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "#btn-login"
          ]
        },
        "note": "Click on Sign in"
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
              "#user_email" // should be the same as in loginConfig
            ]
          },
          "note": "Email input field for login"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "#user_password" // should be the same as in loginConfig
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
              "#btn-login" // should be the same as in loginConfig
            ]
          },
          "note": "Submit button for Sign in"
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
              "input[name='company_lead.email']" // should be the same as in signupConfig
            ]
          },
          "note": "Email input field for sign up"
        },
        {
          "type": "value",
          "content": {
            "dataField": "password",
            "elementSelectors": [
              "input[name='user.password']" // should be the same as in signupConfig
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
              "button[type='submit']" // should be the same as in signupConfig
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

