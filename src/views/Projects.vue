<template>
    <div id="projects">

        <project-nav />

        <p>What I've worked on during the course, newest to oldest.</p>
    </div>
</template>

<script>
import ProjectNav from '../components/ProjectNav.vue'

export default {
    name: 'projects',
    components: {
        'project-nav': ProjectNav
    }
}
</script>