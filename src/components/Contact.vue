<template>
  <div class="form-container">
    <div class="form-card">
      <h2 class="form-title">{{ Header }}</h2>
      <form class="form" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name" class="form-label">{{ Name }}</label>
          <input 
            type="text" 
            id="name" 
            class="form-input" 
            :placeholder="YourName"
            v-model="formData.name"
            required
          >
        </div>
        
        <div class="form-group">
          <label for="email" class="form-label">{{ Email }}</label>
          <input 
            type="email" 
            id="email" 
            class="form-input" 
            :placeholder="YourEmail"
            v-model="formData.email"
            required
          >
        </div>
        
        <div class="form-group">
          <label for="message" class="form-label">{{ Message }}</label>
          <textarea 
            id="message" 
            class="form-textarea" 
            rows="4" 
            :placeholder="YourMessage"
            v-model="formData.message"
            required
          ></textarea>
        </div>
        
        <button type="submit" class="form-button">{{ Send }}</button>
      </form>
    </div>
    
    <div class="toast" :class="{ 'show-toast': showToast }">
      <span>{{ toastMessage }}</span>
      <button class="toast-close" @click="dismissToast">&times;</button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useLanguage } from '../utils/language.js';

export default {
  name: 'ContactForm',
  setup() {
    const { language } = useLanguage();

    const translations = {
      en: {
        'header-text': "Contact Me",
        'name-text': 'Name',
        'name-text-alt': 'Your name',
        'email-text': 'Email',
        'email-text-alt': 'Your email',
        'message-text': 'Message',
        'message-text-alt': 'Your message',
        'send-text': 'Send',
        'toast-success': 'Message sent successfully!',
        'toast-error': 'Form submission failed!'
      },
      fr: {
        'header-text': "Me contacter",
        'name-text': 'Nom',
        'name-text-alt': 'Votre nom',
        'email-text': 'Email',
        'email-text-alt': 'Votre email',
        'message-text': 'Message',
        'message-text-alt': 'Votre message',
        'send-text': 'Envoyer',
        'toast-success': 'Message envoyé avec succès !',
        'toast-error': 'Échec de l\'envoi du message !'
      },
      zh: {
        'header-text': "联系我",
        'name-text': '姓名',
        'name-text-alt': '您的姓名',
        'email-text': '邮箱',
        'email-text-alt': '您的邮箱',
        'message-text': '留言',
        'message-text-alt': '您的留言',
        'send-text': '发送',
        'toast-success': '消息发送成功！',
        'toast-error': '消息发送失败！'
      }
    };

    const formData = ref({
      name: '',
      email: '',
      message: ''
    });

    const showToast = ref(false);
    const toastMessage = ref('');
    let toastTimeout = null;

    // Computed translations
    const Header = computed(() => translations[language.value]?.['header-text']);
    const Name = computed(() => translations[language.value]?.['name-text']);
    const YourName = computed(() => translations[language.value]?.['name-text-alt']);
    const Email = computed(() => translations[language.value]?.['email-text']);
    const YourEmail = computed(() => translations[language.value]?.['email-text-alt']);
    const Message = computed(() => translations[language.value]?.['message-text']);
    const YourMessage = computed(() => translations[language.value]?.['message-text-alt']);
    const Send = computed(() => translations[language.value]?.['send-text']);

    const submitForm = async () => {
      try {
        // Simulate form submission (replace with actual API call)
        console.log('Formulaire soumis:', formData.value);
        
        // Clear any existing timeout
        if (toastTimeout) {
          clearTimeout(toastTimeout);
        }

        // Show success toast
        toastMessage.value = translations[language.value]['toast-success'];
        showToast.value = true;

        // Reset form
        formData.value = {
          name: '',
          email: '',
          message: ''
        };

        // Auto-dismiss toast
        toastTimeout = setTimeout(() => {
          showToast.value = false;
          toastMessage.value = '';
        }, 3000);
      } catch (error) {
        // Handle errors
        console.error('Form submission error:', error);
        toastMessage.value = translations[language.value]['toast-error'];
        showToast.value = true;

        toastTimeout = setTimeout(() => {
          showToast.value = false;
          toastMessage.value = '';
        }, 3000);
      }
    };

    const dismissToast = () => {
      showToast.value = false;
      toastMessage.value = '';
      if (toastTimeout) {
        clearTimeout(toastTimeout);
        toastTimeout = null;
      }
    };

    return {
      formData,
      showToast,
      toastMessage,
      submitForm,
      dismissToast,
      Header,
      Name,
      YourName,
      Email,
      YourEmail,
      Message,
      YourMessage,
      Send
    };
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