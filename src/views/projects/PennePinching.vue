<template>
    <div id="penne-pinching">
        <project-nav />
        <h3>Penne Pinching</h3>
        <ul>
            <li><a target="_blank" rel="noreferrer" href='https://penne-pinching.web.app/'>Link to site</a></li>
            <li><a href='https://github.com/chrskerr/PennePinching' target="_blank" rel="noreferrer">GitHub repo</a></li>
        </ul>
        <p>In mid-January 2020, my girlfriend and I participated in a promotion at Fratelli Fresh, where for just $399 each, we received one free meal a day for the rest of our lives.</p>
        <p>Obviously we grabbed this deal, but to make sure we were actually getting our moneys worth, I created Penne Pinching!</p>
        <p>The page lets use log our meals each time, update the menu, and view analytics about our history and projections. So we can see our trends and overall financial position about the purchase.</p>
        <p>It is build using React, Hooks, Apollo GraphQL, Ant Design and Firebase Auth in the front-end, and is hosted on Firebase.</p>
        <p>The backend is a Harsura container linked to a Postgres DB, which is serving a GraphQL interface, and is hosted on Heroku.</p>
    </div>
</template>

<script>
import ProjectNav from '../../components/ProjectNav.vue'

export default {
    name: 'penne-pinching',
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
        margin-left: 1em;
    }
</style>