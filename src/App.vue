<template>
  <div id="app">
    <nav id="top">
      <div id="text_container">
        <h1>Chris Kerr</h1>
        <h2>Jnr Developer</h2>
      </div>
      <img id="headshot" src="@/assets/1.png" alt="Chris headshot" />
    </nav>

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/pimonitor">Pi Monitor</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link id='has_depth' to="/piroku">Pi-roku, amnesiatic webhosting</router-link> |
      <router-link to="/catgame">JS Cat Game</router-link> |
      <router-link to="/tictactoe">Tic Tac Toe</router-link>
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
  margin: 2em 4em 0 8em;
}

@media only screen and (max-width: 600px) {
  #app {
    margin: 0 1em;
  }
}

#nav {
  padding: 30px 0px 15px 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

a.router-link-active#has_depth {
  color: #42b983;
}

/* CSS for the top row */
#headshot {
  border-radius: 100%;
  margin: 0 3em;
  max-width: 250px;
  max-height: 250px;
}

#top {
  display: flex;
}

@media only screen and (max-width: 705px) {
  #top {
    flex-direction: column-reverse;
    align-items: center;
  }
}

#text_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
