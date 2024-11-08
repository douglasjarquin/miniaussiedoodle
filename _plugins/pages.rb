require 'yaml'
require 'fileutils'
require 'active_support/all'

module Jekyll
  class GeneratePages < Generator
    safe true
    priority :normal

    def generate(site)
      # Load the pages data from the YAML file with permitted classes
      pages_data = YAML.safe_load(File.read(File.join(site.source, '_data', 'pages.yml')), permitted_classes: [ActiveSupport::HashWithIndifferentAccess])
      
      # Loop over each page in the data
      pages_data.each do |page|
        page_name = page['name'].parameterize
        page_title = page['name']
        file_path = File.join(site.source, '_pages', "#{page_name}.md")

        content = <<-HEREDOC
---
layout: page
title: "#{page_title}"
permalink: /#{page_name}/
description: |
  #{page['description']}
---

{% assign page = site.data.pages | where: "name", "#{page_title}" | first %}
{{ page.body | markdownify }}
        HEREDOC

        # Ensure the _pages directory exists
        FileUtils.mkdir_p(File.dirname(file_path))

        # Write the content to the file
        File.open(file_path, 'w') { |file| file.write(content) }
      end
    end
  end
end