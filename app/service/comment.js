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

    var user_id = socket.request.user.id;

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
      store.list.prepend('comment_list_' + data.thread_id, int, function (err, id) {});

      // Send confirmation message
      store.get('user', comment.user_id, function (err, user) {
        comment.user = user;
        socket.emit('comment/post/confirmation', comment);
        socket.broadcast.emit('comment/post/confirmation', comment);
      });
    });
  },
  list: function (socket, data) {
    var user_id = socket.request.user.id;

    // Get a list of comment IDs
    store.list.range('comment_list_' + data.thread_id, 0, 20, function (err, data) {
      if (!data.length) {
        socket.emit('comment/list', []);
        return;
      }

      // Get the comment objects
      store.get('comment', data, function (err, comments) {
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

          socket.emit('comment/list', comments);
        });
      });
    });
  }
}

module.exports = Comment;
