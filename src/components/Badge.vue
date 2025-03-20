<template>
  <span :style="styles" class="badge">{{ text }}</span>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  text: String,
  color: String // Peut être un nom ou une couleur personnalisée
});

// Mapping des couleurs prédéfinies
const badgeColors = {
  schoolBusYellow: { background: "#ffd900", text: "#101010" },
  rioGrande: { background: "#b5cc00", text: "#101010" },
  lima: { background: "#68bb1a", text: "#101010" },
  apple: { background: "#00a637", text: "#101010" },
  greenHaze: { background: "#008f4d", text: "#101010" }
};

// Génération dynamique des styles
const styles = computed(() => {
  if (!props.color) {
    // Style par défaut si aucune couleur n'est spécifiée
    return {
      backgroundColor: 'transparent',
      color: '#ffffff',
      border: '1px solid #ffffff'
    };
  }
  
  const selectedColor = badgeColors[props.color] || { background: props.color, text: "#ffffff" };
  return {
    backgroundColor: selectedColor.background,
    color: selectedColor.text,
    border: 'none' // S'assurer qu'il n'y a pas de bordure quand une couleur est spécifiée
  };
});
</script>

<style scoped>
.badge {
  padding: 2px 8px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
  display: inline-block;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transition pour l'animation */
}

/* Effet au hover */
.badge:hover {
  transform: scale(1.1); /* Zoom léger au hover */
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.2); /* Ombre portée */
}
</style>