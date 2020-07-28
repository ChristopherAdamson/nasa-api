import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

const _api = axios.create({
  baseURL: "https://api.nasa.gov/planetary/",
  timeout: 3000
})

let apiKey = "apod?api_key=j7wpayRNggFRrUG5Am5CjUxJQ2S1yEsHsu0afIdT"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apod: []
  },
  mutations: {
    setApod(state, apodData) {
      state.apod = apodData
    }
  },
  actions: {
    async getApod({ commit, dispatch }) {
      try {
        let res = await _api.get(apiKey)
        console.log(res);
        commit("setApod", res.data)
      } catch (error) { console.error(error) }
    },
    async getApodByDate({ commit, dispatch }, query) {
      try {
        let res = await _api.get(apiKey + "&date=" + query)
        console.log(res);
        commit("setApod", res.data)
      } catch (error) { console.error(error) }
    }
  },
  modules: {
  }
})
