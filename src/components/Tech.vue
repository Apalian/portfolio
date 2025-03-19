<template>
    <div class="container">
        <h2 class="skills-header">Skills</h2>
        <div>
            <h3 class="skill-header">Languages</h3>
            <div class="badge-container">
                <Badge text="Html" color="schoolBusYellow"/>
                <Badge text="Css" color="schoolBusYellow"/>
                <Badge text="JavaScript" color="schoolBusYellow"/>
                <Badge text="PHP" color="schoolBusYellow"/>
                <Badge text="Java" color="schoolBusYellow"/>
                <Badge text="C" color="schoolBusYellow"/>
                <Badge text="Ada" color="schoolBusYellow"/>
                <Badge text="Python" color="schoolBusYellow"/>
            </div>
        </div>
        <div>
            <h3 class="skill-header">Databases</h3>
            <div class="badge-container">
                <Badge text="SQL" color="rioGrande"/>
                <Badge text="PL/SQL" color="rioGrande"/>
                <Badge text="SQL Developper" color="rioGrande"/>
                <Badge text="Postgres" color="rioGrande"/>
                <Badge text="Mysql" color="rioGrande"/>
            </div>
        </div>
        <div>
            <h3 class="skill-header">Software</h3>
            <div class="badge-container">
                <Badge text="PowerBI" color="lima"/>
                <Badge text="Modelio" color="lima"/>
                <Badge text="WINDEV" color="lima"/>
                <Badge text="Looping" color="lima"/>
            </div>
        </div>
        <div>
            <h3 class="skill-header">Frameworks & Backend</h3>
            <div class="badge-container">
                <Badge text="Vue.js" color="apple"/>
                <Badge text="ReactJS" color="apple"/>
                <Badge text="Node.js" color="apple"/>
                <Badge text="REST APIs" color="apple"/>
            </div>
        </div>
        <div>
            <h3 class="skill-header">Other</h3>
            <div class="badge-container">
                <Badge text="Agiles" color="greenHaze"/>
                <Badge text="Git" color="greenHaze"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import Badge from './Badge.vue';
</script>

<style>
.container{
    margin-left: 9em;
}
.skills-header{
    margin-bottom: 4px;
}
.skill-header{
    margin-top: 12px;
    margin-bottom: 12px;
}
.badge-container {
    display: flex;
    gap: 10px; /* ajuste l'espacement entre les badges ici */
    flex-wrap: wrap; /* Permet aux badges de se réorganiser sur plusieurs lignes si nécessaire */
}
</style>
