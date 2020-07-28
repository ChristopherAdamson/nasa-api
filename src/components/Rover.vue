<template>
  <div class="rover"></div>
</template>


<script>
export default {
  name: "rover",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getRover");
  },
  computed: {},
  methods: {},
  components: {},
};
</script>


<style scoped>
</style>