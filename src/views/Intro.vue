<template>
  <div class="intro-container">
    <div class="content">
      <h1>
        <span
  v-for="(letter, index) in letters"
  :key="index"
  class="letter"
  :class="{ 'space': letter === ' ' }"
  :style="{ animationDelay: `${index * 0.1}s` }"
>
  {{ letter === ' ' ? ' ' : letter }}
</span>
      </h1>
      <button @click="startPortfolio">Get Started</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const emit = defineEmits(['start-portfolio']);

const startPortfolio = () => {
  emit('start-portfolio');
};

// Split the text into letters for animation
const text = "Lespilette Colin";
const letters = ref<string[]>([]);

onMounted(() => {
  letters.value = text.split('');
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Tangerine:wght@400;700&display=swap');

.intro-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
}

.content {
  text-align: center;
  z-index: 1001;
}

h1 {
  font-family: "Kaushan Script", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 10rem;
  color: white;
  white-space: nowrap; /* Ensure text stays in one line */
}

.letter {
  display: inline-block;
  opacity: 0;
  animation: appear 0.5s ease forwards;
}

.space {
  width: 0.3em;
}

@keyframes appear {
  from {
    opacity: 0;
    transform: translateY(20px); /* Optional: Add a slight vertical movement */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

button {
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 2rem; /* Adjust spacing */
}

button:hover {
  background-color: #33a06f;
}
</style>