<template>
  <div class="py-12 px-4">
    <div class="container mx-auto max-w-4xl">
      <!-- About Page Header -->
      <div class="mb-12">
        <h1 class="text-3xl font-semibold mb-6">Egor</h1>

        <!-- Two Column Layout for Introduction and Contact -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <!-- Introduction Column -->
          <div class="col-span-2">
            <h2 class="text-xl font-medium mb-4">Introduce</h2>
            <div class="space-y-4 text-gray-300">
              <p>
                I am a Full Stack developer from Germany with 5 years of
                professional experience in building and scaling web
                applications. My background spans both frontend and backend
                development, with a strong focus on delivering efficient,
                maintainable, and scalable solutions.
              </p>

              <p>
                I’m particularly passionate about automation and the
                transformative potential of artificial intelligence. I enjoy
                integrating AI-driven tools into development workflows and
                exploring how intelligent systems can optimize both user
                experience and engineering processes.
              </p>

              <p>
                Beyond just writing code, I take pride in solving real-world
                problems through thoughtful architecture, clean design patterns,
                and seamless user interfaces. I’m always curious about emerging
                technologies and continuously strive to grow as both a developer
                and a creative problem-solver.
              </p>
            </div>
          </div>

          <!-- Contact Column -->
          <div>
            <h2 class="text-xl font-medium mb-4">Contact</h2>
            <div class="space-y-2 text-gray-300">
              <p>
                Email:
                <a
                  href="mailto:cj29415440@gmail.com"
                  class="text-indigo-400 hover:underline"
                  >egorkruglov@gmail.com</a
                >
              </p>
              <p>Github: <span class="text-indigo-400">https://github.com/KindImagination</span></p>
            </div>

            <!-- Resume Download -->
            <div class="mt-6">
              <h2 class="text-xl font-medium mb-3">Resume</h2>
              <p class="text-sm text-gray-400 mb-3">
                Download my resume (PDF & EMB)
              </p>
              <a
                href="#"
                class="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills Section -->
      <div class="mt-16 mb-12">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <!-- Skill 1 -->
          <div class="bg-[#111118] p-6 rounded-lg border border-gray-800">
            <div class="mb-4">
              <div class="p-2 rounded-md bg-blue-500/20 inline-block">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#3B82F6"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
            </div>
            <p class="text-sm text-gray-400">My abilities</p>
          </div>

          <!-- Skill 2 -->
          <div class="bg-[#111118] p-6 rounded-lg border border-gray-800">
            <div class="mb-4">
              <div class="p-2 rounded-md bg-indigo-500/20 inline-block">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#6366F1"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
            </div>
            <p class="text-sm text-gray-400">My abilities</p>
          </div>

          <!-- Skill 3 -->
          <div class="bg-[#111118] p-6 rounded-lg border border-gray-800">
            <div class="mb-4">
              <div class="p-2 rounded-md bg-purple-500/20 inline-block">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#A855F7"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
            </div>
            <p class="text-sm text-gray-400">My abilities</p>
          </div>

          <!-- Skill 4 -->
          <div class="bg-[#111118] p-6 rounded-lg border border-gray-800">
            <div class="mb-4">
              <div class="p-2 rounded-md bg-teal-500/20 inline-block">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#14B8A6"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
            </div>
            <p class="text-sm text-gray-400">My abilities</p>
          </div>

          <!-- Skill 5 -->
          <div class="bg-[#111118] p-6 rounded-lg border border-gray-800">
            <div class="mb-4">
              <div class="p-2 rounded-md bg-orange-500/20 inline-block">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#F97316"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
            </div>
            <p class="text-sm text-gray-400">My abilities</p>
          </div>

          <!-- Skill 6 -->
          <div class="bg-[#111118] p-6 rounded-lg border border-gray-800">
            <div class="mb-4">
              <div class="p-2 rounded-md bg-amber-500/20 inline-block">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#F59E0B"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
            </div>
            <p class="text-sm text-gray-400">My abilities</p>
          </div>
        </div>
      </div>

      <!-- Work Experience Section -->
      <div class="mt-16">
        <!-- Experience 1 -->
        <div class="mb-16">
          <div class="flex flex-wrap items-center justify-between mb-6">
            <div class="flex items-center space-x-3">
              <span class="text-gray-400">2019.08 - 2023.08</span>
              <span
                class="flex items-center bg-white/10 px-2 py-1 rounded-md text-xs"
              >
                <div class="w-2 h-2 bg-indigo-400 rounded-full mr-1"></div>
                Company One
              </span>
            </div>
            <div class="text-gray-400 text-sm">UI Designer</div>
          </div>

          <!-- Project List -->
          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-medium mb-4">Project Title</h3>
              <ul class="space-y-3 text-gray-300 list-disc pl-6">
                <li>
                  This is a project description that can introduce one's project
                  achievements, project experience, and achievements.
                </li>
                <li>
                  This is a project description that can introduce one's project
                  achievements, project experience, and achievements.
                </li>
                <li>
                  This is a project description that can introduce one's project
                  achievements, project experience, and achievements.
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-xl font-medium mb-4">Project Title</h3>
              <ul class="space-y-3 text-gray-300 list-disc pl-6">
                <li>
                  This is a project description that can introduce one's project
                  achievements, project experience, and achievements.
                </li>
                <li>
                  This is a project description that can introduce one's project
                  achievements, project experience, and achievements.
                </li>
                <li>
                  This is a project description that can introduce one's project
                  achievements, project experience, and achievements.
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-xl font-medium mb-4">Project Title</h3>
              <ul class="space-y-3 text-gray-300 list-disc pl-6">
                <li>
                  This is a project description that can introduce one's project
                  achievements, project experience, and achievements.
                </li>
                <li>
                  This is a project description that can introduce one's project
                  achievements, project experience, and achievements.
                </li>
                <li>
                  This is a project description that can introduce one's project
                  achievements, project experience, and achievements.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Experience 2 -->
        <div>
          <div class="flex flex-wrap items-center justify-between mb-6">
            <div class="flex items-center space-x-3">
              <span class="text-gray-400">2016.05 - 2019.06</span>
              <span
                class="flex items-center bg-white/10 px-2 py-1 rounded-md text-xs"
              >
                <div class="w-2 h-2 bg-indigo-400 rounded-full mr-1"></div>
                Company Two
              </span>
            </div>
            <div class="text-gray-400 text-sm">UI Designer</div>
          </div>

          <!-- Project List -->
          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-medium mb-4">Project Title</h3>
              <ul class="space-y-3 text-gray-300 list-disc pl-6">
                <li>
                  This is a project description that can introduce one's project
                  achievements, project experience, and achievements.
                </li>
                <li>
                  This is a project description that can introduce one's project
                  achievements, project experience, and achievements.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// About page logic
</script>

<style scoped>
/* About page specific styles */
</style>
