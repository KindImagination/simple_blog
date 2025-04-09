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
      
      <div v-if="book" class="bg-[#1A1A22]/80 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/5">
        <h1 class="text-2xl md:text-3xl font-bold text-white mb-4">Book Detail Page is Working!</h1>
        <p class="text-white/80 mb-4">You are viewing the book with ID: <strong>{{ $route.params.id }}</strong></p>
        
        <div class="flex flex-col md:flex-row gap-8">
          <div class="w-full md:w-1/3 lg:w-1/4 flex justify-center md:justify-start">
            <div class="relative w-48 h-64 shadow-2xl">
              <img 
                :src="book.coverImage" 
                :alt="book.title" 
                class="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
          
          <div class="w-full md:w-2/3 lg:w-3/4">
            <h2 class="text-2xl font-bold text-white mb-2">{{ book.title }}</h2>
            <h3 class="text-xl text-white/80 mb-4">by {{ book.author }}</h3>
            
            <div class="flex items-center mb-6">
              <div class="progress-bar w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                <div 
                  class="h-full bg-gradient-to-r from-purple-600 to-purple-400" 
                  :style="{ width: `${book.progress}%` }"
                ></div>
              </div>
              <span class="ml-2 text-white/80 text-sm">{{ book.progress }}% read</span>
            </div>
            
            <p class="text-white/80 mb-4">{{ book.description }}</p>
          </div>
        </div>
      </div>
      
      <div v-else class="bg-[#1A1A22]/80 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/5">
        <h2 class="text-xl font-bold text-white">Book not found</h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { books } from '~/data/books';

const route = useRoute();
const id = computed(() => route.params.id as string);

// Get the book based on the id (which would be the same as slug in this case)
const book = computed(() => {
  return books.find(b => b.slug === id.value);
});
</script>

<style scoped>
.book-detail {
  background-color: #0B0B0F;
  color: white;
}
</style> 