import firebase from "firebase";
import firebaseContainer from "./firebaseConfig";

export default class authentication {
  constructor(){
    let base = firebaseContainer.getInstance();
    base.justStart();
  }

  static _auth = null;

  static getInstance(){
    if(this._auth == null){
      this._auth = new authentication();
    }
    return this._auth;
  }

  verifyEmail = async (email, pwd) => {
    firebase.auth().signInWithEmailAndPassword(email, pwd)
    .then(() => {
      return "finish";
    })
    .catch((error) => {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorMessage);
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
    });
  }
}