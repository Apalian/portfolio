<script setup lang="ts">
import Profile from "./components/Profile.vue";
import Skill from "./components/Skill.vue";
import Projects from "./components/Projects.vue";
import Credit from "./components/Credit.vue";
</script>

<template>
  <Profile />
  <Skill />
  <Projects />
  <Credit />
</template>

<style scoped>
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
