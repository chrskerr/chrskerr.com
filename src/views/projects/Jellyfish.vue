<template>
    <div id="jellyfish">
        <project-nav />
        <h3>Jellyfish: Dive Sites Site</h3>
        <ul>
            <li><a target="_blank" rel="noreferrer" href='https://staging-jellyfish.web.app/'>Link to beta site</a></li>
            <li><a href='https://github.com/chrskerr/jellyfish-dive-map' target="_blank" rel="noreferrer">GitHub repo</a></li>
        </ul>
        <p>
            I've recently started travelling Australia and taking a more active interest in freediving, and realised that it's incredibly hard to work out if there are interesting dives nearby. Outside of talking to dive-shops, there doesn't appear to be a way of looking at a map and deciding where to visit based upon what it has.
        </p>
        <p>
            So I started creating a simple React app which is intended to be the community hub for this information. Dives are addable, and editable, with an intended-Wikipedia style history to view changes and how they have evolved. I was this information to both belong to and be available to the community.
        </p>
        <p>
            It is using Leafletjs for the mapping, and I am building an augmented reality dive site viewer using Threejs (very beta right now).
        </p>
        <p>
            This is a new project under very active development so is still considered beta :)
        </p>
    </div>
</template>

<script>
import ProjectNav from "../../components/ProjectNav.vue";

export default {
	name: "jellyfish",
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