"use strict";

(function () {
  var CommentClient = function (options) {

    var injectIframe = function () {
      var iframe = document.createElement('iframe');
      iframe.src = 'http://teapot.io:11111/grep/';
      iframe.className = 'CommentFrame';
      document.body.appendChild(iframe);
      iframe.contentWindow.closeEvent = function () {
        document.body.removeChild(iframe);
      };
    };

    // Element that wraps the total of comments
    if (options.elementCount) {

    }

    if (options.elementButton && options.elementButton.addEventListener) {
      options.elementButton.addEventListener('click', function (event) {
        event.preventDefault();
        injectIframe();
      }, false);
    }
  };

  window.CommentClient = CommentClient;
})();
