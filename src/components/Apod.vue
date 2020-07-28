<template>
  <div class="apod col-5 text-center border rounded">
    <input v-model="query" type="date" name="query" />
    <button @click="getApodByDate" class="btn btn-primary btn-sm">Submit</button>
    <h5>{{apodData.title}}</h5>
    <p>{{apodData.date}}</p>
    <img class="img-fluid h-25" :src="apodData.url" alt />
    <p>{{apodData.explanation}}</p>
  </div>
</template>


<script>
export default {
  name: "apod",
  data() {
    return {
      query: "",
    };
  },
  mounted() {
    this.$store.dispatch("getApod");
  },
  computed: {
    apodData() {
      return this.$store.state.apod;
    },
  },
  methods: {
    getApodByDate() {
      console.log(this.query);
      this.$store.dispatch("getApodByDate", this.query);
    },
  },
  components: {},
};
</script>


<style scoped>
</style>