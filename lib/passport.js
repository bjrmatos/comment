/**
 * Register Passport strategies here
 */
var passport = require('passport');

// Twitter stategy
passport.use(require('./passport/twitter.js'));

module.exports = passport;
