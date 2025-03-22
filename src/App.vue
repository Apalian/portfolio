<script setup lang="ts">
import Profile from './components/Profile.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Credit from './components/Credit.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar/>
  <Profile/>
  <Skills/>
  <Projects/>
  <Credit/>
</template>

<style scoped>
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
