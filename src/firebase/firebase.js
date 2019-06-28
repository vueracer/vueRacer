import * as firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDdvY_4TKwp1Dj5YjqBdOwbFf_vjJbBEuk',
  authDomain: 'vueracer.firebaseapp.com',
  databaseURL: 'https://vueracer.firebaseio.com',
  projectId: 'vueracer',
  storageBucket: 'vueracer.appspot.com',
  messagingSenderId: '491999247786',
  appId: '1:491999247786:web:66d2ac4255679a57'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
var db = firebase.firestore()

export default db
