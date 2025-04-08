<template>
  <div class="books-page min-h-screen">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-20">
      <h1 class="text-3xl font-bold mb-12 text-center bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
        My Book Collection
      </h1>
      
      <div class="book-list w-full flex flex-col">
        <div class="book-list-category w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <!-- Book 1: Get Things Done -->
          <div class="magical item bg-[#141419] rounded-xl shadow-lg">
            <a href="https://www.amazon.com/Getting-Things-Done-Stress-Free-Productivity/dp/0143126563" target="_blank" 
               class="flex flex-col items-center justify-start p-16 w-full">
              <div class="book-item relative w-28 h-40 flex justify-start items-center z-10">
                <div class="b-wrapper b-page b-back absolute w-28 h-40 bg-cover bg-center rounded-r-md border border-white opacity-[0.04] origin-center transform perspective-[1000px] rotate-y-0"></div>
                <div class="b-wrapper b-page b-four absolute w-28 h-40 bg-cover bg-center rounded-r-md border border-white opacity-[0.08] origin-left transform perspective-[1000px] -rotate-y-10"></div>
                <div class="b-wrapper b-page b-three absolute w-28 h-40 bg-cover bg-center rounded-r-md border border-white opacity-[0.12] origin-left transform perspective-[1000px] -rotate-y-15"></div>
                <div class="b-wrapper b-page b-two absolute w-28 h-40 bg-cover bg-center rounded-r-md border border-white opacity-[0.16] origin-left transform perspective-[1000px] -rotate-y-20"></div>
                <div class="b-wrapper b-page b-one absolute w-28 h-40 bg-cover bg-center rounded-r-md border border-[#62616F] origin-left transform perspective-[1000px] -rotate-y-25 flex flex-row justify-end items-start">
                  <span class="b-one-title text-xs tracking-wider text-[#A8A8B6] writing-vertical-lr p-2">Getting Things Done</span>
                </div>
                <div class="b-wrapper b-front absolute w-28 h-40 bg-cover bg-center rounded-r-md border border-white origin-left transform perspective-[1000px] -rotate-y-30 brightness-60 shadow-[inset_8px_0_8px_rgba(255,255,255,0.2)]"
                     :style="{ backgroundImage: 'url(/images/Get_Things_Done.jpg)' }"></div>
              </div>
            </a>
          </div>
          
          <!-- Add more book items as needed -->
          <!-- Example for additional books (currently using same image) -->
          <div class="magical item bg-[#141419] rounded-xl shadow-lg">
            <a href="#" target="_blank" 
               class="flex flex-col items-center justify-start p-16 w-full">
              <div class="book-item relative w-28 h-40 flex justify-start items-center z-10">
                <div class="b-wrapper b-page b-back absolute w-28 h-40 bg-cover bg-center rounded-r-md border border-white opacity-[0.04] origin-center transform perspective-[1000px] rotate-y-0"></div>
                <div class="b-wrapper b-page b-four absolute w-28 h-40 bg-cover bg-center rounded-r-md border border-white opacity-[0.08] origin-left transform perspective-[1000px] -rotate-y-10"></div>
                <div class="b-wrapper b-page b-three absolute w-28 h-40 bg-cover bg-center rounded-r-md border border-white opacity-[0.12] origin-left transform perspective-[1000px] -rotate-y-15"></div>
                <div class="b-wrapper b-page b-two absolute w-28 h-40 bg-cover bg-center rounded-r-md border border-white opacity-[0.16] origin-left transform perspective-[1000px] -rotate-y-20"></div>
                <div class="b-wrapper b-page b-one absolute w-28 h-40 bg-cover bg-center rounded-r-md border border-[#62616F] origin-left transform perspective-[1000px] -rotate-y-25 flex flex-row justify-end items-start">
                  <span class="b-one-title text-xs tracking-wider text-[#A8A8B6] writing-vertical-lr p-2">Book Title</span>
                </div>
                <div class="b-wrapper b-front absolute w-28 h-40 bg-cover bg-center rounded-r-md border border-white origin-left transform perspective-[1000px] -rotate-y-30 brightness-60 shadow-[inset_8px_0_8px_rgba(255,255,255,0.2)]"
                     :style="{ backgroundImage: 'url(/images/Get_Things_Done.jpg)' }"></div>
              </div>
            </a>
          </div>
        </div>
        
        <div class="category-divider w-full h-px my-10 bg-dotted-radial mask-radial"></div>
        
        <div class="book-list-category w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <!-- Another book category -->
          <div class="magical item bg-[#141419] rounded-xl shadow-lg">
            <a href="#" target="_blank" 
               class="flex flex-col items-center justify-start p-16 w-full">
              <div class="book-item relative w-28 h-40 flex justify-start items-center z-10">
                <div class="b-wrapper b-page b-back absolute w-28 h-40 bg-cover bg-center rounded-r-md border border-white opacity-[0.04] origin-center transform perspective-[1000px] rotate-y-0"></div>
                <div class="b-wrapper b-page b-four absolute w-28 h-40 bg-cover bg-center rounded-r-md border border-white opacity-[0.08] origin-left transform perspective-[1000px] -rotate-y-10"></div>
                <div class="b-wrapper b-page b-three absolute w-28 h-40 bg-cover bg-center rounded-r-md border border-white opacity-[0.12] origin-left transform perspective-[1000px] -rotate-y-15"></div>
                <div class="b-wrapper b-page b-two absolute w-28 h-40 bg-cover bg-center rounded-r-md border border-white opacity-[0.16] origin-left transform perspective-[1000px] -rotate-y-20"></div>
                <div class="b-wrapper b-page b-one absolute w-28 h-40 bg-cover bg-center rounded-r-md border border-[#62616F] origin-left transform perspective-[1000px] -rotate-y-25 flex flex-row justify-end items-start">
                  <span class="b-one-title text-xs tracking-wider text-[#A8A8B6] writing-vertical-lr p-2">Book Title</span>
                </div>
                <div class="b-wrapper b-front absolute w-28 h-40 bg-cover bg-center rounded-r-md border border-white origin-left transform perspective-[1000px] -rotate-y-30 brightness-60 shadow-[inset_8px_0_8px_rgba(255,255,255,0.2)]"
                     :style="{ backgroundImage: 'url(/images/Get_Things_Done.jpg)' }"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Background effects -->
    <div class="background-effects fixed bottom-0 left-0 w-full h-full z-[-10] pointer-events-none">
      <div class="shape-light absolute bottom-[-100px] left-[calc(50%-300px)] w-[700px] h-[300px] rounded-full bg-purple-900/40 blur-[120px] z-[-15]"></div>
      <div class="shape-star fixed z-[-20] bottom-0 left-0 w-full h-[150px] opacity-70 pointer-events-none">
        <div class="rising-stars">
          <div class="absolute w-px h-px bg-white/60 rounded-full left-[30%] animate-rise-star delay-200"></div>
          <div class="absolute w-px h-px bg-white/60 rounded-full left-[60%] animate-rise-star"></div>
          <div class="absolute w-px h-px bg-white/60 rounded-full left-[80%] animate-rise-star delay-400"></div>
        </div>
      </div>
      <div class="shape-earth absolute bottom-[-250px] left-0 w-full h-[400px] rounded-t-full bg-[#0A0A13] z-[-25] transform translate-y-[30px] overflow-hidden pointer-events-none"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, nextTick, watch } from 'vue';
import { useRoute } from 'vue-router';
import { setupMagicalHover } from '~/components/utils/MagicalHover';

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
      console.log('MagicalHover initialized on books page');
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

<style>
/* Custom styles for the book page */
.magical {
  --circle-size: 600px;
  position: relative;
  transition: all 0.15s ease-in-out;
}

.magical::before, .magical::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  transition: opacity 0.4s ease-in-out;
  opacity: 0;
  z-index: 0;
}

.magical::before {
  background: radial-gradient(circle at var(--circle-x, 0) var(--circle-y, 0), rgba(100, 97, 241, 0.8) 0%, transparent 80%);
  z-index: -1;
}

.magical::after {
  background: radial-gradient(circle at var(--circle-x, 0) var(--circle-y, 0), rgba(0, 0, 0, 0.4) 0%, transparent 100%);
  z-index: -2;
}

.magical:hover::before, .magical:hover::after {
  opacity: 1;
}

.books-page {
  background-color: #0B0B0F;
  color: white;
}

.bg-dotted-radial {
  background-image: radial-gradient(circle at center, #4E4E64 1px, transparent 1px);
  background-size: 6px 1px;
  background-repeat: repeat;
}

.mask-radial {
  mask-image: radial-gradient(at center, #fff, transparent 90%);
  -webkit-mask-image: radial-gradient(at center, #fff, transparent 90%);
}

.writing-vertical-lr {
  writing-mode: vertical-rl;
}

/* Animation for the stars */
@keyframes riseStars {
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

.animate-rise-star {
  animation: riseStars 8s infinite ease-out;
}

.delay-200 {
  animation-delay: 2s;
}

.delay-400 {
  animation-delay: 4s;
}

/* Book animations - slowed down */
.book-item .b-wrapper {
  transition: all 0.8s ease-in-out;
}

/* Hover animations for the book */
.item:hover .b-front {
  transform: perspective(1000px) rotateY(-70deg) !important;
  filter: brightness(1) !important;
  transition: transform 0.8s ease, filter 0.8s ease !important;
}

.item:hover .b-one {
  transform: perspective(1000px) rotateY(-50deg) !important;
  transition: transform 0.8s ease !important;
}

.item:hover .b-two {
  transform: perspective(1000px) rotateY(-40deg) !important;
  transition: transform 0.9s ease !important;
}

.item:hover .b-three {
  transform: perspective(1000px) rotateY(-30deg) !important;
  transition: transform 1s ease !important;
}

.item:hover .b-four {
  transform: perspective(1000px) rotateY(-20deg) !important;
  transition: transform 1.1s ease !important;
}

.books-page .shape-earth::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(91, 33, 182, 0.1) 0%, transparent 60%);
}

.b-wrapper {
  transform-origin: 0% 50%;
  position: absolute;
  width: 7rem; /* w-28 = 7rem in Tailwind */
  height: 10rem; /* h-40 = 10rem in Tailwind */
  background-size: cover;
  background-position: center;
  transform-style: preserve-3d;
  transition: 0.8s ease all;
  border-radius: 0 6px 6px 0;
}
</style> 