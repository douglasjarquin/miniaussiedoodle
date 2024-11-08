---
layout: page
title: "About"
---

{% assign page = site.data.pages | where: "name", "About" | first %}
{{ page.body | markdownify }}
