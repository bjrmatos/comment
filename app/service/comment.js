/**
 * Comment service
 */
var store = require('../../lib/store')
  , sanitizeHtml = require('sanitize-html');

var Comment = {
  like: function (socket, data) {
    if (!socket.request.user) {
      socket.emit('comment/like/error', {message: 'You are not logged-in.'});
      return {};
    }

    var user_id = socket.request.user.id;

    store.get('comment', data.comment_id, function (err, comment) {
      if (comment.like_user_ids.indexOf(user_id) == -1) {
        comment.like_user_ids.push(user_id);
        comment.likes++;
      } else {
        comment.like_user_ids.splice(comment.like_user_ids.indexOf(user_id), 1);
        comment.likes++;
      }

      store.set('comment', comment.id, comment);
    });
  },
  post: function (socket, data) {
    if (!socket.request.user) {
      socket.emit('comment/post/error', {message: 'You are not logged-in.'});
      return {};
    }

    var user_id = socket.request.user.id
      , key = ''
      , replyTo = data.replyTo;

    if (replyTo == 0) {
      key = 'comment_list_' + data.thread_id;
    } else {
      key = 'comment_list_replies_' + replyTo;
    }

    store.incr('comment', 'incr', 1, function (err, int) {
      var comment = {
        id: int,
        body: data.body,
        like_user_ids: [],
        likes: 0,
        timestamp: new Date().getTime(),
        user_id: user_id,
      };

      // Save the comment
      store.set('comment', int, comment);

      // Add comment to the list
      store.list.prepend(key, int, function (err, id) {});

      // Send confirmation message
      store.get('user', comment.user_id, function (err, user) {
        var data;
        comment.user = user;

        data = {
          comment: comment,
          replyTo: replyTo
        };

        socket.emit('comment/post/confirmation', data);
        socket.broadcast.emit('comment/post/confirmation', data);
      });
    });
  },
  list: function (socket, data) {
    var key = ''
      , callbackEvent = ''
      , commentId = 0
      , user_id = socket.request.user.id;

    if (data.thread_id) {
      key = 'comment_list_' + data.thread_id;
      callbackEvent = 'comment/list';
    } else if (data.commentId) {
      key = 'comment_list_replies_' + data.commentId;
      callbackEvent = 'comment/replies';
      commentId = data.commentId;
    }
console.log('List:');
console.log(key);
    // Get a list of comment IDs
    store.list.range(key, 0, 20, function (err, commentIds) {
      if (!commentIds.length) {
        socket.emit(callbackEvent, {
          commentId: commentId,
          comments: []
        });
        return;
      }

      // Get the comment objects
      store.get('comment', commentIds, function (err, comments) {
        var ids = [];

        // Create a map of user ids
        for (var i = 0; i < comments.length; i++) {
          ids.push(comments[i].user_id);
        }

        // Get the related users
        store.get('user', ids, function (err, users) {
          var map = {};

          // Create a map
          for (var i = 0; i < users.length; i++) {
            map[users[i].id] = users[i];
          }

          for (var i = 0; i < comments.length; i++) {
            // Inject user object
            comments[i].user = map[comments[i].user_id];
            // Filter body
            comments[i].body = sanitizeHtml(comments[i].body, {
              allowedTags: ['p']
            });

            comments[i].liked = false;
            if (user_id && comments[i].like_user_ids.indexOf(user_id) != -1) {
              comments[i].liked = true;
            }
          }

          socket.emit(callbackEvent, {
            commentId: commentId,
            comments: comments
          });
        });
      });
    });
  }
}

module.exports = Comment;
