<template>
    <div class="nav-wrapper">
      <nav class="navbar-container">
        <ul class="link-container">
          <li class="nav-item">
            <a href="#" class="nav-link" @click="scrollToSection()">{{ Home }}</a>
          </li>
          <li class="nav-item">
            <div class="vertical-bar"></div>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" @click="scrollToSection('skills')">{{ Skills }}</a>
          </li>
          <li class="nav-item">
            <div class="vertical-bar"></div>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" @click="scrollToSection('projects')">{{ Projects }}</a>
          </li>
          <li class="nav-item">
            <div class="vertical-bar"></div>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" @click="scrollToSection('contact')">{{ Contact }}</a>
          </li>
        </ul>
      </nav>
      <div class="horizontal-bar"></div>
    </div>
  </template>
  
  <script setup>
import { computed } from 'vue'
import { useLanguage } from '../utils/language.js';

const { language } = useLanguage()

const translations = {
  en : {
    'home-text' : "Home",
    'skills-text' : 'Skills',
    'projects-text' : "Projects",
    'contact-text' : "Contact"
  },
  fr : {
    'home-text' : "Accueil",
    'skills-text' : 'Compétences',
    'projects-text' : "Projets",
    'contact-text' : "Me Contacter"
  },
  zh : {
    'home-text' : "主页",
    'skills-text' : '技能',
    'projects-text' : "项目",
    'contact-text' : "联系我"
  }
}
// Propriétés calculées pour obtenir les traductions
const Home = computed(() => translations[language.value]?.['home-text']);
const Skills = computed(() => translations[language.value]?.['skills-text']);
const Projects = computed(() => translations[language.value]?.['projects-text']);
const Contact = computed(() => translations[language.value]?.['contact-text']);


  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  </script>
  
  
  <style scoped>
  .nav-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0.5rem 0;
  }
  
  .navbar-container {
    width: 50%;
    max-width: 800px;
    margin-bottom: 0.75rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    background-color: var(--primary-color-alt);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }
  
  .navbar-container:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px -2px rgba(0, 0, 0, 0.1);
  }
  
  .link-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .nav-item {
    display: flex;
    align-items: center;
  }
  
  .nav-link {
    font-size: 1rem;
    text-decoration: none;
    color: var(--secondary-color);
    font-weight: 500;
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    transition: all 0.2s ease;
    position: relative;
  }
  
  .nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background: var(--secondary-color);
    transition: all 0.3s ease;
    transform: translateX(-50%);
    opacity: 0;
  }
  
  .nav-link:hover {
    color: var(--tertiary-color-alt);
  }
  
  .nav-link:hover::after {
    width: 70%;
    opacity: 1;
  }
  
  .vertical-bar {
    width: 2px;
    height: 24px;
    margin: 0 0.5rem;
    background: linear-gradient(
      to bottom,
      var(--secondary-color-alt),
      var(--secondary-color) 50%,
      var(--secondary-color-alt)
    );
  }
  
  .horizontal-bar {
    width: 65%;
    max-width: 1000px;
    height: 2px;
    background: linear-gradient(
      to right,
      var(--secondary-color-alt),
      var(--secondary-color) 50%,
      var(--secondary-color-alt)
    );
    border-radius: 1px;
  }

  </style>