module.exports = {
  "serviceName": "keybase",
  "officialName": "Keybase",
  "accountData": [
    "_emailAddress",
    "_username",
    "password"
  ],
  "passwordRequirement": {
    "minLength": 8, 
    "maxLength": -1,
    "mustInclude": []
  },
/*********************************************************************************************************/
  "entrypointConfig": {
    "rootDomain": "keybase.io", 
    "subDomain": "NONE.keybase.io", 
    "entrypoints": [ 
      {
        "type": "login",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
						"#navbar-top > div > div > div > div.col-xs-12.col-sm-6 > table > tbody > tr > td:nth-child(2) > a"
					]
        },
        "note": "Clicked login button"
      },
			{
        "type": "login",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
            "includedString": "keybase.io",
            "elementSelectors": [
              "#btn-login",
              "#btn-signup"
            ]
        },
        "note": "Login window is present"
      },
			{
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
						"#btn-signup"
					]
        },
        "note": "Clicked sign in button"
      },
			{
        "type": "signup",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
            "includedString": "keybase.io",
            "elementSelectors": [
              "#input-signup-email",
							"#input-signup-pw-2"
            ]
        },
        "note": "Signup window is present"
      },
			{
        "type": "recovery",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
						"#modal-dialog-session-form > div.modal-body > div:nth-child(2) > span > a",
						"#modal-dialog-session-form > div.modal-body > div:nth-child(3) > span > a"
					]
        },
        "note": "Clicked sign in button"
      },
			{
        "type": "recovery",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
            "includedString": "keybase.io",
            "elementSelectors": [
              "#input-recover-email-address"
            ]
        },
        "note": "Recovery window is present"
      },
			{
        "type": "recovery",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
            "includedString": "keybase.io",
            "elementSelectors": [
              "#input-recover-password-username"
            ]
        },
        "note": "Recovery window is present"
      },
			{
        "type": "loginSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
            "includedString": "keybase.io/",
            "elementSelectors": [
              "#navbar-top > div > div > div > div.col-xs-12.col-sm-6 > table > tbody > tr > td.nav-btn.active > div"
            ]
        },
        "note": "redirected to main page after login"
      },
			{
        "type": "signupSuccess",
        "identifierType": "urlIncludes&elementPresent",
        "identifier": {
            "includedString": "keybase.io/",
            "elementSelectors": [
              "#navbar-top > div > div > div > div.col-xs-12.col-sm-6 > table > tbody > tr > td.nav-btn.active > div"
            ]
        },
        "note": "redirected to main page after signup"
      },
      {
				"type": "triggerInitialContact",
				"identifierType": "elementClickedOn&delay",
				"identifier": {
					"elementSelectors": [
						"#navbar-top > div > div > div > div.col-xs-12.col-sm-6 > table > tbody > tr > td:nth-child(2) > a"
					],
					"delay": 0.3
				},
				"note": ""
			},
			{
				"type": "triggerInitialContact",
				"identifierType": "elementClickedOn&delay",
				"identifier": {
					"elementSelectors": [
						"#btn-signup"
					],
					"delay": 0.3
				},
				"note": ""
			},
			{
				"type": "triggerInitialContact",
				"identifierType": "elementClickedOn&delay",
				"identifier": {
					"elementSelectors": [
						"#modal-dialog-session-form > div.modal-body > div:nth-child(2) > span > a"
					],
					"delay": 0.3
				},
				"note": ""
			},
			{
				"type": "triggerInitialContact",
				"identifierType": "elementClickedOn&delay",
				"identifier": {
					"elementSelectors": [
						"#modal-dialog-session-form > div.modal-body > div:nth-child(3) > span > a"
					],
					"delay": 0.3
				},
				"note": ""
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
            "input[name='username']"
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
            "input[name='password']"
          ],
          "value": "[account:password]"
        },
        "note": "Type in password"
      },
      {
        "type": "delay",
        "content": {
          "duration": 0.05
        },
        "note": "Wait for 0.05 seconds"  
      },
      {
        "type": "elementClick",
        "content": {
          "elementSelectors": [
            "#btn-login"
          ]
        },
        "note": "Click on 'Log in' button"
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
              "input[name='username']"
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
          "note": "Clicked on log in button"
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
              "#input-signup-email"
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
              "#btn-join"
            ]
          },
          "note": "Clicke on signup button"
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