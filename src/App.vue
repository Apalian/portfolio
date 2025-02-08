<template>
  <div>
    <!-- Infinite Deep Blue Background -->
    <div class="background-infinite-blue"></div>

    <!-- Main Portfolio (blurred when Intro or Modal is visible) -->
    <div :class="{ 'blurred': showIntro || activeModal }">
      <Home />
    </div>

    <!-- Intro (higher z-index) -->
    <transition name="fade">
      <Intro v-if="showIntro" @start-portfolio="showIntro = false" />
    </transition>

    <!-- Global Modal -->
    <transition name="fade">
      <div v-if="activeModal" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <component :is="activeModal" @close="closeModal" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue';
import Intro from './views/Intro.vue';
import Home from './views/Home.vue';

const showIntro = ref(true);
const activeModal = ref(null);

const openModal = (modalComponent: any) => {
  activeModal.value = modalComponent;
};

const closeModal = () => {
  activeModal.value = null;
};

// Fournir les méthodes aux composants enfants
provide('openModal', openModal);
provide('closeModal', closeModal);
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

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.98);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  width: 60%;
  height: 80%;
  background-color: #242424;
  color: #ffffff;
  border-radius: 15px;
  overflow-y: auto;
  position: relative;
  padding: 20px;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>