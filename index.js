const cron = require('node-cron');
const loginChecker = require('./loginChecker');
const signupChecker = require('./signupChecker');

cron.schedule('0,30 * * * *', () => {
  loginChecker.loginCheck();
	signupChecker.signupCheck();
})