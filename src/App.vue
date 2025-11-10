<template>
  <Navbar />
  <Hero />
  <About />
  <Education />
  <Skills />
  <Projects />
  <Contact />
  <Footer />
  <ScrollToTop :sections="['hero', 'about', 'education', 'skills', 'projects', 'contact']" />
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import About from './components/About.vue'
import Education from './components/Education.vue'
import Hero from './components/Hero.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import ScrollToTop from './components/ScrollToTop.vue'
</script>
