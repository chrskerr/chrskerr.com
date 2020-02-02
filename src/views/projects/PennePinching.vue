<template>
    <div id="penne-pinching">
        <project-nav />
        <h3>Penne Pinching</h3>
        <ul>
            <li><a target="_blank" rel="noreferrer" href='https://penne-pinching.chrskerr.com/'>Link to site</a></li>
            <li><a href='https://github.com/chrskerr/PennePinching' target="_blank" rel="noreferrer">GitHub repo</a></li>
        </ul>
        <p>
            In mid-January 2020, my girlfriend and I participated in a promotion at Fratelli Fresh, where, for just $399 each we would get one free meal a day for the rest of our lives.
        </p>
        <p>
            Obviously we grabbed this deal! To settle a bet with a friend about this being a waste of money, I created <strong>Penne Pinching</strong>.
        </p>
        <p>
            The page lets us log our meals, update the menu, and view analytics about our history and projections. We can see our trends and overall financial position after the purchase.
        </p>
        <p>
            It is built using React, Hooks, Apollo GraphQL, XState, Ant Design and Firebase Auth, and is hosted on my Raspberry Pi.
        </p>
        <p>
            The backend is a Harsura container linked to a Postgres DB, which is serving a GraphQL interface, and is hosted on Heroku.
        </p>
    </div>
</template>

<script>
import ProjectNav from "../../components/ProjectNav.vue";

export default {
	name: "penne-pinching",
	components: {
		"project-nav": ProjectNav,
	},
};
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