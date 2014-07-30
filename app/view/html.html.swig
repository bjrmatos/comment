<html>
  <head>
  </head>
  <body>
    <div id="Container">
      {% block Container %}{% endblock %}
    </div>
    <script src="/socket.io/socket.io.js"></script>
    <script src="/libraries/react/react.js"></script>
    <script src="/libraries/react/JSXTransformer.js"></script>
    <script src="/component/Comment.jsx" type="text/jsx"></script>
    <script>
      var socket = io('http://teapot.io');
    </script>
    <script type="text/jsx">
      /**
       * @jsx React.DOM
       */
      React.renderComponent(
        <Comment body="test" avatar="test" editable=true />,
        document.getElementById('Container')
      );
    </script>
  </body>
</html>
