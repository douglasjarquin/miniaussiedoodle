---
layout: page
title: "Available Puppies"
---

{% assign page = site.data.pages | where: "name", "Available Puppies" | first %}
{{ page.body | markdownify }}
