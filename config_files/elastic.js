module.exports = {
	"serviceName": "elastic",
	"officialName": "Elastic",
	"accountData": [
		"_emailAddress",
		"password"
	],
	"passwordRequirement": {
		"minLength": 8, 
		"maxLength": -1,
		"mustInclude": [ 
			"upperCase||lowerCase", "number", "specialChar"
		]
	},
/*********************************************************************************************************/
	"entrypointConfig": {
		"rootDomain": "elastic.co", 
		"subDomain": "ALL.elastic.co", 
		"entrypoints": [ 
			{
				"type": "login",
				"identifierType": "elementClickedOn",
				"identifier": {
					"elementSelectors": [
						"#navbarSupportedContent > ul > li:nth-child(2) > a",
						"#app-root > div.cloud-landing-page > div.cloud-landing-page-logo > div > div > a",
						"#app-root > div.cloud-landing-page > div.cloud-landing-page-content > div > div.euiTextAlign.euiTextAlign--center > a"
						]
				},
				"note": "Clicked sign in button"
			},
			{
				"type": "login",
				"identifierType": "urlIncludes",
				"identifier": {
					"includedString": "cloud.elastic.co/login"
				},
				"note": "Refreshed upon login page"
			},
			{
        "type": "signup",
        "identifierType": "elementClickedOn",
        "identifier": {
          "elementSelectors": [
						"#__next > main > div > div.jsx-3264430824.jsx-2384899019.homepage-header > div.jsx-2762008650.main-header > div > div:nth-child(6) > a",
						"#navbarSupportedContent > ul > li:nth-child(3) > a",
						"#app-root > div.cloud-landing-page > div.cloud-landing-page-logo > div > div > a"
					]
        },
        "note": "Clicked sign up button"
      },
      {
        "type": "signup",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "cloud.elastic.co/registration?"
        },
        "note": "Refreshed upon signup page"
      },
			{
				"type": "recovery",
				"identifierType": "elementClickedOn",
				"identifier": {
					"elementSelectors": [
						"#app-root > div.cloud-landing-page > div.cloud-landing-page-content > div > div:nth-child(3) > form > div.euiText.euiText--small.forgotPasswordLink > div > a"
						]
				},
				"note": "Clicked sign in button"
			},
			{
        "type": "recovery",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "cloud.elastic.co/forgot?"
        },
        "note": "Refreshed upon recovery page"
      },
			{
        "type": "loginSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
            "includedString": "cloud.elastic.co/home"
        },
        "note": "returned after login"
      },
      {
        "type": "signupSuccess",
        "identifierType": "urlIncludes",
        "identifier": {
          "includedString": "cloud.elastic.co/deployments/create"
        },
        "note": "Redirected after signup"
      }
		]
	},
/*********************************************************************************************************/
	"loginConfig": { 
		"navigation": [
			{
        "type": "delay",
        "content": {
          "duration": 0.2
        },
        "note": "Wait for 0.2 seconds"  
      },
      {
        "type": "elementClearSendkeys",
        "content": {
          "fetch": true,
          "elementSelectors": [
            "input[data-test-id='login-username']",
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
            "input[type='password']",
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
            "button[type='submit']"
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
							"input[data-test-id='login-username']"
						]
					},
					"note": "Read in email address"
				},
				{
					"type": "value",
					"content": {
						"dataField": "password",
						"elementSelectors": [
							"input[type='password']"
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
							"input[name='newPassword']"
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
					"note": "Clicked on signup button"
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