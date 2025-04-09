<template>
  <div class="book-detail min-h-screen">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32 relative z-10">
      <div class="navigation mb-8">
        <NuxtLink 
          to="/books" 
          class="flex items-center text-white/80 hover:text-white transition-all"
        >
          <span class="mr-2">←</span> Back to Bookshelf
        </NuxtLink>
      </div>
      
      <div v-if="book" class="book-content bg-[#1A1A22]/80 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/5">
        <div class="flex flex-col md:flex-row gap-8">
          <div class="book-image w-full md:w-1/3 lg:w-1/4 flex justify-center md:justify-start">
            <div class="relative w-48 h-64 shadow-2xl">
              <img 
                :src="book.coverImage" 
                :alt="book.title" 
                class="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
          
          <div class="book-info w-full md:w-2/3 lg:w-3/4">
            <h1 class="text-2xl md:text-3xl font-bold text-white mb-2">{{ book.title }}</h1>
            <h2 class="text-xl text-white/80 mb-4">by {{ book.author }}</h2>
            
            <div class="flex items-center mb-6">
              <div class="progress-bar w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                <div 
                  class="h-full bg-gradient-to-r from-purple-600 to-purple-400" 
                  :style="{ width: `${book.progress}%` }"
                ></div>
              </div>
              <span class="ml-2 text-white/80 text-sm">{{ book.progress }}% read</span>
            </div>
            
            <h3 class="text-xl font-semibold mb-2 text-white">Description</h3>
            <p class="text-white/80 mb-6">{{ book.description }}</p>
            
            <h3 class="text-xl font-semibold mb-2 text-white">My Thoughts</h3>
            <p class="text-white/80 mb-6">{{ book.thoughts }}</p>
            
            <h3 class="text-xl font-semibold mb-2 text-white">Key Takeaways</h3>
            <ul class="list-disc list-inside mb-6">
              <li 
                v-for="(takeaway, index) in book.keyTakeaways" 
                :key="index"
                class="text-white/80 mb-1"
              >
                {{ takeaway }}
              </li>
            </ul>
            
            <h3 class="text-xl font-semibold mb-2 text-white">Categories</h3>
            <div class="flex flex-wrap gap-2 mb-6">
              <span 
                v-for="(category, index) in book.categories" 
                :key="index"
                class="px-3 py-1 bg-purple-800/30 text-purple-200 rounded-full text-sm"
              >
                {{ category }}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div v-else class="bg-[#1A1A22]/80 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/5">
        <h2 class="text-xl font-bold text-white">Book not found</h2>
      </div>
    </div>
    
    <div class="background-effects fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
      <div class="shape-light absolute top-[-200px] left-[calc(50%-300px)] w-[700px] h-[400px] rounded-full bg-purple-900/20 blur-[120px] z-[-15]"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { books } from '~/data/books';

const route = useRoute();
const id = computed(() => route.params.id as string);

// Get the book based on the id
const book = computed(() => {
  return books.find(b => b.slug === id.value);
});
</script>

<style scoped>
.book-detail {
  background-color: #0B0B0F;
  color: white;
}

/* Add hover effect for book cards */
.related-book {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.related-book:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
}
</style> 