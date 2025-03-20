<template>
    <div class="projects">
        <h1>Projects</h1>
        <div class="projects-container">

        <ProjectCard 
      name="Blindio" 
      src="/blindioCover.svg"
      repository="https://github.com/Lespi6/cultio"
      href="http://cultio.lespi.ovh/#/blindio/"
      >
      <template #badges>
        <Badge text="Vue.js"/>
        <Badge text="Node.js"/>
        <Badge text="DockerFile"/>
        <Badge text="SQL"/>
      </template>
    </ProjectCard>
        </div>
    </div>
</template>
<script setup>
import ProjectCard from './ProjectCard.vue';
import Badge from './Badge.vue';
</script>
<style>
.projects{
    margin-left: 9em;
}
.projects-container{
    display: flex;
    flex-direction: column;
    column-gap: 4px;
    margin-left: 5em;
}
ProjectCard{
    margin-left: 10em;
}
</style>