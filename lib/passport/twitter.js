/**
 * Passport strategy for Twitter
 */
var TwitterStrategy = require('passport-twitter').Strategy
  , config = require('../../config')
  , store = require('../store')
  , User = require('../../app/model/user');

module.exports = new TwitterStrategy(
  {
    consumerKey: config.oauth.twitter.consumerKey,
    consumerSecret: config.oauth.twitter.consumerSecret,
    callbackURL: config.oauth.twitter.callbackURL
  },
  function(token, tokenSecret, profile, done) {
    var user;

    store.get('user', profile.id, function (err, data) {
      if (!data) {
        user = new User({id: profile.id, image: profile._json.profile_image_url});
        store.set('user', user.id, user);
      } else {
        user = new User(data);
      }

      return done(null, user);
    });
  }
);
