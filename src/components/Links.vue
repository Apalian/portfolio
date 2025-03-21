<template>
  <div class="container">
    <div class="socials">
      <a href="https://www.linkedin.com/in/colin-lespilette/"
        ><img src="/linkedin.svg" alt="LinkedIn"
      /></a>
      <a href="https://github.com/Apalian"
        ><img src="/github.svg" alt="Github"
      /></a>
    </div>
    <a @click="copyEmail" class="email-link" title="Copier l'adresse email"
      ><img src="/mail.svg" alt="Mail"
    /></a>
    <a href="./resume.pdf" download="resume.pdf" class="resume">
      <img src="/file.svg" alt="Resume" />
      <span>Resume</span>
    </a>

    <div class="toast" :class="{ 'show-toast': showToast }">
      <span>Copied to clipboard!</span>
      <button class="toast-close" @click="dismissToast">&times;</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showToast = ref(false);
let toastTimeout: number | null = null;

const copyEmail = () => {
  navigator.clipboard
    .writeText("colinlespilette@gmail.com")
    .then(() => {
      showToast.value = true;

      // Annuler tout timeout existant pour éviter les problèmes
      if (toastTimeout) {
        clearTimeout(toastTimeout);
      }

      // Définir un nouveau timeout
      toastTimeout = setTimeout(() => {
        showToast.value = false;
        toastTimeout = null;
      }, 3000) as unknown as number;
    })
    .catch((err) => {
      console.error("Erreur lors de la copie:", err);
    });
};

const dismissToast = () => {
  showToast.value = false;
  if (toastTimeout) {
    clearTimeout(toastTimeout);
    toastTimeout = null;
  }
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  position: relative;
}

.socials {
  width: 64px;
  padding: 8px;
  border: solid 2px;
  border-radius: 8px;
  border-color: rgba(255, 255, 255, 0.87);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.resume {
  display: flex;
  align-items: center;
}

a {
  display: block;
  width: 32px;
  height: 32px;
}

.email-link {
  cursor: pointer;
  margin-left: 8px;
}

img {
  width: 100%;
  height: 100%;
}

.toast {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 12px;
}

.show-toast {
  opacity: 1;
  visibility: visible;
}

.toast-close {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  padding: 0;
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.toast-close:hover {
  opacity: 1;
}
</style>
