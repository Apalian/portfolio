<template>
  <div
    ref="navbarContainer"
    class="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-6 md:py-8 pointer-events-none"
    @mouseenter="handleNavbarHover"
  >
    <div class="max-w-6xl mx-auto">
      <nav
        ref="navbarRef"
        class="relative bg-white/95 backdrop-blur-lg border border-white/30 rounded-2xl px-8 py-4 shadow-lg pointer-events-auto"
      >
        <!-- Desktop Menu -->
        <div class="hidden md:flex justify-between items-center">
          <div class="flex gap-2 flex-1 justify-center">
            <a
              v-for="(item, index) in menuItems"
              :key="item.id"
              :href="item.href"
              ref="menuLinksRef"
              :class="[
                'relative py-3 px-5 text-gray-600 no-underline font-medium rounded-lg transition-colors hover:text-kelly-green inline-block',
                { 'text-kelly-green': activeSection === item.id }
              ]"
              :style="{ minWidth: '100px', textAlign: 'center' }"
              @click="handleNavClick(item.id, $event)"
              @mouseenter="animateHover(index, true)"
              @mouseleave="animateHover(index, false)"
            >
              {{ t(item.labelKey) }}
              <div
                v-if="activeSection === item.id"
                class="absolute bottom-1 left-5 right-5 h-0.5 bg-linear-to-r from-kelly-green to-dark-lemon rounded-sm"
              ></div>
            </a>
          </div>

          <!-- Language Switcher -->
          <div class="relative flex bg-gray-100 rounded-lg p-1 ml-4">
            <!-- Background slider -->
            <div
              class="absolute inset-y-1 left-1 w-10 bg-linear-to-r from-kelly-green to-dark-lemon rounded-md transition-transform duration-300 ease-out"
              :style="{ transform: locale === 'fr' ? 'translateX(0)' : 'translateX(100%)' }"
            ></div>

            <!-- Boutons -->
            <button
              @click="changeLocale('fr')"
              :class="[
                'relative z-10 px-3 py-2 rounded-md transition-colors duration-300',
                locale === 'fr' ? 'text-white' : 'text-gray-600'
              ]"
              title="Français"
            >
              <span class="text-xl">🇫🇷</span>
            </button>

            <button
              @click="changeLocale('en')"
              :class="[
                'relative z-10 px-3 py-2 rounded-md transition-colors duration-300',
                locale === 'en' ? 'text-white' : 'text-gray-600'
              ]"
              title="English"
            >
              <span class="text-xl">🇬🇧</span>
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div class="flex md:hidden justify-between items-center">
          <!-- Logo ou Titre -->
          <div class="text-xl font-bold text-gray-800">Colin Lespilette</div>

          <div class="flex items-center gap-4">
            <!-- Language Switcher Mobile -->
            <div class="relative flex bg-gray-100 rounded-lg p-1">
              <div
                class="absolute inset-y-1 left-1 w-10 bg-linear-to-r from-kelly-green to-dark-lemon rounded-md transition-transform duration-300 ease-out"
                :style="{ transform: locale === 'fr' ? 'translateX(0)' : 'translateX(100%)' }"
              ></div>

              <button
                @click="changeLocale('fr')"
                :class="[
                  'relative z-10 px-3 py-2 rounded-md transition-colors duration-300',
                  locale === 'fr' ? 'text-white' : 'text-gray-600'
                ]"
                title="Français"
              >
                <span class="text-xl">🇫🇷</span>
              </button>

              <button
                @click="changeLocale('en')"
                :class="[
                  'relative z-10 px-3 py-2 rounded-md transition-colors duration-300',
                  locale === 'en' ? 'text-white' : 'text-gray-600'
                ]"
                title="English"
              >
                <span class="text-xl">🇬🇧</span>
              </button>
            </div>

            <!-- Burger Button -->
            <button
              @click="toggleMobileMenu"
              class="relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
              aria-label="Toggle menu"
            >
              <span
                :class="[
                  'block w-6 h-0.5 bg-gray-800 transition-all duration-300',
                  { 'rotate-45 translate-y-2': isMobileMenuOpen }
                ]"
              ></span>
              <span
                :class="[
                  'block w-6 h-0.5 bg-gray-800 transition-all duration-300',
                  { 'opacity-0': isMobileMenuOpen }
                ]"
              ></span>
              <span
                :class="[
                  'block w-6 h-0.5 bg-gray-800 transition-all duration-300',
                  { '-rotate-45 -translate-y-2': isMobileMenuOpen }
                ]"
              ></span>
            </button>
          </div>
        </div>

        <!-- Mobile Menu Dropdown -->
        <transition
          enter-active-class="transition ease-out duration-200"
          enter-from-class="opacity-0 -translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition ease-in duration-150"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-4"
        >
          <div
            v-if="isMobileMenuOpen"
            class="md:hidden mt-4 pt-4 border-t border-gray-200"
          >
            <div class="flex flex-col space-y-2">
              <a
                v-for="item in menuItems"
                :key="item.id"
                :href="item.href"
                :class="[
                  'py-3 px-4 text-gray-600 no-underline font-medium rounded-lg transition-colors hover:bg-gray-100 hover:text-kelly-green',
                  { 'text-kelly-green bg-gray-50': activeSection === item.id }
                ]"
                @click="handleMobileNavClick(item.id, $event)"
              >
                {{ t(item.labelKey) }}
              </a>
            </div>
          </div>
        </transition>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useI18n } from 'vue-i18n'
import { useLanguage } from '../composables/useLanguage'

const { locale, changeLocale } = useLanguage()
const { t } = useI18n()

gsap.registerPlugin(ScrollToPlugin)

const navbarRef = ref<HTMLElement>()
const menuLinksRef = ref<HTMLElement[]>([])
const navbarContainer = ref<HTMLElement>()
const isMobileMenuOpen = ref(false)

let lastScrollY = 0
let isNavbarVisible = ref(true)
const activeSection = ref('hero')
let sectionObserver: IntersectionObserver | null = null

const menuItems = [
  { id: 'hero', labelKey: 'nav.home', href: '#hero' },
  { id: 'about', labelKey: 'nav.about', href: '#about' },
  { id: 'education', labelKey: 'nav.education', href: '#education' },
  { id: 'skills', labelKey: 'nav.skills', href: '#skills' },
  { id: 'projects', labelKey: 'nav.projects', href: '#projects' },
  { id: 'contact', labelKey: 'nav.contact', href: '#contact' }
]

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

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

const handleNavbarHover = () => {
  if (!isNavbarVisible.value && navbarContainer.value) {
    isNavbarVisible.value = true
    gsap.to(navbarContainer.value, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      ease: "back.out(1.7)"
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
  if (!targetElement) return

  gsap.to(window, {
    duration: 1.5,
    scrollTo: targetElement,
    ease: "power2.inOut"
  })
}

const handleMobileNavClick = (sectionId: string, event: Event) => {
  event.preventDefault()

  activeSection.value = sectionId
  isMobileMenuOpen.value = false // Fermer le menu mobile

  const targetElement = document.getElementById(sectionId)
  if (!targetElement) return

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

  if (isMobileMenuOpen.value) {
    isMobileMenuOpen.value = false
  }

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

const setupSectionObserver = () => {
  const options = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  }

  sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, options)

  menuItems.forEach(item => {
    const section = document.getElementById(item.id)
    if (section) {
      sectionObserver?.observe(section)
    }
  })
}

onMounted(() => {
  setTimeout(() => {
    animateNavbarEntrance()
    setupSectionObserver()
  }, 200)

  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  sectionObserver?.disconnect()
})
</script>
