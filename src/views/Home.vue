<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col">
        <h1>
          AT THE
          <img class="logo-left" alt="Vue logo" src="../assets/logo2.png" />
          <img alt="Vue logo" src="../assets/logo2.png" />OVIES
        </h1>
      </div>
    </div>

    <div class="row">
      <div class="col col-md-4 mx-auto">
        <searchMovies />
      </div>
    </div>

    <div class="row">
      <div class="col-6 col-md-5 col-lg-4">
        <Results />
      </div>
      <div class="col-6 col-md-7 col-lg-8">
        <MovieDetails />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchMovies from "../components/SearchMovies";
import Results from "@/components/Results";
import MovieDetails from "../components/MovieDetails";

export default {
  name: "home",
  components: {
    SearchMovies,
    Results,
    MovieDetails
  }
};
</script>

<style>
h1 img {
  height: 0.9em;
  margin-top: -0.25em;
}

.logo-left {
  margin-right: -0.25em;
}
</style>