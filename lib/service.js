/**
 * A service is commonly used by web sockets in order to communicate the
 * data to the frontend. Think of it as an API but solely for socket.
 */
module.exports = {
  /**
   * Returns a function to be run when emitting or listening a socket event
   *
   * @param  string  servicePath  (ie: comment/show)
   * @return function
   */
  to: function (servicePath) {
    var parts = servicePath.split('/');
    return require('../service/' + parts[0])[parts[1]];
  }
}
