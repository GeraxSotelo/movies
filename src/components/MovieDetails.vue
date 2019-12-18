<template>
  <div class="card mx-auto" style="width: 25rem;">
    <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">
        <b>{{movie.title}}</b>
      </h5>
      <p class="card-text">{{movie.overview}}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Released: {{movie.release_date}}</li>
      <li class="list-group-item">Rating: {{movie.vote_average}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MovieDetails",
  methods: {},
  computed: {
    movie() {
      return this.$store.state.activeMovie;
    }
  }
};
</script>

<style>
</style>