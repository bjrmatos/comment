/**
 * @jsx React.DOM
 */
var CommentBox = React.createClass({
  getInitialState: function () {
    return {
      comments: this.props.initialComments
    };
  },
  render: function () {
    return (
      <div className="CommentBox">
        <CommentList user={this.props.user} comments={this.state.comments} submitCallback={this.props.submitCallback} likeCallback={this.props.likeCallback} />
      </div>
    );
  }
});
