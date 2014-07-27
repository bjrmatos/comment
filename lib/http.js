var url = require('url')
  , config = require('../config');

/**
 * Everything related to the http business logic (serving web pages)
 */
var http = function (server, app, router) {
  // Add compression
  app.use(require('compression')());

  // Parse urlencoded request bodies into req.body
  app.use(require('body-parser').urlencoded({extended: true}));

  // Request callback
  app.use(function (req, res) {
    var path = url.parse(req.url).pathname;
    var match = router.match(path);

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
