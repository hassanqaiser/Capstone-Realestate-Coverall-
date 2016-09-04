import { AngularFireModule, AuthMethods } from 'angularfire2';

const firebaseConfig = {
    apiKey: "AIzaSyA0ZAB5m3ZQiK1Z6Y8IH51Ybtf-ncIJ34o",
    authDomain: "realestateq-1472310165241.firebaseapp.com",
    databaseURL: "https://realestateq-1472310165241.firebaseio.com",
    storageBucket: "realestateq-1472310165241.appspot.com",
  };


const firebaseAuthConfig = {
  method: AuthMethods.Popup,
  remember: 'default'
};


export const FirebaseModule = AngularFireModule.initializeApp(
  firebaseConfig, firebaseAuthConfig
);
