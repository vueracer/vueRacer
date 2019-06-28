<template>
  <div>
    <label for="name">rooms : </label>
    <input v-model="room" type="text">
    <label for="username"> username</label>
    <input v-model="username" type="text">
    <label for="password"> password</label>
    <input v-model="password" type="password">
    <button @click="createRoom" type="submit">input</button>
    <h3>ClickRate</h3>
    <h5>{{clickRate}}</h5>
    <progress :value="currPos" max="100"></progress>
    <br/>
    <br/>
    <button @click="race">RACE</button>
  </div>
</template>

<script>
import db from '@/firebase/firebase'

const CPS = 800
export default {
  data () {
    return {
      currPos: 20,
      tempClick: 0,
      clickRate: 0,
      speed: 0,
      interval: null,
      roomGame : 'oke',
      start : false,
      username : 'sadsa',
      room : '',
      password : '',
      game : {
        player1 : {
          id : 1,
          name : '',
          pos : 20
        }
      }
    }
  },
  methods: {
    race () {
      console.log('triggered', this.start);
      
        this.start = true

      this.tempClick++
    },
    createRoom(){
      console.log('create room triggered');
      
      let obj = {}
      obj = {
        status : 0,
        current_player : 1,
        password : this.password,
        player1 : {id : 1, name : this.username, pos : 20},
        player2 : {id : 2, name : '', pos: 20}
      }
      db.collection("rooms").doc(this.username)
      .set(obj)
      .then(()=>{
        // router.push
        console.log('oke dapet then');
        
      })
      .catch(err =>{
        console.log('error writing document',err);
      })
    },
    countPosition () {
      let velocity = this.clickRate - 2
      if (this.currPos < 100 && this.currPos > 0) {
        this.currPos += velocity
        this.game.player1.pos = this.currPos
        console.log('this game pos',this.currPos, this.game.player1.pos);
         
        db.collection('rooms')
        .doc(this.username)
        .update({player1 : this.game.player1} )
      }
    }
  },
  created () {
    console.log(this.start);
    
    
      this.interval = setInterval(() => {
        this.clickRate = this.tempClick
        this.tempClick = 0
        this.countPosition()
      }, CPS)
    
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  mounted(){

  },
  watch: {

  }
}
</script>
