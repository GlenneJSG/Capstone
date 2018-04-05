import * as firebase from 'firebase'


const config = {
  apiKey: "AIzaSyBaV6_73x0VHrkLvYwnvbTpNadhRPal14A",
  authDomain: "parachute-191a7.firebaseapp.com",
  databaseURL: "https://parachute-191a7.firebaseio.com",
  projectId: "parachute-191a7",
  storageBucket: "parachute-191a7.appspot.com",
  messagingSenderId: "1039836428906"
};

export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
