/**
 * Test controller
 */
var Test = {
  /**
   * Render a basic HTML page
   */
  hello: function (req, res, route) {
    res.end(res.render('test.html.swig', {}));
  }
}

module.exports = Test;
