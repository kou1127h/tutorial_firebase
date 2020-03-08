import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faSignOutAlt, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUser, faSignOutAlt, faEllipsisV)

// ↓↓↓firebase設定
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase'
import 'firebase/firestore'

Vue.use(firestorePlugin)

firebase.initializeApp({
  apiKey: 'AIzaSyD5mdyr_n8io6S5rTrdpoCus01SEDJ4gJY',
  authDomain: 'les-traducteurs.firebaseapp.com',
  databaseURL: 'https://les-traducteurs.firebaseio.com',
  projectId: 'les-traducteurs',
  storageBucket: 'les-traducteurs.appspot.com',
  messagingSenderId: '867282670641',
  appId: '1:867282670641:web:69d5001135373edd353110',
  measurementId: 'G-108L5DYTHT'
})

export const db = firebase.firestore()
export const auth = firebase.auth()
// ↑↑↑firebase設定

Vue.component('fa', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function(h) {
    return h(App)
  }
}).$mount('#app')
