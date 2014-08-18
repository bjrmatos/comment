/**
 * Static controller
 */
var config = require('../../config');

var Example = {
  /**
   * Root action
   */
  index: function (req, res, route) {
    res.end(res.render('example/index.html.swig'));
  }
}

module.exports = Example;
