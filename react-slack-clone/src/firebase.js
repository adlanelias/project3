import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAE1NRrCWD1Yk5VaT1-MMI1UQMsMut6014",
  authDomain: "react-slack-clone-939cf.firebaseapp.com",
  databaseURL: "https://react-slack-clone-939cf.firebaseio.com",
  projectId: "react-slack-clone-939cf",
  storageBucket: "react-slack-clone-939cf.appspot.com",
  messagingSenderId: "66014167072",
  appId: "1:66014167072:web:a384c3dd3586ae5a"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
