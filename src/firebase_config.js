import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCR6O13TYsq2_lo64kgK2rcLWCNQyhOyb0",
  authDomain: "todo-app000.firebaseapp.com",
  projectId: "todo-app000",
  storageBucket: "todo-app000.appspot.com",
  messagingSenderId: "617539827060",
  appId: "1:617539827060:web:dc8142973e449afdfae821"
};

const fire = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db ,fire};