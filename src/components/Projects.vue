<template>
  <section id="projects" class="min-h-screen bg-white py-20">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div ref="headerRef" class="text-center mb-16 opacity-0">
        <h2 class="text-5xl font-bold text-gray-800 mb-4">{{ t('projects.title') }}</h2>
        <div
          class="w-24 h-1 bg-linear-to-r from-kelly-green via-dark-lemon to-acid-green mx-auto"
        ></div>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref="projectsGridRef">
        <div
          v-for="(project, index) in displayedProjects"
          :key="project.id"
          :ref="(el) => setProjectRef(el, index)"
          class="project-card opacity-0 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
        >
          <!-- Image du projet -->
          <div class="relative h-48 overflow-hidden bg-gray-100">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            <!-- Overlay au hover avec boutons -->
            <div
              class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            >
              <div class="flex space-x-4">
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-4 py-2 bg-white text-gray-800 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                >

                  GitHub
                </a>
                <a
                  v-if="project.demo"
                  :href="project.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-4 py-2 bg-kelly-green text-white rounded-lg hover:bg-kelly-green/90 transition-colors font-medium"
                >
                  {{ t('projects.viewDemo') }}
                </a>
              </div>
            </div>
          </div>

          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 text-sm mb-4">{{ project.description }}</p>

            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-3 py-1 bg-kelly-green/10 text-kelly-green rounded-full text-xs"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bouton Voir plus / Voir moins -->
      <div v-if="projects.length > 6" class="text-center mt-12">
        <button
          @click="toggleShowAll"
          class="px-8 py-3 bg-kelly-green text-white rounded-lg hover:bg-kelly-green/90 transition-colors font-medium"
        >
          {{ showAll ? t('projects.showLess') : t('projects.showMore', { count: projects.length - 6 }) }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick, type ComponentPublicInstance } from 'vue'
import { gsap } from 'gsap'
import { useI18n } from 'vue-i18n'
import blindioCover from '@/assets/images/blindioCover.svg'
import mnistCover from '@/assets/images/mnistCover.webp'
import snakeCover from '@/assets/images/snakeCover.png'

const { t, tm } = useI18n()

// Interface pour typer les projets
interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  github: string
  demo: string
  image?: string
}

// Refs
const headerRef = ref<HTMLElement>()
const projectsGridRef = ref<HTMLElement>()
const projectRefs = ref<HTMLElement[]>([])

// State
const showAll = ref(false)
let observer: IntersectionObserver

// Fonction pour définir les refs des projets
const setProjectRef = (el: Element | ComponentPublicInstance | null, index: number) => {
  if (el) {
    const htmlElement = (el as ComponentPublicInstance)?.$el || (el as HTMLElement)
    projectRefs.value[index] = htmlElement
  }
}

// Images mapping
const projectImages: Record<number, string> = {
  1: blindioCover,
  2: mnistCover,
  3: snakeCover
}

// Computed projects avec traductions
const projects = computed(() => {
  const projectsData = tm('projects.items') as Project[]
  return projectsData.map(project => ({
    ...project,
    image: projectImages[project.id] || blindioCover
  }))
})

const displayedProjects = computed(() => {
  return showAll.value ? projects.value : projects.value.slice(0, 6)
})

const getCascadeDelay = (index: number) => {
  const cascadeOrder = [0, 1, 3, 2, 4, 5]
  const position = cascadeOrder.indexOf(index % 6)
  return position !== -1 ? position * 0.2 : index * 0.1
}

const animateProjects = () => {
  projectRefs.value.forEach((el, index) => {
    if (el) {
      const delay = getCascadeDelay(index)
      gsap.fromTo(
        el,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay,
          ease: 'back.out(1.7)',
        }
      )
    }
  })
}

const animateHeader = (element: Element) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out' }
  )
}

const toggleShowAll = async () => {
  showAll.value = !showAll.value

  await nextTick()

  if (showAll.value) {
    const newProjects = projectRefs.value.slice(6)
    newProjects.forEach((el, index) => {
      if (el) {
        gsap.set(el, { opacity: 0, y: 50, scale: 0.9 })
        gsap.to(el, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'back.out(1.7)',
        })
      }
    })
  }
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === headerRef.value) {
            animateHeader(entry.target)
          } else if (entry.target === projectsGridRef.value) {
            animateProjects()
          }
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 }
  )

  if (headerRef.value) observer.observe(headerRef.value)
  if (projectsGridRef.value) observer.observe(projectsGridRef.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>
