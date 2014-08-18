{% extends '../html.html.swig' %}

{% block Body_class %}{% parent %} Layout--static{% endblock %}

{% block Container %}
  {% parent %}
  <section class="Page Page--static">
    <h1 class="Page-title">Anonymous comment system</h1>
    <h2 class="Page-subtitle">for vibrant communities</h2>
    <p>
      
    </p>
    <h4 class="Page-showDemo">You can see a demo by clicking on the button below.</h4>
    <a class="Page-showComments" href="#">Show comments</a>
  </section>
{% endblock %}

{% block Stylesheets %}
  <link rel="stylesheet" href="/libraries/font-awesome/css/font-awesome.css">
  <link rel="stylesheet" href="/layout/static.css">
  <link rel="stylesheet" href="/view/static/index.css">
  <link rel="stylesheet" href="/core.css">
{% endblock %}

{% block Scripts %}
{% endblock %}
