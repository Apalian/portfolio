import { createI18n } from 'vue-i18n'
import fr from '../locales/fr.json'
import en from '../locales/en.json'

export type MessageSchema = typeof fr

const getInitialLocale = (): string => {
  const saved = localStorage.getItem('user-locale')
  if (saved && ['fr', 'en'].includes(saved)) {
    return saved
  }
  const browserLang = navigator.language.split('-')[0]
  return ['fr', 'en'].includes(browserLang) ? browserLang : 'fr'
}

const i18n = createI18n<[MessageSchema], 'fr' | 'en'>({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: 'fr',
  messages: {
    fr,
    en
  },
  globalInjection: true
})

export default i18n
