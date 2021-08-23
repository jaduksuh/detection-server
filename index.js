const cron = require('node-cron');
const loginChecker = require('./loginCHecker');
const signupChecker = require('./signupChecker');

cron.schedule('* * * *', () => {
  loginChecker.loginCheck();
	signupChecker.signupCheck();
})