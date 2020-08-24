import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD3a85PKgb8TLGxestHSrVJ0_qo_3abo_o",
  authDomain: "slack-clone-4b980.firebaseapp.com",
  databaseURL: "https://slack-clone-4b980.firebaseio.com",
  projectId: "slack-clone-4b980",
  storageBucket: "slack-clone-4b980.appspot.com",
  messagingSenderId: "790202531366",
  appId: "1:790202531366:web:c5825b1da5261c57d930e7",
  measurementId: "G-2FMBHKD58K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth,provider,db};

