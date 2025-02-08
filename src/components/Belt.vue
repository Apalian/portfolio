<template>
  <div class="belt">
    <Card
      v-for="(card, index) in cards"
      :key="index"
      :imageUrl="card.imageUrl"
      :imageAlt="card.imageAlt"
      :direction="direction"
      :delay="index * 2"
      :modalComponent="card.modalComponent"
    />
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/Card.vue';

defineProps<{
  cards: {
    imageUrl: string;
    imageAlt: string;
    modalComponent?: any;
  }[];
  direction: string;
}>();
</script>

<style scoped>
.belt {
  position: relative;
  width: 100%;
  height: 350px; /* Adjust based on card height */
  overflow: hidden; /* Hide cards when they move offscreen */
  padding-top: 20px;
  margin-bottom: 20px;
  rotate: -5deg;
}
</style>