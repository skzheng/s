import firebase from 'firebase';

let config = {
  apiKey: "AIzaSyB9N5bHhVcLYAmYzE2WxZyTfs5kpKqqWD0",
  authDomain: "spymongame.firebaseapp.com",
  databaseURL: "https://spymongame.firebaseio.com",
  projectId: "spymongame",
  storageBucket: "spymongame.appspot.com",
  messagingSenderId: "1062626035659"
};

const fire = firebase.initializeApp(config);

export default fire;