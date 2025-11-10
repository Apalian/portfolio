<template>
  <section id="about" class="min-h-screen bg-gray-50 py-20">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div ref="headerRef" class="text-center mb-16 opacity-0">
        <h2 class="text-5xl font-bold text-gray-800 mb-4">{{ t('about.title') }}</h2>
        <div
          class="w-24 h-1 bg-linear-to-r from-kelly-green via-dark-lemon to-acid-green mx-auto animated-background"
        ></div>
      </div>

      <!-- Contenu principal -->
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Photo + info -->
        <div class="text-center lg:text-left">
          <!-- Photo placeholder -->
          <div
            ref="photoRef"
            class="w-64 h-64 bg-gray-300 rounded-full mx-auto lg:mx-0 mb-8 opacity-0"
          >
            <img
              src="/src/assets/images/profile.jpg"
              alt="Colin Lespilette"
              class="w-full h-full object-cover rounded-full"
            />
          </div>

          <!-- Info rapide -->
          <div ref="infoRef" class="space-y-2 text-lg text-gray-600">
            <p class="opacity-0"><span class="font-semibold">{{ t('about.location') }}:</span> {{ t('about.locationValue') }}</p>
            <p class="opacity-0"><span class="font-semibold">{{ t('about.education') }}:</span> {{ t('about.educationValue') }}</p>
            <p class="opacity-0">
              <span class="font-semibold">{{ t('about.specialty') }}:</span> {{ t('about.specialtyValue') }}
            </p>
          </div>
        </div>

        <!-- Texte description -->
        <div ref="textRef" class="space-y-6">
          <p class="text-lg text-gray-700 leading-relaxed opacity-0">
            {{ t('about.description.p1') }}
          </p>

          <p class="text-lg text-gray-700 leading-relaxed opacity-0">
            {{ t('about.description.p2') }}
          </p>

          <p class="text-lg text-gray-700 leading-relaxed opacity-0">
            {{ t('about.description.p3') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

// Refs
const headerRef = ref<HTMLElement>()
const photoRef = ref<HTMLElement>()
const infoRef = ref<HTMLElement>()
const textRef = ref<HTMLElement>()

let observer: IntersectionObserver

const animateHeader = (element: Element) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
    }
  )
}

const animatePhoto = (element: Element) => {
  gsap.fromTo(
    element,
    { opacity: 0, x: -100, rotation: -10 },
    {
      opacity: 1,
      x: 0,
      rotation: 0,
      duration: 1,
      ease: 'back.out(1.7)',
    }
  )
}

const animateText = (element: Element) => {
  gsap.fromTo(
    element.children,
    { opacity: 0, x: 50 },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      stagger: 0.3,
      ease: 'power2.out',
    }
  )
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Déclencher l'animation selon l'élément
          if (entry.target === headerRef.value) {
            animateHeader(entry.target)
          } else if (entry.target === photoRef.value) {
            animatePhoto(entry.target)
          } else if (entry.target === infoRef.value) {
            animateText(entry.target)
          } else if (entry.target === textRef.value) {
            animateText(entry.target)
          }

          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px',
    }
  )

  const elements = [headerRef.value, photoRef.value, infoRef.value, textRef.value]
  elements.forEach((el) => {
    if (el) observer.observe(el)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>
