import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAz2AG1UqlTsHJxvxax2ZEP72M2aV-GpkE",
    authDomain: "e-ride-stage-4-803ee.firebaseapp.com",
    projectId: "e-ride-stage-4-803ee",
    storageBucket: "e-ride-stage-4-803ee.appspot.com",
    messagingSenderId: "83587899998",
    appId: "1:83587899998:web:77ee45ec1b2813b2f84acf"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
