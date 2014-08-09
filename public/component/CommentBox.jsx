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
  render: function () {
    var user = this.props.user
      , listRepliesCallback = this.listReplies
      , submitCallback = this.props.submitCallback
      , likeCallback = this.props.likeCallback;

    return (
      <div className="CommentBox">
        {this.state.commentLists.map(function (list, index) {
          return (
            <CommentList
              replyTo={index}
              user={user}
              comments={list}
              listRepliesCallback={listRepliesCallback}
              submitCallback={submitCallback}
              likeCallback={likeCallback} />
          );
        })}
      </div>
    );
  }
});
