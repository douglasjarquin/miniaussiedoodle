---
layout: page
title: "Available Puppies"
permalink: /available-puppies/
description: |
  Cookie & Rocky's adorable Mini Aussiedoodles born 9/12. A new litter of puppies will be available in May! Cute merle & tricolor teddy bears, 17-23 lbs grown. Hypoallergenic & smart. See pics & reserve your fuzzy best friend today!
---

{% assign page = site.data.pages | where: "name", "Available Puppies" | first %}
{{ page.body | markdownify }}
