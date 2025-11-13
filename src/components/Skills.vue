<template>
  <section id="skills" class="min-h-screen bg-white overflow-hidden">
    <div class="hexagon-grid" ref="hexagonGridRef">
      <div
        v-for="row in rows"
        :key="row"
        class="hexagon-row"
        :style="{ marginLeft: row % 2 === 0 ? `${hexWidth / 2}px` : '0' }"
      >
        <div v-for="col in cols" :key="`${row}-${col}`" class="hexagon-wrapper">
          <div
            class="hexagon-flip-container"
            :ref="(el) => setHexagonRef(el, row, col)"
            @click="animateFlip(row, col)"
            :style="{
              width: `${hexWidth}px`,
              height: `${hexHeight}px`,
              cursor: getSpecialHexagon(row, col) ? 'pointer' : 'default',
              zIndex: getZIndex(row, col),
            }"
          >
            <!-- Face avant -->
            <svg
              :width="hexWidth"
              :height="hexHeight"
              class="hexagon-svg hexagon-front"
              :style="{ opacity: getOpacity(row, col) }"
              :data-distance="getDistanceFromCenter(row, col)"
              :data-is-special="!!getSpecialHexagon(row, col)"
              :data-fill-color="getHexagonFill(row, col)"
            >
              <defs>
                <!-- Filtre pour l'ombre portée -->
                <filter :id="`shadow-${row}-${col}`" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                  <feOffset dx="0" dy="8" result="offsetblur" />
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.3" />
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <polygon
                :points="getHexagonPoints()"
                class="hexagon-shape"
                :class="{ 'hexagon-special': getSpecialHexagon(row, col) }"
                fill="transparent"
                :stroke="getHexagonStroke(row, col)"
                stroke-width="2"
                :filter="isAnimating(row, col) ? `url(#shadow-${row}-${col})` : ''"
              />

              <foreignObject
                v-if="getHexagonIcon(row, col)"
                :x="hexWidth * 0.25"
                :y="hexHeight * 0.25"
                :width="hexWidth * 0.5"
                :height="hexHeight * 0.5"
                class="hexagon-icon-wrapper"
                style="opacity: 0"
              >
                <div class="flex items-center justify-center w-full h-full">
                  <Icon
                    :icon="getHexagonIcon(row, col)"
                    :width="hexWidth * 0.4"
                    :height="hexHeight * 0.4"
                  />
                </div>
              </foreignObject>
            </svg>

            <!-- Face arrière -->
            <svg
              v-if="getSpecialHexagon(row, col)"
              :width="hexWidth"
              :height="hexHeight"
              class="hexagon-svg hexagon-back"
              :style="{ opacity: getOpacity(row, col) }"
            >
              <polygon
                :points="getHexagonPoints()"
                :fill="getHexagonFill(row, col)"
                stroke="white"
                stroke-width="2"
                :filter="isAnimating(row, col) ? `url(#shadow-${row}-${col})` : ''"
              />

              <foreignObject
                :x="hexWidth * 0.1"
                :y="hexHeight * 0.3"
                :width="hexWidth * 0.8"
                :height="hexHeight * 0.4"
              >
                <div class="flex items-center justify-center w-full h-full text-center px-2">
                  <span class="text-white font-semibold text-sm">
                    {{ getSpecialHexagon(row, col).skill }}
                  </span>
                </div>
              </foreignObject>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const hexWidth = ref(150)
const hexHeight = computed(() => hexWidth.value * 1.1547)
const hexagonGridRef = ref(null)

const cols = ref(Math.ceil(window.innerWidth / hexWidth.value) + 2)
const rows = ref(Math.ceil(window.innerHeight / (hexHeight.value * 0.75)) + 2)

// Références pour chaque hexagone
const hexagonRefs = ref({})

// État pour gérer les hexagones retournés et en cours d'animation
const flippedHexagons = ref(new Set())
const animatingHexagons = ref(new Set())

// Couleurs du dégradé
const colors = {
  kellyGreen: '#49a115',
  darkLemon: '#94b911',
  acidGreen: '#b4c50c',
}

// Centre de la grille
const centerRow = computed(() => Math.floor(rows.value / 2))
const centerCol = computed(() => Math.floor(cols.value / 2))

// Distance maximale pour normaliser l'opacité
const maxDistance = computed(() => {
  return Math.sqrt(Math.pow(centerRow.value, 2) + Math.pow(centerCol.value, 2))
})

// Définir les hexagones spéciaux avec leurs compétences
const specialHexagons = ref([
  { row: -1, col: -1, skill: 'Python', icon: 'logos:python' },
  { row: -1, col: 0, skill: 'TensorFlow', icon: 'logos:tensorflow' },
  { row: -1, col: 1, skill: 'NumPy', icon: 'logos:numpy' },

  { row: 0, col: -2, skill: 'MySql', icon: 'logos:mysql' },
  { row: 0, col: -1, skill: 'PostgreSQL', icon: 'logos:postgresql' },
  { row: 0, col: 0, skill: 'MongoDB', icon: 'devicon:mongodb' },

  { row: 1, col: -3, skill: 'HTML5', icon: 'devicon:html5' },
  { row: 1, col: -2, skill: 'CSS3', icon: 'devicon:css3' },
  { row: 1, col: -1, skill: 'PHP', icon: 'logos:php' },
  { row: 1, col: 0, skill: 'JavaScript', icon: 'logos:javascript' },
  { row: 1, col: 1, skill: 'TypeScript', icon: 'devicon:typescript' },

  { row: 2, col: -2, skill: 'Node.js', icon: 'logos:nodejs' },
  { row: 2, col: -1, skill: 'Express.js', icon: 'logos:express' },
  { row: 2, col: 0, skill: 'Vue.js', icon: 'logos:vue' },
  { row: 2, col: 1, skill: 'React', icon: 'logos:react' },

  { row: 3, col: -1, skill: 'Git', icon: 'devicon:git' },
  { row: 3, col: 0, skill: 'Linux', icon: 'logos:linux-tux' },
])

// Stocker les refs des hexagones
const setHexagonRef = (el, row, col) => {
  if (el) {
    hexagonRefs.value[`${row}-${col}`] = el
  }
}

// Gérer le z-index dynamiquement
const getZIndex = (row, col) => {
  const key = `${row}-${col}`
  return animatingHexagons.value.has(key) ? 1000 : 1
}

// Vérifier si l'hexagone est en cours d'animation
const isAnimating = (row, col) => {
  return animatingHexagons.value.has(`${row}-${col}`)
}

// Animation de flip avec soulèvement
const animateFlip = (row, col) => {
  const special = getSpecialHexagon(row, col)
  if (!special) return

  const key = `${row}-${col}`

  // Empêcher les clics pendant l'animation
  if (animatingHexagons.value.has(key)) return

  animatingHexagons.value.add(key)
  animatingHexagons.value = new Set(animatingHexagons.value) // Force reactivity

  const hexElement = hexagonRefs.value[key]
  if (!hexElement) return

  const isCurrentlyFlipped = flippedHexagons.value.has(key)
  const targetRotation = isCurrentlyFlipped ? 0 : 180

  // Timeline pour l'animation complète
  const tl = gsap.timeline({
    onComplete: () => {
      animatingHexagons.value.delete(key)
      animatingHexagons.value = new Set(animatingHexagons.value) // Force reactivity

      // Mettre à jour l'état flippé
      if (isCurrentlyFlipped) {
        flippedHexagons.value.delete(key)
      } else {
        flippedHexagons.value.add(key)
      }
      flippedHexagons.value = new Set(flippedHexagons.value)
    },
  })

  // 1. Soulever vers le haut avec scale et z
  tl.to(hexElement, {
    y: -30, // Déplacement vers le haut
    z: 100, // Profondeur 3D
    scale: 1.15, // Légèrement plus grand
    duration: 0.35,
    ease: 'power2.out',
  })

  // 2. Rotation pendant qu'il est en l'air
  tl.to(
    hexElement,
    {
      rotationY: targetRotation,
      duration: 0.5,
      ease: 'power2.inOut',
    },
    '-=0.15'
  )

  // 3. Redescendre et revenir à la taille normale
  tl.to(
    hexElement,
    {
      y: 0,
      z: 0,
      scale: 1,
      duration: 0.35,
      ease: 'power2.in',
    },
    '-=0.15'
  )
}

const isFlipped = (row, col) => {
  return flippedHexagons.value.has(`${row}-${col}`)
}

// Calculer la distance depuis le centre
const getDistanceFromCenter = (row, col) => {
  const rowDiff = row - centerRow.value
  const colDiff = col - centerCol.value
  return Math.sqrt(rowDiff * rowDiff + colDiff * colDiff)
}

// Interpoler entre deux couleurs
const interpolateColor = (color1, color2, factor) => {
  const hex1 = color1.replace('#', '')
  const hex2 = color2.replace('#', '')

  const r1 = parseInt(hex1.substring(0, 2), 16)
  const g1 = parseInt(hex1.substring(2, 4), 16)
  const b1 = parseInt(hex1.substring(4, 6), 16)

  const r2 = parseInt(hex2.substring(0, 2), 16)
  const g2 = parseInt(hex2.substring(2, 4), 16)
  const b2 = parseInt(hex2.substring(4, 6), 16)

  const r = Math.round(r1 + (r2 - r1) * factor)
  const g = Math.round(g1 + (g2 - g1) * factor)
  const b = Math.round(b1 + (b2 - b1) * factor)

  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b
    .toString(16)
    .padStart(2, '0')}`
}

// Obtenir la couleur basée sur la distance (utilisée pour stroke ET fill)
const getColorFromDistance = (row, col) => {
  const distance = getDistanceFromCenter(row, col)
  const normalizedDistance = distance / maxDistance.value

  if (normalizedDistance < 0.33) {
    const factor = normalizedDistance / 0.33
    return interpolateColor(colors.kellyGreen, colors.darkLemon, factor)
  } else if (normalizedDistance < 0.66) {
    const factor = (normalizedDistance - 0.33) / 0.33
    return interpolateColor(colors.darkLemon, colors.acidGreen, factor)
  } else {
    return colors.acidGreen
  }
}

// Calculer l'opacité basée sur la distance
const getOpacity = (row, col) => {
  const distance = getDistanceFromCenter(row, col)
  const normalizedDistance = distance / maxDistance.value

  const minOpacity = 0
  const fadeStart = 0.2

  if (normalizedDistance < fadeStart) {
    return 1
  }

  const adjustedDistance = (normalizedDistance - fadeStart) / (1 - fadeStart)
  return 1 - adjustedDistance * (1 - minOpacity)
}

// Vérifier si c'est un hexagone spécial
const getSpecialHexagon = (row, col) => {
  const relativeRow = row - centerRow.value
  const relativeCol = col - centerCol.value

  return specialHexagons.value.find((hex) => hex.row === relativeRow && hex.col === relativeCol)
}

// Obtenir le fill de l'hexagone
const getHexagonFill = (row, col) => {
  const special = getSpecialHexagon(row, col)

  if (special) {
    return getColorFromDistance(row, col)
  }

  return 'transparent'
}

// Obtenir le stroke de l'hexagone
const getHexagonStroke = (row, col) => {
  const special = getSpecialHexagon(row, col)

  if (special) {
    return 'white'
  }

  return getColorFromDistance(row, col)
}

// Obtenir l'icône de l'hexagone
const getHexagonIcon = (row, col) => {
  const special = getSpecialHexagon(row, col)
  return special ? special.icon : null
}

const getHexagonPoints = () => {
  const w = hexWidth.value
  const h = hexHeight.value

  return `
    ${w / 2},0
    ${w},${h / 4}
    ${w},${(h * 3) / 4}
    ${w / 2},${h}
    0,${(h * 3) / 4}
    0,${h / 4}
  `
}

// Animation GSAP
const setupAnimation = () => {
  const allHexagons = document.querySelectorAll('.hexagon-shape')

  if (allHexagons.length === 0) return

  const hexagonsByDistance = Array.from(allHexagons).map((hex) => {
    const svg = hex.closest('.hexagon-svg')
    const distance = parseFloat(svg.getAttribute('data-distance'))
    const isSpecial = svg.getAttribute('data-is-special') === 'true'
    const fillColor = svg.getAttribute('data-fill-color')
    const strokeColor = hex.getAttribute('stroke')
    const icon = svg.querySelector('.hexagon-icon-wrapper')
    return { hex, icon, distance, isSpecial, fillColor, strokeColor }
  })

  hexagonsByDistance.sort((a, b) => a.distance - b.distance)

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: hexagonGridRef.value,
      start: 'top 50%',
      toggleActions: 'play none none none',
    },
  })

  hexagonsByDistance.forEach(({ hex, icon, isSpecial, fillColor, strokeColor }, index) => {
    const delay = index * 0.02

    if (isSpecial) {
      tl.to(
        hex,
        {
          fill: fillColor,
          duration: 0.4,
          ease: 'power2.out',
        },
        delay
      )

      if (icon) {
        tl.to(
          icon,
          {
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out',
          },
          delay + 0.2
        )
      }
    } else {
      tl.fromTo(
        hex,
        {
          strokeOpacity: 0,
        },
        {
          strokeOpacity: 1,
          duration: 0.3,
          ease: 'power2.out',
        },
        delay
      )
    }
  })
}

onMounted(() => {
  setTimeout(() => {
    setupAnimation()
  }, 100)
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
})
</script>

<style scoped>
.hexagon-grid {
  display: flex;
  flex-direction: column;
  margin-top: -10px;
}

.hexagon-row {
  display: flex;
  margin-top: -43px;
}

.hexagon-wrapper {
  display: inline-block;
  perspective: 1000px;
}

.hexagon-flip-container {
  position: relative;
  transform-style: preserve-3d;
  transition: z-index 0s;
}

.hexagon-svg {
  display: block;
  backface-visibility: hidden;
}

.hexagon-front {
  position: relative;
  z-index: 2;
}

.hexagon-back {
  position: absolute;
  top: 0;
  left: 0;
  transform: rotateY(180deg);
  z-index: 1;
}

.hexagon-shape {
  stroke-opacity: 0;
  transition: all 0.3s ease;
}

.hexagon-icon {
  pointer-events: none;
  opacity: 0.9;
}

.hexagon-shape:hover {
  opacity: 0.8;
}
</style>
