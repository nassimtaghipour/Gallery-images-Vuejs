import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    page: 0,
    currentImages:''
  },
  mutations: {
    setPage (state, page) {
      // mutate state
      state.page = page
    },
    saveCurrentImages(state, data){
      state.currentImages = data
    }
  },
  actions: {
  },
  modules: {
  }
})
