/**
 * Static controller
 */
var config = require('../../config');

var Static = {
  /**
   * Root action
   */
  index: function (req, res, route) {
    res.end(res.render('static/index.html.swig', {socket: config.socket}));
  }
}

module.exports = Static;
