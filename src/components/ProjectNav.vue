<template>
    <div>
        <div id="nav">
            <span id='hide'>-- </span>   
            <router-link to='/projects/referendum'>Referendum App</router-link><span id='hide'> | </span>
            <router-link to="/projects/piroku">Pi-roku, amnesiatic webhosting</router-link><span id='hide'> | </span>
            <router-link to="/projects/basicflights">Basic Flight Booker</router-link><span id='hide'> | </span>
            <router-link to="/projects/projectone">File Upload / Instant Messaging</router-link><span id='hide'> | </span>
            <router-link to="/projects/tictactoe">Tic Tac Toe</router-link><span id='hide'> | </span>
            <router-link to="/projects/catgame">JS Cat Game</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'project-nav'
}
</script>

<style scoped>
    #nav {
        padding: 0px 0px 10px 0px;
    }

@media only screen and (max-width: 705px) {
    #nav {
        flex-direction: column;
        display: flex;
    }
    #nav > a:before {
        margin: 0 0.5em;
        content: '-'
    }
    #hide {
        display: none;
    }
}

</style>