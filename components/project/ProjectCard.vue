<template>
  <div ref="cardElement" class="project-card magical">
    <a :href="url" target="_blank" class="card-link flex items-center p-4 gap-3">
      <div class="icon-wrapper flex-shrink-0 w-6 h-6 flex items-center justify-center">
        <img :src="imageSrc || 'https://via.placeholder.com/40'" :alt="title" class="w-full h-full opacity-80">
      </div>
      <div class="info">
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
  --border: 4px;
  position: relative;
  border-radius: var(--border);
  background-color: rgba(20, 20, 25, 0.8);
  transition: all 0.2s ease-out;
  will-change: transform, opacity;
  backdrop-filter: blur(3px);
}

.project-card:hover {
  background-color: rgba(25, 25, 36, 0.9);
}

.project-card::before {
  content: '';
  position: absolute;
  inset: -0.5px;
  background: linear-gradient(90deg, rgba(99, 99, 128, 0.2), rgba(70, 70, 120, 0.1), rgba(99, 99, 128, 0.2));
  border-radius: calc(var(--border) + 0.5px);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover::before {
  opacity: 1;
}

.card-link {
  width: 100%;
  transition: all 0.2s ease-out;
  padding: 0.75rem 1rem;
}

.info * {
  transition: all 0.2s ease-out;
}

.info .info-title {
  font-size: 13px;
  font-weight: 500;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.85);
}

.info .info-desc {
  font-size: 11px;
  line-height: 1.4;
  color: rgba(179, 179, 193, 0.7);
}

.arrow-icon {
  opacity: 0;
  transform: translateX(-5px);
  transition: all 0.2s ease-out;
  will-change: opacity, transform;
}

.project-card:hover .arrow-icon {
  opacity: 0.7;
  transform: translateX(0);
}

.icon-wrapper {
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.project-card:hover .icon-wrapper {
  opacity: 1;
}
</style> 