<template>
  <Navbar />
  <Hero />
  <About />
  <Education />
  <Skills />
  <Projects />
  <ScrollToTop :sections="['hero', 'about', 'education', 'skills', 'projects']" />
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import About from './components/About.vue'
import Education from './components/Education.vue'
import Hero from './components/Hero.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import ScrollToTop from './components/ScrollToTop.vue'

</script>
