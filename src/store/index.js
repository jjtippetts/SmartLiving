import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase'
import router from '../router/index'
import {loginWithFacebook, loginWithGoogle, signOut} from "@/firebase";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userDocumentId: '',
        userProfile: {},
        userSignedIn: false
    },
    mutations: {
        setUserProfile(state, val) {
            state.userProfile = val
            console.log(state.userProfile)
        },
        setUserSignedIn(state, val) {
            state.userSignedIn = val
        },
        setUserDocumentId(state, val){
            state.userDocumentId = val
            console.log(state.userDocumentId)
        }
    },
    actions: {
        login({ commit }, form){
            return new Promise((resolve, reject) => {
                console.log(form)
                fb.auth.signInWithEmailAndPassword(form.email, form.password).then(response => {
                    commit('setUserSignedIn', true)
                    resolve(response);
                }, error => {
                    reject(error)
                })
            })
        },
        loginWithGoogle({ commit }){
            return new Promise((resolve, reject) => {
                loginWithGoogle().then(response => {
                    commit('setUserSignedIn', true)
                    resolve(response);
                }, error => {
                    reject(error)
                })
            })
        },
        loginWithFacebook({ commit }){
            return new Promise((resolve, reject) => {
                loginWithFacebook().then(response => {
                    commit('setUserSignedIn', true)
                    resolve(response);
                }, error => {
                    reject(error)
                })
            })
        },
        async fetchUserProfile({ commit }, user) {
            // fetch user profile
            try {
                const userProfile = await fb.usersCollection.doc(user.uid).get()
                console.log(user.uid);
                if(userProfile.exists){
                    commit('setUserProfile', userProfile.data());
                    commit('setUserDocumentId', user.uid);
                }
                else {
                    // User does not have profile, ask user for additional info
                    await router.push('/login/additional-info')
                }
            } catch (error) {
                console.log(error)
            }
        },
        async signUp({ dispatch }, form){
            // Sign user up
            const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)

            await fb.usersCollection.doc(user.uid).set({
                email: form.email
            })

            dispatch('fetchUserProfile', user)
        },
        async logout({ commit }) {
            await signOut()

            commit('setUserProfile', {})
            commit('setUserSignedIn', false)
        }
    }
})