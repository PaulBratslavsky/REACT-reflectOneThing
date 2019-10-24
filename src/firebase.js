import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyCBQt0lNaEFd7P0wsOmkasC6UhHsd0p90Q",
    authDomain: "one-reflect.firebaseapp.com",
    databaseURL: "https://one-reflect.firebaseio.com",
    projectId: "one-reflect",
    storageBucket: "one-reflect.appspot.com",
    messagingSenderId: "107545866306",
    appId: "1:107545866306:web:520feb692e3764bca1fddb"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;

