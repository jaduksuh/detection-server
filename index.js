const express = require('express');
const cron = require('node-cron');
const loginChecker = require('./loginChecker');
const signupChecker = require('./signupChecker');

cron.schedule('0,30 * * * *', () => {
  loginChecker.loginCheck();
	signupChecker.signupCheck();
});

const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
