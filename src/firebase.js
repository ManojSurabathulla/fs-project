import firebase from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB8cs4pAPu2hrptl-X0bUjriKnjKlAdl5g",
  authDomain: "flyers-ef067.firebaseapp.com",
  projectId: "flyers-ef067",
  storageBucket: "flyers-ef067.appspot.com",
  messagingSenderId: "156504282896",
  appId: "1:156504282896:web:c4bca4779e50ae4d007795"
};

// Initialize Firebase
var firebaseDB = firebase.initializeApp(firebaseConfig);

export default firebaseDB.database().ref()