import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export type Locale = 'fr' | 'en'

export const useLanguage = () => {
  const { locale, t } = useI18n()

  const currentLocale = computed(() => locale.value as Locale)

  const changeLocale = (newLocale: Locale) => {
    locale.value = newLocale
    localStorage.setItem('user-locale', newLocale)
    document.documentElement.lang = newLocale
  }

  const toggleLocale = () => {
    const newLocale = currentLocale.value === 'fr' ? 'en' : 'fr'
    changeLocale(newLocale)
  }

  const isLocale = (checkLocale: Locale) => currentLocale.value === checkLocale

  return {
    locale: currentLocale,
    changeLocale,
    toggleLocale,
    isLocale,
    t
  }
}
