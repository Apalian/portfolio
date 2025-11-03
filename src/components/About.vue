<template>
  <section class="min-h-screen bg-gray-50 py-20">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div ref="headerRef" class="text-center mb-16 opacity-0">
        <h2 class="text-5xl font-bold text-gray-800 mb-4">À propos</h2>
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
            <p class="opacity-0"><span class="font-semibold">Localisation:</span> Paris, France</p>
            <p class="opacity-0"><span class="font-semibold">Formation:</span> Bac +3</p>
            <p class="opacity-0">
              <span class="font-semibold">Spécialité:</span> Data & Machine Learning
            </p>
          </div>
        </div>

        <!-- Texte description -->
        <div ref="textRef" class="space-y-6">
          <p class="text-xl text-gray-700 leading-relaxed opacity-0">
            Passionné par l'analyse de données depuis X années, je transforme les données complexes
            en insights actionnables qui guident les décisions stratégiques.
          </p>

          <p class="text-lg text-gray-600 leading-relaxed opacity-0">
            Mon parcours m'a mené de l'université à des projets concrets dans des secteurs variés :
            finance, santé, e-commerce. J'adore résoudre des problèmes complexes avec des
            algorithmes élégants.
          </p>

          <p class="text-lg text-gray-600 leading-relaxed opacity-0">
            Quand je ne code pas, vous me trouverez probablement en train de lire les derniers
            papers de recherche, ou d'explorer de nouveaux frameworks ML.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

// Refs pour les éléments à animer
const headerRef = ref<HTMLElement>()
const photoRef = ref<HTMLElement>()
const infoRef = ref<HTMLElement>()
const textRef = ref<HTMLElement>()

let observer: IntersectionObserver

// Animations GSAP
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
