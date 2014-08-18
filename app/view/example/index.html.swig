{% extends '../html.html.swig' %}

{% block Body_class %}{% parent %} Layout--example{% endblock %}

{% block Container %}
  <article class="Article Article--example">
    <h1>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices lacinia sollicitudin. Quisque risus neque, condimentum ultricies enim fermentum, vehicula condimentum risus.</p>

    <h2>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</h2>
    <p>Suspendisse pellentesque quam vel posuere luctus. Nam eget fermentum ipsum, non congue dui. Praesent eget orci facilisis, imperdiet purus nec, adipiscing risus.</p>
    <p>Nullam tellus eros, vulputate eu egestas ut, ornare sit amet ligula. Vivamus tempor suscipit adipiscing. Nullam non fermentum purus. Proin lacinia sapien et felis commodo varius. Ut imperdiet pretium bibendum. Cras ut dui nisi. Nulla fringilla in odio vel vestibulum. Proin vitae aliquet purus. Fusce porttitor et dui id molestie.</p>

    <h2>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</h2>
    <p>Sed pretium nulla sit amet nisl sodales, sed lacinia turpis molestie. Nulla nec lacinia dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc consequat ut mauris ac bibendum. Maecenas quis scelerisque sem, ut tincidunt enim. Integer elementum felis sit amet lacus commodo pellentesque. Curabitur ullamcorper lectus nisi, et ornare nunc faucibus in. Proin sagittis rhoncus lorem, id elementum augue imperdiet sit amet. In volutpat velit vitae justo auctor, venenatis accumsan tortor molestie. Quisque malesuada mauris mattis, ultricies magna ac, pharetra orci. Maecenas nec fringilla metus.</p>

    <div class="Article-comments">
      <a href="#">There are <span>28</span> comments</a>
    </div>
  </article>
{% endblock %}

{% block Stylesheets %}
  <link rel="stylesheet" href="/layout/example.css">
  <link rel="stylesheet" href="/view/example/index.css">
{% endblock %}
