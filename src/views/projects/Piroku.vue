<template>
  <div id="piroku">
    
    <project-nav />

    <p>
      <em>Pi-roku</em> is a clone of Heroku with short-term memory problems.
    </p>
    <p>Work In Progress</p>


    <p>
      It will accept a GitHub repository as input and (providing it matches
      certain input conditions) and host it until Midnight AEST. At which time
      the Raspberry Pi will clear the server from disk and revert to a waiting
      state.
    </p>

    <details>
      <summary><span class='summary'>New Server</span></summary>
      
      <p>Please provide a GitHub repo URL to proceed:</p>
      <input id="url_field" v-on:input="onUrlType" placeholder="https://www.github.com/ $something / $repo .git"/>
      <p v-if=(!status)>{{ url }}</p>
      <div v-if=(status)>

        <p>What type of server is this?</p>
        <select name="server_type" id="server_type" v-on:change='chooseServer' required>
          <option value="none selected">Please select</option>
          <option value="nodejs">Nodejs</option>
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="rails">Rails</option>
        </select>

        <div v-if="server === 'rails'">
          <p>Please select start-up commands</p>
          <div id='checkbox-box'>
            <label>rails db:create<input type='checkbox' value='db-create'/></label>
            <label>rails db:migrate<input type='checkbox' value="db-migrate" /></label>
            <label>rails db:seed<input type='checkbox' value="db-seed" /></label>
            <label>bundle install<input type='checkbox' value="bundle" /></label>
          </div>
        </div>

        <p>NPM or Yarn?</p>
        <select name="npm" id="npm" v-on:change='chooseNPM' required>
          <option value="none selected">none</option>
          <option value="npm">NPM</option>
          <option value="yarn">Yarn</option>
        </select>

        <p>Build settings:</p>
        <div class='code'>
          <p>Git origin: {{ url }}</p>
          <p v-if='server'>Application type: {{server}}</p>
          <p v-if='npm'>Package Manager: {{npm}}</p>
        </div>
      
        <button>Create Server</button>
      </div>
    </details>
  

    <details>
      <summary v-on:click='toggleStatus'><span class='summary'>Bash Console</span></summary>
      <piroku-console v-if='console'/>
    </details>


    <details>
      <summary><span class='summary'>History</span></summary>
      <p>History coming</p>
    </details>


    
  </div>
</template>



<script>
import _ from 'lodash';
import ProjectNav from '../../components/ProjectNav.vue'
import PirokuConsole from '../../components/PirokuConsole.vue'

export default {
  name: "piroku",
  data() {
    return {
      url: "please enter a GitHub URL",
      status: false,
      console: false,
      server: 'none selected',
      npm: 'none selected'
      }
  },
  methods: {
    onUrlType: _.debounce(function (e) {
      if (e.target.value.match(/https?:\/\/(www\.)?github\.com\/.*\.git$/)) {
        this.status = true;
        this.url = e.target.value;
      } else if (e.target.value.match(/https?:\/\/(www\.)?github\.com\/.*/)) {
        this.status = true;
        this.url = e.target.value + ".git"
      } else {
        this.status = false;
        this.url = "please enter a GitHub URL";
      }
    }, 600),
    toggleStatus: function() {
      this.console = !this.console;
    },
    chooseServer: function(e) {
      this.server = e.target.value
    },
    chooseNPM: function(e) {
      this.npm = e.target.value
    }
  },
  components: {
    'project-nav': ProjectNav,
    'piroku-console': PirokuConsole
  },
  calculated: {

  }
};
</script>



<style scoped>
  input {
    width: 350px;
  }

  .summary {
    font-size: 125%;
  }

</style>