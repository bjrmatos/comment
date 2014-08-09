(function () {
  var socket = io('http://teapot.io');
  var thread_id = 5;
  var commentList;

  socket.emit('comment/list', {thread_id: thread_id});

  socket.on('user', function (user) {
    var comments = [];

    var submitCallback = function (body) {
      socket.emit('comment/post', {body: body, thread_id: thread_id});
    };

    var likeCallback = function (id) {
      socket.emit('comment/like', {comment_id: id});
    };

    var renderList = function (list) {
      commentBox = React.renderComponent(CommentBox({
          user: user,
          likeCallback: likeCallback,
          submitCallback: submitCallback,
          initialComments: list
        }),
        document.getElementById('CommentListContainer')
      );
    };

    socket.on('comment/list', function (list) {
      comments = list;
      renderList(comments);
    });

    socket.on('comment/post/confirmation', function (comment) {
      comments.unshift(comment);
      commentBox.setState({comments: comments});
    });
  });

  window.socket;
})();
