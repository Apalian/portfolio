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
                <span class="slider round"></span>
            </label>
        </div>
        <button class="language-button" @click="cycleLanguage">
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
        </button>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useTheme } from '../utils/theme.js'
import { useLanguage } from '../utils/language.js'

const {theme, toggleTheme} = useTheme()
const {language, cycleLanguage} = useLanguage()

const isToggled = ref(false)

const handleToggle = () => {
    toggleTheme()
}
</script>

<style scoped>
.switchers{
    display: flex;
    gap: 10px;
    align-items: center;
}

.language-button{
    display: flex;
    align-items: center;
    gap: 5px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid var(--border-color);
    background-color: var(--button-bg);
    color: var(--button-text);
}

.language-button svg {
    width: 48px;
    height: 48px;
    border-radius: 4px;
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

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    border-radius: 50%;
    background-color: #ffd900;
    background-image: url('/moon.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 18px;
    transition: 0.4s;
}

input:checked + .slider {
    background-color: #ffffff;
}

input:checked + .slider:before {
    transform: translateX(26px);
    background-color: #ffcc00; /* Jaune clair pour le mode on */
    background-image: url('/sun.svg'); /* Icône mode on */
}
</style>
