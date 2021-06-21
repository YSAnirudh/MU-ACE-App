import firebase from 'firebase';
import 'firebase/storage';
export const firebaseConfig = {
    apiKey: 'AIzaSyAH8T9mD9c2TEk4pyDWHGvdnRIL0ATPaYY',
    authDomain: 'bubble-319e2.firebaseapp.com',
    databaseURL: 'https://bubble-319e2.firebaseio.com',
    projectId: 'bubble-319e2',
    storageBucket: 'bubble-319e2.appspot.com',
    messagingSenderId: '233821185115',
    appId: '1:233821185115:web:654d454c6755d48eee8b7e',
    measurementId: 'G-7B955QGJFM',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const FBStorage = firebase.storage();
