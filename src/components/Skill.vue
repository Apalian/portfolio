<template>
  <div class="skills-container">
    <h2 class="skills-header">Skills</h2>
    <div class="skill-container">
      <div>
        <div>
          <h3 class="skill-header">Databases</h3>
          <div class="badge-container">
            <Badge text="SQL" color="schoolBusYellow" />
            <Badge text="PL/SQL" color="schoolBusYellow" />
            <Badge text="SQL Developper" color="schoolBusYellow" />
            <Badge text="Postgres" color="schoolBusYellow" />
            <Badge text="Mysql" color="schoolBusYellow" />
          </div>
        </div>
        <div>
          <h3 class="skill-header">Languages</h3>
          <div class="badge-container">
            <Badge text="HTML" color="rioGrande" />
            <Badge text="CSS" color="rioGrande" />
            <Badge text="JavaScript" color="rioGrande" />
            <Badge text="PHP" color="rioGrande" />
            <Badge text="Java" color="rioGrande" />
            <Badge text="C" color="rioGrande" />
            <Badge text="Ada" color="rioGrande" />
          </div>
        </div>
        <div>
          <h3 class="skill-header">Software</h3>
          <div class="badge-container">
            <Badge text="PowerBI" color="lima" />
            <Badge text="Modelio" color="lima" />
            <Badge text="WINDEV" color="lima" />
            <Badge text="Looping" color="lima" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <h3 class="skill-header">Frameworks & Backend</h3>
          <div class="badge-container">
            <Badge text="Vue.js" color="apple" />
            <Badge text="ReactJS" color="apple" />
            <Badge text="Node.js" color="apple" />
            <Badge text="REST APIs" color="apple" />
          </div>
        </div>
        <div>
          <h3 class="skill-header">Other</h3>
          <div class="badge-container">
            <Badge text="Agiles" color="greenHaze" />
            <Badge text="Git" color="greenHaze" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Badge from "./Badge.vue";
</script>

<style>
.skills-container {
  margin-left: 9em;
}
.skills-header {
  margin-bottom: 4px;
}
.skill-header {
  margin-top: 12px;
  margin-bottom: 12px;
}
.badge-container {
  display: flex;
  gap: 10px; /* ajuste l'espacement entre les badges ici */
  flex-wrap: wrap; /* Permet aux badges de se réorganiser sur plusieurs lignes si nécessaire */
}
.skill-container {
  margin-left: 5em;
  display: flex;
  flex-direction: row;
  gap: 5em;
}
</style>
