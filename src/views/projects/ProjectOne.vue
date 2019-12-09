<template>
    <div id='projectone'>
        <project-nav />

        <div>
            <a href='https://github.com/chrskerr/ProjectOne' target="_blank">File Sharing / Instant Messaging (GitHub repo)</a>

            <p>Description coming</p>

            <p>Heroku hosting tends to shift to an inactive mode if the page isn't accessed for a few hours. When accessed it will automatically reactivate, but this can take a minute or two.</p>

            <a href='https://chrskerr-projectone.herokuapp.com' target="_blank">Hosted page</a>
            <p>Demo accounts:</p>
            <ul>
                <li>chris@example.com</li>
                <li>kate@example.com</li>
                <li>example@example.com</li>
                <li>all with the password: 'example'</li>
                <li>or make your own</li>
            </ul>
            <p>Largely untouched since finishing, for nostaglic reasons.</p>
        </div>
        
    </div>
</template>

<script>
import ProjectNav from '../../components/ProjectNav.vue'

export default {
    name: 'projectone',
    components: {
        'project-nav': ProjectNav
    }
}
</script>

<style scoped>

</style>