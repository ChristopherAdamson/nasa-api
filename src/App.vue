<template>
  <div id="app" class="container-fluid">
    <h1 class="text-center">Lets Vue Nasa</h1>
    <div class="row justify-content-center">
      <apod />
      <rover />
    </div>
  </div>
</template>


<script>
import rover from "./components/Rover";
import apod from "./components/Apod";
export default {
  name: "App",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {
    apod,
    rover,
  },
};
</script>


<style scoped>
</style>
