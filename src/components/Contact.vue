<template>
  <section id="contact" class="min-h-screen bg-linear-to-br from-kelly-green via-dark-lemon to-acid-green py-20">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div ref="headerRef" class="text-center mb-16 opacity-0">
        <h2 class="text-5xl font-bold text-white mb-4">{{ t('contact.title') }}</h2>
        <div class="w-24 h-1 bg-white mx-auto"></div>
        <p class="mt-6 text-xl text-white/90">{{ t('contact.subtitle') }}</p>
      </div>

      <!-- Contenu principal -->
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Informations de contact -->
        <div ref="infoRef" class="space-y-8">
          <!-- Email -->
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 opacity-0 shadow-lg">
            <div class="flex items-center space-x-4">
              <div class="bg-white/20 p-4 rounded-lg">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-white font-semibold text-lg">Email</h3>
                <a href="mailto:colin.lespilette@gmail.com" class="text-white/80 hover:text-white transition-colors">
                  colin.lespilette@gmail.com
                </a>
              </div>
            </div>
          </div>

          <!-- LinkedIn -->
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 opacity-0 shadow-lg">
            <div class="flex items-center space-x-4">
              <div class="bg-white/20 p-4 rounded-lg">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-white font-semibold text-lg">LinkedIn</h3>
                <a href="https://linkedin.com/in/colin-lespilette" target="_blank" class="text-white/80 hover:text-white transition-colors">
                  /colin-lespilette
                </a>
              </div>
            </div>
          </div>

          <!-- GitHub -->
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 opacity-0 shadow-lg">
            <div class="flex items-center space-x-4">
              <div class="bg-white/20 p-4 rounded-lg">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-white font-semibold text-lg">GitHub</h3>
                <a href="https://github.com/Apalian" target="_blank" class="text-white/80 hover:text-white transition-colors">
                  @Apalian
                </a>
              </div>
            </div>
          </div>

          <!-- Localisation -->
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 opacity-0 shadow-lg">
            <div class="flex items-center space-x-4">
              <div class="bg-white/20 p-4 rounded-lg">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-white font-semibold text-lg">{{ t('contact.location') }}</h3>
                <p class="text-white/80">Toulouse, France</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Formulaire de contact -->
        <div ref="formRef" class="opacity-0">
          <form @submit.prevent="handleSubmit" class="bg-white/10 backdrop-blur-sm rounded-xl p-8 space-y-6 shadow-lg">
            <div>
              <label for="name" class="block text-white font-medium mb-2">{{ t('contact.form.name') }}</label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                required
                class="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                :placeholder="t('contact.form.namePlaceholder')"
              />
            </div>

            <div>
              <label for="email" class="block text-white font-medium mb-2">{{ t('contact.form.email') }}</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                required
                class="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                :placeholder="t('contact.form.emailPlaceholder')"
              />
            </div>

            <div>
              <label for="subject" class="block text-white font-medium mb-2">{{ t('contact.form.subject') }}</label>
              <input
                type="text"
                id="subject"
                v-model="formData.subject"
                required
                class="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                :placeholder="t('contact.form.subjectPlaceholder')"
              />
            </div>

            <div>
              <label for="message" class="block text-white font-medium mb-2">{{ t('contact.form.message') }}</label>
              <textarea
                id="message"
                v-model="formData.message"
                required
                rows="5"
                class="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all resize-none"
                :placeholder="t('contact.form.messagePlaceholder')"
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-white text-kelly-green font-semibold py-3 px-6 rounded-lg hover:bg-white/90 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {{ isSubmitting ? t('contact.form.sending') : t('contact.form.send') }}
            </button>

            <!-- Message de confirmation -->
            <div v-if="showSuccess" class="text-center text-white bg-white/20 rounded-lg py-3 animate-fade-in">
              {{ t('contact.form.success') }}
            </div>
            <!-- Message de confirmation -->
            <div v-if="showSuccess" class="text-center text-white bg-white/20 rounded-lg py-3 animate-fade-in">
              {{ t('contact.form.success') }}
            </div>

            <!-- Message d'erreur -->
            <div v-if="showError" class="text-center text-white bg-red-500/80 rounded-lg py-3 animate-fade-in">
              {{ t('contact.form.error') }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Refs
const headerRef = ref<HTMLElement>()
const infoRef = ref<HTMLElement>()
const formRef = ref<HTMLElement>()

// Form data
const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)

let observer: IntersectionObserver

// Animations
const animateHeader = (element: Element) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: -50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
    }
  )
}

const animateInfo = (element: Element) => {
  gsap.fromTo(
    element.children,
    { opacity: 0, x: -50 },
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power2.out',
    }
  )
}

const animateForm = (element: Element) => {
  gsap.fromTo(
    element,
    { opacity: 0, x: 50 },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power2.out',
    }
  )
}

// Form submission
const handleSubmit = async () => {
  isSubmitting.value = true
  showError.value = false

  try {
    const response = await fetch('https://portfolio.lespi.fr/send-email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })

    const result = await response.json()

    if (result.success) {
      // Réinitialiser le formulaire
      Object.keys(formData).forEach(key => {
        formData[key as keyof typeof formData] = ''
      })

      showSuccess.value = true
      setTimeout(() => {
        showSuccess.value = false
      }, 5000)
    } else {
      showError.value = true
      setTimeout(() => {
        showError.value = false
      }, 5000)
    }
  } catch (error) {
    console.error('Erreur:', error)
    showError.value = true
    setTimeout(() => {
      showError.value = false
    }, 5000)
  } finally {
    isSubmitting.value = false
  }
}


// Lifecycle
onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === headerRef.value) {
            animateHeader(entry.target)
          } else if (entry.target === infoRef.value) {
            animateInfo(entry.target)
          } else if (entry.target === formRef.value) {
            animateForm(entry.target)
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

  const elements = [headerRef.value, infoRef.value, formRef.value]
  elements.forEach((el) => {
    if (el) observer.observe(el)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
/* Animation du background gradient */
.bg-gradient-to-br {
  animation: gradientShift 15s ease infinite;
  background-size: 200% 200%;
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Animation fade-in pour le message de succès */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}
</style>
