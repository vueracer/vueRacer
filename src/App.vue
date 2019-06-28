<template>
  <div id="app" style="width: 100%; height: 100%">
    <Game msg="Welcome to Your Vue.js App"/>
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
html, body {
  margin: 0px;
  padding: 0px;
}
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
