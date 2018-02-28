import * as firebase  from 'firebase';


var config = {
    apiKey: "AIzaSyD7c8j9l5_oN8-qioVDszJmRVx76vY5i5k",
    authDomain: "gif-gif-1c490.firebaseapp.com",
    databaseURL: "https://gif-gif-1c490.firebaseio.com",
    projectId: "gif-gif-1c490",
    storageBucket: "gif-gif-1c490.appspot.com",
    messagingSenderId: "57856401432"
  };

  firebase.initializeApp(config);
  const database  = firebase.database();
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  

  export {firebase ,googleProvider,database as default};
