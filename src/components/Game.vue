<template>
  <div>
    <h3>ClickRate</h3>
    <h5>{{clickRate}}</h5>
    <progress :value="currPos" max="100"></progress>
    <br/>
    <br/>
    <button @click="race">RACE</button>
  </div>
</template>

<script>
const CPS = 800
export default {
  data () {
    return {
      currPos: 20,
      tempClick: 0,
      clickRate: 0,
      speed: 0,
      interval: null
    }
  },
  methods: {
    race () {
      this.tempClick++
    },
    countPosition () {
      let velocity = this.clickRate - 2
      if (this.currPos < 100) {
        this.currPos += velocity
      }
    }
  },
  created () {
    this.interval = setInterval(() => {
      this.clickRate = this.tempClick
      this.tempClick = 0
      this.countPosition()
    }, CPS)
  },
  beforeDestroy () {
    clearInterval(this.interval)
  }
}
</script>
