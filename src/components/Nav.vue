<template>
  <div id="app">
    <navbar>
      <div id="title_container">
        <h1>Christopher Kerr</h1>
        <h2>Jnr Developer</h2>
      </div>
      <img id="headshot" src="CK_headshot.png" alt="Chris headshot" />
    </navbar>

    <navbar id="nav2">
      <a href="#" v-on:click="togglePage">Home</a>
      <a href="#">Pi-roku, amnesiatic webhosting</a>
      <a href="#">Home</a>
      <a href="#">Home</a>
    </navbar>
  </div>
</template>

<script>
export default {
  name: "app",
  state: {}
};
</script>

<style>
#headshot {
  border-radius: 100%;
}

navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

#title_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#nav2 {
  background-color: #ececec;
  align-items: center;
  height: 4em;
  margin: 1em 0em;
}
</style>
