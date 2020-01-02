<template>
    <div id='projectone'>
        <project-nav />

        <div>
            <a href='https://github.com/chrskerr/ProjectOne' target="_blank">File Sharing / Instant Messaging (GitHub repo)</a>

            <p>This was our second major project within my course. Using Ruby on Rails, I built a file upload, sharing, and instant chat application with user accounts and instant notification via webhooks. This is hosted on Heroku.</p>

            <p><strong>Note:</strong> Heroku hosting tends to shift to an inactive mode if the page isn't accessed for a few hours. When accessed it will automatically reactivate, but this can take a minute or two.</p>

            <a class='button' href='https://chrskerr-projectone.herokuapp.com' target="_blank">Hosted page</a>
            <p>Demo accounts:</p>
            <ul>
                <li>chris@example.com</li>
                <li>kate@example.com</li>
                <li>example@example.com</li>
                <li>All with the password: 'example'</li>
                <li>Or make your own</li>
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