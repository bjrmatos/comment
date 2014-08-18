"use strict";

(function () {
  var CommentClient = function (options) {

    var injectIframe = function () {
      var iframe = document.createElement('iframe');
      // document.body.append
    };

    // Element that wraps the total of comments
    if (options.elementCount) {

    }

    if (options.elementButton && options.elementButton.addEventListener) {
      options.elementButton.addEventListener('click', function (event) {
        injectIframe();
      }, false);
    }
  };

  window.CommentClient = CommentClient;
});
