import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA8DtsiyO0s8A70sypou3LLWfjgCGPjN-I",
    authDomain: "breeze-d16b8.firebaseapp.com",
    databaseURL: "https://breeze-d16b8.firebaseio.com",
    projectId: "breeze-d16b8",
    storageBucket: "breeze-d16b8.appspot.com",
    messagingSenderId: "229178645479",
    appId: "1:229178645479:web:f9b1834ab2adb7535f7b42",
    measurementId: "G-RL7HY11R2X"
  };

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyABqaxaIVudDaC1qY5Ex8uq7MAd0mawt7U",
//     authDomain: "breeze-78143.firebaseapp.com",
//     databaseURL: "https://breeze-78143.firebaseio.com",
//     projectId: "breeze-78143",
//     storageBucket: "breeze-78143.appspot.com",
//     messagingSenderId: "285534330658",
//     appId: "1:285534330658:web:ec2b8c02971e89bdd1cf7b",
//     measurementId: "G-C5404K39VP"
//   };
  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const database=firebaseApp.firestore();

  export default database;