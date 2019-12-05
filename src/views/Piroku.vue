<template>
  <div id="piroku">
    <p>
      <em>Pi-roku</em> is a clone of Heroku with short-term memory problems.
    </p>
    <p>
      It will accept a GitHub repository as input and (providing it matches
      certain input conditions) and host it until Midnight AEST. At which time
      the Raspberry Pi will clear the server from disk and revert to a waiting
      state.
    </p>
    <p>Please provide a GitHub URl to proceed:</p>
    <input v-model="url" />
    <button>Check URL</button>
    <p>{{ url }}</p>
  </div>
</template>

<script>
export default {
  name: "piroku",
  data() {
    return {url: "",}
  }
};
</script>
