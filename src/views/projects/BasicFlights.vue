<template>
    <div id='basicflights'>
        <project-nav />

        <div v-if=(!active)>
            <a href='https://github.com/aleksanderbrymora/burning-client' target="_blank">Basic Flight Bookings Portal (GitHub repo)</a>

            <p>This was our first group assignment, to build a flight booking service. We chose a React front-end (hosted locally on my Raspberry Pi) linked to Rails back-end hosted on Heroku. These two connect via basic API calls.</p>
            
            <p>Largely untouched since finishing, for nostaglic reasons.</p>
            <button v-on:click="toggleActive">Display</button>
        </div>
        
        <embed-iframe  v-if=(active) url='https://react.chrskerr.com/' @toggleActive='toggleActive'/>

    </div>
</template>

<script>
import EmbedIframe from '../../components/EmbedIframe'
import ProjectNav from '../../components/ProjectNav.vue'

export default {
    name: 'basicflights',
    data() {
        return {
            active: false,
        }
    },
    methods: {
        toggleActive () {
            this.active = !this.active;
        }
    },
    components: {
        'embed-iframe': EmbedIframe,
        'project-nav': ProjectNav
    }
}
</script>

<style scoped>

</style>