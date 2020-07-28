<template>
  <div id="app" class="container-fluid">
    <h1 class="text-center">Lets Vue Nasa</h1>
    <div class="row justify-content-center">
      <apod />
    </div>
  </div>
</template>


<script>
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
  },
};
</script>


<style scoped>
</style>
