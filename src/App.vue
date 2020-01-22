<template>
  <div id="app">
    <div id="top">
      <div id="text_container">
        <h1>Chris Kerr</h1>
        <h2>Jnr Developer</h2>
      </div>
      <img id="headshot" src="@/assets/1.png" alt="Chris headshot" />
    </div>

    <div id="nav">
      <router-link to="/">Me</router-link> |
      <router-link class='has_depth' to="/projects/penne-pinching">My Projects</router-link> | 
      <router-link to="/pimonitor">Pi System-Monitor</router-link>
    </div>

    <router-view />

    <footer>
      <a href="https://www.github.com/chrskerr" target="_blank">https://www.github.com/chrskerr</a>
      <p id='dash'>-</p>
      <a href="https://www.linkedin.com/in/chrskerr" target="_blank">https://www.linkedin.com/in/chrskerr</a>
    </footer>
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

#nav {
  padding: 30px 0px 5px 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#nav a.router-link-active.has_depth {
  color: #42b983;
}

/* CSS for the top row */
#headshot {
  border-radius: 100%;
  /* margin: 0 0 0 5em; */
  max-width: 250px;
  max-height: 250px;
}

#top {
  display: flex;
  justify-content: space-between;
  max-width: 600px;
}

#text_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

footer {
  font-size: 80%;
  display: flex;
  justify-content: center;
}

footer a {
  margin: 0px 2em;
}

/* Global CSS for other things */
.code {
    background-color: #F6F6F6;
    border: thin lightgrey solid;
    padding: 2px 5px;
    font-family: monospace;
    margin-bottom: 2.5rem;
    /* text-align: left; */
}

.code > p {
  margin: 0;
}

@media only screen and (max-width: 705px) {
  #top {
    flex-direction: column-reverse;
    align-items: center;
  }
  #app {
    margin: 0 1em;
    text-justify: auto;
  }
  footer {
    flex-direction: column;
    display: flex;
  }
  footer #dash {
    display: none;
  }
}
</style>
