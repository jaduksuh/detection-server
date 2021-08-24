const express = require('express');
const cron = require('node-cron');
const loginChecker = require('./loginChecker');
const signupChecker = require('./signupChecker');

cron.schedule('0,5,10,15,20,25,30,35,40,45,50,55 * * * *', () => {
  loginChecker.loginCheck();
	signupChecker.signupCheck();
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
