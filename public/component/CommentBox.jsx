/**
 * @jsx React.DOM
 */
var CommentBox = React.createClass({
  getInitialState: function () {
    return {
      commentLists: this.props.initialCommentLists
    };
  },
  listReplies: function (event, element) {
    var commentId = element.parentNode.getAttribute('data-comment-id')
      , commentReplyId = element.parentNode.getAttribute('data-reply-to');

    this.props.getRepliesCallback(commentId, commentReplyId);
  },
  toggleComment: function (event, element) {
    var commentId = element.getAttribute('data-comment-id')
      , commentReplyId = element.getAttribute('data-reply-to');

    this.props.getRepliesCallback(commentId, commentReplyId);
  },
  render: function () {
    var user = this.props.user
      , trail = []
      , incr = 0
      , commentLists = this.state.commentLists
      , listRepliesCallback = this.listReplies
      , toggleCommentCallback = this.toggleComment
      , submitCallback = this.props.submitCallback
      , likeCallback = this.props.likeCallback;

    commentLists.map(function (list, index) {
      trail.push(index);
    });

    return (
      <div className="CommentBox">
        {commentLists.map(function (list, index) {
          var isSelected = false
            , activeCommentId = false;

          if (commentLists.length - 1 > index) {
            isSelected = true;
          }

          if (trail[incr + 1] !== undefined) {
            activeCommentId = trail[incr + 1];
          }

          incr++;

          return (
            <CommentList
              replyTo={index}
              isSelected={isSelected}
              activeCommentId={activeCommentId}
              user={user}
              comments={list}
              listRepliesCallback={listRepliesCallback}
              toggleCommentCallback={toggleCommentCallback}
              submitCallback={submitCallback}
              likeCallback={likeCallback} />
          );
        })}
      </div>
    );
  }
});
