/**
 * Simple controller wrapper
 *
 * How to use:
 *
 * var controller = require('./lib/controller')
 * controller.to('controller filename', 'controller action')
 */

module.exports = {
  /**
   * Return a controller based on the name
   * Controller file is located in the controller folder
   *
   * @param  string  controller
   * @param  string  action
   *
   * @return function
   */
  to: function (controller, action) {
    return require('../controller/' + controller)[action];
  }
}
