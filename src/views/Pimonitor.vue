<template>
    <div id="pimonitor">
        <p>Work In Progress</p>
            
        <p v-if='data.uptime' class='code'>$ uptime => {{data.uptime.stdout}}</p>
        <p v-if='data.uname' class='code'>$ uname => {{data.uname.stdout}}</p>
        <p v-if='data.gpu_temp' class='code'>$ gpu_temp => {{data.gpu_temp.human}} &deg;C</p>
        <p v-if='data.cpu_temp' class='code'>$ cpu_temp => {{data.cpu_temp.human}} &deg;C</p>
        <div v-if='data.free' class='code'>
            <p>$ free -h =></p>
            <table>
                <tbody>
                <tr v-for='row in data.free.human' v-bind:key='row'>
                    <td v-for='cell in row' v-bind:key='cell'>{{cell}}</td>
                </tr>
                </tbody>
            </table>
        </div>

        <div v-if='data.df' class='code'>
            <p>$ df -h =></p>
            <table>
                <tbody>
                <tr v-for='row in data.df.human' v-bind:key='row'>
                    <td v-for='cell in row' v-bind:key='cell'>{{cell}}</td>
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
    .code {
        background-color: #F6F6F6;
        border: thin lightgrey solid;
        padding: 2px 5px;
        font-family: monospace;
        margin-bottom: 2.5rem;
    }

    tr, td {
        border: none;
        margin: 0px;
        padding: 0px;
    }

    table {
        border: none;
    }
</style>