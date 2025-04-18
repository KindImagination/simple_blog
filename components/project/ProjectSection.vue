<template>
  <div class="project-section-container">
    <div class="section-heading">
      <div class="heading-title">What I've built</div>
    </div>
    
    <div ref="projectsContainer" class="projects-container">
      <project-card
        v-for="(project, index) in projects"
        :key="index"
        :title="project.title"
        :description="project.description"
        :url="project.url"
        :imageSrc="project.imageSrc"
        class="project-card-item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProjectCard from './ProjectCard.vue';

const projectsContainer = ref<HTMLElement | null>(null);

const projects = [
  {
    title: 'Git',
    description: 'My code repositories',
    url: 'https://github.com/KindImagination',
    imageSrc: '/images/github.png'
  },
  {
    title: 'AI Assistant',
    description: 'A smart AI assistant tool',
    url: 'https://example.com/ai',
    imageSrc: '/images/icon-ai.svg'
  },
  {
    title: 'Data Visualization',
    description: 'Interactive data dashboards',
    url: 'https://example.com/data',
    imageSrc: '/images/icon-data.svg'
  },
  {
    title: 'Mobile App',
    description: 'Cross-platform mobile application',
    url: 'https://example.com/app',
    imageSrc: '/images/icon-mobile.svg'
  },
  {
    title: 'E-commerce Platform',
    description: 'Online shopping experience',
    url: 'https://example.com/shop',
    imageSrc: '/images/icon-shop.svg'
  },
  {
    title: 'Game Development',
    description: 'Browser-based game engine',
    url: 'https://example.com/game',
    imageSrc: '/images/icon-game.svg'
  }
];
</script>

<style scoped>
.project-section-container {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3rem 1.5rem;
  margin-top: 2rem;
  gap: 2.5rem;
  background: radial-gradient(circle at center, rgba(30, 30, 45, 0.3), transparent 70%);
}

.section-heading {
  text-align: center;
  margin-bottom: 1.5rem;
}

.heading-title {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(90deg, #E8E8F6, #c7c7ea);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.75rem;
  position: relative;
  display: inline-block;
}

.heading-title::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -10px;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, rgba(115, 103, 240, 0.8), rgba(193, 143, 255, 0.6));
  transform: translateX(-50%);
  border-radius: 3px;
}

.heading-subtitle {
  font-size: 1.1rem;
  color: rgba(179, 179, 193, 0.8);
  margin-top: 1rem;
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.project-card-item {
  display: flex;
  height: 100%;
  min-height: 80px;
}

@media (min-width: 768px) {
  .project-section-container {
    padding: 4rem 2rem;
  }

  .projects-container {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .heading-title {
    font-size: 2.25rem;
  }
}

@media (max-width: 767px) {
  .projects-container {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
  
  .project-section-container {
    padding: 2.5rem 1.25rem;
  }
}
</style> 