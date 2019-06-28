<template>

</template>

<script>
// import db from '@/firebase/firebase'

export default {
  name: 'Lobby',
  data () {
    return {
      password: '',
      room: ''
    }
  },
  methods: {
    checkPassword () {
      db.collection('rooms').doc(this.room).get()
        .then(response => {
          let pwdb = response.data().password
          if (pwdb === this.password) {
            console.log('password nya sama')
            db.collection('rooms').doc(this.room).update({ player2: { name: localStorage.getItem('userName'), score: 0 }, current_player: 2, score: 2, score: 0 })
            context.commit('setIsLogin', true)
          } else {
            Swal.fire('oops, room already full', '', 'error')
          }
        })
        .catch(err => {
          Swal.fire('Oops', 'error', 'error')
          console.log(err)
        })
    }
  }
}
</script>
