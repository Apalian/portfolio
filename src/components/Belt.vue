<template>
  <div class="belt">
    <Card
      v-for="(card, index) in cards"
      :key="card.title"
      :title="card.title"
      :description="card.description"
      :direction="direction"
      :delay="index * 2" 
    />
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/Card.vue';

defineProps<{
  cards: { title: string; description: string }[];
  direction: string; // Direction of movement for the belt
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