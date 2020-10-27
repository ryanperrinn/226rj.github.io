---
layout: default
title: Downloads
---
<!-- Title row -->
<div class="row row-eq-spacing mb-0">
  <div class="col my-0">
    <h1 class="font-weight-lighter text-uppercase font-size-14 px-5 mt-0 mb-1"><i class="fas fa-file-download fa-fw text-muted mr-5"></i>Downloads</h1>
  </div>
</div>
<div class="row row-eq-spacing mt-0">
{% for download in site.downloads %}

  {% assign mod2 = forloop.index | modulo:2 %}
  {% assign mod3 = forloop.index | modulo:3 %}
  {% assign spacerClass = "d-md-none" %}
  {% if mod3 == 0 %}
    {% assign spacerClass = "d-md-none" %}
  {% endif %}
  {% if mod2 == 0 %}
    {% assign spacerClass = "d-lg-none" %}
  {% endif %}

  <div class="col-12 col-md-6 col-lg-4">
    <div class="card">
      <h2 class="content-title text-uppercase text-white-dm text-smoothing-antialiased">
        {{ download.title }}
      </h2>
      <p>
        {{ download.content }}
      </p>
      <div class="text-right"> <!-- text-right = text-align: right -->
        <a class="btn btn-block btn-primary btn-lg rounded-0" href="{{ download.url | prepend: site.baseurl }}"><i class="{{ download.icon }} fa-fw"></i> {{ download.title }}</a>
      </div>
    </div>
  </div>
  <div class="v-spacer {{ spacerClass }}"></div>
{% endfor %} 
</div>
