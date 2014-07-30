/**
 * Static controller
 */
var Static = {
  /**
   * Root action
   */
  index: function (req, res, route) {
    res.end(res.render('static/index.html.swig', {}));
  }
}

module.exports = Static;
