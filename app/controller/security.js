/**
 * Security controller
 */
var passport = require('../../lib/passport');

var Security = {
  /**
   * We only accept Twitter login for now
   */
  login: function (req, res, route) {
    var next = function (err, data) {
      console.log(err);
    };
    passport.authenticate('twitter')(req, res, next);
  },

  /**
   * Twitter redirects back to our system
   */
  authorize: function (req, res, route) {
    res.redirect = function(url){
      res.writeHead(302, {'location': url});
      res.end();
    }

    var next = function (err, data) {
      res.redirect('/login/');
    };

    passport.authenticate('twitter', {failureRedirect: '/login/', successRedirect: '/'})(req, res, next);
  }
}

module.exports = Security;
