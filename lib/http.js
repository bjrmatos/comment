var url = require('url')
  , send = require('send')
  , swig = require('swig')
  , connect = require('connect')
  , passport = require('passport')
  , session = require('express-session')
  , RedisStore = require('connect-redis')(session)
  , store = require('./store')
  , config = require('../config')
  , User = require('../app/model/user');

/**
 * Everything related to the http business logic (serving web pages)
 *
 * Bootstrap everything
 */
var http = function (server, app, router) {
  // Add compression
  app.use(require('compression')());

  // Parse urlencoded request bodies into req.body
  app.use(require('body-parser').urlencoded({extended: true}));

  // Serialize/Unserialize the session
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(function(id, done) {
    store.get('user', id, function (err, data) {
      done(null, new User(data));
    })
  });

  // Set the session using Redis
  config.session.resave = true;
  config.session.saveUninitialized = true;
  config.session.store = new RedisStore({port: config.storage.port, host: config.storage.host});
  app.use(session(config.session));

  // Initialize Passport
  app.use(passport.initialize());
  app.use(passport.session());

  // Assets callback
  app.use(function (req, res, next) {
    // Deliver assets
    send(req, url.parse(req.url).pathname, {index: false, root: './public/'})
      .on('error', function (err) {
        next();
      })
      .pipe(res);
  });

  // Request callback
  app.use(function (req, res) {
    var match, params;
    params = url.parse(req.url, true);
    match = router.match(params.pathname);

    // Inject query strings into request object
    // for compatibility with Passport
    req.query = params.query;

    res.render = function (template, params) {
      return swig.renderFile('./app/view/' + template, params);
    };

    if (match) {
      match.fn(req, res, match);
    } else {
      res.statusCode = 404;
      res.end('Page could not be found');
    }
  });

  console.log('Ready to serve web pages!');

  server.listen(config.port);
}

module.exports = http;
