<template>
  <section ref="heroRef" :class="heroClasses">
    <!-- Background gradient animé -->
    <div
      class="absolute inset-0 bg-linear-to-tr from-kelly-green via-dark-lemon to-acid-green"
    ></div>

    <!-- Contenu principal -->
    <div class="relative z-10 flex items-center justify-center h-full">
      <div class="text-center font-poppins text-white">
        <h1 ref="titleRef" :class="titleClasses">
          {{ displayedText }}<span class="cursor font-medium">_</span>
        </h1>
        <p :class="subtitleClasses">Data Scientist</p>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      v-show="!isScrolled"
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
    >
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

// Refs
const heroRef = ref<HTMLElement>()
const titleRef = ref<HTMLElement>()

// State
const isScrolled = ref(false)
const scrollY = ref(0)
const displayedText = ref('')

// Computed
const heroClasses = computed(() => [
  'relative w-full transition-all duration-500 ease-in-out',
  isScrolled.value ? 'h-[20vh]' : 'h-screen',
])

const titleClasses = computed(() => [
  'font-bold transition-all duration-500',
  isScrolled.value ? 'text-3xl md:text-4xl' : 'text-6xl md:text-7xl',
])

const subtitleClasses = computed(() => [
  'font-light opacity-90 mt-4 transition-all duration-500',
  isScrolled.value ? 'text-lg md:text-xl' : 'text-2xl md:text-3xl',
])

// Methods
const handleScroll = () => {
  scrollY.value = window.scrollY
  if (!isScrolled.value && scrollY.value > 100) {
    isScrolled.value = true
  } else if (isScrolled.value && scrollY.value == 0) {
    // Retour en haut
  }
}

const handleWheel = (event: WheelEvent) => {
  console.log('Wheel event:', event.deltaY, 'ScrollY:', scrollY.value)
}

const startTypewriter = () => {
  const text = 'Colin Lespilette'
  displayedText.value = ''

  gsap.to(
    {},
    {
      duration: text.length * 0.15,
      ease: 'none',
      onUpdate: function () {
        const progress = this.progress()
        const currentLength = Math.floor(progress * text.length)
        displayedText.value = text.substring(0, currentLength)
      },
    }
  )
}

// Lifecycle
onMounted(() => {
  startTypewriter()
  window.addEventListener('scroll', handleScroll)
  window.removeEventListener('wheel', handleWheel)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('wheel', handleWheel)
})
</script>

<style scoped>
.cursor {
  animation: blink 1.15s infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
