var expect = require("chai").expect
  , comment = require("../app/service/comment");

/*
 * Mocks
 */
var socket = {
  request: {
    user: {
      logged_in: true,
      id: 1
    }
  }
};

describe("app/service/comment", function () {
  describe('#post()', function () {
    it('if user is logged out then socket should emit an error', function (done) {
      socket.request.user.logged_in = false;
      socket.emit = function (key, data) {
        expect(key).to.equal('comment/post/error');
        done();
      };

      comment.post(socket, {
        thread_id: 1,
        replyTo: 0
      });
    });
  });
  describe('#like()', function () {
    it('if user is logged out then socket should emit an error', function (done) {
      socket.request.user.logged_in = false;
      socket.emit = function (key, data) {
        expect(key).to.equal('comment/like/error');
        done();
      };
      comment.like(socket, {comment_id: 1});
    });

    it('if comment doesn\'t exist then socket should emit an error', function (done) {
      socket.request.user.logged_in = true;
      socket.emit = function (key, data) {
        expect(key).to.equal('comment/like/error');
        done();
      };
      comment.like(socket, {comment_id: 100000000});
    });
  });
});
