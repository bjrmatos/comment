/**
 * @jsx React.DOM
 */
var CommentList = React.createClass({
  render: function () {
    var form
      , likeCallback = this.props.likeCallback;

    if (this.props.user.logged_in === true) {
      form = <Comment key="form" avatar={this.props.user.image} submitCallback={this.props.submitCallback} editable="true">Write a comment here</Comment>
    }

    return (
      <div className="CommentList">
        {form}
        <h3 className="CommentList-title">Latest comments</h3>
        {this.props.comments.map(function (comment) {
          return <Comment key={comment.id} liked={comment.liked} avatar={comment.user.image} timestamp={comment.timestamp} likeCallback={likeCallback} editable="false">{comment.body}</Comment>
        })}
      </div>
    );
  }
});
