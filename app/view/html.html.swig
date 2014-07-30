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
    <script>
      var socket = io('http://localhost');
    </script>
  </body>
</html>
