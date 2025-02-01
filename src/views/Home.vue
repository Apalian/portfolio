<template>
    <div class="portfolio-container">
      <Belt
        v-for="(belt, index) in belts"
        :key="index"
        :cards="belt.cards"
        :direction="belt.direction"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import Belt from '@/components/Belt.vue';
  
  const belts = [
    {
      direction: 'left', // All cards in this belt move left
      cards: [
      { title: 'Card 1', description: 'Description 1' },
        { title: 'Card 2', description: 'Description 2' },
        { title: 'Card 3', description: 'Description 3' },
        { title: 'Card 4', description: 'Description 4' },
        { title: 'Card 5', description: 'Description 5' },

      ],
    },
    {
      direction: 'right', // All cards in this belt move right
      cards: [
      { title: 'Card 1', description: 'Description 1' },
        { title: 'Card 2', description: 'Description 2' },
        { title: 'Card 3', description: 'Description 3' },
        { title: 'Card 4', description: 'Description 4' },
        { title: 'Card 5', description: 'Description 5' },

      ],
    },
    {
      direction: 'left',
      cards: [
        { title: 'Card 1', description: 'Description 1' },
        { title: 'Card 2', description: 'Description 2' },
        { title: 'Card 3', description: 'Description 3' },
        { title: 'Card 4', description: 'Description 4' },
        { title: 'Card 5', description: 'Description 5' },

      ],
    },
  ];
  </script>
  
  <style scoped>
  .portfolio-container {
    padding: 20px;
  }
  </style>