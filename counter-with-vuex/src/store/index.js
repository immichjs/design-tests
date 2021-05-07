import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    aumentar: (state, payload) => state.counter += payload,
    diminuir: state => state.counter--,
  },
  getters: {
    counter: state => state.counter
  },
  actions: {
    increment: ({ commit }) => {
      setTimeout(() => {
        commit('aumentar', 10)
      }, 1000);
    },
    decrement: ({ commit }) => commit('diminuir'),
  },
})
