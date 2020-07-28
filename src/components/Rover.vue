<template>
  <div class="rover col-6">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100 max-height" src="//placehold.it/200x200" alt />
        </div>
        <div v-for="(rover, i) in roverData" :key="rover.id" class="carousel-item">
          <img class="img-fluid d-block w-100 max-height" :src="rover.img_src" />
          <div class="carousel-caption d-none d-md-block">
            <p>{{rover.earth_date}}</p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
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
  computed: {
    roverData() {
      return this.$store.state.rover;
    },
  },
  methods: {},
  components: {},
};
</script>


<style scoped>
.max-height {
  max-height: 300px;
}
</style>