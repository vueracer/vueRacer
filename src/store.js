import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    game: [
      {
        name: 'player',
        position: 0
      },
      {
        name: 'player1',
        position: 0
      }
    ],
    room: '',
    playerName: ''
  },
  mutations: {
    SET_GAME (game) {
      this.game = game
    },
    SET_ROOM (room) {
      this.room = room
    },
    SET_PLAYER_NAME (playerName) {
      this.playerName = playerName
    }
  },
  actions: {}
})
