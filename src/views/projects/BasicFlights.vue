<template>
    <div id='basicflights'>
        <project-nav />
        <h3>Basic Flight Bookings Portal</h3>
        <ul>
            <li><a target="_blank" rel="noreferrer" href='https://react.chrskerr.com/'>Link to site</a></li>
            <li><a href='https://github.com/aleksanderbrymora/burning-client' target="_blank" rel="noreferrer">GitHub repo</a></li>
        </ul>

        <p>This was our first group assignment, to build a flight booking service. We chose a React front-end (hosted locally on my Raspberry Pi) linked to Rails back-end hosted on Heroku. These two connect via basic API calls.</p>
        
        <p>Largely untouched since finishing, for nostaglic reasons.</p>
    </div>
</template>

<script>
import ProjectNav from '../../components/ProjectNav.vue'

export default {
    name: 'basicflights',
    components: {
        'project-nav': ProjectNav
    }
}
</script>

<style scoped>
    ul {
        display: flex;
        flex-direction: row;
    }

    li {
        margin-left: 1em;
    }
</style>