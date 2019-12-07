<template>
  <div id="piroku-console">
    <project-nav />

    <div id="nav">
      <router-link to="/projects/piroku">Config</router-link> |
      <router-link to="/projects/piroku/console">Console</router-link>
    </div>

    

  </div>
</template>

<script>
import ProjectNav from '../../components/ProjectNav.vue'

export default {
  name: "piroku-console",
  components: {
    'project-nav': ProjectNav
  }
};
</script>

<style scoped>
  #nav { 
    padding: 0px 0px 5px 0px;
  }
</style>