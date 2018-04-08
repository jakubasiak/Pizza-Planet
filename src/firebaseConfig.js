import firebase from 'firebase'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDAKQ2thLjmnxFm-XVUKywDGl4W6y4Q8Ko",
    authDomain: "pizza-planet-744c3.firebaseapp.com",
    databaseURL: "https://pizza-planet-744c3.firebaseio.com",
    projectId: "pizza-planet-744c3",
    storageBucket: "pizza-planet-744c3.appspot.com",
    messagingSenderId: "419671347511"
};
const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.database();
export const dbMenuRef = db.ref('menu');
