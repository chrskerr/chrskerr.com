<template>
    <div id='tictactoe'>
        <project-nav />
        <div v-if=(!active)>
            <h3>Tic Tac Toe</h3>
            <ul>
                <li><a v-on:click="toggleActive">Play (iframe in modal)</a></li>
                <li><a href='https://github.com/chrskerr/ProjectZero' target="_blank" rel="noreferrer">GitHub repo</a></li>
            </ul>
            <p>Tic Tac Toe was our first major solo project (known as Project Zero) during my course. The goal was to create the game with working logic and views, then to take it as far as possible during the week allocated.</p>
            <p>The below is where mine finished, with almost-working "AI" (a min-max style algorithm) and sounds (now off by default, can be re-added using the bottons) and borrowed graphics.</p>
            <p>Largely untouched since finishing, for nostaglic reasons.</p>
            <p><em>This game is not currently mobile responsive, as it wasn't when it was written.</em></p>
        </div>
        <embed-iframe v-if=(active) url="https://chrskerr.github.io/ProjectZero/" @toggleActive='toggleActive'/>
    </div>
</template>

<script>
import EmbedIframe from '../../components/EmbedIframe'
import ProjectNav from '../../components/ProjectNav.vue'

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
            window.scrollTo( 0, 0 );
        }
    },
    components: {
        'embed-iframe': EmbedIframe,
        'project-nav': ProjectNav
    }
}
</script>

<style scoped>
    ul {
        display: flex;
        flex-direction: row wrap;
    }

    li {
        margin-left: 1em;
    }
</style>