<template>
  <div>
    <form @submit.prevent="search">
      <div class="form-group">
        <label>Search Movies</label>
        <input type="text" class="form-control" placeholder="Search..." v-model="query" />
        <button class="btn btn-success mt-2" type="submit">Search</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchMovies",
  data() {
    return {
      query: ""
    };
  },
  methods: {
    search() {
      this.$store.dispatch("searchMovieApi", this.query);
    }
  }
};
</script>

<style>
</style>