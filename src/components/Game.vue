<template>
  <div style="width: 100%; height: 100%">
    <div v-if="roomGame === false">
      <label for="name">rooms : </label>
      <input v-model="room" type="text">
      <label for="username"> username</label>
      <input v-model="username" type="text">
      <label for="password"> password</label>
      <input v-model="password" type="password">
      <button @click="createRoom" type="submit">input</button>
      <br/>
      <br/>
    </div>
    <div v-else>
      <GamePage :room="'test'" :username="'test'" />
    </div>
  </div>
</template>

<script>
import db from '@/firebase/firebase'
import GamePage from '@/components/gamePage.vue'

const CPS = 800
export default {
  components: {
    GamePage
  },
  data () {
    return {
      roomGame: '',
      username: '',
      room: '',
      password: ''
    }
  },
  methods: {
    createRoom () {
      let collections = db.collection('room').get()
      let obj = {
        raceStatus: 'deployed',
        [this.username]: {
          username: this.username,
          position: 20,
          ready: false,
          action: 'start',
        }
      }
      db.collection('rooms').doc(this.room)
        .set(obj)
        .then(() => {
          this.roomGame = this.room
        })
        .catch(err => {
          console.log('error writing document', err)
        })
    }
  },
  created() {
    let rooms = []
    let collections = db.collection('rooms')
      .get().then(res => {
        let keys = res.forEach((el) => {
          rooms.push(el.id) 
        }) 
      })
  }
}
</script>
