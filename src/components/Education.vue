<template>
  <section id="education" class="min-h-screen bg-white py-20">
    <div class="max-w-4xl mx-auto px-6">
      <!-- Header -->
      <div ref="headerRef" class="text-center mb-16 opacity-0">
        <h2 class="text-5xl font-bold text-gray-800 mb-4">Formation</h2>
        <div
          class="w-24 h-1 bg-linear-to-r from-kelly-green via-dark-lemon to-acid-green mx-auto animated-background"
        ></div>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Ligne verticale -->
        <div
          class="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gray-300"
        ></div>

        <!-- Timeline Items -->
        <div class="space-y-12">
          <!-- Item 1 -->
          <div ref="timelineRef1" class="relative flex items-center opacity-0">
            <!-- Point sur la timeline -->
            <div
              class="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-kelly-green rounded-full border-4 border-white shadow-lg z-10"
            ></div>

            <!-- Contenu -->
            <div class="ml-16 md:ml-0 md:w-5/12 md:pr-8 md:text-right">
              <div class="bg-gray-50 p-6 rounded-lg shadow-md">
                <div class="text-sm font-semibold text-kelly-green mb-2">2025 - 2026</div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">
                  BUT Informatique : Administration Gestion et Exploitation des Données
                </h3>
                <p class="text-gray-600 mb-3">IUT, Université de Toulouse</p>
                <p class="text-sm text-gray-500">
                  Apprentissage avancé des techniques d'Intelligence Artificielle et de Machine
                  Learning
                </p>
                <div class="flex flex-wrap gap-2 mt-3">
                  <span class="px-3 py-1 bg-kelly-green/10 text-kelly-green rounded-full text-xs"
                    >Python</span
                  >
                  <span class="px-3 py-1 bg-kelly-green/10 text-kelly-green rounded-full text-xs"
                    >TensorFlow</span
                  >
                  <span class="px-3 py-1 bg-kelly-green/10 text-kelly-green rounded-full text-xs"
                    >SQL</span
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- Item 2 (côté opposé sur desktop) -->
          <div ref="timelineRef2" class="relative flex items-center opacity-0">
            <div
              class="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-dark-lemon rounded-full border-4 border-white shadow-lg z-10"
            ></div>

            <div class="ml-16 md:w-5/12 md:ml-auto md:pl-8">
              <div class="bg-gray-50 p-6 rounded-lg shadow-md">
                <div class="text-sm font-semibold text-dark-lemon mb-2">2023 - 2025</div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">
                  DUT Informatique : Administration Gestion et Exploitation des Données
                </h3>
                <p class="text-gray-600 mb-3">IUT, Université de Toulouse</p>
                <p class="text-sm text-gray-500">
                  Apprentissage avancé des techniques d'Intelligence Artificielle et de Machine
                  Learning
                </p>
                <div class="flex flex-wrap gap-2 mt-3">
                  <span class="px-3 py-1 bg-dark-lemon/10 text-dark-lemon rounded-full text-xs"
                    >Java</span
                  >
                  <span class="px-3 py-1 bg-dark-lemon/10 text-dark-lemon rounded-full text-xs"
                    >SQL</span
                  >
                  <span class="px-3 py-1 bg-dark-lemon/10 text-dark-lemon rounded-full text-xs"
                    >Méthodes AGILES</span
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- Item 3 -->
          <div ref="timelineRef3" class="relative flex items-center opacity-0">
            <div
              class="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-acid-green rounded-full border-4 border-white shadow-lg z-10"
            ></div>

            <div class="ml-16 md:ml-0 md:w-5/12 md:pr-8 md:text-right">
              <div class="bg-gray-50 p-6 rounded-lg shadow-md">
                <div class="text-sm font-semibold text-acid-green mb-2">2020 - 2023</div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">
                  Baccalauréat - Mathématiques et Numérique et Sciences Informatiques
                </h3>
                <p class="text-gray-600 mb-3">Lycée Jean Baptiste De Baudre</p>
                <p class="text-sm text-gray-500">
                  Bases de la programmation et développement web. Premiers projets en équipe.
                </p>
                <div class="flex flex-wrap gap-2 mt-3">
                  <span class="px-3 py-1 bg-acid-green/10 text-acid-green rounded-full text-xs"
                    >HTML/CSS</span
                  >
                  <span class="px-3 py-1 bg-acid-green/10 text-acid-green rounded-full text-xs"
                    >JavaScript</span
                  >
                  <span class="px-3 py-1 bg-acid-green/10 text-acid-green rounded-full text-xs"
                    >PHP</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const headerRef = ref<HTMLElement>()
const timelineRef1 = ref<HTMLElement>()
const timelineRef2 = ref<HTMLElement>()
const timelineRef3 = ref<HTMLElement>()

let observer: IntersectionObserver

const animateHeader = (element: Element) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out' }
  )
}

const animateTimelineItem = (element: Element, direction: 'left' | 'right') => {
  const xStart = direction === 'left' ? -100 : 100
  gsap.fromTo(
    element,
    { opacity: 0, x: xStart, scale: 0.8 },
    { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: 'back.out(1.7)' }
  )
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === headerRef.value) {
            animateHeader(entry.target)
          } else if (entry.target === timelineRef1.value) {
            animateTimelineItem(entry.target, 'right')
          } else if (entry.target === timelineRef2.value) {
            animateTimelineItem(entry.target, 'left')
          } else if (entry.target === timelineRef3.value) {
            animateTimelineItem(entry.target, 'right')
          }
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.3 }
  )
  const elements = [headerRef.value, timelineRef1.value, timelineRef2.value, timelineRef3.value]
  elements.forEach((el) => {
    if (el) observer.observe(el)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>
