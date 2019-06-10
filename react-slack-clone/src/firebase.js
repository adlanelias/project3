import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDUR3BypIdBD2mWCPIAudtPPEGbrDdzP9M",
  authDomain: "pogchat7.firebaseapp.com",
  databaseURL: "https://pogchat7.firebaseio.com",
  projectId: "pogchat7",
  storageBucket: "pogchat7.appspot.com",
  messagingSenderId: "697933165914",
  appId: "1:697933165914:web:1ad7ee88752310a7"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
