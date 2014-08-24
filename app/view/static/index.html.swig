{% extends '../html.html.swig' %}

{% block Body_class %}{% parent %} Layout--static{% endblock %}

{% block Container %}
  {% parent %}
  <section class="Page Page--static">
    <h1 class="Page-title">Anonymous comment system</h1>
    <h2 class="Page-subtitle">for vibrant communities</h2>
    <h4 class="Page-showDemo">A demo is worth more than a couple of pictures, press the button below and give it a try.</h4>
    <a id="Page-showComments" class="Page-showComments" href="#">Show comments</a>
  </section>
{% endblock %}

{% block Stylesheets %}
  <link rel="stylesheet" href="/libraries/font-awesome/css/font-awesome.css">
  <link rel="stylesheet" href="/core.css">
  <link rel="stylesheet" href="/layout/static.css">
  <link rel="stylesheet" href="/view/static/index.css">
  <link rel="stylesheet" href="/client.css">
{% endblock %}

{% block Scripts %}
  <script src="/client.js"></script>
  <script>
    (function () {
      var client = new CommentClient({
        elementButton: document.getElementById('Page-showComments')
      });
    })();
  </script>
{% endblock %}
