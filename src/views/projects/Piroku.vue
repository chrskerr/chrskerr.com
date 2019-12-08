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
    <p>Please provide a GitHub repo URL to proceed:</p>
    <input id="url_field" v-on:input="onUrlType" placeholder="https://www.github.com/ $something / $repo .git"/>
    <p v-if=(!status)>{{ url }}</p>
    <div v-if=(status)>
      
      <p>Generated command:</p>
      <output>
        <span>$ git clone {{ url }}</span>
      </output>
      
      <button>Create Server</button>
    </div>
  </div>
</template>



<script>
import _ from 'lodash';
import ProjectNav from '../../components/ProjectNav.vue'

export default {
  name: "piroku",
  data() {
    return {
      url: "please enter a GitHub URL",
      status: false,
      }
  },
  methods: {
    onUrlType: _.debounce(function (e) {
      if (e.target.value.match(/https?:\/\/(www\.)?github\.com\/.*\.gi(t|t\/)$/)) {
        this.status = true;
        this.url = e.target.value;
      } else if (e.target.value.match(/https?:\/\/(www\.)?github\.com\/.*/)) {
        this.status = true;
        this.url = e.target.value + ".git/"
      } else {
        this.status = false;
        this.url = "please enter a GitHub URL";
      }
    }, 600)
  },
  components: {
    'project-nav': ProjectNav
  }
};
</script>



<style scoped>
  input {
    width: 350px;
  }

</style>