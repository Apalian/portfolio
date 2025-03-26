<template>
    <div class="switchers">
        <div>
            <label class="switch">
                <input 
                    type="checkbox"
                    id="slider-toggle"
                    class="slider-checkbox"
                    v-model="isToggled"
                    @change="handleToggle"
                />
                <span class="slider round">
                    <span class="icon moon" v-if="!isToggled">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#000" stroke-width="2">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </span>
                    <span class="icon sun" v-else>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#000" stroke-width="2">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                    </span>
                </span>
            </label>
        </div>
        <div class="language-dropdown">
            <button class="language-button" @click="toggleDropdown">
                <span>
                    <span v-if="language === 'fr'">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" width="16" height="16">
                            <path fill="#CE1126" d="M0 0h900v600H0"/>
                            <path fill="#fff" d="M0 0h600v600H0"/><path fill="#002654" d="M0 0h300v600H0"/>
                        </svg>
                    </span>
                    <span v-else-if="language === 'en'">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="16" height="16">
                            <clipPath id="s">
                                <path d="M0,0 v30 h60 v-30 z"/>
                            </clipPath>
                            <clipPath id="t">
                                <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
                            </clipPath>
                            <g clip-path="url(#s)">
                                <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>
                                <path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4"/>
                                <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>
                                <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>
                            </g>
                        </svg>
                    </span>
                    <span v-else-if="language === 'zh'">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 900 600" width="16" height="16">
                            <path fill="#EE1C25" d="M0 0h900v600H0"/>
                            <g transform="translate(150,150) scale(3)">
                                <path id="s" d="M0,-30 17.63355,24.27051 -28.53171,-9.27051H28.53171L-17.63355,24.27051" fill="#FF0"/>
                            </g>
                            <use xlink:href="#s" transform="translate(300,60) rotate(23.036243)"/>
                            <use xlink:href="#s" transform="translate(360,120) rotate(45.869898)"/>
                            <use xlink:href="#s" transform="translate(360,210) rotate(69.945396)"/>
                            <use xlink:href="#s" transform="translate(300,270) rotate(20.659808)"/>
                        </svg>
                    </span>
                </span>
                <!-- Dropdown arrow -->
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="dropdown-arrow" :class="{ 'open': isDropdownOpen }">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>
            
            <!-- Dropdown menu -->
            <div class="dropdown-menu" v-if="isDropdownOpen">
                <div class="dropdown-item" @click="selectLanguage('fr')" :class="{ 'active': language === 'fr' }">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" width="16" height="16">
                        <path fill="#CE1126" d="M0 0h900v600H0"/>
                        <path fill="#fff" d="M0 0h600v600H0"/><path fill="#002654" d="M0 0h300v600H0"/>
                    </svg>
                    <span>Français</span>
                </div>
                <div class="dropdown-item" @click="selectLanguage('en')" :class="{ 'active': language === 'en' }">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="16" height="16">
                        <clipPath id="s2">
                            <path d="M0,0 v30 h60 v-30 z"/>
                        </clipPath>
                        <clipPath id="t2">
                            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
                        </clipPath>
                        <g clip-path="url(#s2)">
                            <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>
                            <path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t2)" stroke="#C8102E" stroke-width="4"/>
                            <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>
                            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>
                        </g>
                    </svg>
                    <span>English</span>
                </div>
                <div class="dropdown-item" @click="selectLanguage('zh')" :class="{ 'active': language === 'zh' }">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 900 600" width="16" height="16">
                        <path fill="#EE1C25" d="M0 0h900v600H0"/>
                        <g transform="translate(150,150) scale(3)">
                            <path id="s3" d="M0,-30 17.63355,24.27051 -28.53171,-9.27051H28.53171L-17.63355,24.27051" fill="#FF0"/>
                        </g>
                        <use xlink:href="#s3" transform="translate(300,60) rotate(23.036243)"/>
                        <use xlink:href="#s3" transform="translate(360,120) rotate(45.869898)"/>
                        <use xlink:href="#s3" transform="translate(360,210) rotate(69.945396)"/>
                        <use xlink:href="#s3" transform="translate(300,270) rotate(20.659808)"/>
                    </svg>
                    <span>中文</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useTheme } from '../utils/theme.js'
import { useLanguage } from '../utils/language.js'

const { theme, toggleTheme } = useTheme()
const { language, setLanguage } = useLanguage()

const isToggled = ref(theme.value === 'light')

const isDropdownOpen = ref(false)

const handleToggle = () => {
    toggleTheme()
}

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value
}

const selectLanguage = (lang) => {
    setLanguage(lang)
    isDropdownOpen.value = false
}

// Fermer le dropdown si on clique en dehors
const handleClickOutside = (event) => {
    const dropdown = document.querySelector('.language-dropdown')
    if (dropdown && !dropdown.contains(event.target)) {
        isDropdownOpen.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.switchers {
    display: flex;
    gap: 10px;
    align-items: center;
}

.language-dropdown {
    position: relative;
}

.language-button {
    display: flex;
    align-items: center;
    gap: 5px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid var(--border-color);
    background-color: var(--button-bg);
    color: var(--button-text);
    padding: 6px 12px;
}

.language-button svg {
    width: 24px;
    height: 24px;
    border-radius: 4px;
}

.dropdown-arrow {
    transition: transform 0.3s ease;
}

.dropdown-arrow.open {
    transform: rotate(180deg);
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 5px;
    background-color: var(--button-bg);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    width: 140px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 10;
}

.dropdown-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.dropdown-item:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.dropdown-item.active {
    background-color: rgba(0, 0, 0, 0.1);
}

.dropdown-item svg {
    width: 20px;
    height: 20px;
    border-radius: 3px;
}

.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    transition: 0.4s;
    border-radius: 34px;
}

.slider .icon {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 26px;
    width: 26px;
    border-radius: 50%;
}

.slider .moon {
    left: 4px;
    bottom: 4px;
    background-color: #ffd900;
}

.slider .sun {
    right: 4px;
    bottom: 4px;
    background-color: #ffcc00;
}

input:checked + .slider {
    background-color: #ffffff;
}
</style>