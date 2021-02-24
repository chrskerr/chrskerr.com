<template>
    <div id="projects">

        <project-nav />

    </div>
</template>

<script>
import ProjectNav from "../components/ProjectNav.vue";

export default {
	name: "projects",
	components: {
		"project-nav": ProjectNav,
	},
	beforeCreate () {
		this.$router.push({ name: "jellyfish" });
	},
};
</script>