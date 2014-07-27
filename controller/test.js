/**
 * Test controller
 */
var Test = new (require('./base.js'))();

/**
 * Render a basic HTML page
 */
Test.hello = function (req, res, route) {
  res.end(Test.render('test.html.swig', {}));
};

module.exports = Test;
