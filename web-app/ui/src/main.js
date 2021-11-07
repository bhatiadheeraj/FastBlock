import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQEQPsDdCCkPw4XvdTxF7Odf737Pay1OI",
  authDomain: "fastblock-3aeec.firebaseapp.com",
  projectId: "fastblock-3aeec",
  storageBucket: "fastblock-3aeec.appspot.com",
  messagingSenderId: "265068652092",
  appId: "1:265068652092:web:9083c4b3ce35f9665c0539",
  measurementId: "G-5PGG5VC2J1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
