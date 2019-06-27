import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

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
    isLogin : '',
    userName : '',
    game: [
        {
          name: '',
          position: 0
        },
        {
          name: '',
          position: 0
        }
      ],
      room: '',
      playerName: ''
  },
  mutations: {
    setIsLogin(state,data){
      state.isLogin = data
    },
    setUserName(state, data){
      state.userName = data
    }
  },
  actions: {
    login(context){
      var firebaseConfig = {
        apiKey: "AIzaSyDdvY_4TKwp1Dj5YjqBdOwbFf_vjJbBEuk",
        authDomain: "vueracer.firebaseapp.com",
        databaseURL: "https://vueracer.firebaseio.com",
        projectId: "vueracer",
        storageBucket: "vueracer.appspot.com",
        messagingSenderId: "491999247786",
        appId: "1:491999247786:web:66d2ac4255679a57"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      let provider = new firebase.auth.GoogleAuthProvider

      firebase.auth().signInWithPopup(provider)
      .then(result =>{
        let token = result.credential.accessToken

        localStorage.setItem('token' , token)

        let user = result.user;
        localStorage.setItem('userName', user.displayName)
        context.commit('setIsLogin',true)
        context.commit('setUserName', )
      })
      .catch(err =>{
        var errorCode = error.code;
        var errorMessage = error.message
        var email = error.email
        var credential = error.credential
        console.log('errorCode: ' ,errorCode,', error message : ', errorMessage);
        
      })
    }
  }
})
