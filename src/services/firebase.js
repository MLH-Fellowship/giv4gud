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

// console log userType
const getUserType = () => {
    var docRef = db.collection("users").doc(user.uid);
    docRef.get().then(function (doc) {
        if (doc.exists) {
            // replace .userType with any key to return value
            console.log("Document Data: ", doc.data().userType);
        } else {
            console.log("No such document!");
        }
    }).catch(function (error) {
        console.log("Error getting document: ", error);
    })
}

const addDonation = (data) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log('User Email: ', user.email, 'UID:', user.uid, "UserType: ");

            db.collection("users").doc(user.uid).update({
                "items": { data }
            })
                .then(function () {
                    console.log({ data })
                })
        }
    });
}

export {
    db,
    addDonation,
    getUserType,
}