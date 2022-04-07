import { createStore } from 'vuex'

export default createStore({
  state: {
    // all variable defined there
    counter: 0
  },
  getters: {
  },
  mutations: {
    // mutations are the methods that can change the state
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    }
  },
  actions: {
    // all function defined there
  },
  getters: {

  },
  modules: {
    // each modules have there states and mutations

  }
})
