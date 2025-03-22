<template>
  <span class="badge">{{ text }}</span>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  text: String,
});

</script>

<style scoped>
.badge {
  padding: 2px 8px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
  background-color: var(--tertiary-color);
  color: rgba(0, 0, 0, 0.87);
  display: inline-block;
  cursor:default;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Effet au hover */
.badge:hover {
  transform: scale(1.1); /* Zoom léger au hover */
  box-shadow: 0 2px 4px var(--secondary-color); /* Ombre portée */
  background-color: var(--tertiary-color-alt);
}
</style>