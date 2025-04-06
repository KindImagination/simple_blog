<template>
  <div ref="cardElement" class="project-card magical">
    <a :href="url" target="_blank" class="card-link flex items-center gap-4">
      <div class="icon-wrapper flex-shrink-0">
        <img :src="imageSrc || 'https://via.placeholder.com/40'" :alt="title">
      </div>
      <div class="info flex-grow">
        <div class="info-title">{{ title }}</div>
        <div class="info-desc">{{ description }}</div>
      </div>
      <div class="arrow-icon ml-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 14 14" fill="none">
          <path d="M10.55 7.58332H1.16663V6.41665H10.55L7.75415 3.62082L8.5791 2.79587L12.1645 6.3813C12.5062 6.72299 12.5062 7.27701 12.1645 7.61873L8.5791 11.2042L7.75415 10.3792L10.55 7.58332Z" fill="#B3B3C1"></path>
        </svg>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Define props with TypeScript interface
defineProps<{
  title: string;
  description: string;
  url: string;
  imageSrc?: string;
}>();

// Use ref for efficient DOM access
const cardElement = ref<HTMLElement | null>(null);
</script>

<style scoped>
/* Project card styling */
.project-card {
  --circle-size: 300px;
  --inset: 1px;
  --border: 6px;
  position: relative;
  border-radius: var(--border);
  background-color: rgba(30, 30, 45, 0.8);
  transition: all 0.3s ease-out;
  will-change: transform, opacity;
  backdrop-filter: blur(5px);
  box-shadow: 
    0 4px 10px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(115, 103, 240, 0.2);
  overflow: hidden;
}

.project-card:hover {
  background-color: rgba(40, 40, 60, 0.95);
  transform: translateY(-3px);
  box-shadow: 
    0 8px 20px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(115, 103, 240, 0.4);
}

.project-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    45deg, 
    rgba(115, 103, 240, 0.2), 
    rgba(193, 143, 255, 0.15), 
    rgba(99, 99, 128, 0.05)
  );
  border-radius: calc(var(--border) - 0.5px);
  z-index: 1;
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.project-card:hover::before {
  opacity: 1;
}

.card-link {
  width: 100%;
  transition: all 0.3s ease-out;
  padding: 1rem 1.25rem;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
}

.info * {
  transition: all 0.3s ease-out;
}

.info .info-title {
  font-size: 15px;
  font-weight: 600;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 3px;
}

.info .info-desc {
  font-size: 12px;
  line-height: 1.4;
  color: rgba(179, 179, 193, 0.8);
}

.project-card:hover .info .info-title {
  color: rgba(255, 255, 255, 1);
  background: linear-gradient(90deg, #E8E8F6, #c7c7ea);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.project-card:hover .info .info-desc {
  color: rgba(255, 255, 255, 0.85);
}

.arrow-icon {
  position: relative;
  opacity: 0;
  transform: translateX(-5px);
  transition: all 0.3s ease-out;
  will-change: opacity, transform;
}

.arrow-icon svg {
  fill: rgba(115, 103, 240, 0.8);
}

.project-card:hover .arrow-icon {
  opacity: 1;
  transform: translateX(0);
}

.project-card:hover .arrow-icon svg {
  animation: arrowPulse 1.5s infinite;
}

@keyframes arrowPulse {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(3px);
  }
}

.icon-wrapper {
  opacity: 0.9;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(115, 103, 240, 0.15);
  padding: 8px;
  border-radius: 8px;
  width: 44px;
  height: 44px;
  min-width: 44px;
  box-shadow: 0 0 10px rgba(115, 103, 240, 0.1);
}

.icon-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.3));
  opacity: 0.9;
  transition: all 0.3s ease;
}

.project-card:hover .icon-wrapper {
  opacity: 1;
  background: rgba(115, 103, 240, 0.25);
  box-shadow: 0 0 15px rgba(115, 103, 240, 0.2);
  transform: scale(1.05);
}

.project-card:hover .icon-wrapper img {
  opacity: 1;
  filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.5));
}
</style> 