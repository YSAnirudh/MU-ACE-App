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
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}
export const FBStorage = firebase.storage();
