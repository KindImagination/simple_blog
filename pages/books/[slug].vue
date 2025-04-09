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
      
      <!-- Related Books Section - show only if there are related books -->
      <div v-if="relatedBooks.length > 0" class="related-books mt-12">
        <h2 class="text-2xl font-bold mb-6 text-white">Related Books</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <NuxtLink 
            v-for="relatedBook in relatedBooks" 
            :key="relatedBook.slug"
            :to="`/books/${relatedBook.slug}`"
            class="related-book bg-[#1A1A22] rounded-lg p-4 cursor-pointer hover:bg-[#22222A] transition-all"
          >
            <div class="flex items-center">
              <div class="w-16 h-24 mr-4">
                <img 
                  :src="relatedBook.coverImage" 
                  :alt="relatedBook.title" 
                  class="w-full h-full object-cover rounded-md"
                />
              </div>
              <div>
                <h3 class="text-white font-semibold">{{ relatedBook.title }}</h3>
                <p class="text-white/60 text-sm">{{ relatedBook.author }}</p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    
    <div class="background-effects fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
      <div class="shape-light absolute top-[-200px] left-[calc(50%-300px)] w-[700px] h-[400px] rounded-full bg-purple-900/20 blur-[120px] z-[-15]"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { books } from '~/data/books';

// Define page metadata
definePageMeta({
  layout: 'default'
});

const route = useRoute();
const slug = computed(() => route.params.slug as string);

// Get the current book based on the slug
const book = computed(() => {
  return books.find(b => b.slug === slug.value);
});

// Get related books (books in the same categories)
const relatedBooks = computed(() => {
  if (!book.value) return [];
  
  // Get books that share at least one category with the current book
  const filtered = books.filter(b => {
    if (b.slug === book.value?.slug) return false; // Exclude current book
    
    // Check if the book shares any categories with the current book
    return b.categories.some(category => 
      book.value?.categories.includes(category)
    );
  });
  
  // Return at most 4 related books
  return filtered.slice(0, 4);
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