<template>
  <div id="login">
    <section class="container">
      <div class="row justify-content-center h-100 align-items-center">
        <div class="col col-md-8">
          <transition name="fade" mode="out-in">
            <div v-if="showLoginForm" class="row shadow-lg rounded" id="login-container" key="login">
              <div class="col-5 bg-orange rounded-start p-4">
                <h1>Login</h1>
                <p>Welcome back!</p>
              </div>
              <div class="col-7 p-4">
                <form @submit="login()" @submit.prevent>
                  <div class="mb-3">
                    <label for="login-email" class="form-label fs-5">Email</label>
                    <input required v-bind:class="{'is-invalid': loginForm.incorrectPassword }"
                           class="form-control form-control-lg" v-model.trim="loginForm.email" type="email"
                           placeholder="you@email.com" id="login-email"/>
                  </div>
                  <div class="mb-3">
                    <label for="login-password" class="form-label fs-5">Password</label>
                    <input required v-bind:class="{'is-invalid': loginForm.incorrectPassword }"
                           class="form-control form-control-lg" v-model.trim="loginForm.password" type="password"
                           placeholder="******" id="login-password"/>
                    <div v-if="loginForm.incorrectPassword" class="invalid-feedback">
                      Incorrect Email or Password
                    </div>
                  </div>
                  <div class="d-flex justify-content-center mb-3">
                    <button type="submit" class="btn btn-outline-primary rounded-pill px-5 py-2 fw-bold">Log In</button>
                  </div>
                  <div class="extras">
                    <p class="text-center">Don't have an account? <a @click="toggleForm()" class="text-primary">Sign Up
                      Now</a></p>
                  </div>
                  <div class="d-flex flex-row align-items-center my-3">
                    <hr class="flex-grow-1 my-0">
                    <p class="text-muted text-center my-0 mx-2">Or login with</p>
                    <hr class="flex-grow-1 my-0">
                  </div>
                  <div class="d-flex flex-wrap justify-content-around justify-content-xl-between">
                    <button @click="loginWithFacebook()" class="btn btn-primary mb-3" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                           class="bi bi-facebook" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                      </svg>
                      Facebook
                    </button>
                    <button @click="loginWithGoogle()" class="btn btn-danger mb-3" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                           class="bi bi-google" viewBox="0 0 16 16">
                        <path
                            d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                      </svg>
                      Google
                    </button>
                    <button @click="loginWithTwitter()" class="btn btn-secondary mb-3" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                           class="bi bi-twitter" viewBox="0 0 16 16">
                        <path
                            d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                      Twitter
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div v-else class="row shadow-lg rounded" id="sign-up-container" key="'signUp">
              <div class="col-5 bg-purple rounded-start p-4">
                <h1>Sign Up</h1>
              </div>
              <div class="col-7 p-4">
                <form @submit="signUp()" @submit.prevent>
                  <div class="mb-3">
                    <label for="sign-up-email" class="form-label fs-5">Email</label>
                    <input required class="form-control form-control-lg" v-model.trim="signUpForm.email" type="email"
                           placeholder="you@email.com" id="sign-up-email"/>
                  </div>
                  <div class="mb-3">
                    <label for="sign-up-password" class="form-label fs-5">Password</label>
                    <input required class="form-control form-control-lg"
                           v-bind:class="{'is-invalid': signUpForm.error }" v-model.trim="signUpForm.password"
                           type="password" placeholder="******" id="sign-up-password"/>
                  </div>
                  <div class="mb-3">
                    <label for="sign-up-confirm-password" class="form-label fs-5">Confirm Password</label>
                    <input required class="form-control form-control-lg"
                           v-bind:class="{'is-invalid': signUpForm.error }"
                           v-model.trim="signUpForm.passwordConfirm" type="password" placeholder="******"
                           id="sign-up-confirm-password"/>
                    <div v-if="signUpForm.error" class="invalid-feedback">
                      {{ signUpForm.errorMessage }}
                    </div>
                  </div>
                  <div class="d-flex justify-content-center mb-3">
                    <button type="submit" class="btn btn-outline-primary rounded-pill px-5 py-2 fw-bold">Log In</button>
                  </div>
                  <div class="extras">
                    <p class="text-center">Already have an account? <a @click="toggleForm()"  class="text-primary">Login
                      Here</a></p>
                  </div>
                  <div class="d-flex flex-row align-items-center my-3">
                    <hr class="flex-grow-1 my-0">
                    <p class="text-muted text-center my-0 mx-2">Or sign up with</p>
                    <hr class="flex-grow-1 my-0">
                  </div>
                  <div class="d-flex flex-wrap justify-content-around justify-content-xl-between">
                    <button @click="loginWithFacebook()" class="btn btn-primary mb-3" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                           class="bi bi-facebook" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                      </svg>
                      Facebook
                    </button>
                    <button @click="loginWithGoogle()" class="btn btn-danger mb-3" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                           class="bi bi-google" viewBox="0 0 16 16">
                        <path
                            d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                      </svg>
                      Google
                    </button>
                    <button @click="loginWithTwitter()" class="btn btn-secondary mb-3" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                           class="bi bi-twitter" viewBox="0 0 16 16">
                        <path
                            d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                      Twitter
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

// import {loginWithFacebook, loginWithGoogle} from "@/firebase";
//import router from '../router/index'

export default {
  data() {
    return {
      loginForm: {
        email: '',
        password: '',
        incorrectPassword: false,
      },
      signUpForm: {
        email: '',
        password: '',
        passwordConfirm: '',
        error: false,
        errorMessage: ''
      },
      showLoginForm: true
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        email: this.loginForm.email,
        password: this.loginForm.password
      }).then(response => {
        console.log(response)
        const { user, additionalUserInfo} = response
        console.log(user, additionalUserInfo)

        this.$store.dispatch('fetchUserProfile', user)

        // Redirect to requested page or to hom
        let redirect_url = this.$route.query.redirect || '/'
        this.$router.push(redirect_url)

      }, error => {
        // TODO: Add error message for to many logins
        console.log(error)
        this.loginForm.incorrectPassword = true
      })
    },
    loginWithFacebook() {
      this.$store.dispatch('loginWithFacebook').then( response => {

        console.log(response)
        const { user, additionalUserInfo} = response
        console.log(user, additionalUserInfo)

        this.$store.dispatch('fetchUserProfile', user)

        // Redirect to requested page or to hom
        let redirect_url = this.$route.query.redirect || '/'
        this.$router.push(redirect_url)

      }, error => {
            console.log(error)

      })
    },
    loginWithGoogle() {
      this.$store.dispatch('loginWithGoogle').then( response => {

        const { user, additionalUserInfo} = response
        console.log(user, additionalUserInfo)

        this.$store.dispatch('fetchUserProfile', user)

        // Redirect to requested page or to hom
        let redirect_url = this.$route.query.redirect || '/'
        this.$router.push(redirect_url)

      }, error => {
        console.log(error)

      })
    },
    loginWithTwitter() {

    },
    signUp() {
      // Check if passwords match
      if (this.signUpForm.password !== this.signUpForm.passwordConfirm) {
        this.signUpForm.error = true
        this.signUpForm.errorMessage = "Passwords do not match"
      }
      // Check if password is at least 8 characters
      else if (this.signUpForm.password.length < 8) {
        this.signUpForm.error = true
        this.signUpForm.errorMessage = "Password must be at least 8 characters"
      }
      // Password passed checks
      else {
        console.log(this.signUpForm.email)
        this.$store.dispatch('signUp', {
          email: this.signUpForm.email,
          password: this.signUpForm.password
        })
      }
    },
    toggleForm() {
      this.showLoginForm = !this.showLoginForm
    }
  }
}
</script>

<style lang="scss" scoped>

section {
  height: calc(100vh - 70px);

}

.bg-orange {
  background-color: $orange-400;
}

.bg-purple {
  background-color: $indigo-400;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .6s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>