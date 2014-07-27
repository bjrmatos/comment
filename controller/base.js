/**
 * Base controller for all other controllers
 */
var swig = require('swig');

var Base = function () {
  /**
   * The directory that holds all templates
   *
   * @var string
   */
  this.directory = './template/';

  /**
   * Return a rendered template
   *
   * @param  string  template
   * @param  object  params
   *
   * @return string
   */
  this.render = function (template, params) {
    return swig.renderFile(this.directory + template, params);
  };
};

module.exports = Base;
