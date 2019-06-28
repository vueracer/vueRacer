<template>
  <div @click="race" class="main-game" style="width: 100%; height: 1080px">
    <div> 
      <h4 v-if="game && game.raceStatus === 'deployed'">Click anywhere if you're ready!</h4>
      <h4 v-if="game && game.raceStatus === 'started'">Click anywhere on the screen</h4>
      <Player v-for="(p, i) in players" 
        :key="i" 
        :action='p.action' 
        :username='p.username' 
        :positionStyle='getPlayerPositionStyle(i, p)' 
        />
    </div>
  </div>
</template>

<script>
import db from '@/firebase/firebase'
import Player from '@/components/Player.vue'
import { finished } from 'stream';

const CPS = 800
export default {
  props: ['username', 'room'],
  name: 'gamePage',
  components: {
    Player,
  },
  data () {
    return {
      tempClick: 0,
      clickRate: 0,
      urutanPlayer: [],
      game: null,
      interval: null,
      fblistener: null,
    }
  },
  computed: {
    playerCount() {
      return Object.keys(this.game || {}).length
    },
    players() {
      let players = []
      players = this.urutanPlayer.map(e => this.game[e])
      return players
    }
  },
  created() {
    let self = this
    let docGame = db.collection('rooms').doc(this.room)
    let isStarted = false 
    this.fblistener = docGame.onSnapshot(docSnapshot => {
      var array = Object.keys(docSnapshot.data())
      var search_term = 'raceStatus'
      for (var i=array.length-1; i>=0; i--) {
        if (array[i] === search_term) {
            array.splice(i, 1)
        }
      }
      self.urutanPlayer = array
      self.game = docSnapshot.data()
      let allPlayerReady = self.urutanPlayer.reduce((acc, e) => {
        return acc && self.game[e].ready
      }, true)

      if (allPlayerReady && self.urutanPlayer.length >= 2) {
        db.collection('rooms')
          .doc(this.room)
          .update({raceStatus:'started'})
        if (!isStarted) {
          this.startRace() 
          isStarted = true
        }
      }
    }, err => {
      console.log(`Encountered error: ${err}`)
    })
  },
  beforeDestroy () {
    this.fblistener()
  },
  methods: {
    getPlayerPositionStyle(i, player) {
      let posStyle = {}
      posStyle.left = ((i * 10) + 10) + '%'
      posStyle.bottom = player.position + '%'
      return posStyle
    },
    countPosition () {
      let velocity = this.clickRate - 2
      console.log({velocity})
      let pos = this.game[this.username].position 
      let update = null
      if (pos > 0 && pos < 100) {
        update = { [`${this.username}.position`]: pos + velocity }
      } else if (pos >= 100) {
        update.raceStatus = 'finished'
      } else {
        update = {}
      }
       
      db.collection('rooms')
        .doc(this.room)
        .update(update)
    },
    race () {
      if (this.game && this.game[this.username] && this.game[this.username].ready) {
        ++this.tempClick
      } else {
        this.ready()
      }
    },
    ready () {
      let update = { 
        [`${this.username}.ready`]: true
      }
      db.collection('rooms')
        .doc(this.room)
        .update(update)
    },
    startRace () {
      this.interval = setInterval(() => {
        this.clickRate = this.tempClick
        this.tempClick = 0
        this.countPosition()
      }, CPS)
    }
  }
}
</script>

<style>
.main-game {
  background-image: url('../gif/bg.png');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
