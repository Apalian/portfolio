<template>
    <div id="projects">
        <h1 class="projects">Projects</h1>
        <div class="projects-container">
            <ProjectCard v-for="(project, index) in projectsList" :key="index"
            :name="project.name"
            :src="project.src"
            :repository="project.repository"
            :href="project.href"
            >
                <template #badges>
                    <Badge v-for="(badge, badgeIndex) in project.badges" :key="badgeIndex" :text="badge" />
                </template>
            </ProjectCard>
        </div>
    </div>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue';
import Badge from './Badge.vue';

const projectsList = {
    Blindio: {
        name: "Blindio",
        src: "./blindioCover.svg",
        repository: "https://github.com/Lespi6/cultio",
        href: "http://cultio.lespi.ovh/#/blindio/",
        badges: ["Vue.js", "Node.js", "DockerFile", "SQL"]
    },
    S4C01: {
        name: "Projet Etudiant PowerBI",
        src: "./S4C01.svg",
        badges: ["PowerBI", "PostgreSQL", "SQL"]
    },
}
</script>

<style scoped>
.projects {
    margin-left: 5em;
}

.projects-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding: 0 1rem;
}

@media (max-width: 768px) {
    .projects {
        margin-left: 0;
        text-align: center;
    }

    .projects-container {
        padding: 0;
    }
}
</style>