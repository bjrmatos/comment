/**
 * Static controller
 */
var config = require('../../config');

var Grep = {
  /**
   * Root action
   */
  index: function (req, res, route) {
    res.end(res.render('grep/index.html.swig', {socket: config.socket}));
  }
}

module.exports = Grep;
