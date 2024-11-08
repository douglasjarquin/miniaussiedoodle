require 'yaml'
require 'fileutils'
require 'active_support/all'

module Jekyll
  class GeneratePosts < Generator
    safe true
    priority :normal

    def generate(site)
      # Load the posts data from the YAML file with permitted classes
      posts_data = YAML.safe_load(File.read(File.join(site.source, '_data', 'posts.yml')), permitted_classes: [ActiveSupport::HashWithIndifferentAccess])
      
      # Loop over each post in the data
      posts_data.each do |post|
        # Parse and format the date
        post_date = Date.parse(post['date']).strftime('%Y-%m-%d')
        post_slug = post['slug']
        file_name = "#{post_date}-#{post_slug}.md"
        file_path = File.join(site.source, '_posts', file_name)

        content = <<-HEREDOC
---
layout: post
title: "#{post['title']}"
date: "#{post['date']}"
category: #{post['category']}
tags: #{post['name_(from_tags)'].join(' ')}
---

#{post['body']}
        HEREDOC

        # Ensure the _posts directory exists
        FileUtils.mkdir_p(File.dirname(file_path))

        # Write the content to the file
        File.open(file_path, 'w') { |file| file.write(content) }
      end
    end
  end
end