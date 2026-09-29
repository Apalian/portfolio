<template>
  <section id="skills" class="relative bg-white py-20 overflow-hidden">
    <!-- Header -->
    <div ref="headerRef" class="relative z-10 text-center px-6 mb-6 opacity-0">
      <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{{ t('skills.title') }}</h2>
      <div
        class="w-24 h-1 bg-linear-to-r from-kelly-green via-dark-lemon to-acid-green mx-auto animated-background"
      ></div>
      <p class="mt-5 text-gray-500 text-sm md:text-base">
        {{ isTouch ? t('skills.hintTouch') : t('skills.hint') }}
      </p>
    </div>

    <!-- Grille d'hexagones -->
    <div ref="gridRef" class="relative w-full" :style="{ height: `${gridHeight}px` }">
      <div
        v-for="cell in cells"
        :key="cell.key"
        class="hex-wrapper"
        :class="{ 'hex-wrapper--skill': cell.skill }"
        :style="{
          left: `${cell.x}px`,
          top: `${cell.y}px`,
          width: `${hexW}px`,
          height: `${hexH}px`,
          opacity: cell.skill ? 1 : cell.opacity,
        }"
      >
        <!-- Hexagone décoratif -->
        <svg v-if="!cell.skill" :width="hexW" :height="hexH" class="block overflow-visible">
          <polygon
            :points="hexPoints"
            class="hex-outline"
            fill="none"
            :stroke="cell.color"
            stroke-width="1.5"
          />
        </svg>

        <!-- Hexagone compétence (recto / verso) -->
        <button
          v-else
          type="button"
          class="hex-card"
          :data-key="cell.key"
          :ref="(el) => setCardRef(el, cell.key)"
          :aria-label="cell.skill.name"
          :aria-pressed="flipped.has(cell.key)"
          @click="flip(cell.key)"
          @pointerenter="(e) => hoverIn(e, cell.key)"
          @pointerleave="(e) => hoverOut(e, cell.key)"
        >
          <!-- Recto : icône -->
          <svg :width="hexW" :height="hexH" class="hex-face overflow-visible">
            <polygon :points="hexPoints" fill="white" :stroke="cell.color" stroke-width="2" />
            <polygon
              :points="hexPoints"
              class="hex-fill"
              :fill="cell.color"
              fill-opacity="0.12"
              stroke="none"
            />
            <foreignObject :x="hexW * 0.25" :y="hexH * 0.25" :width="hexW * 0.5" :height="hexH * 0.5">
              <div class="w-full h-full flex items-center justify-center">
                <Icon :icon="cell.skill.icon" :width="hexW * 0.42" :height="hexW * 0.42" class="hex-icon" />
              </div>
            </foreignObject>
          </svg>

          <!-- Verso : nom + contexte -->
          <svg :width="hexW" :height="hexH" class="hex-face hex-face--back overflow-visible">
            <defs>
              <linearGradient :id="`grad-${cell.key}`" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#49a115" />
                <stop offset="100%" stop-color="#b4c50c" />
              </linearGradient>
            </defs>
            <polygon :points="hexPoints" :fill="`url(#grad-${cell.key})`" stroke="white" stroke-width="2" />
            <foreignObject :x="hexW * 0.08" :y="hexH * 0.22" :width="hexW * 0.84" :height="hexH * 0.56">
              <div class="w-full h-full flex flex-col items-center justify-center text-center text-white leading-tight">
                <span class="font-bold" :style="{ fontSize: `${Math.max(11, hexW * 0.11)}px` }">
                  {{ cell.skill.name }}
                </span>
                <span
                  v-if="hexW >= 105"
                  class="mt-1 opacity-90"
                  :style="{ fontSize: `${Math.max(9, hexW * 0.075)}px` }"
                >
                  {{ t(`skills.items.${cell.skill.id}`) }}
                </span>
              </div>
            </foreignObject>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { Icon, addCollection } from '@iconify/vue'
import { gsap } from 'gsap'
import { useI18n } from 'vue-i18n'
import skillIcons from '@/assets/skill-icons.json'

// Icônes embarquées : pas d'appel réseau, affichage instantané
addCollection(skillIcons.logos as any)
addCollection(skillIcons.devicon as any)

const { t } = useI18n()

interface Skill {
  id: string
  name: string
  icon: string
}

interface Cell {
  key: string
  x: number
  y: number
  color: string
  opacity: number
  distance: number
  skill?: Skill
}

// Losange 2-3-4-3-2 : chaque ligne s'emboîte naturellement dans la suivante
const skillRows: Skill[][] = [
  [
    { id: 'python', name: 'Python', icon: 'logos:python' },
    { id: 'pytorch', name: 'PyTorch', icon: 'logos:pytorch-icon' },
  ],
  [
    { id: 'pandas', name: 'Pandas', icon: 'logos:pandas-icon' },
    { id: 'numpy', name: 'NumPy', icon: 'logos:numpy' },
    { id: 'sklearn', name: 'scikit-learn', icon: 'devicon:scikitlearn' },
  ],
  [
    { id: 'tensorflow', name: 'TensorFlow', icon: 'logos:tensorflow' },
    { id: 'postgresql', name: 'PostgreSQL', icon: 'logos:postgresql' },
    { id: 'typescript', name: 'TypeScript', icon: 'logos:typescript-icon' },
    { id: 'powerbi', name: 'Power BI', icon: 'logos:microsoft-power-bi' },
  ],
  [
    { id: 'react', name: 'React', icon: 'logos:react' },
    { id: 'nextjs', name: 'Next.js', icon: 'logos:nextjs-icon' },
    { id: 'vue', name: 'Vue.js', icon: 'logos:vue' },
  ],
  [
    { id: 'docker', name: 'Docker', icon: 'logos:docker-icon' },
    { id: 'git', name: 'Git', icon: 'devicon:git' },
  ],
]

const palette = ['#49a115', '#94b911', '#b4c50c']

// --- Dimensions responsives ---
const viewportW = ref(typeof window !== 'undefined' ? window.innerWidth : 1280)
const isTouch = ref(false)

const hexW = computed(() => {
  // Le losange fait 4 hexagones de large : on garde une marge sur mobile
  const fit = (viewportW.value - 32) / 4.2
  return Math.round(Math.max(72, Math.min(140, fit)))
})
const hexH = computed(() => hexW.value * 1.1547)
const rowStep = computed(() => hexH.value * 0.75)

const totalRows = computed(() => (viewportW.value < 640 ? 7 : 9))
const gridHeight = computed(() => (totalRows.value - 1) * rowStep.value + hexH.value)

const hexPoints = computed(() => {
  const w = hexW.value
  const h = hexH.value
  return `${w / 2},0 ${w},${h / 4} ${w},${(h * 3) / 4} ${w / 2},${h} 0,${(h * 3) / 4} 0,${h / 4}`
})

const mix = (a: string, b: string, f: number) => {
  const p = (h: string, i: number) => parseInt(h.slice(1 + i * 2, 3 + i * 2), 16)
  const c = [0, 1, 2].map((i) => Math.round(p(a, i) + (p(b, i) - p(a, i)) * f))
  return `#${c.map((v) => v.toString(16).padStart(2, '0')).join('')}`
}

const colorAt = (d: number) => {
  if (d < 0.5) return mix(palette[0], palette[1], d / 0.5)
  return mix(palette[1], palette[2], Math.min(1, (d - 0.5) / 0.5))
}

const cells = computed<Cell[]>(() => {
  const w = hexW.value
  const h = hexH.value
  const width = viewportW.value
  const rows = totalRows.value
  const centerRow = Math.floor(rows / 2)
  const cx = width / 2
  const cy = centerRow * rowStep.value + h / 2
  const maxDist = Math.hypot(width / 2, gridHeight.value / 2)

  const shift = (r: number) => (((r - centerRow) % 2) + 2) % 2 === 0 ? 0 : w / 2
  // Origine choisie pour que la ligne centrale (4 hexagones) soit centrée
  const origin = (((cx - 2 * w) % w) + w) % w - w

  const firstSkillRow = centerRow - Math.floor(skillRows.length / 2)
  const result: Cell[] = []

  for (let r = 0; r < rows; r++) {
    const y = r * rowStep.value
    const skillRow = skillRows[r - firstSkillRow]
    const rowStart = skillRow ? cx - (skillRow.length * w) / 2 : 0

    for (let x = origin + shift(r) - w; x < width + w; x += w) {
      const dist = Math.hypot(x + w / 2 - cx, y + h / 2 - cy) / maxDist
      let skill: Skill | undefined
      if (skillRow) {
        const j = Math.round((x - rowStart) / w)
        if (j >= 0 && j < skillRow.length && Math.abs(x - (rowStart + j * w)) < 1) {
          skill = skillRow[j]
        }
      }
      result.push({
        key: skill ? skill.id : `bg-${r}-${Math.round(x)}`,
        x,
        y,
        distance: dist,
        color: colorAt(dist * 1.6),
        opacity: Math.max(0, 1 - Math.max(0, dist - 0.12) * 1.9),
        skill,
      })
    }
  }
  return result
})

// --- Animations ---
const headerRef = ref<HTMLElement>()
const gridRef = ref<HTMLElement>()
const cardRefs = new Map<string, HTMLElement>()
const flipped = ref(new Set<string>())
const busy = new Set<string>()

const setCardRef = (el: unknown, key: string) => {
  if (el) cardRefs.set(key, el as HTMLElement)
}

const reducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const hoverIn = (e: PointerEvent, key: string) => {
  if (e.pointerType !== 'mouse' || busy.has(key)) return
  const el = cardRefs.get(key)
  if (!el) return
  el.parentElement!.style.zIndex = '20'
  gsap.to(el, { y: -10, scale: 1.08, duration: 0.35, ease: 'power3.out' })
  el.classList.add('is-lifted')
}

const hoverOut = (e: PointerEvent, key: string) => {
  if (e.pointerType !== 'mouse' || busy.has(key)) return
  const el = cardRefs.get(key)
  if (!el) return
  gsap.to(el, {
    y: 0,
    scale: 1,
    duration: 0.45,
    ease: 'back.out(2)',
    onComplete: () => {
      el.parentElement!.style.zIndex = ''
    },
  })
  el.classList.remove('is-lifted')
}

const flip = (key: string) => {
  const el = cardRefs.get(key)
  if (!el || busy.has(key)) return
  busy.add(key)

  const toBack = !flipped.value.has(key)
  const next = new Set(flipped.value)
  if (toBack) next.add(key)
  else next.delete(key)
  flipped.value = next

  el.parentElement!.style.zIndex = '30'
  el.classList.add('is-lifted')

  const hovered = el.matches(':hover') && !isTouch.value
  gsap
    .timeline({
      onComplete: () => {
        busy.delete(key)
        if (!hovered) {
          el.classList.remove('is-lifted')
          el.parentElement!.style.zIndex = ''
        }
      },
    })
    // 1. Soulèvement
    .to(el, { y: -22, scale: 1.16, duration: 0.25, ease: 'power2.out' })
    // 2. Retournement en l'air
    .to(el, { rotationY: toBack ? 180 : 0, duration: 0.55, ease: 'power3.inOut' }, '-=0.1')
    // 3. Atterrissage avec un léger rebond
    .to(
      el,
      {
        y: hovered ? -10 : 0,
        scale: hovered ? 1.08 : 1,
        duration: 0.45,
        ease: 'back.out(2.2)',
      },
      '-=0.2'
    )
}

let entranceObserver: IntersectionObserver | null = null
let played = false

const playEntrance = () => {
  if (played || !gridRef.value) return
  played = true

  gsap.to(headerRef.value!, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
  if (reducedMotion) return

  const outlines = Array.from(gridRef.value.querySelectorAll<SVGPolygonElement>('.hex-outline'))

  // Vague depuis le centre pour la grille décorative
  const cx = gridRef.value.clientWidth / 2
  const cy = gridRef.value.clientHeight / 2
  const dist = (el: Element) => {
    const w = el.closest('.hex-wrapper') as HTMLElement
    return Math.hypot(w.offsetLeft + hexW.value / 2 - cx, w.offsetTop + hexH.value / 2 - cy)
  }
  outlines
    .sort((a, b) => dist(a) - dist(b))
    .forEach((o) => {
      gsap.fromTo(
        o,
        { strokeOpacity: 0 },
        { strokeOpacity: 1, duration: 0.5, delay: dist(o) / 1400, ease: 'power1.out' }
      )
    })

  // Les compétences apparaissent en rebondissant, du centre vers l'extérieur
  const cards = Array.from(cardRefs.values()).sort((a, b) => dist(a) - dist(b))
  gsap.fromTo(
    cards,
    { scale: 0.4, opacity: 0, y: 20 },
    {
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'back.out(1.8)',
      stagger: 0.05,
      delay: 0.15,
    }
  )
}

const onResize = () => {
  viewportW.value = document.documentElement.clientWidth
}

onMounted(async () => {
  isTouch.value = window.matchMedia('(hover: none)').matches
  onResize()
  window.addEventListener('resize', onResize, { passive: true })
  await nextTick()

  if (!reducedMotion) {
    gsap.set(Array.from(cardRefs.values()), { opacity: 0 })
    gsap.set(gridRef.value!.querySelectorAll('.hex-outline'), { strokeOpacity: 0 })
    gsap.set(headerRef.value!, { y: 30 })
  }

  entranceObserver = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        playEntrance()
        entranceObserver?.disconnect()
      }
    },
    { threshold: 0.25 }
  )
  if (gridRef.value) entranceObserver.observe(gridRef.value)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  entranceObserver?.disconnect()
})
</script>

<style scoped>
.hex-wrapper {
  position: absolute;
  perspective: 900px;
}

.hex-outline {
  stroke-opacity: 1;
}

.hex-card {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
  transform-style: preserve-3d;
  -webkit-tap-highlight-color: transparent;
}

/* L'ombre est portée par chaque face : un filter sur la carte casserait la 3D */
.hex-face {
  filter: drop-shadow(0 2px 3px rgb(0 0 0 / 0.06));
  transition: filter 0.35s ease;
}

.hex-card.is-lifted .hex-face {
  filter: drop-shadow(0 14px 16px rgb(73 161 21 / 0.3));
}

.hex-card:focus-visible {
  outline: none;
}

.hex-card:focus-visible .hex-face polygon:first-of-type {
  stroke: #49a115;
  stroke-width: 4;
}

.hex-face {
  position: absolute;
  inset: 0;
  display: block;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.hex-face--back {
  transform: rotateY(180deg);
}

.hex-fill {
  transition: fill-opacity 0.3s ease;
}

.hex-card.is-lifted .hex-fill {
  fill-opacity: 0.22;
}
</style>
