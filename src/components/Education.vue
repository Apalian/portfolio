<template>
  <section id="education" class="bg-white py-20">
    <div class="max-w-4xl mx-auto px-5 md:px-6">
      <!-- Header -->
      <div ref="headerRef" class="text-center mb-12 md:mb-16 opacity-0">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{{ t('education.title') }}</h2>
        <div
          class="w-24 h-1 bg-linear-to-r from-kelly-green via-dark-lemon to-acid-green mx-auto animated-background"
        ></div>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <div
          class="absolute left-3 md:left-1/2 md:-translate-x-1/2 w-0.5 h-full bg-linear-to-b from-kelly-green via-dark-lemon to-acid-green/30"
        ></div>

        <div class="space-y-8 md:space-y-10">
          <div
            v-for="(item, index) in items"
            :key="index"
            :ref="(el) => setItemRef(el, index)"
            class="relative flex opacity-0"
          >
            <!-- Point -->
            <div
              class="absolute left-3 md:left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow z-10"
              :class="item.type === 'work' ? 'bg-kelly-green' : 'bg-acid-green'"
            ></div>

            <div
              class="w-full pl-9 md:pl-0 md:w-1/2"
              :class="index % 2 === 0 ? 'md:pr-10' : 'md:ml-auto md:pl-10'"
            >
              <div
                class="timeline-card bg-gray-50 p-5 md:p-6 rounded-xl shadow-sm border border-gray-100"
                :class="index % 2 === 0 ? 'md:text-right' : ''"
              >
                <div
                  class="flex flex-wrap items-center gap-2 mb-2"
                  :class="index % 2 === 0 ? 'md:justify-end' : ''"
                >
                  <span
                    class="text-[11px] uppercase tracking-wide font-semibold px-2 py-0.5 rounded"
                    :class="
                      item.type === 'work'
                        ? 'bg-kelly-green text-white'
                        : 'bg-acid-green/15 text-[#7d8a06]'
                    "
                  >
                    {{ t(`education.types.${item.type}`) }}
                  </span>
                  <span class="text-sm font-semibold text-kelly-green">{{ item.period }}</span>
                </div>
                <h3 class="text-lg md:text-xl font-bold text-gray-800 mb-1 leading-snug">
                  {{ item.degree }}
                </h3>
                <p class="text-gray-600 mb-3 text-sm md:text-base">{{ item.institution }}</p>
                <p class="text-sm text-gray-500 leading-relaxed">{{ item.description }}</p>
                <div
                  class="flex flex-wrap gap-2 mt-3"
                  :class="index % 2 === 0 ? 'md:justify-end' : ''"
                >
                  <span
                    v-for="skill in item.skills"
                    :key="skill"
                    class="px-3 py-1 bg-kelly-green/10 text-kelly-green rounded-full text-xs"
                  >
                    {{ skill }}
                  </span>
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
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { useI18n } from 'vue-i18n'

const { t, tm, rt } = useI18n()

interface Item {
  type: 'work' | 'school'
  period: string
  degree: string
  institution: string
  description: string
  skills: string[]
}

const items = computed<Item[]>(() =>
  (tm('education.items') as any[]).map((i) => ({
    type: rt(i.type) as Item['type'],
    period: rt(i.period),
    degree: rt(i.degree),
    institution: rt(i.institution),
    description: rt(i.description),
    skills: (i.skills as any[]).map((s) => rt(s)),
  }))
)

const headerRef = ref<HTMLElement>()
const itemRefs: HTMLElement[] = []
const setItemRef = (el: unknown, i: number) => {
  if (el) itemRefs[i] = el as HTMLElement
}

let observer: IntersectionObserver

onMounted(() => {
  const isDesktop = window.matchMedia('(min-width: 768px)').matches
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const el = entry.target as HTMLElement
        if (el === headerRef.value) {
          gsap.fromTo(el, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
        } else {
          const i = itemRefs.indexOf(el)
          const fromX = isDesktop ? (i % 2 === 0 ? -60 : 60) : 30
          gsap.fromTo(
            el,
            { opacity: 0, x: fromX },
            { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' }
          )
        }
        observer.unobserve(el)
      })
    },
    { threshold: 0.2 }
  )
  ;[headerRef.value, ...itemRefs].forEach((el) => el && observer.observe(el))
})

onUnmounted(() => observer?.disconnect())
</script>

<style scoped>
.timeline-card {
  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s ease;
}

@media (hover: hover) {
  .timeline-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 30px -12px rgb(73 161 21 / 0.35);
  }
}
</style>
