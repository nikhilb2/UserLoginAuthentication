import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyDezShEu8K-swT1jz9tcCVb5Mg2iu4_Cak",
    authDomain: "authentication-90589.firebaseapp.com",
    databaseURL: "https://authentication-90589.firebaseio.com",
    projectId: "authentication-90589",
    storageBucket: "authentication-90589.appspot.com",
    messagingSenderId: "308049345888"
  };
const fire =  firebase.initializeApp(config);
export default fire
