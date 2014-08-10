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
    }

    if (replyTo != 0) {
      el = document.getElementById('Comment-' + replyTo);
      style = {
        marginTop: el.offsetTop + 'px'
      };
      title = 'Latest replies';
    } else {
      title = 'Latest comments';
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
