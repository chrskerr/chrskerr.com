<template>
    <div id='basicflights'>
        <project-nav />

            <a href='https://github.com/aleksanderbrymora/burning-client' target="_blank">Basic Flight Bookings Portal (GitHub repo)</a>

            <p>This was our first group assignment, to build a flight booking service. We chose a React front-end (hosted locally on my Raspberry Pi) linked to Rails back-end hosted on Heroku. These two connect via basic API calls.</p>
            
            <p>Largely untouched since finishing, for nostaglic reasons.</p>

        
        <a class='button' target="_blank" href='https://react.chrskerr.com/'>Open</a>

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

</style>