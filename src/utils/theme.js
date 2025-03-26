import { ref, watch } from "vue";
// Instance unique et ses données
let instance = null;
let theme = null;

export function useTheme() {
    if (instance === null) {
        theme = ref(localStorage.getItem('theme') || 'light')

        document.documentElement.setAttribute('data-theme', theme.value)

        watch(theme, (newTheme) => {
            document.documentElement.setAttribute('data-theme', newTheme)
            localStorage.setItem('theme', newTheme)
        })

        function toggleTheme(){
            theme.value = theme.value === 'light' ? 'dark' : 'light'
        }

        instance = {
            theme,
            useTheme,
            toggleTheme
        }
    }
    return instance
}