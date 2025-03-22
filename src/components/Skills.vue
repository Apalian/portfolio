<template>
    <div class="skills-container" id="skills">
        <h2 class="skills-header">Skills</h2>
        <div class="skills-content">
            <div class="skills-section">
                <h3 class="section-header">Databases</h3>
                <div class="badge-container">
                    <Badge text="SQL" />
                    <Badge text="PL/SQL" />
                    <Badge text="SQL Developer" />
                    <Badge text="Postgres" />
                    <Badge text="Mysql" />
                </div>
            </div>

            <div class="skills-section">
                <h3 class="section-header">Languages</h3>
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
                <h3 class="section-header">Software</h3>
                <div class="badge-container">
                    <Badge text="PowerBI" />
                    <Badge text="Modelio" />
                    <Badge text="WINDEV" />
                    <Badge text="Looping" />
                </div>
            </div>

            <div class="skills-section">
                <h3 class="section-header">Frameworks & Backend</h3>
                <div class="badge-container">
                    <Badge text="Vue.js" />
                    <Badge text="ReactJS" />
                    <Badge text="Node.js" />
                    <Badge text="REST APIs" />
                </div>
            </div>

            <div class="skills-section">
                <h3 class="section-header">Other</h3>
                <div class="badge-container">
                    <Badge text="Agile" />
                    <Badge text="Git" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Badge from './Badge.vue';
</script>

<style scoped>
.skills-container {
    margin-left: 9em;
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
</style>
