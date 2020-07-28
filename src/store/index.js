import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

const _api = axios.create({
  baseURL: "https://api.nasa.gov",
  timeout: 3000
})

let apodApiKey = "planetary/apod?api_key=j7wpayRNggFRrUG5Am5CjUxJQ2S1yEsHsu0afIdT"
let roverApiKey = "/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=j7wpayRNggFRrUG5Am5CjUxJQ2S1yEsHsu0afIdT"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apod: [],
    rover: [],
  },
  mutations: {
    setApod(state, apodData) {
      state.apod = apodData
    },
    setRover(state, roverData) {
      state.rover = roverData
    }
  },
  actions: {
    async getApod({ commit, dispatch }) {
      try {
        let res = await _api.get(apodApiKey)
        console.log(res);
        commit("setApod", res.data)
      } catch (error) { console.error(error) }
    },
    async getApodByDate({ commit, dispatch }, query) {
      try {
        let res = await _api.get(apodApiKey + "&date=" + query)
        console.log(res);
        commit("setApod", res.data)
      } catch (error) { console.error(error) }
    },
    async getRover({ commit, dispatch }) {
      try {
        let res = await _api.get(roverApiKey)
        console.log(res.data.photos);
        commit("setRover", res.data.photos)
      } catch (error) { console.error(error) }
    }
  },
  modules: {
  }
})
