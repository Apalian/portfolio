<script setup lang="ts">
import Profile from './components/Profile.vue'
import Tech from './components/Tech.vue'
import Projects from './components/Projects.vue'
import Credit from './components/Credit.vue';
</script>

<template>
  <Profile/>
  <Tech/>
  <Projects/>
  <Credit/>
</template>

<style scoped>

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
