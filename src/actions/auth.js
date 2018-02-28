import {firebase,googleProvider} from '../firebase/firebase';

export const startLogin = () => {
    firebase.auth().signInWithPopup(googleProvider).then(function(result) {
        console.log('from popup',result);
    })
    .catch((e) =>{
        console.log(e);

    })
}

export const startLogout = () => {
    firebase.auth().signOut().then(function() {
        console.log('signout successfulr');
       }).catch(function(error) {
          console.log(error)
       });
}

export const logIn = (uid) => ({
    type:"LOGIN",
    uid
})

export const logOut = () => ({
    type:"LOGOUT"
})