<template>
  <div class="profile-header">
    <img src="/PP.jpg" alt="Profile picture" />
    <div class="profile-info">
      <div class="name-links-container">
        <h1>{{ helloText }}</h1>
        <div class="links-wrapper">
          <PropsSwitcher />
          <Links />
        </div>
      </div>
      <h2 v-html="jobText"></h2>
    </div>
  </div>

  <div class="profile-content">
    <div class="location-badge">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="location-icon"
      >
        <path
          d="M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13ZM12 13V21M11 7H11.01"
          class="location-path"
        ></path>
      </svg>
      <p>{{ locationText }}</p>
    </div>
    <p class="bio-text">{{ aboutText }}</p>
  </div>
</template>

<script setup>
import Links from './Links.vue'
import PropsSwitcher from './PropsSwitcher.vue';
import { computed } from 'vue'
import { useLanguage } from '../utils/language.js';

const { language } = useLanguage()

const translations = {
  en : {
    'hello-text' : "Hey, I'm Lespilette Colin 👋",
    'job-text' : 'A <span class="highlight">Data Engineering Student</span>',
    'location-text' : "Toulouse, France",
    'about-text' : "I'm 19 years old and currently in my second year of a Bachelor of Technology in Computer Science."
  },
  fr : {
    'hello-text' : "Bonjour, je suis Lespilette Colin 👋",
    'job-text' : '<span class="highlight">Étudiant en Data</span>',
    'location-text' : "Toulouse, France",
    'about-text' : "J'ai 19 ans et je suis actuellement en deuxième année de BUT informatique"
  },
  zh : {
    'hello-text' : "你好，我的名字是 Lespilette Colin 👋",
    'job-text' : '一个<span class="highlight">数据工程学生</span>',
    'location-text' : "Toulouse, 法国",
    'about-text' : "我十九岁. 目前我在攻读计算机科学的技术学士第二年."
  }
}
// Computed properties for translations
const helloText = computed(() => translations[language.value]?.['hello-text']);
const jobText = computed(() => translations[language.value]?.['job-text']);
const locationText = computed(() => translations[language.value]?.['location-text']);
const aboutText = computed(() => translations[language.value]?.['about-text']);
</script>

<style scoped>
.profile-header {
  display: flex;
  align-items: center;
  margin: 0;
  flex-wrap: wrap;
  justify-content: center;
}

.profile-header img {
  width: 192px;
  height: 192px;
  border-radius: 90%;
  object-fit: cover;
  will-change: filter;
  transition: filter 300ms;
  margin-right: 1em;
  margin-bottom: 1em;
}

.profile-header img:hover {
  filter: drop-shadow(0 0 1em #686868aa);
}

.profile-info {
  width: 100%;
  max-width: 600px;
}

.profile-content {
  margin-left: 9em;
  max-width: 25em;
}

.location-badge {
  display: flex;
  align-items: center;
  width: fit-content;
}

.location-badge p {
  margin: 0;
}

.location-icon {
  width: 16px;
  height: 16px;
  stroke: var(--secondary-color);
  transition: stroke 0.4s ease;
}

.location-path {
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.highlight {
  color: rgba(99, 98, 98, 0.87);
}

.name-links-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
}

.links-wrapper {
  margin-left: auto;
  display: flex;
  gap: 16px;
}

.bio-text {
  margin-top: 1em;
}

h1,
h2,
h3,
div {
  margin: 0;
}

p {
  font-size: 1.1em;
}

/* Responsive Breakpoints */
@media screen and (max-width: 1024px) {
  .profile-header {
    flex-direction: column;
    text-align: center;
  }

  .profile-header img {
    margin-right: 0;
    margin-bottom: 1.5em;
  }

  .name-links-container {
    flex-direction: column;
    align-items: center;
  }

  .links-wrapper {
    margin-left: 0;
    margin-top: 1em;
  }

  .profile-content {
    margin-left: 0;
    text-align: center;
    max-width: 100%;
    padding: 0 1em;
  }

  .location-badge {
    justify-content: center;
    width: 100%;
    margin-bottom: 1em;
  }
}

@media screen and (max-width: 768px) {
  .profile-header img {
    width: 160px;
    height: 160px;
  }

  h1 {
    font-size: 1.8em;
  }

  h2 {
    font-size: 1.4em;
  }

  .links-wrapper {
    gap: 12px;
  }
}

@media screen and (max-width: 480px) {
  .profile-header img {
    width: 140px;
    height: 140px;
  }

  h1 {
    font-size: 1.6em;
  }

  h2 {
    font-size: 1.2em;
  }

  .links-wrapper {
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }

  p {
    font-size: 1em;
  }
}
</style>