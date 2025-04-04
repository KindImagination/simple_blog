<template>
  <div class="homepage">
    <!-- Canvas for fireworks animation (can be implemented later) -->
    <canvas class="fireworks"></canvas>
    
    <!-- Hero Section with animated typing -->
    <section class="hero py-20 px-4">
      <div class="container mx-auto max-w-3xl relative">
        <div class="flex flex-col items-center text-center">
          <div class="flex items-start gap-2 text-3xl md:text-4xl font-bold">
            <div class="text-gradient">Hi, I'm</div>
            <a href="/about" class="text-gradient-name hover:underline mb-2">Egor</a>
          </div>
          
          <div id="typed-output" class="text-gray-400 text-lg mt-5 h-7">
            <!-- Typed.js will insert content here -->
          </div>
        </div>
        
        <!-- Animated background circle effect -->
        <div class="absolute w-[512px] h-[512px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 
                    bg-dots opacity-60 rounded-full
                    max-md:w-[320px] max-md:h-[320px]"></div>
      </div>
    </section>

    <!-- Content divider -->
    <div class="content-divider w-full max-w-4xl mx-auto h-px bg-dots-line"></div>

    <!-- Projects Section -->
    <section class="projects py-16 px-4">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-3xl font-bold text-center mb-8 text-gradient">What did I do</h2>
        
        <!-- Project Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Larkmap Project -->
          <div class="project-card magical">
            <a href="https://larkmap.com" target="_blank" class="flex items-center p-4 gap-3">
              <img src="https://via.placeholder.com/40" alt="Larkmap" class="w-10 h-10 opacity-60">
              <div class="info opacity-80">
                <div class="info-title">Larkmap</div>
                <div class="info-desc">Designer website navigation</div>
              </div>
              <div class="arrow-icon ml-auto opacity-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M10.55 7.58332H1.16663V6.41665H10.55L7.75415 3.62082L8.5791 2.79587L12.1645 6.3813C12.5062 6.72299 12.5062 7.27701 12.1645 7.61873L8.5791 11.2042L7.75415 10.3792L10.55 7.58332Z" fill="#B3B3C1"></path>
                </svg>
              </div>
            </a>
          </div>
          
          <!-- Qingicon Project -->
          <div class="project-card magical">
            <a href="https://qingicon.com" target="_blank" class="flex items-center p-4 gap-3">
              <img src="https://via.placeholder.com/40" alt="Qingicon" class="w-10 h-10 opacity-60">
              <div class="info opacity-80">
                <div class="info-title">QingIcon</div>
                <div class="info-desc">2200+ fill, dual color icon</div>
              </div>
              <div class="arrow-icon ml-auto opacity-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M10.55 7.58332H1.16663V6.41665H10.55L7.75415 3.62082L8.5791 2.79587L12.1645 6.3813C12.5062 6.72299 12.5062 7.27701 12.1645 7.61873L8.5791 11.2042L7.75415 10.3792L10.55 7.58332Z" fill="#B3B3C1"></path>
                </svg>
              </div>
            </a>
          </div>
          
          <!-- Figicon Project -->
          <div class="project-card magical">
            <a href="https://www.figma.com/community/plugin/1111565622161029659" target="_blank" class="flex items-center p-4 gap-3">
              <img src="https://via.placeholder.com/40" alt="Figicon" class="w-10 h-10 opacity-60">
              <div class="info opacity-80">
                <div class="info-title">Figicon</div>
                <div class="info-desc">Figma icon library plugin</div>
              </div>
              <div class="arrow-icon ml-auto opacity-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M10.55 7.58332H1.16663V6.41665H10.55L7.75415 3.62082L8.5791 2.79587L12.1645 6.3813C12.5062 6.72299 12.5062 7.27701 12.1645 7.61873L8.5791 11.2042L7.75415 10.3792L10.55 7.58332Z" fill="#B3B3C1"></path>
                </svg>
              </div>
            </a>
          </div>
          
          <!-- RPB Project -->
          <div class="project-card magical">
            <a href="https://www.figma.com/community/plugin/1286263811056993042" target="_blank" class="flex items-center p-4 gap-3">
              <img src="https://via.placeholder.com/40" alt="RPB" class="w-10 h-10 opacity-60">
              <div class="info opacity-80">
                <div class="info-title">RPB</div>
                <div class="info-desc">Replace the Figma page background</div>
              </div>
              <div class="arrow-icon ml-auto opacity-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M10.55 7.58332H1.16663V6.41665H10.55L7.75415 3.62082L8.5791 2.79587L12.1645 6.3813C12.5062 6.72299 12.5062 7.27701 12.1645 7.61873L8.5791 11.2042L7.75415 10.3792L10.55 7.58332Z" fill="#B3B3C1"></path>
                </svg>
              </div>
            </a>
          </div>
          
          <!-- Q-Adapter Project -->
          <div class="project-card magical">
            <a href="https://adapter.biliui.com" target="_blank" class="flex items-center p-4 gap-3">
              <img src="https://via.placeholder.com/40" alt="Q-Adapter" class="w-10 h-10 opacity-60">
              <div class="info opacity-80">
                <div class="info-title">Q-Adapter</div>
                <div class="info-desc">B-end product layout adaptation</div>
              </div>
              <div class="arrow-icon ml-auto opacity-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M10.55 7.58332H1.16663V6.41665H10.55L7.75415 3.62082L8.5791 2.79587L12.1645 6.3813C12.5062 6.72299 12.5062 7.27701 12.1645 7.61873L8.5791 11.2042L7.75415 10.3792L10.55 7.58332Z" fill="#B3B3C1"></path>
                </svg>
              </div>
            </a>
          </div>
          
          <!-- Biliui Project -->
          <div class="project-card magical">
            <a href="https://biliui.com" target="_blank" class="flex items-center p-4 gap-3">
              <img src="https://via.placeholder.com/40" alt="Biliui" class="w-10 h-10 opacity-60">
              <div class="info opacity-80">
                <div class="info-title">Biliui</div>
                <div class="info-desc">First generation blog</div>
              </div>
              <div class="arrow-icon ml-auto opacity-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M10.55 7.58332H1.16663V6.41665H10.55L7.75415 3.62082L8.5791 2.79587L12.1645 6.3813C12.5062 6.72299 12.5062 7.27701 12.1645 7.61873L8.5791 11.2042L7.75415 10.3792L10.55 7.58332Z" fill="#B3B3C1"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
        
        <!-- Plus icon separator -->
        <div class="flex justify-center my-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" class="opacity-50">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 8V0H4.5V8H3.5Z" fill="#62616F"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4.5H0V3.5H8V4.5Z" fill="#62616F"></path>
          </svg>
        </div>
        
        <!-- Second row of project cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- YuQue Project -->
          <div class="project-card magical">
            <a href="https://www.yuque.com/asorn" target="_blank" class="flex items-center p-4 gap-3">
              <img src="https://via.placeholder.com/40" alt="Yu Que" class="w-10 h-10 opacity-60">
              <div class="info opacity-80">
                <div class="info-title">Yu Que</div>
                <div class="info-desc">My knowledge garden</div>
              </div>
              <div class="arrow-icon ml-auto opacity-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M10.55 7.58332H1.16663V6.41665H10.55L7.75415 3.62082L8.5791 2.79587L12.1645 6.3813C12.5062 6.72299 12.5062 7.27701 12.1645 7.61873L8.5791 11.2042L7.75415 10.3792L10.55 7.58332Z" fill="#B3B3C1"></path>
                </svg>
              </div>
            </a>
          </div>
          
          <!-- Github Project -->
          <div class="project-card magical">
            <a href="https://github.com/asorn" target="_blank" class="flex items-center p-4 gap-3">
              <img src="https://via.placeholder.com/40" alt="Github" class="w-10 h-10 opacity-60">
              <div class="info opacity-80">
                <div class="info-title">Github</div>
                <div class="info-desc">My code garden</div>
              </div>
              <div class="arrow-icon ml-auto opacity-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M10.55 7.58332H1.16663V6.41665H10.55L7.75415 3.62082L8.5791 2.79587L12.1645 6.3813C12.5062 6.72299 12.5062 7.27701 12.1645 7.61873L8.5791 11.2042L7.75415 10.3792L10.55 7.58332Z" fill="#B3B3C1"></path>
                </svg>
              </div>
            </a>
          </div>
          
          <!-- Figma Project -->
          <div class="project-card magical">
            <a href="https://www.figma.com/@asorn" target="_blank" class="flex items-center p-4 gap-3">
              <img src="https://via.placeholder.com/40" alt="Figma" class="w-10 h-10 opacity-60">
              <div class="info opacity-80">
                <div class="info-title">Figma</div>
                <div class="info-desc">My design garden</div>
              </div>
              <div class="arrow-icon ml-auto opacity-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M10.55 7.58332H1.16663V6.41665H10.55L7.75415 3.62082L8.5791 2.79587L12.1645 6.3813C12.5062 6.72299 12.5062 7.27701 12.1645 7.61873L8.5791 11.2042L7.75415 10.3792L10.55 7.58332Z" fill="#B3B3C1"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Visual effects -->
    <div class="widget">
      <div class="shape-light"></div>
      <div class="shape-star">
        <div class="rising-stars">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="shape-earth"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  // Initialize the typing effect
  if (typeof window !== 'undefined') {
    import('typed.js').then(({ default: Typed }) => {
      new Typed('#typed-output', {
        strings: [
          ">_ welcome to my secret garden ^1000",
          ">_ and let's explore it now ^1000",
        ],
        typeSpeed: 50,
        backSpeed: 20,
        startDelay: 300,
        loop: true,
        showCursor: false,
      });
    });

    // Initialize the magical hover effect
    const handleMouseMove = (e: MouseEvent) => {
      document.querySelectorAll('.magical').forEach((element: any) => {
        if (!element.querySelector('.show')) {
          element.insertAdjacentHTML('beforeend', "<div class='show'></div>");
        }
        
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        element.style.setProperty('--mouse-x', `${x}px`);
        element.style.setProperty('--mouse-y', `${y}px`);
        
        const show = element.querySelector('.show');
        if (show) {
          show.style.opacity = (x >= 0 && x <= element.clientWidth && y >= 0 && y <= element.clientHeight) ? '1' : '0';
        }
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
  }
});
</script>

<style scoped>
.homepage {
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

.fireworks {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  z-index: -999;
}

/* Gradient text styles */
.text-gradient {
  background: linear-gradient(180deg, #E8E8F6 0%, rgba(232,232,246,0.72) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-gradient-name {
  position: relative;
  background: linear-gradient(90deg, #A29CD3 0%, #E8BFAC 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-gradient-name:hover::after {
  content: '';
  position: absolute;
  inset: auto 0 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, #A29CD3 0%, #E8BFAC 100%);
}

/* Background dot pattern */
.bg-dots {
  background-image: radial-gradient(circle at center, rgba(255,255,255,0.3) 1px, transparent 1px);
  background-size: 8px 8px;
  mask-image: radial-gradient(at center, #fff, transparent 72%);
  -webkit-mask-image: radial-gradient(at center, #fff, transparent 72%);
}

.bg-dots-line {
  background-image: radial-gradient(circle at center, #4E4E64 1px, transparent 1px);
  background-size: 6px 1px;
  background-repeat: repeat;
  mask-image: radial-gradient(at center, #fff, transparent 90%);
  -webkit-mask-image: radial-gradient(at center, #fff, transparent 90%);
}

/* Loader animation */
.loader {
  margin: 32px 0 48px 0;
  width: 40px;
  height: 8px;
  --c: #6361DC 90deg, #0E0E13 0;
  background: conic-gradient(from 135deg at top, var(--c)) 0 0,
              conic-gradient(from -45deg at bottom, var(--c)) 0 100%;
  background-size: calc(100%/4) 50%;
  background-repeat: repeat-x;
  animation: loaderAnim 2s infinite;
}

@keyframes loaderAnim {
  60%, 100% {
    background-position: calc(100%/3) 0, calc(100%/-3) 100%;
  }
}

/* Project card styling */
.project-card {
  --circle-size: 400px;
  --inset: 1px;
  --border: 6px;
  position: relative;
  border-radius: var(--border);
  background-color: #141419;
  box-shadow: 0px 0px 8px 0px rgba(10,10,14,0.4);
}

.project-card::before, 
.project-card::after {
  content: '';
  position: absolute;
  width: calc(100% + var(--inset)*2);
  height: calc(100% + var(--inset)*2);
  border-radius: var(--border);
  inset: calc(0 - var(--inset));
}

.project-card::before {
  background: radial-gradient(var(--circle-size) circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.3), transparent 40%);
  z-index: -1;
}

.project-card::after {
  background: linear-gradient(180deg, rgba(78,78,100,0.48) 0%, rgba(78,78,100,0.2) 100%);
  z-index: -2;
}

.project-card .show {
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: var(--border);
  opacity: 0;
  pointer-events: none;
  background: radial-gradient(var(--circle-size) circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.01), transparent 40%);
}

.magical {
  --circle-size: 400px;
  --inset: 1px;
  --border: 6px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border);
  background-color: #141419;
}

.project-card a:hover .info,
.project-card a:hover .arrow-icon,
.project-card a:hover img {
  opacity: 1;
  transition: opacity 0.4s;
}

.info * {
  transition: opacity 0.4s;
}

.info .info-title {
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  background: linear-gradient(180deg, #E8E8F6 0%, rgba(232,232,246,0.72) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.info .info-desc {
  font-size: 12px;
  line-height: 20px;
  color: #B3B3C1;
}

/* Background effects */
.widget {
  position: relative;
  width: 100%;
  height: 0;
}

.widget .shape-light {
  z-index: -99;
  position: fixed;
  bottom: -180px;
  left: calc(50% - 300px);
  width: 600px;
  height: 200px;
  border-radius: 9999px;
  background: rgba(99,97,220,0.4);
  filter: blur(100px);
}

.widget .shape-star {
  position: fixed;
  z-index: -98;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  opacity: 0.7;
  pointer-events: none;
}

.widget .shape-earth {
  position: fixed;
  z-index: -97;
  bottom: -1840px;
  width: 100%;
  height: 1920px;
  border-radius: 9999px;
  background: #0E0E13;
  filter: blur(2px);
}

/* Responsive adjustments */
@media screen and (max-width: 768px) {
  .projects .grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 640px) {
  .projects .grid {
    grid-template-columns: 1fr;
  }
}
</style> 