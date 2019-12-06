<template>
  <div id="piroku-console">
    <div id="nav">
      <router-link to="/piroku">Config</router-link> |
      <router-link to="/piroku/console">Console</router-link>
    </div>
    

  </div>
</template>

<script>
export default {
  name: "piroku-console",
};
</script>

<style scoped>
  input {
    width: 350px;
  }
</style>