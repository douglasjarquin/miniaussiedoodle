---
layout: page
title: "Breed Information"
permalink: /breed-information/
description: |
  Explore the characteristics, temperament, and care requirements of Mini Aussiedoodles. Find out why they make the perfect pet for your family
---

{% assign page = site.data.pages | where: "name", "Breed Information" | first %}
{{ page.body | markdownify }}
