var socketHandler = require('socket.io-events')()
  , service = require('./service');

/**
 * Everything related to the socket business logic
 */
var socket = function (server) {
  var io = require('socket.io')(server);

  // On any socket event we route to the right service
  socketHandler.on(function (socket, args, next) {
    service.to(args[0])(socket, args[1]);
  });

  // Register the socket
  io.use(socketHandler);

  // On connection, do nothing
  io.on('connection', function (socket) {});

  console.log('Ready to serve socket events!');
}

module.exports = socket;
