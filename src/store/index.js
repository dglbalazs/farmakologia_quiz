import { createStore } from 'vuex'

export default createStore({
  state: {
    currentPage: 'home'
  },
  mutations: {
    setCurrentPage(state,payload) {
      state.currentPage = payload;
    }
  },
  actions: {
    async setCurrentPage(state,payload) {
      state.commit('setCurrentPage',payload)
    }
  },
  modules: {
    
  },
  getters: {
    getCurrentPage: (state) => state.currentPage
  }
})
