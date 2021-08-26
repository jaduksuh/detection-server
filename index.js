/*
* Program Author: Jaduk Suh, 서재덕
* Program name: Plusidentity detection-server
* File name: index.js
* 
* All contents of the program are owned by Plusidentity
*/



const express = require('express');
const cron = require('node-cron');
const loginChecker = require('./loginChecker');
const signupChecker = require('./signupChecker');
let checkType = 0;


cron.schedule('0 * * * *', () => {
  if(checkType % 2 === 0) {
		loginChecker.loginCheck();
		checkType++;
	} else {
		signupChecker.signupCheck();
		checkType--;	
	}
});

const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
