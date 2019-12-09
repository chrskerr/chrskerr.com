<template>
    <div>
        <div id="nav">
            --   
            <router-link to='/projects/referendum'>Referendum App</router-link> |
            <router-link class='has_depth' to="/projects/piroku">Pi-roku, amnesiatic webhosting</router-link> |
            <router-link to="/projects/basicflights">Basic Flight Booker</router-link> |
            <router-link to="/projects/projectone">File Upload / Instant Messaging</router-link> |
            <router-link to="/projects/tictactoe">Tic Tac Toe</router-link> |
            <router-link to="/projects/catgame">JS Cat Game</router-link>
        </div>
        <div id="nav" v-if="this.$route.path.includes('piroku')">
            -- --   
            <router-link to="/projects/piroku">Config</router-link> |
            <router-link to="/projects/piroku/console">Console</router-link>
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


</style>