<template>
  <div style="width: 100%; height: 100%">
    <GamePage :room="this.$route.params.roomName" :username="this.$route.params.username" />
  </div>
</template>

<script>
import db from '@/firebase/firebase'
import GamePage from '@/components/gamePage.vue'
import { debuglog } from 'util';

const CPS = 800
export default {
  components: {
    GamePage
  },
  props: ['username', 'roomGame'],
  created() {
  }
}
</script>
