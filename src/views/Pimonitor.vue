<template>
    <div id="pimonitor">  
        
        <p>This page is hosted at home on my Raspberry Pi, and has been an exciting project to learn the finer points of full lifecycle webdevelopment. I have included some system monitor information for curiosities sake.</p>

        <p>Horizontally scrollable</p>

        <p v-if='timer === 4' >Refreshing...</p>
        <p v-else>Refreshing in {{ timer }}</p>
            
        <div class='code'>
            <p v-if='data.gpu_temp'>$ gpu_temp => {{data.gpu_temp.human}} &deg;C</p>
            <p v-if='data.cpu_temp'>$ cpu_temp => {{data.cpu_temp.human}} &deg;C</p>
        </div>

        <div v-if='data.df' class='code scroll-box'>
            <p>$ df -h =></p>
            <table>
                <tbody>
                    <tr v-for='( row, index ) in data.df.human' v-bind:key='index'>
                        <td v-for='( cell, index ) in row' v-bind:key='index'>
                            {{ cell }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div v-if='data.top' class='code scroll-box'>
            <p>$ top -b -n 1 -o %MEM =></p>
            <table>
                <tbody>
                    <tr v-for='( row, index ) in data.top.first' v-bind:key='index'>
                        <td v-for='( cell, index ) in [ row ]' v-bind:key='index'>
                            {{ cell }}
                        </td>
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr v-for='( row, index ) in data.top.human' v-bind:key='index'>
                        <td v-for='( cell, index ) in row' v-bind:key='index'>
                            {{ cell }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>



    </div>
</template>

<script>
import axios from "axios";

export default {
	name: "pimonitor",
	data() {
		return {
			data: "",
			timer: 4,
		};
	},
	methods: {
		refresh () {
			this.timer = 4;
			axios.get( "https://api.chrskerr.com/monitor" ).then(( res ) => {
				this.data = res.data;
				setTimeout(() => this.timer = 2, 1000 );
				setTimeout(() => this.timer = 1, 2000 );
				setTimeout(() => this.timer = 0, 3000 );
				setTimeout(() => {
					this.refresh();
				}, 4000 );
			});
		},
	},
	mounted() {
		this.refresh();
	},
};
</script>

<style scoped>
    tr, td {
        border: none;
        margin: 0px;
        padding: 0px;
    }

    table {
        border: none;
        margin-bottom: 0;
        padding-top: 1rem;
        min-width: 650px;
    }

    .scroll-box {
        max-width: 100vw;
        overflow-x: scroll;
    }
</style>