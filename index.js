var app = require('connect')()
  , server = require('http').createServer(app)
  , router = new (require('routes'))()
  , controller = require('./lib/controller')
  , socket = require('./lib/socket')(server)
  , http = require('./lib/http')(server, app, router);

// List of routes
router.addRoute('/login/', controller.to('security', 'login'));
router.addRoute('/signup/', controller.to('security', 'signup'));
router.addRoute('/test/', controller.to('test', 'hello'));
