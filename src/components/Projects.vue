<template>
    <div class="projects" id="projects">
        <h1>Projects</h1>
        <div class="projects-container">
            <ProjectCard v-for="(project,index) in projects" :key="index"
            :name = "project.name"
            :src = "project.src"
            :repository = "project.repository"
            :href = "project.href"
            >
                <template #badges >
                    <Badge v-for="(badge, badgeIndex) in project.badges" :key="badgeIndex" :text="badge" />
                </template>
            </ProjectCard>
        </div>
    </div>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue';
import Badge from './Badge.vue';

const projects = {
    Blindio : {
        name : "Blindio",
        src : "./blindioCover.svg",
        repository : "https://github.com/Lespi6/cultio",
        href : "http://cultio.lespi.ovh/#/blindio/",
        badges : ["Vue.js", "Node.js", "DockerFile", "SQL"]
    },  
}

</script>

<style>
.projects{
    margin-left: 9em;
}
.projects-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-left: 2em;
}
</style>