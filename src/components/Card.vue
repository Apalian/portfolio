<template>
  <div
    class="card-container"
    :class="direction"
    :style="{ transform: `translateX(${initialOffset}px)` }"
  >
    <div class="card" @mouseover="hover = true" @mouseleave="hover = false" @click="openModalHandler">
      <div class="card-content" :class="{ 'card-hover': hover }">
        <img :src="imageUrl" :alt="imageAlt" class="card-image">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, inject } from 'vue';

const props = defineProps<{
  imageUrl: string;
  imageAlt: string;
  direction: string;
  delay: number;
  modalComponent: any;
}>();

const hover = ref(false);
const openModal = inject('openModal') as (component: any) => void;

const openModalHandler = () => {
  openModal(props.modalComponent);
};

const initialOffset = computed(() => {
  const screenWidth = window.innerWidth;
  return screenWidth + (screenWidth * props.delay) / 20;
});
</script>

<style scoped>
.card-container {
  position: absolute;
  width: 200px;
  height: 250px;
  animation: move 20s linear infinite;
  box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.9);
  animation-delay: v-bind('delay + "s"'); 
}

.card-container.left {
  animation-direction: normal; /* Move from right to left */
}

.card-container.right {
  animation-direction: reverse; /* Move from left to right */
}

.card {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d; /* Enable 3D transformations */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transitions */
}

.card-content {
  width: 100%;
  height: 100%;
  padding: 10px; /* Réduit le padding pour donner plus d'espace à l'image */
  background-color: white;
  border-radius: 10px;
  transition: box-shadow 0.2s ease, transform 0.3s ease;
  display: flex; /* Ajoute flexbox pour centrer l'image */
  justify-content: center; /* Centre horizontalement */
  align-items: center; /* Centre verticalement */
}

.card-hover {
  transform: translateX(20px) translateY(-20px);
  box-shadow: -10px 15px 0.5px rgba(0, 0, 0, 0.1);
}

h3 {
  display: flex;
  justify-content: center;
  margin-top: 5px;
  font-size: 1.5rem;
  margin-bottom: 10px;
}

p {
  font-size: 1rem;
  color: #666;
}

@keyframes move {
  0% {
    transform: translateX(100vw);
  }
  100% {
    transform: translateX(-100%);
  }
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Garde le ratio de l'image */
  border-radius: 10px;
  padding: 10px; /* Réduit le padding pour donner plus d'espace à l'image */
  box-sizing: border-box; /* Inclut le padding dans la taille totale */
}
</style>