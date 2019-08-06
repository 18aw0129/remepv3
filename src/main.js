import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

Vue.config.productionTip = false;

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBoiTDAmsYKDTUc2t3L2M7CPCBxuKvlB_o",
  authDomain: "webapp-test-71ad7.firebaseapp.com",
  databaseURL: "https://webapp-test-71ad7.firebaseio.com",
  projectId: "webapp-test-71ad7",
  storageBucket: "",
  messagingSenderId: "470272579270",
  appId: "1:470272579270:web:b668965f1bb5a229"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
