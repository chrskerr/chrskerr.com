<template>
  <div id="piroku-console">
    <p>Full console history for the current project, if active, refreshes every 2.5 seconds</p>
    <div class='code console' id='pi-session-console'>

      <p>{{data}}</p>

    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "piroku-console",
  data () {
    return {
      data: ''
    }
  },
  methods: {
    refresh: function() {
      axios.get("http://localhost:3125/hosting").then((res) => {
        this.data = res.data;
        let node = document.getElementById('pi-session-console');
        node.scrollTop = node.offsetHeight + 400;
        setTimeout(this.refresh, 2500);
        });
      }
  },
  mounted () {
    this.refresh();
  }
};
</script>

<style scoped>
  .console {
        max-height: 400px;
        overflow-y: scroll;
    }
</style>