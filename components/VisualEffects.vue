<template>
  <div class="visual-effects">
    <div class="glow-effect glow-1"></div>
    <div class="glow-effect glow-2"></div>
    <div class="glow-effect glow-3"></div>
    <div class="floating-particles">
      <div v-for="i in 12" :key="i" class="particle" :style="{
        '--size': `${Math.random() * 10 + 5}px`,
        '--x': `${Math.random() * 100}%`,
        '--y': `${Math.random() * 100}%`,
        '--duration': `${10 + Math.random() * 20}s`,
        '--delay': `${Math.random() * 5}s`,
        '--opacity': Math.random() * 0.5 + 0.1
      }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Visual effects component
</script>

<style scoped>
.visual-effects {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.glow-effect {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.1;
  animation: float 20s ease-in-out infinite;
}

.glow-1 {
  width: 300px;
  height: 300px;
  left: 10%;
  top: 20%;
  background: radial-gradient(circle, rgba(156, 39, 176, 0.3) 0%, rgba(76, 39, 176, 0.1) 70%);
  animation-delay: 0s;
}

.glow-2 {
  width: 400px;
  height: 400px;
  right: 10%;
  top: 30%;
  background: radial-gradient(circle, rgba(76, 39, 176, 0.3) 0%, rgba(39, 76, 176, 0.1) 70%);
  animation-delay: -5s;
}

.glow-3 {
  width: 350px;
  height: 350px;
  left: 50%;
  bottom: 10%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(76, 176, 176, 0.2) 0%, rgba(76, 39, 176, 0.05) 70%);
  animation-delay: -10s;
}

.floating-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: var(--size);
  height: var(--size);
  left: var(--x);
  top: var(--y);
  background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%);
  border-radius: 50%;
  opacity: var(--opacity);
  animation: float var(--duration) ease-in-out infinite;
  animation-delay: var(--delay);
  will-change: transform;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  25% {
    transform: translateY(-15px) scale(1.05) translateX(10px);
  }
  50% {
    transform: translateY(5px) scale(0.95) translateX(-5px);
  }
  75% {
    transform: translateY(-5px) scale(1.02) translateX(5px);
  }
}
</style> 