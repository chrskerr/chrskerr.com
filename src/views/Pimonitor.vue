<template>
    <div id="pimonitor">            
        <p v-if='data.uptime' class='code'>$ uptime => {{data.uptime.stdout}}</p>
        <p v-if='data.uname' class='code'>$ uname => {{data.uname.stdout}}</p>
        <p v-if='data.gpu_temp' class='code'>$ gpu_temp => {{data.gpu_temp.human}} &deg;C</p>
        <p v-if='data.cpu_temp' class='code'>$ cpu_temp => {{data.cpu_temp.human}} &deg;C</p>
        <div v-if='data.free' class='code'>
            <p>$ free -h =></p>
            <table>
                <tbody>
                <tr v-for='( row, index ) in data.free.human' v-bind:key='index'>
                    <td v-for='( cell, index ) in row' v-bind:key='index'>{{cell}}</td>
                </tr>
                </tbody>
            </table>
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
    }

    .code {
        margin-bottom: 0;
    }
</style>