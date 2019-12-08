<template>
  <div id="piroku-console">
    <project-nav />

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
  
</style>