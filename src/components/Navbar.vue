<template>
  <div
    ref="navbarContainer"
    class="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-6 md:py-8 pointer-events-none"
  >
    <div class="max-w-6xl mx-auto">
      <nav
        ref="navbarRef"
        class="relative bg-white/95 backdrop-blur-lg border border-white/30 rounded-2xl px-8 py-4 shadow-lg pointer-events-auto"
      >
        <div class="hidden md:flex justify-center items-center">
          <div class="flex gap-8">
            <a
              v-for="(item, index) in menuItems"
              :key="item.id"
              :href="item.href"
              ref="menuLinksRef"
              :class="[
                'relative py-3 px-5 text-gray-600 no-underline font-medium rounded-lg transition-colors hover:text-kelly-green',
                { 'text-kelly-green': activeSection === item.id }
              ]"
              @click="handleNavClick(item.id, $event)"
              @mouseenter="animateHover(index, true)"
              @mouseleave="animateHover(index, false)"
            >
              {{ item.label }}
              <div
                v-if="activeSection === item.id"
                class="absolute bottom-1 left-5 right-5 h-0.5 bg-linear-to-r from-kelly-green to-dark-lemon rounded-sm"
              ></div>
            </a>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

// Enregistrer le plugin
gsap.registerPlugin(ScrollToPlugin)

// Refs
const navbarRef = ref<HTMLElement>()
const menuLinksRef = ref<HTMLElement[]>([])
const navbarContainer = ref<HTMLElement>()
let lastScrollY = 0
let isNavbarVisible = ref(true)

// State
const activeSection = ref('about')

// Menu items
const menuItems = [
  { id: 'about', label: 'À propos', href: '#about' },
  { id: 'education', label: 'Formation', href: '#education' },
  { id: 'skills', label: 'Compétences', href: '#skills' },
  { id: 'projects', label: 'Projets', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' }
]

// Animations d'entrée
const animateNavbarEntrance = () => {
  if (!navbarRef.value) return

  const tl = gsap.timeline()

  // Animation de la navbar
  tl.fromTo(navbarRef.value,
    { y: -100, opacity: 0, scale: 0.95 },
    { y: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" }
  )

  // Animation des liens menu (desktop)
  if (menuLinksRef.value.length > 0) {
    tl.fromTo(menuLinksRef.value,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
      "-=0.4"
    )
  }
}

// Animation hover des liens
const animateHover = (index: number, isHover: boolean) => {
  const link = menuLinksRef.value[index]
  if (!link) return

  if (isHover) {
    gsap.to(link, {
      y: -3,
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out"
    })
  } else {
    gsap.to(link, {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    })
  }
}

const handleNavClick = (sectionId: string, event: Event) => {
  event.preventDefault()

  activeSection.value = sectionId

  const clickedLink = event.target as HTMLElement
  gsap.fromTo(clickedLink,
    { scale: 0.95 },
    { scale: 1, duration: 0.3, ease: "back.out(2)" }
  )

  const targetElement = document.getElementById(sectionId)

  gsap.to(window, {
    duration: 1.5,
    scrollTo: targetElement,
    ease: "power2.inOut"
  })
}


const handleScroll = () => {
  if (!navbarContainer.value || !navbarRef.value) return

  const scrollY = window.scrollY
  const scrollDirection = scrollY > lastScrollY ? 'down' : 'up'

  // Animation de disparition/apparition
  if (scrollY > 100) {
    if (scrollDirection === 'down' && isNavbarVisible.value) {
      // Disparition (scroll vers le bas)
      isNavbarVisible.value = false
      gsap.to(navbarContainer.value, {
        y: -100,
        opacity: 0.7,
        duration: 0.4,
        ease: "power2.out"
      })
    } else if (scrollDirection === 'up' && !isNavbarVisible.value) {
      // Apparition (scroll vers le haut)
      isNavbarVisible.value = true
      gsap.to(navbarContainer.value, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "back.out(1.7)"
      })
    }
  } else {
    // En haut de page, toujours visible
    if (!isNavbarVisible.value) {
      isNavbarVisible.value = true
      gsap.to(navbarContainer.value, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "back.out(1.7)"
      })
    }
  }

  // Effet de profondeur
  if (scrollY > 50) {
    gsap.to(navbarRef.value, {
      boxShadow: "0 20px 50px rgba(0, 0, 0, 0.2)",
      scale: 0.96,
      duration: 0.3
    })
  } else {
    gsap.to(navbarRef.value, {
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      scale: 1,
      duration: 0.3
    })
  }

  lastScrollY = scrollY
}


onMounted(() => {
  setTimeout(() => {
    animateNavbarEntrance()
  }, 200)

  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
