import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAu4KCxP3xLns9U4qVFQCJKYrKRde_UMbg",
  authDomain: "react-curation.firebaseapp.com",
  projectId: "react-curation",
  storageBucket: "react-curation.appspot.com",
  messagingSenderId: "359069508902",
  appId: "1:359069508902:web:7b7ea66d85d87eec764de7",
  measurementId: "G-98S3D3J2CQ"
};


firebase.initializeApp(firebaseConfig);
const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();


export { auth, apiKey, firestore };