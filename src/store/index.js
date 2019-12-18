import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

let _api = axios.create({
  baseURL: "https://api.themoviedb.org/3/search"
})

const apiQuery = "movie/?api_key=e29c99781c1d12447f02a79b34dd2b11&page=1&include_adult=false&query="

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchResults: [],
    activeMovie: {}
  },
  mutations: {
    setSearchResults(state, searchResults) {
      state.searchResults = searchResults;
    },
    setActiveMovie(state, movie) {
      state.activeMovie = movie;
    }
  },
  actions: {
    async searchMovieApi({ commit, dispatch }, query) {
      let res = await _api.get(apiQuery + query);
      commit("setSearchResults", res.data.results);
    },
    setActiveMovie({ commit, dispatch }, movie) {
      commit("setActiveMovie", movie)
    }
  },
  modules: {
  }
})
