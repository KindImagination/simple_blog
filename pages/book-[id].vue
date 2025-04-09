<template>
  <div class="min-h-screen bg-[#0B0B0F] text-white py-20">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold mb-6">Book Details Test</h1>
      <p class="mb-4">This is a test page for a dynamic route.</p>
      <p class="mb-4">Book ID: <strong>{{ $route.params.id }}</strong></p>
      <NuxtLink to="/books" class="inline-block px-4 py-2 bg-purple-600 rounded-md hover:bg-purple-700 transition-colors">
        Back to Books
      </NuxtLink>
    </div>
  </div>
</template> 