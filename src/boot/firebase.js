import * as firebase from "firebase/app";
import "firebase/auth"
  var firebaseConfig = {
    apiKey: "AIzaSyCZ7V11N6qTbjFChel4O5ORhCdKqVWUnS8",
    authDomain: "recruit-9f031.firebaseapp.com",
    databaseURL: "https://recruit-9f031.firebaseio.com",
    projectId: "recruit-9f031",
    storageBucket: "recruit-9f031.appspot.com",
    messagingSenderId: "269693116991",
    appId: "1:269693116991:web:5e59f77ed95479fddace8a",
    measurementId: "G-J9J035TZDX"
  }
  
  let firebaseApp=firebase.initializeApp(firebaseConfig);
  let firebaseAuth=firebaseApp.auth()

  export {
    firebaseAuth
  }