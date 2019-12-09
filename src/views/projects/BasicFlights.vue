<template>
    <div id='basicflights'>
        <project-nav />

        <div v-if=(!active)>
            <a href='https://github.com/aleksanderbrymora/burning-client' target="_blank">Basic Flight Bookings Portal (GitHub repo)</a>

            <p>React front-end (hosted locally on Pi) linked to Rails back-end hosted on Heroku</p>

            <p>Heroku hosting (for the APIs) tends to shift to an inactive mode if the page isn't accessed for a few hours. When accessed it will automatically reactivate, but this can take a minute or two.</p>
            
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