---
layout: page
title: "Privacy"
---

{% assign page = site.data.pages | where: "name", "Privacy" | first %}
{{ page.body | markdownify }}
