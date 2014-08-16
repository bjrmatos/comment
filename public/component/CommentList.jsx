/**
 * @jsx React.DOM
 */
var CommentList = React.createClass({
  render: function () {
    var form
      , el
      , className = 'CommentList'
      , title = ''
      , style = {}
      , activeCommentId = this.props.activeCommentId
      , comments = this.props.comments
      , replyTo = this.props.replyTo
      , likeCallback = this.props.likeCallback
      , listRepliesCallback = this.props.listRepliesCallback
      , toggleCommentCallback = this.props.toggleCommentCallback;
      
    if (this.props.user.logged_in === true) {
      form = (
        <Comment
          key="form"
          replyTo={replyTo}
          avatar={this.props.user.image}
          submitCallback={this.props.submitCallback}
          toggleCommentCallback={toggleCommentCallback}
          editable="true">
          Write a comment here
        </Comment>
      );
    } else {
      form = (
        <div className="CommentList-login">
          <a className="CommentList-login-link" href="/login/">Login</a> to comment on this thread
        </div>
      );
    }

    if (replyTo != 0) {
      style = {
        marginTop: this.props.offsetTop + 'px'
      };
      title = 'Latest replies';
    } else {
      title = 'Latest comments';
    }

    if (!comments.length) {
      title = 'No comments, maybe you could post one?';
    }

    if (this.props.isSelected) {
      className += ' is-selected';
    }

    return (
      <div className={className} data-reply-to={this.props.replyTo} style={style}>
        {form}
        <h3 className="CommentList-title">{title}</h3>
        <ul className="CommentList-element">
          {comments.map(function (comment) {
            var isActive = false;
            if (comment.id === activeCommentId) {
              isActive = true;
            }

            return (
              <li className="CommentList-element-item">
                <Comment
                  key={comment.id}
                  active={isActive}
                  replyTo={replyTo}
                  liked={comment.liked}
                  likes={comment.likes}
                  replies={comment.replies}
                  avatar={comment.user.image}
                  timestamp={comment.timestamp}
                  listRepliesCallback={listRepliesCallback}
                  toggleCommentCallback={toggleCommentCallback}
                  likeCallback={likeCallback}
                  editable="false">
                  {comment.body}
                </Comment>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
});
