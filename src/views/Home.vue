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
  import ClimbingModal from '@/components/modals/ClimbingModal.vue';
  import WorkoutModal from '@/components/modals/WorkoutModal.vue';
  import ClimbingShoe from '@/assets/svg/climbing_shoe.svg';
  const belts = [
    {
      direction: 'left', // All cards in this belt move left
      cards: [
      { imageUrl: 'https://via.placeholder.com/150', imageAlt: 'Card 1' },
        { imageUrl: 'https://via.placeholder.com/150', imageAlt: 'Card 2' },
        { imageUrl: 'https://via.placeholder.com/150', imageAlt: 'Card 3' },
        { imageUrl: 'https://via.placeholder.com/150', imageAlt: 'Card 4' },
        { imageUrl: 'https://via.placeholder.com/150', imageAlt: 'Card 5' },


      ],
    },
    {
      direction: 'right', // All cards in this belt move right
      cards: [
      { imageUrl: 'https://via.placeholder.com/150', imageAlt: 'Card 1' },
        { imageUrl: 'https://via.placeholder.com/150', imageAlt: 'Card 2' },
        { imageUrl: 'https://via.placeholder.com/150', imageAlt: 'Card 3' },
        { imageUrl: 'https://via.placeholder.com/150', imageAlt: 'Card 4' },
        { imageUrl: 'https://via.placeholder.com/150', imageAlt: 'Card 5'},


      ],
    },
    {
      direction: 'left',
      cards: [
        { imageUrl: ClimbingShoe, imageAlt: 'Escalade', modalComponent: ClimbingModal },
        { imageUrl: 'https://via.placeholder.com/150', imageAlt: 'Musculation', modalComponent: WorkoutModal },
        { imageUrl: 'https://via.placeholder.com/150', imageAlt: 'Card 3' },
        { imageUrl: 'https://via.placeholder.com/150', imageAlt: 'Card 4'},
        { imageUrl: 'https://via.placeholder.com/150', imageAlt: 'Card 5' },


      ],
    },
  ];
  </script>
  
  <style scoped>
  .portfolio-container {

    height: 100vh;
    display: flex;
    flex-direction: column;

    justify-content: space-around;
  }
  </style>