<template>
    <div id='embed-iframe'>
        <iframe :src='url' frameborder="0"></iframe>
        <button id='close-button' v-on:click="closeFrame">X</button>
    </div>
</template>

<script>

export default {
    name: 'embed-iframe',
    props: {
        url: String
    },
    methods: {
        closeFrame () {
            this.$emit('toggleActive')
        }
    }
}
</script>

<style scoped>
    #embed-iframe {
        background-color: rgba(255,255,255,1);
        position: absolute;
        top: 10px;
        left: 10px;
        width: calc(100vw - 20px);
        height: calc(100vh - 20px);
        border: thin solid #2c3e50;
    }

    iframe {
        height: 100%;
        width: 100%;
    }

    #close-button {
        position: absolute;
        top: -10px;
        left: -10px;
        width: 1.5em;
        height: 1.5em;
        line-height: 1.5em;
        padding: 0;
        margin: 0;
        font-size: 100%;
    }
</style>