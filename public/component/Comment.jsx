/**
 * @jsx React.DOM
 */
var Comment = React.createClass({
  getInitialState: function () {
    return {
      editable: this.props.editable,
      liked: this.props.liked
    }
  },
  submit: function (event) {
    var body = this.refs.body.getDOMNode().innerHTML.trim();

    this.props.submitCallback(this.getDOMNode().getAttribute('data-reply-to'), body);
  },
  like: function (event) {
    event.preventDefault();

    if (this.getDOMNode().className.indexOf('is-liked') != -1) {
      this.getDOMNode().className = this.getDOMNode().className.replace(' is-liked', '');
    } else {
      this.getDOMNode().className += ' is-liked';
    }

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
    var footer
      , classString = "Comment"
      , replyTo = this.props.replyTo
      , id = "";

    if (this.state.editable === "true") {
      footer = <div className="Comment-footer"><button className="Comment-submit" onClick={this.submit} type="button">Post</button></div>;
      classString += " is-editable";
    } else {
      id = "Comment-" + this.props.key;
      footer = <div className="Comment-footer"><a className="Comment-footer-flag" href="#">Flag</a> ● <div className="Comment-footer-date">{moment(this.props.timestamp).calendar()}</div></div>
    }

    if (this.state.liked) {
      classString += " is-liked";
    }

    if (this.props.active) {
      classString += " is-active";
    }

    return (
      <div id={id} className={classString} key={this.props.key} onClick={this.toggleComment} data-comment-id={this.props.key} data-reply-to={replyTo}>
        <img src={this.props.avatar} className="Comment-avatar" />
        <a className="Comment-like" onClick={this.like} href="#">
          <i className="fa fa-heart"></i>
        </a>
        <a className="Comment-replies" onClick={this.listReplies} href="#">
          <i className="fa fa-comment"></i>
        </a>
        <div className="Comment-body" ref="body" contentEditable={this.state.editable} dangerouslySetInnerHTML={{__html: marked(this.props.children.toString())}}>
        </div>
        {footer}
      </div>
    );
  }
});
