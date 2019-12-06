<template>
    <div id='catgame'>
        <div v-if=(!active)>
            <a href='https://github.com/chrskerr/Cat-Game' target="_blank">Cat Game (GitHub repo)</a>
            <p>The Cat Game was a week two piece of homework that I got a little too carried away with. The initial assignment was to make the cat graphic bounce from left-to-right from the edges of the screen with a suggestion that maybe other classes had built cooler stuff than we would and that we should try to make it exciting.</p>
            <p>Thus the game was born.</p>
            <p>Instructions:</p>
            <ul>
                <li>Move the Mouse with the arrow keys</li>
                <li>Your goal is to eat as many pieces of cheese as possible, without being eaten by a cat</li>
                <li>You can hide in the walls and wrap around to the opposite side of the board, the cats cannot</li>
            </ul>
            <p>Largely untouched since finishing, for nostaglic reasons.</p>
            <button v-on:click="toggleActive">Play</button>
        </div>
        
        <embed-iframe  v-if=(active) url='https://chrskerr.github.io/Cat-Game/' @toggleActive='toggleActive'/>
    </div>
</template>

<script>
import EmbedIframe from '../components/EmbedIframe'

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
        }
    },
    components: {
        'embed-iframe': EmbedIframe
    }
}
</script>

<style scoped>
    
</style>