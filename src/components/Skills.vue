<template>
    <div class="skills-container" id="skills">
        <h2 class="skills-header">{{ Header }}</h2>
        <div class="skills-content">
            <div class="skills-section">
                <h3 class="section-header">{{ Skill1 }}</h3>
                <div class="badge-container">
                    <Badge text="SQL" />
                    <Badge text="PL/SQL" />
                    <Badge text="SQL Developer" />
                    <Badge text="Postgres" />
                    <Badge text="Mysql" />
                </div>
            </div>

            <div class="skills-section">
                <h3 class="section-header">{{ Skill2 }}</h3>
                <div class="badge-container">
                    <Badge text="HTML" />
                    <Badge text="CSS" />
                    <Badge text="JavaScript" />
                    <Badge text="PHP" />
                    <Badge text="Java" />
                    <Badge text="C" />
                    <Badge text="Ada" />
                    <Badge text="Python" />
                </div>
            </div>

            <div class="skills-section">
                <h3 class="section-header">{{ Skill3 }}</h3>
                <div class="badge-container">
                    <Badge text="PowerBI" />
                    <Badge text="Modelio" />
                    <Badge text="WINDEV" />
                    <Badge text="Looping" />
                </div>
            </div>

            <div class="skills-section">
                <h3 class="section-header">{{ Skill4 }}</h3>
                <div class="badge-container">
                    <Badge text="Vue.js" />
                    <Badge text="ReactJS" />
                    <Badge text="Node.js" />
                    <Badge text="REST APIs" />
                </div>
            </div>

            <div class="skills-section">
                <h3 class="section-header">{{ Skill5 }}</h3>
                <div class="badge-container">
                    <Badge text="Agiles" />
                    <Badge text="Git" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Badge from './Badge.vue';
import { computed } from 'vue'
import { useLanguage } from '../utils/language.js';

const { language } = useLanguage()

const translations = {
  en : {
    'header-text' : "Skills",
    'skill-text1' : "Databases",
    'skill-text2' : 'Languages',
    'skill-text3' : "Software",
    'skill-text4' : "Frameworks & Backend",
    'skill-text5' : "Other"
  },
  fr : {
    'header-text' : "Compétences",
    'skill-text1' : "Base de données",
    'skill-text2' : 'Langages',
    'skill-text3' : "Logiciels",
    'skill-text4' : "Frameworks & Backend",
    'skill-text5' : "Autre"
  },
  zh : {
    'header-text' : "技能",
    'skill-text1' : "数据库",
    'skill-text2' : '编程语言',
    'skill-text3' : "软件",
    'skill-text4' : "框架 & 后端",
    'skill-text5' : "其他"
  }
}
// Propriétés calculées pour obtenir les traductions
const Header = computed(() => translations[language.value]?.['header-text']);
const Skill1 = computed(() => translations[language.value]?.['skill-text1']);
const Skill2 = computed(() => translations[language.value]?.['skill-text2']);
const Skill3 = computed(() => translations[language.value]?.['skill-text3'] );
const Skill4 = computed(() => translations[language.value]?.['skill-text4']);
const Skill5 = computed(() => translations[language.value]?.['skill-text5']);
</script>

<style scoped>
.skills-container {
    margin-left: 9em;
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
    box-sizing: border-box;
}

.skills-header {
    margin-bottom: 4px;
}

.skills-content {
    margin-left: 2em;
}

.skills-section {
    margin-bottom: 20px;
}

.section-header {
    margin-top: 12px;
    margin-bottom: 12px;
}

.badge-container {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

/* Responsive Breakpoints */
@media screen and (max-width: 1024px) {
    .skills-container {
        margin-left: 4em;
    }

    .skills-content {
        margin-left: 1em;
    }
}

@media screen and (max-width: 768px) {
    .skills-container {
        margin-left: 0;
        padding: 0 15px;
    }

    .skills-content {
        margin-left: 0;
    }

    .skills-header {
        text-align: center;
        font-size: 3em;
    }

    .skills-section {
        margin-bottom: 15px;
    }

    .section-header {
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .badge-container {
        justify-content: center;
    }
}

@media screen and (max-width: 480px) {
    .skills-container {
        padding: 0 10px;
    }

    .skills-section {
        margin-bottom: 12px;
    }

    .badge-container {
        gap: 8px;
    }
}

@media screen and (max-width: 320px) {
    .skills-container {
        padding: 0 5px;
    }

    .skills-section {
        margin-bottom: 10px;
    }

    .badge-container {
        gap: 6px;
    }
}
</style>