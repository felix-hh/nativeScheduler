import * as firebase from 'firebase';

import "firebase/database";

  // Initialize Firebase

const firebaseConfig = {
  apiKey: "AIzaSyCZAFggWvGL37H0tBK_RJFi4r9jHfMIF4g",
  authDomain: "nativescheduler-f75af.firebaseapp.com",
  databaseURL: "https://nativescheduler-f75af.firebaseio.com",
  projectId: "nativescheduler-f75af",
  storageBucket: "nativescheduler-f75af.appspot.com",
  messagingSenderId: "783530354470",
  appId: "1:783530354470:web:cfb9d09e532fa044e403e7",
  measurementId: "G-1RNEEKN23K"
};

firebase.initializeApp(firebaseConfig);
export { firebase };