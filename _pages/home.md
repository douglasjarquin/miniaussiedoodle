---
layout: page
title: "Home"
permalink: /home/
description: |
  Discover our ethical Mini Aussiedoodle breeding program. Elevate your family life with a loving, healthy puppy. Located in Davie, FL, shipping nationwide.
---

{% assign page = site.data.pages | where: "name", "Home" | first %}
{{ page.body | markdownify }}
