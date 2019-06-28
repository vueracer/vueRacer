<template>
  <div class="player" :style="positionStyle" > 
    <p>{{ username }}</p>
    <img v-if="action === 'start'" :class="action" src="@/gif/start.gif"/>
    <img v-if="action === 'naik'" :class="action" src="@/gif/naik.gif"/>
    <img v-if="action === 'jatuh'" :class="action" src="@/gif/jatuh.gif/">
  </div>
</template>

<script>
export default {
  props: ['action', 'username', 'positionStyle'],

}
</script>


<style>
.naik {
  src: '../gif.naik.gif'
}

.jatuh {
  src: '../gif.jatuh.gif'
}

.start {
  src: '../gif.start.gif'
}

.player {
	position: absolute;
}
</style>
