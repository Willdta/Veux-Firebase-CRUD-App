import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyB98HbsoOQ45CmvEldAuqocITZp0WxIgx4",
  authDomain: "authentication-test-78c63.firebaseapp.com",
  databaseURL: "https://authentication-test-78c63.firebaseio.com",
  projectId: "authentication-test-78c63",
  storageBucket: "authentication-test-78c63.appspot.com",
  messagingSenderId: "500314007902"
}

firebase.initializeApp(config)

const database = firebase.database()
const auth = firebase.auth()

export { database, auth }