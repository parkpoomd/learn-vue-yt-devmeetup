import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import * as firebase from "firebase/app";
import router from "./router";
import { store } from "./store";
import DateFilter from "./filters/date";
import AlertCmp from "./components/Shared/Alert.vue";

Vue.config.productionTip = false;

Vue.filter("date", DateFilter);
Vue.component("app-alert", AlertCmp);

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyCm4kH5-8HHdG2kmjZU10QOJI8iF9_ek18",
      authDomain: "devmeetup-bc45a.firebaseapp.com",
      databaseURL: "https://devmeetup-bc45a.firebaseio.com",
      projectId: "devmeetup-bc45a",
      storageBucket: "gs://devmeetup-bc45a.appspot.com"
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch("autoSignIn", user);
      }
    });
    this.$store.dispatch("loadMeetups");
  }
}).$mount("#app");
