import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.VUE_APP_FB_API,
    authDomain: process.env.VUE_APP_FB_DOMAIN,
    databaseURL: process.env.VUE_APP_FB_DBURL,
    projectId: process.env.VUE_APP_FB_PROJ_ID,
    storageBucket: process.env.VUE_APP_FB_STOR_BUCK,
    messagingSenderId: process.env.VUE_APP_FB_MESS_SEND_ID,
    appId: process.env.VUE_APP_FB_APP_ID
  };

firebase.initializeApp(firebaseConfig);

firebase.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        }, reject);
    })
};

export default firebase;