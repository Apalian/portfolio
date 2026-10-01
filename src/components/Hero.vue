<template>
  <section id="hero" ref="heroRef" class="relative w-full h-svh min-h-[560px]">
    <!-- Background gradient animé -->
    <div
      class="absolute inset-0 bg-linear-to-tr from-kelly-green via-dark-lemon to-acid-green"
    ></div>

    <!-- Contenu principal -->
    <div class="relative flex items-center justify-center h-full">
      <div class="text-center font-poppins text-white px-6">
        <h1 ref="titleRef" class="font-bold text-5xl sm:text-6xl md:text-7xl leading-tight min-h-[1.25em]">
          {{ displayedText }}<span class="cursor font-medium">_</span>
        </h1>
        <p class="font-light opacity-90 mt-4 text-xl sm:text-2xl md:text-3xl">
          {{ t('hero.subtitle') }}
        </p>
        <div ref="ctaRef" class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 opacity-0">
          <a
            :href="resumeUrl"
            target="_blank"
            rel="noopener"
            class="hero-btn w-56 sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white text-kelly-green font-semibold shadow-lg"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6M7 3h7l5 5v11a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />
            </svg>
            {{ t('hero.resume') }}
          </a>
          <a
            href="#contact"
            @click.prevent="scrollTo('contact')"
            class="hero-btn w-56 sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-full border-2 border-white/80 text-white font-semibold"
          >
            {{ t('hero.contact') }}
          </a>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      ref="scrollRef"
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
      @click="scrollTo('about')"
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
import { ref, computed, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useI18n } from 'vue-i18n'

// Enregistrer le plugin ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin)

const { t, locale } = useI18n()
const resumeUrl = computed(() => (locale.value === 'en' ? './resume-en.pdf' : './resume-fr.pdf'))

// Refs
const heroRef = ref<HTMLElement>()
const titleRef = ref<HTMLElement>()
const scrollRef = ref<HTMLElement>()
const ctaRef = ref<HTMLElement>()

const displayedText = ref('')

// Methods
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

const scrollTo = (id: string) => {
  const target = document.getElementById(id)
  if (!target) return
  gsap.to(window, { duration: 1.2, scrollTo: { y: target, offsetY: 0 }, ease: 'power2.inOut' })
}

// Lifecycle
onMounted(() => {
  startTypewriter()
  if (ctaRef.value) {
    gsap.fromTo(ctaRef.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 1.2, ease: 'power2.out' })
  }
})
</script>

<style scoped>
.hero-btn {
  transition:
    transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.3s ease,
    background-color 0.3s ease;
}

@media (hover: hover) {
  .hero-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 28px -10px rgb(0 0 0 / 0.35);
  }
}

.cursor {
  animation: blink 1.15s infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
