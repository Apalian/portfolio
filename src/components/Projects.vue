<template>
  <section id="projects" class="min-h-screen bg-white py-20">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div ref="headerRef" class="text-center mb-16 opacity-0">
        <h2 class="text-5xl font-bold text-gray-800 mb-4">Projets</h2>
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
          <div :class="['relative h-48 overflow-hidden', project.gradient]">
            <div
              class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"
            ></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-white text-4xl">{{ project.icon }}</div>
            </div>
            <div
              class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div class="flex space-x-4">
                <button
                  class="px-4 py-2 bg-white text-gray-800 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  GitHub
                </button>
                <button
                  class="px-4 py-2 bg-white text-gray-800 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Demo
                </button>
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
                :class="['px-3 py-1 rounded-full text-xs', project.techClass]"
              >
                {{ tech }}
              </span>
            </div>

            <div class="flex justify-between text-sm text-gray-500">
              <span>{{ project.stat1 }}</span>
              <span>{{ project.stat2 }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bouton Voir plus / Voir moins -->
      <div class="text-center mt-12">
        <button
          @click="toggleShowAll"
          class="px-8 py-3 bg-kelly-green text-white rounded-lg hover:bg-kelly-green/90 transition-colors font-medium"
        >
          {{ showAll ? 'Voir moins' : `Voir plus (${projects.length - 6} autres projets)` }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick, type ComponentPublicInstance } from 'vue'
import { gsap } from 'gsap'

// Refs
const headerRef = ref<HTMLElement>()
const projectsGridRef = ref<HTMLElement>()
const projectRefs = ref<HTMLElement[]>([])

// State
const showAll = ref(false)
let observer: IntersectionObserver

// Fonction pour définir les refs des projets
const setProjectRef = (el: Element | ComponentPublicInstance | null | null, index: number) => {
  if (el) {
    const htmlElement = (el as ComponentPublicInstance)?.$el || (el as HTMLElement)
    projectRefs.value[index] = htmlElement
  }
}

// Tous vos projets (même structure qu'avant)
const projects = ref([
  {
    id: 1,
    title: 'Analyse des Ventes E-commerce',
    description:
      'Prédiction des ventes et analyse des tendances pour une boutique en ligne avec +100k transactions.',
    icon: '📊',
    gradient: 'bg-gradient-to-r from-kelly-green to-dark-lemon',
    technologies: ['Python', 'Pandas', 'Scikit-learn'],
    techClass: 'bg-kelly-green/10 text-kelly-green',
    stat1: '📈 +25% précision',
    stat2: '⭐ Featured',
  },
  {
    id: 2,
    title: 'Chatbot Intelligence Artificielle',
    description:
      'Assistant conversationnel utilisant le NLP pour répondre aux questions clients automatiquement.',
    icon: '🤖',
    gradient: 'bg-gradient-to-r from-dark-lemon to-acid-green',
    technologies: ['TensorFlow', 'NLTK', 'Flask'],
    techClass: 'bg-dark-lemon/10 text-dark-lemon',
    stat1: '💬 1000+ conversations',
    stat2: '🏆 Award',
  },
  {
    id: 3,
    title: 'Dashboard Analytics Temps Réel',
    description: 'Tableau de bord interactif pour visualiser les métriques business en temps réel.',
    icon: '📈',
    gradient: 'bg-gradient-to-r from-acid-green to-kelly-green',
    technologies: ['Vue.js', 'D3.js', 'WebSocket'],
    techClass: 'bg-acid-green/10 text-acid-green',
    stat1: '⚡ Real-time',
    stat2: '👥 Team project',
  },
  {
    id: 4,
    title: 'Système de Recommandation',
    description: 'Algorithme de recommandation personnalisée basé sur le collaborative filtering.',
    icon: '🎯',
    gradient: 'bg-gradient-to-r from-purple-500 to-pink-500',
    technologies: ['Python', 'Surprise', 'MongoDB'],
    techClass: 'bg-purple-100 text-purple-700',
    stat1: '🔥 +40% engagement',
    stat2: '⭐ Popular',
  },
  {
    id: 5,
    title: 'Détection de Fraude',
    description:
      'Modèle de machine learning pour détecter les transactions frauduleuses en temps réel.',
    icon: '🛡️',
    gradient: 'bg-gradient-to-r from-red-500 to-orange-500',
    technologies: ['Scikit-learn', 'XGBoost', 'Kafka'],
    techClass: 'bg-red-100 text-red-700',
    stat1: '🎯 98% précision',
    stat2: '⚡ Real-time',
  },
  {
    id: 6,
    title: 'API de Prédiction Météo',
    description:
      'API REST pour prédire les conditions météorologiques avec apprentissage automatique.',
    icon: '🌤️',
    gradient: 'bg-gradient-to-r from-blue-400 to-cyan-400',
    technologies: ['FastAPI', 'TensorFlow', 'Docker'],
    techClass: 'bg-blue-100 text-blue-700',
    stat1: '📡 1M+ requêtes',
    stat2: '☁️ Cloud',
  },
  {
    id: 7,
    title: 'Analyseur de Sentiment Social',
    description:
      "Outil d'analyse des sentiments sur les réseaux sociaux pour le monitoring de marque.",
    icon: '😊',
    gradient: 'bg-gradient-to-r from-indigo-500 to-purple-600',
    technologies: ['BERT', 'Streamlit', 'Twitter API'],
    techClass: 'bg-indigo-100 text-indigo-700',
    stat1: '📱 Social media',
    stat2: '🔍 NLP',
  },
  {
    id: 8,
    title: 'Optimisation de Portfolio',
    description: "Algorithme d'optimisation pour la gestion de portefeuilles d'investissement.",
    icon: '💰',
    gradient: 'bg-gradient-to-r from-green-500 to-emerald-500',
    technologies: ['R', 'Shiny', 'QuantLib'],
    techClass: 'bg-emerald-100 text-emerald-700',
    stat1: '💹 Finance',
    stat2: '📊 Quant',
  },
  {
    id: 9,
    title: "Reconnaissance d'Images Médicales",
    description: "CNN pour l'analyse automatique d'images radiologiques et détection d'anomalies.",
    icon: '🏥',
    gradient: 'bg-gradient-to-r from-teal-500 to-green-500',
    technologies: ['PyTorch', 'OpenCV', 'DICOM'],
    techClass: 'bg-teal-100 text-teal-700',
    stat1: '🩺 Medical AI',
    stat2: '🎖️ Research',
  },
])

// Computed pour afficher soit 6 projets, soit tous
const displayedProjects = computed(() => {
  return showAll.value ? projects.value : projects.value.slice(0, 6)
})

// Animation en cascade : 1 → 2, 4 → 3, 5 → 6
const getCascadeDelay = (index: number) => {
  const cascadeOrder = [0, 1, 3, 2, 4, 5] // Ordre d'apparition
  const position = cascadeOrder.indexOf(index % 6)
  return position !== -1 ? position * 0.2 : index * 0.1
}

// Animation des projets
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

// Animation du header
const animateHeader = (element: Element) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out' }
  )
}

// Méthode pour basculer l'affichage
const toggleShowAll = async () => {
  showAll.value = !showAll.value

  // Attendre le prochain tick pour que les éléments soient rendus
  await nextTick()

  // Réinitialiser les refs et animer les nouveaux projets
  if (showAll.value) {
    // Animation uniquement pour les nouveaux projets (index 6+)
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
