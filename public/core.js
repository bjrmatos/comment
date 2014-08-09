(function () {
  var socket = io('http://teapot.io');
  var thread_id = 5;
  var commentLists = [];

  socket.emit('comment/list', {thread_id: thread_id});

  socket.on('user', function (user) {
    var comments = [];

    var submitCallback = function (replyTo, body) {
      socket.emit('comment/post', {body: body, thread_id: thread_id, replyTo: replyTo});
    };

    var likeCallback = function (id) {
      socket.emit('comment/like', {comment_id: id});
    };

    /**
     * @param  integer  commentId
     * @param  integer  commentReplyId  The replyId of commentId
     */
    var getRepliesCallback = function (commentId, commentReplyId) {
      var del = false;
      // Delete all list after the list matching commentReplyId
      for (var id in commentLists) {
        if (del === true) {
          commentLists.splice(id);
        }

        // If the id matches the commentReplyId then all loops going
        // forward will delete the lists
        if (id === commentReplyId) {
          del = true;
        }
      }

      socket.emit('comment/list', {commentId: commentId});
    };

    var renderList = function (list) {
      commentBox = React.renderComponent(CommentBox({
          user: user,
          getRepliesCallback: getRepliesCallback,
          likeCallback: likeCallback,
          submitCallback: submitCallback,
          initialCommentLists: list
        }),
        document.getElementById('CommentListContainer')
      );
    };

    socket.on('comment/list', function (data) {
      commentLists[data.commentId] = data.comments;
      renderList(commentLists);
    });

    socket.on('comment/replies', function (data) {
      commentLists[data.commentId] = data.comments;
      commentBox.setState({commentLists: commentLists});
    });

    socket.on('comment/post/confirmation', function (data) {
      commentLists[data.replyTo].unshift(data.comment);
      commentBox.setState({commentLists: commentLists});
    });
  });

  window.socket;
})();
