<template>
  <div id="piroku-console">
    <p>Full console history for the current project, if active, refreshes every second</p>
    <div class='code console' id='pi-session-console'>

      <p>{{data}}</p>

    </div>

  </div>
</template>

<script>
import axios from 'axios';
let timeouts;

export default {
  name: "piroku-console",
  data () {
    return {
      data: '',
    }
  },
  methods: {
    refresh: function() {
      axios.get("http://localhost:3125/hosting").then((res) => {
        this.data = res.data;
        let node = document.getElementById('pi-session-console');
        node.scrollTop = node.offsetHeight + 400;
        timeouts = setTimeout(this.refresh, 1000);
        });
      }
  },
  mounted () {
    this.refresh();
  },
  beforeDestroy () {
    clearTimeout(timeouts);
  }
};
</script>

<style scoped>
  .console {
        max-height: 400px;
        overflow-y: scroll;
    }
</style>