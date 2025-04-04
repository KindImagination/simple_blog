<template>
  <div class="min-h-screen bg-[#0B0B0F] text-white font-sans">
    <!-- Navigation Bar -->
    <header class="py-4 px-8">
      <div class="container mx-auto flex items-center justify-between">
        <!-- Logo -->
        <div class="text-xl font-semibold">
          <NuxtLink to="/" class="text-white hover:text-white/90">Egor</NuxtLink>
        </div>
        
        <!-- Kindimagination Logo -->
        <div class="absolute left-1/2 transform -translate-x-1/2">
          <img src="/Kindimagination-dark.png" alt="Kindimagination" class="h-10 w-auto" />
        </div>
        
        <!-- Menu -->
        <nav class="flex items-center space-x-6">
          <NuxtLink 
            to="/" 
            class="py-1 px-3 transition-colors rounded-md hover:bg-white/10"
            :class="{ 'bg-indigo-500 text-white': $route.path === '/' }"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/work" 
            class="py-1 px-3 transition-colors rounded-md hover:bg-white/10"
            :class="{ 'bg-indigo-500 text-white': $route.path === '/work' }"
          >
            Work
          </NuxtLink>
          <NuxtLink 
            to="/blog" 
            class="py-1 px-3 transition-colors rounded-md hover:bg-white/10"
            :class="{ 'bg-indigo-500 text-white': $route.path === '/blog' }"
          >
            Blog
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="py-1 px-3 transition-colors rounded-md hover:bg-white/10"
            :class="{ 'bg-indigo-500 text-white': $route.path === '/about' }"
          >
            About
          </NuxtLink>
          <button class="ml-2 text-white/70 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"></path>
            </svg>
          </button>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="py-6 text-center text-sm text-gray-500">
      <div class="container mx-auto">
        <p>@Egor 2025. All rights reserved. | <NuxtLink to="/" class="text-gray-400 hover:text-gray-300">Qingicon</NuxtLink> · <NuxtLink to="/" class="text-gray-400 hover:text-gray-300">Zolo</NuxtLink> · <NuxtLink to="/" class="text-gray-400 hover:text-gray-300">Linkmap</NuxtLink></p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Component setup logic
</script>

<style scoped>
/* Any additional component-specific styles */
</style> 