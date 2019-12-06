<template>
    <div id='tictactoe'>
        <div v-if=(!active)>
            <a href='https://github.com/chrskerr/ProjectZero' target="_blank">Tic Tac Toe (GitHub repo)</a>
            <p>Tic Tac Toe was our first major solo project (known as Project Zeo) during the General Assembly Software immersive course. The goal was to create the game with working logic and views, then to take it as far as possible during the week allocated.</p>
            <p>The below is where mine finished, with almost-working "AI" (a min-max style algorithm) and sounds (now off by default, can be re-added using the bottons) and borrowed graphics.</p>
            <p>Largely untouched since finishing, for nostaglic reasons.</p>
            <button v-on:click="toggleActive">Play</button>
        </div>
        
        <embed-iframe v-if=(active) url="https://chrskerr.github.io/ProjectZero/" @toggleActive='toggleActive'/>
    </div>
</template>

<script>
import EmbedIframe from '../components/EmbedIframe'

export default {
    name: 'tictactoe',
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