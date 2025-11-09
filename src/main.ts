import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './config/i18n'
import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App)
app.use(MotionPlugin)
app.use(i18n)
app.mount('#app')
