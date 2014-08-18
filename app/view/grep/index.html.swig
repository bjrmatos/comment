{% extends '../html.html.swig' %}

{% block Body_class %}{% parent %} Layout--grep{% endblock %}

{% block Container %}
{% endblock %}

{% block Stylesheets %}
  <link rel="stylesheet" href="/libraries/font-awesome/css/font-awesome.css">
  <link rel="stylesheet" href="/component/Comment.css">
  <link rel="stylesheet" href="/component/CommentBox.css">
  <link rel="stylesheet" href="/component/CommentList.css">
  <link rel="stylesheet" href="/layout/grep.css">
  <link rel="stylesheet" href="/core.css">
{% endblock %}

{% block Scripts %}
  <script>
    var socket_path = "{{ socket.domain }}:{{ socket.port }}";
    var thread_id = 1;
  </script>
  <script src="/socket.io/socket.io.js"></script>
  <script src="/libraries/react/react.js"></script>
  <script src="/libraries/react/JSXTransformer.js"></script>
  <script src="/libraries/marked/marked.js"></script>
  <script src="/libraries/moment/moment.js"></script>
  <script src="/component/Comment.jsx" type="text/jsx"></script>
  <script src="/component/CommentBox.jsx" type="text/jsx"></script>
  <script src="/component/CommentList.jsx" type="text/jsx"></script>
  <script src="/core.js"></script>
{% endblock %}
