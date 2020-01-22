<template>
    <div id='catgame'>
        <project-nav />
        <h3>Cat Game</h3>
        <div v-if=(!active)>
            <ul>
                <li><a v-on:click="toggleActive">Play (iframe in modal)</a></li>
                <li><a href='https://github.com/chrskerr/Cat-Game' target="_blank" rel="noreferrer">GitHub repo</a></li>
            </ul>
            <p>The Cat Game was a week two piece of homework that I got a little too carried away with. The initial assignment was to make the cat graphic bounce from left-to-right from the edges of the screen, and a suggestion that we can try to make it more exciting.</p>
            <p>Thus the game was born.</p>
            <p>Instructions:</p>
            <ul>
                <li>Move the Mouse with the arrow keys</li>
                <li>Your goal is to eat as many pieces of cheese as possible, without being eaten by a cat</li>
                <li>You can hide in the walls and wrap around to the opposite side of the board, the cats cannot</li>
            </ul>
            <p>Largely untouched since finishing, for nostaglic reasons.</p>
            <p><em>This game is not currently mobile responsive, as it wasn't when it was written.</em></p>
        </div>
        <embed-iframe  v-if=(active) url='https://chrskerr.github.io/Cat-Game/' @toggleActive='toggleActive'/>
    </div>
</template>

<script>
import EmbedIframe from '../../components/EmbedIframe'
import ProjectNav from '../../components/ProjectNav.vue'

export default {
    name: 'catgame',
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
    
</style>