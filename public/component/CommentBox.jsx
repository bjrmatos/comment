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
      , offsetTop = 0
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
            , activeCommentId = false
            , marginBottom
            , el;

          if (index != 0) {
            el = document.getElementById('Comment-' + index);
            offsetTop += el.offsetTop;
            // offsetTop += el.offsetTop + el.offsetHeight + 4;
          }

          if (commentLists.length - 1 > index) {
            isSelected = true;
          }

          if (trail[incr + 1] !== undefined) {
            activeCommentId = trail[incr + 1];
          }

          incr++;

          return (
            <CommentList
              key={index}
              replyTo={index}
              isSelected={isSelected}
              activeCommentId={activeCommentId}
              user={user}
              comments={list}
              offsetTop={offsetTop}
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
