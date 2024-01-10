import firebase from "firebase"

var firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyCYG8l4TfdK8_bbnwyrLs9lRgZVdyexsH8",
  authDomain: "react-contact-form-af432.firebaseapp.com",
  projectId: "react-contact-form-af432",
  storageBucket: "react-contact-form-af432.appspot.com",
  messagingSenderId: "371116508155",
  appId: "1:371116508155:web:bb086bd2f96136ce2a015e"

});

  

var db=firebaseApp.firestore();

export {db};
