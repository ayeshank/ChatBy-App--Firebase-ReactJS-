import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyA85VKt5-jGgRbuLgsbCUQcS4stbPvrlSw",
    authDomain: "ssuet-react.firebaseapp.com",
    databaseURL: "https://ssuet-react-default-rtdb.firebaseio.com",
    projectId: "ssuet-react",
    storageBucket: "ssuet-react.appspot.com",
    messagingSenderId: "714298465759",
    appId: "1:714298465759:web:be8e4c5117b8692bef786a"
};
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   export const Db=firebase.database().ref("messages");