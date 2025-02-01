<template>
  <div>
    <!-- Infinite Deep Blue Background -->
    <div class="background-infinite-blue"></div>

    <!-- Main Portfolio (blurred when Intro is visible) -->
    <div :class="{ 'blurred': showIntro }">
      <Home />
    </div>

    <!-- Intro (higher z-index) -->
    <transition name="fade">
      <Intro v-if="showIntro" @start-portfolio="showIntro = false" />
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Intro from './views/Intro.vue';
import Home from './views/Home.vue';

const showIntro = ref(true);
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  overflow: hidden;
}

/* Infinite Deep Blue Background */
.background-infinite-blue {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #001f3f, #003366, #004080, #00509e);
  background-size: 400% 400%;
  animation: gradientFlow 15s ease infinite;
  z-index: -1; /* Ensure it stays behind other content */
}

/* Gradient Animation */
@keyframes gradientFlow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Blur effect for the Main Portfolio */
.blurred {
  filter: blur(3px);
  transition: filter 0.5s;
}

/* Fade transition for the Intro */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>