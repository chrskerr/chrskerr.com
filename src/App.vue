<template>
  <div id="app">
    <nav id="title">
      <div id="title_container">
        <h1>Chris Kerr</h1>
        <h2>Jnr Developer</h2>
      </div>
      <img id="headshot" src="@/assets/1.png" alt="Chris headshot" />
    </nav>

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/piroku">Pi-roku, amnesiatic webhosting</router-link> |
      <a href="/cat-game">JS Cat Game</a>
    </div>

    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 4em 0 8em;
}

@media only screen and (max-width: 600px) {
  #app {
    margin: 0 1em;
  }
}

#nav {
  padding: 30px 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* CSS for the top row */
#headshot {
  border-radius: 100%;
  margin: 0 1em;
  max-width: 250px;
  max-height: 250px;
}

#title {
  display: flex;
}

@media only screen and (max-width: 705px) {
  #title {
    flex-direction: column-reverse;
    align-items: center;
  }
}

#title_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
