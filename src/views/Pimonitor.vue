<template>
    <div id="pimonitor">
        <p>Work In Progress</p>
            
        <p v-if='data.uptime.stdout' class='code'>$ uptime => {{data.uptime.stdout}}</p>
        <p v-if='data.uname.stdout' class='code'>$ uname => {{data.uname.stdout}}</p>
        <p v-if='data.free' class='code'>$ free -h => {{data.free.stdout}}</p>
        <div v-if='data.df.stdout' class='code'>
            <p>$ df -h =></p>
            <table>
                <tbody>
                <tr v-for='row in data.df.stdout' v-bind:key='row'>
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
            axios.get("http://localhost:3125/monitor").then((res) => this.data = res.data).catch((err) => console.error(err))
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
    }

    table, tr, td {
        border: none;
        margin: 0px;
        padding: 0px;
    }

    #monitor-button {
        margin-top: 1rem;
    }
</style>