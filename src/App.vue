<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css" integrity="sha256-gVCm5mRCmW9kVgsSjQ7/5TLtXqvfCoxhdsjE6O1QLm8=" crossorigin="anonymous" />
    
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <i class="fab fa-vuejs"></i> -->
    <!-- <Game msg="Welcome to Your Vue.js App"/> -->
    
  </div>
</template>

<script>

import Game from './components/Game.vue'

export default {
  name: 'app',
  components: {
    Game,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-image: url('https://thumbs.gfycat.com/PinkPiercingBull-size_restricted.gif'); */
  /* background-size: contain;
  background-repeat:no-repeat; */
  height: 100vh;
}


</style>
