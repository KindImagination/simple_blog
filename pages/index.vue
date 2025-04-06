<template>
  <div class="main-wrapper">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Hi, I'm<span class="gradient-text">Egor</span></h1>
        <p class="hero-subtitle">Building digital experiences through code</p>

        <div class="terminal-container">
          <div class="terminal-header">
            <div class="terminal-buttons">
              <span class="terminal-button close"></span>
              <span class="terminal-button minimize"></span>
              <span class="terminal-button maximize"></span>
            </div>
            <div class="terminal-title">terminal</div>
          </div>
          <div class="terminal-body">
            <span id="typing-effect" class="typing-text"></span>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Project Section -->
    <ProjectSection />

    <!-- Background Effects -->
    <div class="background-effects">
      <div class="stars-container">
        <div v-for="i in 50" :key="i" class="star" :style="{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${3 + Math.random() * 7}s`
        }"></div>
      </div>
      <div class="horizon-glow"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectSection from '~/components/project/ProjectSection.vue';
import { onMounted, onUnmounted } from 'vue';

let typedInstance: any = null;

onMounted(() => {
  if (typeof window !== 'undefined') {
    import('typed.js').then(({ default: Typed }) => {
      typedInstance = new Typed('#typing-effect', {
        strings: [
          " welcome you to my personal space",
          " let's explore it together!"
        ],
        typeSpeed: 50,
        backSpeed: 30,
        startDelay: 1000,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        preStringTyped: function() {
          const typingElement = document.getElementById('typing-effect');
          if (typingElement && !typingElement.textContent?.startsWith(">_")) {
            typingElement.innerHTML = ">_" + typingElement.innerHTML;
          }
        },
        onReset: function() {
          const typingElement = document.getElementById('typing-effect');
          if (typingElement) {
            typingElement.innerHTML = ">_";
          }
        }
      });
    }).catch(err => {
      console.error('Failed to load Typed.js:', err);
    });
  }
});

onUnmounted(() => {
  if (typedInstance) {
    typedInstance.destroy();
  }
});
</script>

<style>
.terminal-container {
  margin: 1.5rem auto 0;
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
  overflow: hidden;
  background-color: rgba(30, 30, 45, 0.7);
  backdrop-filter: blur(8px);
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(115, 103, 240, 0.2);
  transition: all 0.3s ease;
}

.terminal-container:hover {
  box-shadow: 
    0 6px 20px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(115, 103, 240, 0.4);
  transform: translateY(-2px);
}

.terminal-header {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 8px 15px;
  background-color: rgba(40, 40, 60, 0.9);
  border-bottom: 1px solid rgba(115, 103, 240, 0.2);
}

.terminal-title {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  font-family: monospace;
  text-transform: lowercase;
}

.terminal-buttons {
  position: absolute;
  left: 15px;
  display: flex;
  gap: 6px;
}

.terminal-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.terminal-button.close {
  background-color: rgba(255, 95, 86, 0.8);
}

.terminal-button.minimize {
  background-color: rgba(255, 189, 46, 0.8);
}

.terminal-button.maximize {
  background-color: rgba(39, 201, 63, 0.8);
}

.terminal-button:hover {
  transform: scale(1.1);
}

.terminal-body {
  padding: 15px;
  height: 60px;
  display: flex;
  align-items: center;
}


.main-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
}

.hero-section {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
  z-index: 10;
}

.hero-content {
  text-align: center;
  max-width: 800px;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

.gradient-text {
  margin-left: 0.5rem;
  background: linear-gradient(90deg, #c18fff, #7367f0);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(179, 179, 193, 0.8);
  margin-bottom: 1.5rem;
}

.terminal-typing {
  margin-top: 1rem;
  height: 24px;
}

.typing-text {
  font-family: monospace;
  font-size: 1rem;
  color: rgba(193, 143, 255, 0.9);
}

.background-effects {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.stars-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.star {
  position: absolute;
  width: 2px;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  animation: twinkle ease-in-out infinite;
}

.horizon-glow {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40vh;
  background: radial-gradient(
    ellipse at center bottom,
    rgba(115, 103, 240, 0.15) 0%,
    rgba(115, 103, 240, 0.05) 40%,
    rgba(0, 0, 0, 0) 80%
  );
  z-index: 1;
}

@keyframes twinkle {
  0%, 100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.2);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
}
</style> 