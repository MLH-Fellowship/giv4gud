import * as firebase from 'firebase';
import 'firebase/firestore';
import AuthContext from "../../Context"

const firebaseConfig = {
    apiKey: "AIzaSyAfeiT7Qp96l-iBUg_4I5ymj4yEc4Cx-k4",
    authDomain: "giv4gud-dcd30.firebaseapp.com",
    databaseURL: "https://giv4gud-dcd30.firebaseio.com",
    projectId: "giv4gud-dcd30",
    storageBucket: "giv4gud-dcd30.appspot.com",
    messagingSenderId: "884472859704",
    appId: "1:884472859704:web:e4189e20a69609b6216acd"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

const addDonation = (AuthContext, data) => {

    var uid = AuthContext.uid
    db.collection("users").doc(uid).set({
        "items": { data }
    })
        .then(function () {
            console.log("Document successfully updated!");
        })
}

export {
    db,
    addDonation,
}