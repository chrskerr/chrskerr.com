import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use( VueRouter );

const routes = [
	{
		path: "/",
		name: "home",
		component: Home,
	},
	{
		path: "/about",
		name: "about",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ "../views/About.vue" ),
	},
	// {
	// 	path: "/pimonitor",
	// 	name: "pimonitor",
	// 	component: () => import( "../views/Pimonitor.vue" ),
	// },
	{
		path: "/projects",
		name: "projects",
		component: () => import( "../views/Projects.vue" ),
	},
	{
		path: "/projects/piroku",
		name: "piroku",
		component: () => import( "../views/projects/Piroku.vue" ),
	},
	{
		path: "/projects/tictactoe",
		name: "tictactoe",
		component: () => import( "../views/projects/TicTacToe.vue" ),
	},
	{
		path: "/projects/catgame",
		name: "catgame",
		component: () => import( "../views/projects/CatGame.vue" ),
	},
	{
		path: "/projects/projectone",
		name: "projectone",
		component: () => import( "../views/projects/ProjectOne.vue" ),
	},
	{
		path: "/projects/mobility",
		name: "mobility",
		component: () => import( "../views/projects/Mobility.vue" ),
	},
	{
		path: "/projects/wevote",
		name: "wevote",
		component: () => import( "../views/projects/WeVote.vue" ),
	},
	{
		path: "/projects/penne-pinching",
		name: "penne-pinching",
		component: () => import( "../views/projects/PennePinching.vue" ),
	},
	{
		path: "/projects/jellyfish",
		name: "jellyfish",
		component: () => import( "../views/projects/Jellyfish.vue" ),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
