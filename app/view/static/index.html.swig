{% extends '../html.html.swig' %}

{% block Container %}
  <div id="CommentListContainer"></div>
{% endblock %}

{% block Scripts %}
  <script>
    var socket_path = "{{ socket.domain }}:{{ socket.port }}";
    var thread_id = 1;
  </script>
  {% parent %}
{% endblock %}
