import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBYQfXzDIakrSHh_FvG--IGZY-aq1m9D2g",
    authDomain: "logintrial-7dac7.firebaseapp.com",
    databaseURL: "https://logintrial-7dac7.firebaseio.com",
    projectId: "logintrial-7dac7",
    storageBucket: "logintrial-7dac7.appspot.com",
    messagingSenderId: "904266842555",
    appId: "1:904266842555:web:2e0fa7bbbf9747b113849e",
    measurementId: "G-13BJ0ZEHYL"
  };

  const fire = firebase.initializeApp(config);
  export default fire;