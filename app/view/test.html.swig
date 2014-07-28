<html>
  <head>
  </head>
  <body>
    <div id="Container"></div>
    <script src="/socket.io/socket.io.js"></script>
    <script>
      var socket = io('http://teapot.io');
      socket.emit('test/hello', {name: "Thomas"});
      socket.on('test/hello', function (data) {
        document.getElementById('Container').innerHTML = 'Your name is ' + data.name;
      });
    </script>
  </body>
</html>
