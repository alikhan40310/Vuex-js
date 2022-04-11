import { createStore } from 'vuex'
// import axios
import axios from 'axios'
export default createStore({
  state: {
    // all variable defined there
    counter: 0,
    colorCode: 'blue',
  },
  getters: {
  },
  mutations: {
    // mutations are the methods that can change the state
    increment(state, randomNumber) {
      // state.counter++
      state.counter += randomNumber;
    },
    decrement(state, randomNumber) {
      // state.counter--
      state.counter -= randomNumber;
    }
  },
  actions: {
    // all function defined there
    increment({ commit }) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
        commit('increment', response.data)
      })
    },
    decrement({ commit }) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
        commit('decrement', response.data)

      })
    }

  },
  getters: {
    counterSquare(state) {
      return state.counter * state.counter
    }
  },
  modules: {
    // each modules have there states and mutations
  }
})
