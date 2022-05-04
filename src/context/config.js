import "firebase/app"
import "firebase/firestore";
import {firebaseConfig} from "firebase"

  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();