<template>
  <section class="hero py-20 px-4">
    <div class="container mx-auto max-w-3xl relative">
      <div class="flex flex-col items-center text-center">
        <div class="flex items-start gap-2 text-3xl md:text-4xl font-bold">
          <div class="text-gradient">Hi, I'm</div>
          <a href="/about" class="text-gradient-name hover:underline mb-2">{{ name }}</a>
        </div>
        
        <div id="typed-output" class="text-gray-400 text-lg mt-5 h-7">
          <!-- Typed.js will insert content here -->
        </div>
      </div>
      
      <!-- Animated background circle effect -->
      <div class="absolute w-[512px] h-[512px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 
                  bg-dots opacity-60 rounded-full
                  max-md:w-[320px] max-md:h-[320px]"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

defineProps<{
  name: string;
}>();

onMounted(() => {
  // Initialize the typing effect
  if (typeof window !== 'undefined') {
    import('typed.js').then(({ default: Typed }) => {
      new Typed('#typed-output', {
        strings: [
          ">_ welcome to my secret garden ^1000",
          ">_ and let's explore it now ^1000",
        ],
        typeSpeed: 50,
        backSpeed: 20,
        startDelay: 300,
        loop: true,
        showCursor: false,
      });
    });
  }
});
</script>

<style scoped>
/* Gradient text styles */
.text-gradient {
  background: linear-gradient(180deg, #E8E8F6 0%, rgba(232,232,246,0.72) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-gradient-name {
  position: relative;
  background: linear-gradient(90deg, #A29CD3 0%, #E8BFAC 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-gradient-name:hover::after {
  content: '';
  position: absolute;
  inset: auto 0 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, #A29CD3 0%, #E8BFAC 100%);
}

/* Background dot pattern */
.bg-dots {
  background-image: radial-gradient(circle at center, rgba(255,255,255,0.3) 1px, transparent 1px);
  background-size: 8px 8px;
  mask-image: radial-gradient(at center, #fff, transparent 72%);
  -webkit-mask-image: radial-gradient(at center, #fff, transparent 72%);
}
</style> 