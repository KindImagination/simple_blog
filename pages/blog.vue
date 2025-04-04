<template>
  <div class="py-12 px-4">
    <div class="container mx-auto max-w-4xl">
      <!-- Blog Page Header -->
      <div class="text-center mb-12">
        <h1 class="text-3xl font-semibold mb-4">My Blog</h1>
        <p class="text-gray-400 max-w-2xl mx-auto">Thoughts, tutorials, and insights about design and development.</p>
      </div>
      
      <!-- Blog Posts Grid -->
      <div class="grid grid-cols-1 gap-10">
        <!-- Blog Post 1 -->
        <div class="bg-[#111118] rounded-lg overflow-hidden border border-gray-800 hover:border-indigo-500/30 transition-all duration-300">
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <span class="text-sm text-gray-400">January 15, 2023</span>
              <span class="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">Design</span>
            </div>
            <h2 class="text-2xl font-semibold mb-3">How to Design Better User Interfaces</h2>
            <p class="text-gray-300 mb-6">In this article, I share some of my key insights for creating more intuitive and engaging user interfaces that help users accomplish their goals quickly and efficiently.</p>
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <div class="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300">A</div>
                <span class="ml-2 text-sm text-gray-400">By Asorn</span>
              </div>
              <a href="#" class="text-indigo-400 hover:text-indigo-300 flex items-center">
                Read more
                <svg class="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <!-- Blog Post 2 -->
        <div class="bg-[#111118] rounded-lg overflow-hidden border border-gray-800 hover:border-indigo-500/30 transition-all duration-300">
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <span class="text-sm text-gray-400">December 5, 2022</span>
              <span class="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded">Development</span>
            </div>
            <h2 class="text-2xl font-semibold mb-3">Getting Started with Tailwind CSS and Vue.js</h2>
            <p class="text-gray-300 mb-6">Learn how to set up a new project with Tailwind CSS and Vue.js, two powerful tools that can help you build modern, responsive web applications quickly.</p>
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <div class="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300">A</div>
                <span class="ml-2 text-sm text-gray-400">By Asorn</span>
              </div>
              <a href="#" class="text-indigo-400 hover:text-indigo-300 flex items-center">
                Read more
                <svg class="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <!-- Blog Post 3 -->
        <div class="bg-[#111118] rounded-lg overflow-hidden border border-gray-800 hover:border-indigo-500/30 transition-all duration-300">
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <span class="text-sm text-gray-400">November 18, 2022</span>
              <span class="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">UX Research</span>
            </div>
            <h2 class="text-2xl font-semibold mb-3">The Importance of User Testing in Product Design</h2>
            <p class="text-gray-300 mb-6">Discover why user testing is crucial for creating successful products and how to incorporate it into your design process to gain valuable insights.</p>
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <div class="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300">A</div>
                <span class="ml-2 text-sm text-gray-400">By Asorn</span>
              </div>
              <a href="#" class="text-indigo-400 hover:text-indigo-300 flex items-center">
                Read more
                <svg class="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Pagination -->
      <div class="mt-12 flex justify-center">
        <div class="flex items-center space-x-2">
          <a href="#" class="w-8 h-8 flex items-center justify-center rounded-md bg-[#111118] border border-gray-800 text-gray-400 hover:bg-indigo-500/10 hover:border-indigo-500/30">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a href="#" class="w-8 h-8 flex items-center justify-center rounded-md bg-indigo-500 text-white">1</a>
          <a href="#" class="w-8 h-8 flex items-center justify-center rounded-md bg-[#111118] border border-gray-800 text-gray-400 hover:bg-indigo-500/10 hover:border-indigo-500/30">2</a>
          <a href="#" class="w-8 h-8 flex items-center justify-center rounded-md bg-[#111118] border border-gray-800 text-gray-400 hover:bg-indigo-500/10 hover:border-indigo-500/30">3</a>
          <a href="#" class="w-8 h-8 flex items-center justify-center rounded-md bg-[#111118] border border-gray-800 text-gray-400 hover:bg-indigo-500/10 hover:border-indigo-500/30">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Blog page logic
</script>

<style scoped>
/* Blog page specific styles */
</style> 