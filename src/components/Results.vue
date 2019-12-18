<template>
  <div class="list-group">
    <button
      type="button"
      :class="{active: checkActive(movie)}"
      class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
      @click="setActive(movie)"
      v-for="movie in movies"
      :key="movie.id"
    >
      <b>{{movie.title}}</b>
      <span class>{{getYear(movie.release_date)}}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Results",
  methods: {
    setActive(movie) {
      this.$store.dispatch("setActiveMovie", movie);
    },
    getYear(date) {
      return date.substring(0, 4);
    },
    checkActive(movie) {
      return this.$store.state.activeMovie.id === movie.id;
    }
  },
  computed: {
    movies() {
      return this.$store.state.searchResults;
    }
  }
};
</script>

<style>
.list-group {
  text-align: left;
}
</style>