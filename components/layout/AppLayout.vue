<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow">
      <nav class="container mx-auto px-4 py-4">
        <h1 class="text-2xl font-bold text-gray-900">EgorDev</h1>
      </nav>
    </header>

    <!-- Main content -->
    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t">
      <div class="container mx-auto px-4 py-6 text-center text-gray-600">
        © {{ new Date().getFullYear() }} EgorDev. All rights reserved.
      </div>
    </footer>
  </div>
</template> 