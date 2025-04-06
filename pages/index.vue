<template>
  <div class="main-wrapper">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Hi, I'm<span class="gradient-text">Egor</span></h1>
        <p class="hero-subtitle">Building digital experiences through code</p>
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
</script>

<style>
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
  margin-bottom: 2rem;
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