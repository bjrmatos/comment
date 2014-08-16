<html>
  <head>
    <link rel="stylesheet" href="/libraries/font-awesome/css/font-awesome.css">
    <link rel="stylesheet" href="/core.css">
    <link rel="stylesheet" href="/component/Comment.css">
    <link rel="stylesheet" href="/component/CommentBox.css">
    <link rel="stylesheet" href="/component/CommentList.css">
  </head>
  <body>
    <div id="Container">
      {% block Container %}{% endblock %}
    </div>
    {% block Scripts %}
      <script src="/socket.io/socket.io.js"></script>
      <script src="/libraries/react/react.js"></script>
      <script src="/libraries/react/JSXTransformer.js"></script>
      <script src="/libraries/marked/marked.js"></script>
      <script src="/libraries/moment/moment.js"></script>
      <script src="/component/Comment.jsx" type="text/jsx"></script>
      <script src="/component/CommentBox.jsx" type="text/jsx"></script>
      <script src="/component/CommentList.jsx" type="text/jsx"></script>
      <script src="/core.js" type="text/jsx"></script>
    {% endblock %}
  </body>
</html>
