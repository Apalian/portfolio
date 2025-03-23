<template>
    <div class="form-container">
      <div class="form-card">
        <h2 class="form-title">Contact Me</h2>
        <form class="form" @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name" class="form-label">Nom</label>
            <input 
              type="text" 
              id="name" 
              class="form-input" 
              placeholder="Votre nom"
              v-model="formData.name"
              required
            >
          </div>
          
          <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input 
              type="email" 
              id="email" 
              class="form-input" 
              placeholder="Votre email"
              v-model="formData.email"
              required
            >
          </div>
          
          <div class="form-group">
            <label for="message" class="form-label">Message</label>
            <textarea 
              id="message" 
              class="form-textarea" 
              rows="4" 
              placeholder="Votre message"
              v-model="formData.message"
              required
            ></textarea>
          </div>
          
          <button type="submit" class="form-button">Envoyer</button>
        </form>
      </div>
      
      <div class="toast" :class="{ 'show-toast': showToast }">
        <span>Ce formulaire ne marche pas encore !</span>
        <!-- <span>Message envoyé avec succès!</span> -->
        <button class="toast-close" @click="dismissToast">&times;</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactForm',
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: ''
        },
        showToast: false,
        toastTimeout: null
      }
    },
    methods: {
      submitForm() {
        // Logique d'envoi du formulaire
        console.log('Formulaire soumis:', this.formData);
        
        // Simuler un envoi réussi (remplacer par votre logique d'API)
        setTimeout(() => {
          // Afficher le toast
          this.showToast = true;
          
          // Effacer tout timeout existant pour éviter des problèmes
          if (this.toastTimeout) {
            clearTimeout(this.toastTimeout);
          }
          
          // Réinitialiser le formulaire
          this.formData = {
            name: '',
            email: '',
            message: ''
          };
          
          // Définir un nouveau timeout
          this.toastTimeout = setTimeout(() => {
            this.showToast = false;
            this.toastTimeout = null;
          }, 3000);
        }, 500); // Simule un délai de réseau
      },
      
      dismissToast() {
        this.showToast = false;
        if (this.toastTimeout) {
          clearTimeout(this.toastTimeout);
          this.toastTimeout = null;
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 30px 20px;
    position: relative;
  }
  
  .form-card {
    background: var(--primary-color-alt);
    width: 100%;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    padding: 30px;
    transform: translateY(0);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-sizing: border-box;
  }
  
  .form-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  }
  
  .form-title {
    color: var(--secondary-color);
    font-size: 24px;
    margin-bottom: 25px;
    text-align: center;
    font-weight: 600;
  }
  
  .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }
  
  .form-label {
    font-size: 1em;
    font-weight: 500;
    color: var(--secondary-color);
    margin-left: 2px;
  }
  
  .form-input, 
  .form-textarea {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid var(--tertiary-color);
    border-radius: 8px;
    font-size: 15px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    background-color: var(--primary-color);
    box-sizing: border-box;
  }
  
  .form-input:focus, 
  .form-textarea:focus {
    border-color: var(--tertiary-color-alt);
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
    outline: none;
  }
  
  .form-textarea {
    min-height: 120px;
    resize: vertical;
  }
  
  .form-button {
    margin-top: 10px;
    padding: 14px;
    background-color: var(--tertiary-color-alt);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    width: 100%;
  }
  
  .form-button:hover {
    background-color: var(--tertiary-color);
    transform: translateY(-2px);
  }
  
  .form-button:active {
    transform: translateY(0);
  }
  
  /* Styles pour le toast */
  .toast {
    position: fixed;
    bottom: 40px;
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
  }
  </style>