---
layout: default
permalink: /blog/
description: |
  Stay up-to-date with the latest news, tips, and advice on raising your Mini Aussiedoodle. Our blog covers everything from training and grooming to health care and nutrition. Whether you’re a new pet parent or a seasoned dog lover, our expert advice will help you raise a happy, healthy, and well-behaved Mini Aussiedoodle.
---

<section class="py-12" id="blog">
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your puppies with our expert advice.</p>
        <div class="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
          {% for post in site.posts %}
          <article class="flex max-w-xl flex-col items-start justify-between">
            <div class="flex items-center gap-x-4 text-xs">
              <time datetime="{{ post.date }}" class="text-gray-500">
                {{ post.date | date: "%B %d, %Y" }}
              </time>                
              <span class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ post.category }}</span>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href="{{ post.url }}">
                  <span class="absolute inset-0"></span>
                  {{ post.title }}
                </a>
              </h3>
              <!-- <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.</p> -->
            </div>
          </article>
          {% endfor %}
        </div>
      </div>
    </div>
  </div>
</section>