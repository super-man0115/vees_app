import { createStore } from 'vuex'

export default createStore({
  state: {
    selectedPokemon: null
  },
  mutations: {
    setSelectedPokemon(state, pokemon) {
      state.selectedPokemon = pokemon
    }
  },
  actions: {
    selectPokemon({ commit }, pokemon) {
      commit('setSelectedPokemon', pokemon)
    }
  }
})