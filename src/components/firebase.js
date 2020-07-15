import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({

        apiKey: "AIzaSyBEnSQGojXeFnIfkH0y9VTplxXcxXhFAcc",
        authDomain: "fir-d2755.firebaseapp.com",
        databaseURL: "https://fir-d2755.firebaseio.com",
        projectId: "fir-d2755",
        storageBucket: "fir-d2755.appspot.com",
        messagingSenderId: "194248252809",
        appId: "1:194248252809:web:45618b5cf5f19ff2c9d558",
        measurementId: "G-1T0E8254L8"
   
})


const db = firebaseApp.firestore()

const auth = firebase.auth()

export {auth}