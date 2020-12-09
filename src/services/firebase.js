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
// const user = firebase.auth().currentUser;
// const userUID = user.uid
const orgRef = db.collection('organizations');

const addDonation = (data) => {
    db.collection("users").doc("rZwFQ4GlYha2W2PE9khvJrIJF223").update({
        "items": { data }
    })
        .then(function () {
            // console.log("Document successfully updated!");
            console.log('currentUser')
        })
}


const getOrgs = async () => {
    let orgs = []
    await orgRef.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            orgs.push(doc.data())
            // console.log(doc.data())
        })
    })
    return orgs
}

const getOneOrg = async () => {
    let org = []
    await orgRef.get().then(function (querySnapshot) {
        querySnapshot(function (doc) {
            org.push(doc.data)
        })
    })
    return org
}

export {
    db,
    addDonation,
    getOrgs,
    getOneOrg
}