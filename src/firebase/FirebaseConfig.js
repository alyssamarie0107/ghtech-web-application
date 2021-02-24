// using firebase for google login authentication 
// -- firebase imports
import firebase from "firebase/app"
import 'firebase/auth';

const firebaseConfig = {
        apiKey: "AIzaSyA6jpcK7_OMZdUbpSBaqpTC2qSLiLlbG68",
        authDomain: "ghtechtalk-webapp.firebaseapp.com",
        projectId: "ghtechtalk-webapp",
        storageBucket: "ghtechtalk-webapp.appspot.com",
        messagingSenderId: "324493500187",
        appId: "1:324493500187:web:fdf423083cab4e18847dbe"
};

// initialize firebase
const firebaseApp = firebase.apps && firebase.apps.length > 0 ? firebase.apps[0] : firebase.initializeApp(firebaseConfig)

export default firebaseApp
