/**
 * @jsx React.DOM
 */
var Comment = React.createClass({
  getInitialState: function () {
    return {
      editable: this.props.editable,
      liked: this.props.liked,
      likes: this.props.likes
    }
  },
  submit: function (event) {
    var body = this.refs.body.getDOMNode().innerHTML.trim();

    this.props.submitCallback(this.getDOMNode().getAttribute('data-reply-to'), body);
  },
  like: function (event) {
    event.preventDefault();
    event.stopPropagation();

    var likes = this.state.likes;

    if (this.state.liked) {
      likes--;
    } else {
      likes++;
    }

    this.setState({
      liked: !this.state.liked,
      likes: likes
    });
    this.props.likeCallback(this.props.key);
  },
  listReplies: function (event) {
    event.preventDefault();

    if (this.props.listRepliesCallback) {
      this.props.listRepliesCallback(event, event.currentTarget);
    }
  },
  toggleComment: function (event) {
    this.props.toggleCommentCallback(event, event.currentTarget);
  },
  render: function() {
    var markupFooter = ''
      , classString = "Comment"
      , replyTo = this.props.replyTo
      , id = ""
      , markupStatsLikes = ''
      , markupStatsReplies = '';

    if (this.state.editable === "true") {
      markupFooter = <div className="Comment-footer"><button className="Comment-submit" onClick={this.submit} type="button">Post</button></div>;
      classString += " is-editable";
    } else {
      id = "Comment-" + this.props.key;
      markupFooter = <div className="Comment-footer"><a className="Comment-footer-flag" href="#">Flag</a> ● <div className="Comment-footer-date">{moment(this.props.timestamp).calendar()}</div></div>
    }

    // If the comment was liked one time or more
    if (this.state.likes) {
      markupStatsLikes = <div className="Comment-likeTotal">{this.state.likes}</div>;
    }

    // If the comment has one or more replies
    if (this.props.replies) {
      markupStatsReplies = <div className="Comment-repliesTotal">{this.props.replies}</div>
    }

    if (this.state.liked) {
      classString += " is-liked";
    }

    if (this.props.active) {
      classString += " is-active";
    }

    return (
      <div id={id} className={classString} key={this.props.key} onClick={this.toggleComment} data-comment-id={this.props.key} data-reply-to={replyTo}>
        <a className="Comment-avatar">
          <img src={this.props.avatar} />
        </a>
        <a className="Comment-like" onClick={this.like} href="#">
          <i className="fa fa-heart"></i>
        </a>
        <a className="Comment-replies" onClick={this.listReplies} href="#">
          <i className="fa fa-comment"></i>
        </a>
        {markupStatsLikes}
        {markupStatsReplies}
        <div className="Comment-body" ref="body" contentEditable={this.state.editable} dangerouslySetInnerHTML={{__html: marked(this.props.children.toString())}}>
        </div>
        {markupFooter}
      </div>
    );
  }
});
