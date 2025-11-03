<template>
  <section class="h-screen bg-gray-50 py-20">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div ref="headerRef" class="text-center mb-16 opacity-0">
        <h2 class="text-5xl font-bold text-gray-800 mb-4">Compétences</h2>
        <div
          class="w-24 h-1 bg-linear-to-r from-kelly-green via-dark-lemon to-acid-green mx-auto animated-background"
        ></div>
      </div>

      <!-- Skills Grid -->
      <div class="grid md:grid-cols-3 gap-12">
        <!-- Langages de Programmation -->
        <div ref="skillsRef1" class="skill-category opacity-0">
          <div
            class="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
          >
            <!-- Icône -->
            <div class="text-center mb-6">
              <div
                class="w-16 h-16 bg-kelly-green/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-kelly-green/20 transition-colors duration-300"
              >
                <svg class="w-8 h-8 text-kelly-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3
                class="text-xl font-bold text-gray-800 group-hover:text-kelly-green transition-colors duration-300"
              >
                Langages de Programmation
              </h3>
            </div>

            <!-- Liste des compétences -->
            <div class="space-y-3">
              <div class="skill-item">Python</div>
              <div class="skill-item">SQL</div>
              <div class="skill-item">JavaScript</div>
              <div class="skill-item">Java</div>
            </div>
          </div>
        </div>

        <!-- Machine Learning -->
        <div ref="skillsRef2" class="skill-category opacity-0">
          <div
            class="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
          >
            <!-- Icône -->
            <div class="text-center mb-6">
              <div
                class="w-16 h-16 bg-dark-lemon/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-dark-lemon/20 transition-colors duration-300"
              >
                <svg class="w-8 h-8 text-dark-lemon" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  />
                </svg>
              </div>
              <h3
                class="text-xl font-bold text-gray-800 group-hover:text-dark-lemon transition-colors duration-300"
              >
                Machine Learning
              </h3>
            </div>

            <!-- Liste des compétences -->
            <div class="space-y-3">
              <div class="skill-item">Scikit-learn</div>
              <div class="skill-item">TensorFlow</div>
              <div class="skill-item">Pandas</div>
              <div class="skill-item">NumPy</div>
            </div>
          </div>
        </div>

        <!-- Visualisation -->
        <div ref="skillsRef3" class="skill-category opacity-0">
          <div
            class="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
          >
            <!-- Icône -->
            <div class="text-center mb-6">
              <div
                class="w-16 h-16 bg-acid-green/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-acid-green/20 transition-colors duration-300"
              >
                <svg class="w-8 h-8 text-acid-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
                </svg>
              </div>
              <h3
                class="text-xl font-bold text-gray-800 group-hover:text-acid-green transition-colors duration-300"
              >
                Visualisation
              </h3>
            </div>

            <!-- Liste des compétences -->
            <div class="space-y-3">
              <div class="skill-item">Matplotlib</div>
              <div class="skill-item">Power BI</div>
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
const skillsRef1 = ref<HTMLElement>()
const skillsRef2 = ref<HTMLElement>()
const skillsRef3 = ref<HTMLElement>()

let observer: IntersectionObserver

const animateHeader = (element: Element) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out' }
  )
}

const animateSkillCategory = (element: Element, delay = 0) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 50, scale: 0.9 },
    { opacity: 1, y: 0, scale: 1, duration: 0.8, delay, ease: 'back.out(1.7)' }
  )
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === headerRef.value) {
            animateHeader(entry.target)
          } else if (entry.target === skillsRef1.value) {
            animateSkillCategory(entry.target, 0)
          } else if (entry.target === skillsRef2.value) {
            animateSkillCategory(entry.target, 0.2)
          } else if (entry.target === skillsRef3.value) {
            animateSkillCategory(entry.target, 0.4)
          }
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 }
  )
  const elements = [headerRef.value, skillsRef1.value, skillsRef2.value, skillsRef3.value]
  elements.forEach((el) => {
    if (el) observer.observe(el)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>
