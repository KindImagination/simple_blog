<template>
  <div class="site-container">
    <!-- Canvas for fireworks animation (can be implemented later) -->
    <canvas class="fireworks"></canvas>
    
    <!-- Navigation Bar -->
    <header class="site-header py-4 px-6 md:px-8 relative z-20">
      <div class="container mx-auto flex items-center justify-between">
        <!-- Logo -->
        <div class="text-xl font-semibold">
          <NuxtLink to="/" class="text-white hover:text-white/90">
            <span class="logo-text">Egor</span>
          </NuxtLink>
        </div>
        
        <!-- Menu - shows on larger screens -->
        <nav class="hidden md:flex items-center space-x-3">
          <NuxtLink 
            to="/" 
            class="nav-link"
            :class="{ 'active': $route.path === '/' }"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/work" 
            class="nav-link"
            :class="{ 'active': $route.path === '/work' }"
          >
            Work
          </NuxtLink>
          <NuxtLink 
            to="/blog" 
            class="nav-link"
            :class="{ 'active': $route.path === '/blog' }"
          >
            Blog
          </NuxtLink>
          <NuxtLink 
            to="/books" 
            class="nav-link"
            :class="{ 'active': $route.path === '/books' }"
          >
            Books
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="nav-link"
            :class="{ 'active': $route.path === '/about' }"
          >
            About
          </NuxtLink>
        </nav>
        
        <!-- Mobile menu button -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="p-2 md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      <!-- Wave element -->
      <div class="wave-container">
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
      </div>
      
      <!-- Mobile menu - shows when mobileMenuOpen is true -->
      <div v-if="mobileMenuOpen" class="mobile-menu">
        <div class="container mx-auto px-4">
          <NuxtLink 
            to="/" 
            class="mobile-nav-link"
            :class="{ 'active': $route.path === '/' }"
            @click="mobileMenuOpen = false"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/work" 
            class="mobile-nav-link"
            :class="{ 'active': $route.path === '/work' }"
            @click="mobileMenuOpen = false"
          >
            Work
          </NuxtLink>
          <NuxtLink 
            to="/blog" 
            class="mobile-nav-link"
            :class="{ 'active': $route.path === '/blog' }"
            @click="mobileMenuOpen = false"
          >
            Blog
          </NuxtLink>
          <NuxtLink 
            to="/books" 
            class="mobile-nav-link"
            :class="{ 'active': $route.path === '/books' }"
            @click="mobileMenuOpen = false"
          >
            Books
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="mobile-nav-link"
            :class="{ 'active': $route.path === '/about' }"
            @click="mobileMenuOpen = false"
          >
            About
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="site-content relative z-10">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="site-footer py-6 text-center text-xs text-gray-600 relative z-10">
      <div class="container mx-auto px-4">
        <p class="flex flex-wrap justify-center gap-1">
          <span>©Egor 2023. All rights reserved.</span>
          <span class="mx-2 hidden xs:inline">|</span>
          <span>
            <NuxtLink to="/" class="text-gray-500 hover:text-gray-400 mx-1">Qingicon</NuxtLink> · 
            <NuxtLink to="/" class="text-gray-500 hover:text-gray-400 mx-1">Zolo</NuxtLink> · 
            <NuxtLink to="/" class="text-gray-500 hover:text-gray-400 mx-1">Larkmap</NuxtLink>
          </span>
        </p>
      </div>
    </footer>
    
    <!-- Visual effects as a background effect -->
    <div class="background-effects">
      <div class="shape-light"></div>
      <div class="shape-star">
        <div class="rising-stars">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="shape-earth"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, nextTick, watch } from 'vue';
import { useRoute } from 'vue-router';
import { setupMagicalHover } from '~/components/utils/MagicalHover';

// Mobile menu state
const mobileMenuOpen = ref(false);

// Get current route
const route = useRoute();

// Cleanup function for event listener
let cleanupMagicalHover: (() => void) | undefined;

// Function to initialize or reinitialize magical hover
const initMagicalHover = () => {
  // Clean up previous instance if it exists
  if (cleanupMagicalHover) {
    cleanupMagicalHover();
  }
  
  // Initialize with a slight delay to ensure DOM is ready
  nextTick(() => {
    if (typeof window !== 'undefined') {
      cleanupMagicalHover = setupMagicalHover();
      console.log('MagicalHover initialized');
    }
  });
};

// Watch for route changes to reinitialize magical hover
watch(
  () => route.path,
  (newPath) => {
    console.log('Route changed to:', newPath);
    // Add a slight delay to ensure all components are mounted
    setTimeout(() => {
      // Dispatch custom event to reinitialize
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('reinitialize-magical'));
        console.log('Dispatched reinitialize-magical event after route change');
      }
    }, 100);
  }
);

onMounted(() => {
  // Initial setup
  initMagicalHover();
  
  // Listen for route changes to reinitialize (useful when navigating between pages)
  if (typeof window !== 'undefined') {
    window.addEventListener('reinitialize-magical', initMagicalHover);
  }
});

onUnmounted(() => {
  // Clean up event listeners when component is unmounted
  if (cleanupMagicalHover) cleanupMagicalHover();
  
  if (typeof window !== 'undefined') {
    window.removeEventListener('reinitialize-magical', initMagicalHover);
  }
});
</script>

<style scoped>
/* Site container with sticky footer */
.site-container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #0B0B0F;
  color: white;
  overflow-x: hidden;
  font-family: sans-serif;
}

.site-header {
  flex-shrink: 0;
}

.site-content {
  flex: 1 0 auto;
  padding-bottom: 2rem; /* Space for footer */
}

.site-footer {
  flex-shrink: 0;
  margin-top: auto; /* Push to bottom when content is short */
}

/* Visual effects */
.fireworks {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  z-index: -999;
}

/* Background effects */
.background-effects {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  pointer-events: none;
}

.shape-light {
  position: absolute;
  bottom: -100px;
  left: calc(50% - 300px);
  width: 700px;
  height: 300px;
  border-radius: 9999px;
  background: rgba(78, 42, 153, 0.4); /* More purple tint */
  filter: blur(120px);
  z-index: -15;
}

.shape-earth {
  position: absolute;
  bottom: -250px;
  left: 0;
  width: 100%;
  height: 400px;
  border-radius: 50% 50% 0 0;
  background: #0A0A13;
  z-index: -25;
  transform: translateY(30px);
  overflow: hidden;
  pointer-events: none;
}

.shape-earth::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(91, 33, 182, 0.1) 0%, transparent 60%);
}

.shape-star {
  position: fixed;
  z-index: -20;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  opacity: 0.7;
  pointer-events: none;
}

.rising-stars div {
  position: absolute;
  width: 1px;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  animation: rise 8s infinite ease-out;
}

.rising-stars div:nth-child(1) {
  left: 30%;
  animation-delay: 2s;
}

.rising-stars div:nth-child(2) {
  left: 60%;
  animation-delay: 0s;
}

.rising-stars div:nth-child(3) {
  left: 80%;
  animation-delay: 4s;
}

@keyframes rise {
  0% {
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
  }
  20% {
    opacity: 0.8;
    transform: scale(1);
  }
  80% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  100% {
    bottom: 100%;
    opacity: 0;
    transform: scale(0.5);
  }
}

/* Wave element animation */
.wave-container {
  position: relative;
  height: 40px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}

.wave {
  position: absolute;
  width: 100%;
  height: 40px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.15' fill='%234b11d8'/%3E%3C/svg%3E");
  background-size: 1200px 100%;
  z-index: 5;
}

.wave1 {
  opacity: 0.3;
  animation: wave-animation 20s linear infinite;
}

.wave2 {
  opacity: 0.2;
  animation: wave-animation-reverse 15s linear infinite;
}

@keyframes wave-animation {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 1200px 0;
  }
}

@keyframes wave-animation-reverse {
  0% {
    background-position: 1200px 0;
  }
  100% {
    background-position: 0 0;
  }
}

/* Logo styling */
.logo-text {
  font-weight: 600;
  letter-spacing: 0.5px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.8));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Navigation link styling */
.nav-link {
  padding: 0.375rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.2s ease-in-out;
  background-color: transparent;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.95);
}

.nav-link.active {
  background-color: rgba(115, 103, 240, 0.8);
  color: rgba(255, 255, 255, 1);
}

/* Mobile navigation */
.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 20;
  background-color: rgba(11, 11, 15, 0.95);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.5rem 0;
}

.mobile-nav-link {
  display: block;
  padding: 0.75rem 1rem;
  margin: 0.25rem 0;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  transition: all 0.2s ease-in-out;
  color: rgba(255, 255, 255, 0.8);
}

.mobile-nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.95);
}

.mobile-nav-link.active {
  background-color: rgba(115, 103, 240, 0.8);
  color: rgba(255, 255, 255, 1);
}
</style> 