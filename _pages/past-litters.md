---
layout: page
title: "Past Litters"
permalink: /past-litters/
description: |
  View photos and details of our past Mini Aussiedoodle litters. See the quality and care that goes into each puppy's upbringing.
---

{% assign page = site.data.pages | where: "name", "Past Litters" | first %}
{{ page.body | markdownify }}
