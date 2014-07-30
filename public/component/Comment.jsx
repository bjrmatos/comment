/**
 * @jsx React.DOM
 */
var Comment = React.createClass({
  getInitialState: function () {
    return {
      editable: false
    }
  },
  render: function() {
    var button
      , attr;
    if (this.state.editable) {
      button = <button class="Comment-submit">Submit</button>;
    }
    return (
      <div class="Comment">
        <img src={this.props.avatar} class="Comment-avatar" />
        <p class="Comment-body">{this.props.body}</p>
        {button}
      </div>
    );
  }
});
