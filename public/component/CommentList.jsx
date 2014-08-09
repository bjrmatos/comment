/**
 * @jsx React.DOM
 */
var CommentList = React.createClass({
  render: function () {
    var form
      , replyTo = this.props.replyTo
      , likeCallback = this.props.likeCallback
      , listRepliesCallback = this.props.listRepliesCallback;

    if (this.props.user.logged_in === true) {
      form = (
        <Comment
          key="form"
          replyTo={replyTo}
          avatar={this.props.user.image}
          submitCallback={this.props.submitCallback}
          editable="true">
          Write a comment here
        </Comment>
      );
    }

    return (
      <div className="CommentList" data-reply-to={this.props.replyTo}>
        {form}
        <h3 className="CommentList-title">Latest comments</h3>
        <ul className="CommentList-element">
          {this.props.comments.map(function (comment) {
            return (
              <li className="CommentList-element-item">
                <Comment
                  key={comment.id}
                  replyTo={replyTo}
                  liked={comment.liked}
                  avatar={comment.user.image}
                  timestamp={comment.timestamp}
                  listRepliesCallback={listRepliesCallback}
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
