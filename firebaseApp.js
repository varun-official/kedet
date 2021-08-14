import firebase from "firebase";
import {config} from "./config";

export const firebaseApp=()=>{
  return!firebase.apps.length
    ? firebase.initializeApp(config())
    : firebase.app();
}
