import {ref, watch} from 'vue'

export function useLanguage() {
    const language = ref(localStorage.getItem('language') || 'fr')
    document.documentElement.setAttribute('lang', language.value)
    const availableLanguages = ['fr', 'en', 'zh']

    watch(language, (nextLanguage) =>{
    document.documentElement.setAttribute('lang', nextLanguage)
    localStorage.setItem('language', nextLanguage)
    })

    function cycleLanguage(){
        const currentIndex = availableLanguages.indexOf(language.value)
        const nextIndex = (currentIndex + 1) % availableLanguages.length
        language.value = availableLanguages[nextIndex]
    }

    function setLanguage(lang){
        if (availableLanguages.includes(lang)){
            language.value = lang
        }
    }

    return{
        language,
        useLanguage,
        cycleLanguage,
        setLanguage,
        availableLanguages
    }
}