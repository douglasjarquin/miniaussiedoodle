---
layout: page
title: "Privacy"
permalink: /privacy/
description: |
  Privacy Policy
---

{% assign page = site.data.pages | where: "name", "Privacy" | first %}
{{ page.body | markdownify }}
