import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Create firebase credential file
import {firebaseConfig} from './firebaseconfig'

firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const dietCollection = db.collection('diets')
const usersCollection = db.collection('users')


function loginWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();

    return firebase.auth().signInWithPopup(provider).then(function(result){
        // The signed-in user info.
        return result
    });
}


function loginWithFacebook() {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.setCustomParameters({
        'display': 'popup'
    });
    return firebase.auth().signInWithPopup(provider).then(function(result){
        // The signed-in user info.
        return result
    });
}

// Signs-out of Friendly Chat.
function signOut() {
    // Sign out of Firebase.
    firebase.auth().signOut();
    console.log("Signed out")
}

// Returns the signed-in user's display name.
function getUserName() {
    return firebase.auth().currentUser.displayName;
}


// Returns the signed-in user's email.
function getUserEmail() {
    return firebase.auth().currentUser.email;
}


// Returns true if a user is signed-in.
function isUserSignedIn() {
    return !!firebase.auth().currentUser;
}


// export utils/refs
export {
    db,
    auth,
    usersCollection,
    dietCollection,
    loginWithGoogle,
    loginWithFacebook,
    getUserEmail,
    getUserName,
    isUserSignedIn,
    signOut
}