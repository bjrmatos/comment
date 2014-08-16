var socketHandler = require('socket.io-events')()
  , cookieParser = require('cookie-parser')
  , store = require('./store')
  , config = require('../config')
  , passportSocketIo = require("passport.socketio");

/**
 * Everything related to the socket business logic
 */
var socket = function (server) {
  var io = require('socket.io')(server);

  // Load user in session
  io.use(passportSocketIo.authorize({
    cookieParser: cookieParser,
    key:          config.session.name,    // the name of the cookie where express/connect stores its session_id
    secret:       config.session.secret,  // the session_secret to parse the cookie
    store:        store.session,          // we NEED to use a sessionstore. no memorystore please
    fail:         function (data, message, error, accept) {
      if (error) {
        accept(new Error(message));
      } else {
        accept(null, true);
      }
    }
  }));

  // On any socket event we route to the right service
  socketHandler.on(function (socket, args, next) {
    var parts = args[0].split('/');
    return require('../app/service/' + parts[0])[parts[1]](socket, args[1]);
  });

  // Register the socket
  io.use(socketHandler);

  // On connection, do nothing
  io.on('connection', function (socket) {
    socket.emit('user', socket.request.user);
  });

  console.log('Ready to serve socket events!');
}

module.exports = socket;
