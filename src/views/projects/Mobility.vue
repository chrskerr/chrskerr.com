<template>
    <div id="jellyfish">
        <project-nav />
        <h3>Mobility Stretching Queue</h3>
        <ul>
            <li><a target="_blank" rel="noreferrer" href='https://mobility.chrskerr.com/'>Link to site</a></li>
            <li><a href='https://github.com/chrskerr/Mobility-Queue' target="_blank" rel="noreferrer">GitHub repo</a></li>
        </ul>
        <p>I've historically always been incredibly inflexible through my legs, and terrible at remembering to stretch thoroughly. Typically favouring those stretches which I enjoy, not those that I should do to fix the imbalances.</p>
        <p>So I've create a clean and easy Reactjs Progressive Web App which I can save to my phone and treat as a regular App Store app.</p>
        <p>This app holds a configurable queue of stretches, has a timer and alarm when the timer finishes. It's super lightweight, works offline, and uses local device storage to remember where you left off last time.</p>
    </div>
</template>

<script>
import ProjectNav from "../../components/ProjectNav.vue";

export default {
	name: "mobility",
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