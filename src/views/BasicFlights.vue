<template>
    <div id='basicflights'>
        <div v-if=(!active)>
            <a href='https://github.com/aleksanderbrymora/burning-client' target="_blank">Basic Flight Bookings Portal (GitHub repo)</a>

            <p>React front-end (hosted locally on Pi) linked to Rails back-end hosted on Heroku</p>
            
            <p>Largely untouched since finishing, for nostaglic reasons.</p>
            <button v-on:click="toggleActive">Display</button>
        </div>
        
        <embed-iframe  v-if=(active) url='https://www.chrskerr.com/react-flights' @toggleActive='toggleActive'/>

    </div>
</template>

<script>
import EmbedIframe from '../components/EmbedIframe'

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
        'embed-iframe': EmbedIframe
    }
}
</script>

<style scoped>

</style>