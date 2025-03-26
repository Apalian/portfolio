import {ref, watch} from 'vue'

// Instance unique et ses données
let instance = null;
let language = null;

export function useLanguage() {
    // Si l'instance n'existe pas encore, on l'initialise
    if (instance === null) {
        language = ref(localStorage.getItem('language') || 'fr')
        document.documentElement.setAttribute('lang', language.value)
        const availableLanguages = ['fr', 'en', 'zh']

        watch(language, (nextLanguage) => {
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

        instance = {
            language,
            cycleLanguage,
            setLanguage,
            availableLanguages
        }
    }

    return instance;
}