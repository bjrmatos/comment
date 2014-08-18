<html>
  <head>
    <title>{% block Title %}Comments{% endblock %}</title>
    {% block Stylesheets %}
    {% endblock %}
  </head>
  <body class="{% block Body_class %}Layout{% endblock %}">
    <div id="Container">
      {% block Container %}
        <header><img src="/images/teapot.png" /></header>
      {% endblock %}
    </div>

    {% block Scripts %}
    {% endblock %}
  </body>
</html>
