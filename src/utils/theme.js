import { ref, watch } from "vue";

export function useTheme() {
    const theme = ref(localStorage.getItem('theme') || 'light')

    document.documentElement.setAttribute('data-theme', theme.value)

    watch(theme, (newTheme) => {
        document.documentElement.setAttribute('data-theme', newTheme)
        localStorage.setItem('theme', newTheme)
    })

    function toggleTheme(){
        theme.value = theme.value === 'light' ? 'dark' : 'light'
    }

    return{
        useTheme,
        toggleTheme
    }
}