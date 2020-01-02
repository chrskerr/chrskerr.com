<template>
    <div id="pimonitor">  
        
        <p>This page is hosted at home on my Raspberry Pi, and has been an exciting project to learn the finer points of full lifecycle webdevelopment. I have included some system monitor information for curiosities sake.</p>

        <div class='code'>
            <p v-if='data.gpu_temp'>$ gpu_temp => {{data.gpu_temp.human}} &deg;C</p>
            <p v-if='data.cpu_temp'>$ cpu_temp => {{data.cpu_temp.human}} &deg;C</p>
        </div>

        <div v-if='data.df' class='code'>
            <p>$ df -h =></p>
            <table>
                <tbody>
                <tr v-for='( row, index ) in data.df.human' v-bind:key='index'>
                    <td v-for='( cell, index ) in row' v-bind:key='index'>{{cell}}</td>
                </tr>
                </tbody>
            </table>
        </div>

        <div v-if='data.top' class='code'>
            <p>$ top -b -n 1 -o %MEM =></p>
            <table>
                <tbody>
                <tr v-for='( row, index ) in data.top.first' v-bind:key='index'>
                    {{row}}
                </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                <tr v-for='( row, index ) in data.top.human' v-bind:key='index'>
                    <td v-for='( cell, index ) in row' v-bind:key='index'>{{cell}}</td>
                </tr>
                </tbody>
            </table>
        </div>

        <button id='monitor-button' v-on:click='refresh'>Refresh Data</button>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "pimonitor",
    data() {
        return {
            data: ''
        }
    },
    methods: {
        refresh () {
            axios.get("https://api.chrskerr.com/monitor").then((res) => this.data = res.data) //.catch((err) => console.error(err))
        }
    },
    mounted() {
        this.refresh()
    }
}
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
    }

    .code p {
        margin-bottom: 0;
    }

    .mono {
        font-family: monospace; 
    }
</style>