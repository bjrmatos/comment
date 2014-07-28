/**
 * Test service
 */
var Test = {
  /**
   * Emits a basic hello message back
   */
  hello: function (socket, args) {
    // Says hello back
    console.log(args);
    socket.emit('test/hello', {'name': args.name});
  }
}

module.exports = Test;
