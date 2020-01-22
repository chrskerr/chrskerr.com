<template>
    <div id="wevote">
        <project-nav />
        <h3>WeVote</h3>
        <ul>
            <li><a target="_blank" rel="noreferrer" href='https://www.wevote.org.au/'>Link to site</a></li>
            <li><a href='https://github.com/chrskerr/wevote.org.au' target="_blank">GitHub repo</a></li>
        </ul>
        <p>This was our final assignment. It is a VueJS frontend on Node/Express/Graphql/SQL backend.</p>
        <p>The interface is a basic voting application, with some unique voter logic which then saves votes into a blockchain-style immutable SQL database. A visualisation of this process can be seen on the Analytics tab, currently pretty raw for debugging purposes but this will be cleaned up into voter analytics later.</p>
        <p>The intention is to create a cheap, anonymous, auditable, immutable referendum mechanism that Australia can rely upon to influence policy and create the nation that we choose to be.</p>        
    </div>
</template>

<script>
import ProjectNav from '../../components/ProjectNav.vue'

export default {
    name: 'wevote',
    components: {
        'project-nav': ProjectNav
    }
}
</script>

<style scoped>
    ul {
        display: flex;
        flex-direction: row;
    }

    li {
        margin-left: 2em;
    }
</style>