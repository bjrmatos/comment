var app = require('connect')()
  , server = require('http').createServer(app)
  , router = new (require('routes'))()
  , socket = require('./lib/socket')(server)
  , http = require('./lib/http')(server, app, router);

var to = function (controller, action) {
  return require('./app/controller/' + controller)[action];
};

// List of routes
router.addRoute('/', to('static', 'index'));
router.addRoute('/login/', to('security', 'login'));
router.addRoute('/authorize/', to('security', 'authorize'));
router.addRoute('/test/', to('test', 'hello'));
