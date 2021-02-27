import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {auth} from './firebase'
import 'bootstrap';
import './assets/customBootstrap.scss'

// Vue.config.productionTip = false

let app
auth.onAuthStateChanged(user => {
    if (!app) {
        console.log("No app")
        app = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
    }

    // User is signed in
    if (user){
        console.log("signed in")
        store.dispatch('fetchUserProfile', user)
        store.commit('setUserSignedIn', true)
    }

    // User has been signed out
    else {
        console.log("Not signed in")

        // Send user to home
        console.log(router.currentRoute)
        if(router.currentRoute.path !== "/"){
            router.push('/')
        }
    }
})
