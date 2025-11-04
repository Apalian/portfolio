<template>
  <div
    v-show="showButton"
    class="fixed bottom-8 right-8 z-40"
  >
    <!-- Cercle de progression -->
    <div class="relative">
      <svg
        class="w-14 h-14 transform -rotate-90"
        viewBox="0 0 56 56"
      >
        <!-- Cercle de fond -->
        <circle
          cx="28"
          cy="28"
          r="24"
          stroke="rgba(255, 255, 255, 0.2)"
          stroke-width="4"
          fill="none"
        />
        <!-- Cercle de progression -->
        <circle
          ref="progressCircle"
          cx="28"
          cy="28"
          r="24"
          stroke="url(#gradient)"
          stroke-width="4"
          fill="none"
          stroke-linecap="round"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="dashOffset"
          class="transition-all duration-300 ease-out"
        />
        <!-- Gradient pour le cercle -->
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#49a115;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#94b911;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#b4c50c;stop-opacity:1" />
          </linearGradient>
        </defs>
      </svg>

      <!-- Bouton au centre -->
      <button
        @click="scrollToTop"
        class="absolute inset-0 m-auto w-10 h-10 bg-white/90 backdrop-blur-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      >
        <svg
          class="w-5 h-5 mx-auto text-gray-700 group-hover:text-kelly-green transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

// Props
interface Props {
  sections: string[]
}

const props = withDefaults(defineProps<Props>(), {
  sections: () => ['hero', 'about', 'education', 'skills', 'projects']
})

// Refs
const progressCircle = ref<SVGCircleElement>()
const showButton = ref(false)
const scrollProgress = ref(0)
const currentSectionIndex = ref(0)

// Computed
const circumference = computed(() => 2 * Math.PI * 24)
const dashOffset = computed(() => {
  return circumference.value - (scrollProgress.value * circumference.value)
})


// Methods
const calculateProgress = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  const progress = Math.min(scrollTop / docHeight, 1)

  scrollProgress.value = progress
  showButton.value = scrollTop > 300

  const sections = props.sections.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[]

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i]
    const rect = section.getBoundingClientRect()

    if (rect.top <= window.innerHeight / 2) {
      currentSectionIndex.value = i
      break
    }
  }
}

const scrollToTop = () => {
  if (!progressCircle.value) return

  gsap.to(window, {
    duration: 1.5,
    scrollTo: { y: 0 },
    ease: "power2.inOut"
  })

}

const handleScroll = () => {
  requestAnimationFrame(calculateProgress)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  calculateProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
