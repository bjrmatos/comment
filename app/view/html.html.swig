<html>
  <head>
  </head>
  <body>
    {% block Body %}

    {% endblock %}
    <script src="/socket.io/socket.io.js"></script>
    <script>
      var socket = io('http://localhost:11011');
    </script>
  </body>
</html>
