---
layout: page
title: "About"
permalink: /about/
description: |
  Learn about our ethical breeding practices and our commitment to raising healthy, happy Mini Aussiedoodles with love and care in Davie, FL.
---

{% assign page = site.data.pages | where: "name", "About" | first %}
{{ page.body | markdownify }}
