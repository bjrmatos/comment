/**
 * Security controller
 */
var Security = new (require('./base.js'))();

/**
 * Render a login page
 */
Security.login = function (req, res, route) {
  res.end(Security.render('security/login.html.swig', {}));
};

/**
 * Render a signup page
 */
Security.signup = function (req, res, route) {
  res.end(Security.render('security/signup.html.swig', {}));
};

module.exports = Security;
