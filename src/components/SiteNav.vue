<template>
  <header>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light shadow-sm">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand fs-3" href="#"><span class="navbar-brand fs-2 me-0">S</span>mart<span
            class="navbar-brand fs-2 me-0">L</span>iving
        </router-link>
        <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav mx-auto">
            <router-link to="/#home-display" class="nav-link fs-5 px-4" aria-current="page">
              Home
            </router-link>
            <router-link to="/#home-features" class="nav-link fs-5 px-4">
              Features
            </router-link>
            <router-link to="/#home-reviews" class="nav-link fs-5 px-4">
              Reviews
            </router-link>
            <a v-if="isSignedIn" @click="logout()" class="nav-link fs-5 px-4 d-lg-none">
              Logout
            </a>
            <div v-else>
              <router-link to="/login" class="nav-link fs-5 px-4 d-lg-none">
                Signup
              </router-link>
              <a class="nav-link fs-5 px-4 d-lg-none" data-bs-toggle="modal" data-bs-target="#loginModal">
                Login
              </a>
            </div>
          </div>
        </div>
        <div class="d-flex">
          <button v-if="isSignedIn" @click="logout()" type="button"
                  class="me-1 btn btn-outline-primary rounded-pill px-5 raise fw-bold fs-5 border-2 d-none d-lg-block">
            Logout
          </button>
          <!-- Button trigger modal -->
          <button v-else type="button"
                  class="me-1 btn btn-outline-primary rounded-pill px-5 raise fw-bold fs-5 border-2 d-none d-lg-block"
                  data-bs-toggle="modal" data-bs-target="#loginModal">
            Login
          </button>
        </div>
      </div>
    </nav>
    <!-- Modal -->
    <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header text-center d-block">
            <button ref="modalClose" type="button" class="btn-close d-block ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
<!--            <h3 class="modal-title w-100 display-3" id="exampleModalLabel">Welcome Back</h3>-->
          </div>
          <div class="modal-body">
            <form @submit="login()" @submit.prevent>
              <div class="mb-3">
                <label for="login-email" class="form-label fs-5">Email</label>
                <input required v-bind:class="{'is-invalid': loginForm.incorrectPassword }"
                       class="form-control form-control-lg" v-model.trim="loginForm.email" type="email"
                       placeholder="you@email.com" id="login-email"/>
              </div>
              <div class="mb-4">
                <label for="login-password" class="form-label fs-5">Password</label>
                <input required v-bind:class="{'is-invalid': loginForm.incorrectPassword }"
                       class="form-control form-control-lg" v-model.trim="loginForm.password" type="password"
                       placeholder="******" id="login-password"/>
                <div v-if="loginForm.incorrectPassword" class="invalid-feedback">
                  Incorrect Email or Password
                </div>
              </div>
              <div class="d-grid gap-2">
                <button class="btn btn-lg btn-primary" type="button">Login</button>
              </div>
            </form>
            <div class="d-flex flex-row align-items-center my-3">
              <hr class="flex-grow-1 my-0">
              <p class="text-muted text-center my-0 mx-2">Or login with</p>
              <hr class="flex-grow-1 my-0">
            </div>
            <div class="d-flex flex-wrap justify-content-around justify-content-xl-between">
              <button @click="loginWithFacebook()" class="btn btn-facebook mb-3" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                     class="bi bi-facebook" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
                Facebook
              </button>
              <button @click="loginWithGoogle()" class="btn btn-google mb-3" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                     class="bi bi-google" viewBox="0 0 16 16">
                  <path
                      d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                </svg>
                Google
              </button>
              <button @click="loginWithTwitter()" class="btn btn-twitter mb-3" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                     class="bi bi-twitter" viewBox="0 0 16 16">
                  <path
                      d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
                Twitter
              </button>
            </div>
          </div>
          <div class="modal-footer">
            <p class="text-center w-100">Don't have an account?
              <router-link to="/login" @click="toggleForm()" class="text-primary">Sign Up
                Now
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import router from '../router/index'

export default {
  name: 'SiteNav',
  data() {
    return {
      loginForm: {
        email: '',
        password: '',
        incorrectPassword: false,
      }
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
    login() {
      this.$store.dispatch('login', {
        email: this.loginForm.email,
        password: this.loginForm.password
      }).then(response => {
        console.log(response)
        const {user, additionalUserInfo} = response
        console.log(user, additionalUserInfo)

        // Close modal
        this.$refs.modalClose.click()

        this.$store.dispatch('fetchUserProfile', user)

        // Redirect to requested page or to home
        // let redirect_url = this.$route.query.redirect || '/'
        // this.$router.push(redirect_url)

      }, error => {
        // TODO: Add error message for to many logins
        console.log(error)
        this.loginForm.incorrectPassword = true
      })
    },
    loginWithFacebook() {
      this.$store.dispatch('loginWithFacebook').then(response => {

        console.log(response)
        const {user, additionalUserInfo} = response
        console.log(user, additionalUserInfo)

        // Close modal
        this.$refs.modalClose.click()

        // Fetch user Profile from firebase
        this.$store.dispatch('fetchUserProfile', user).then(function(){
          router.push("/diet")
        })


        // OUTDATED CODE
        // Redirect to requested page or to hom
        // let redirect_url = this.$route.query.redirect || '/'
        // this.$router.push(redirect_url)
      }, error => {
        console.log(error)

      })
    },
    loginWithGoogle() {
      this.$store.dispatch('loginWithGoogle').then(response => {

        const {user, additionalUserInfo} = response
        console.log(user, additionalUserInfo)

        // Close modal
        this.$refs.modalClose.click()

        // Fetch user Profile from firebase
        this.$store.dispatch('fetchUserProfile', user).then(function(){
          router.push("/diet")
        })

        // Redirect to requested page or to hom
        // let redirect_url = this.$route.query.redirect || '/'
        // this.$router.push(redirect_url)

      }, error => {
        console.log(error)

      })
    },
    loginWithTwitter() {

    }
  },
  computed: {
    isSignedIn() {
      return this.$store.state.userSignedIn
    }
  }
}

</script>

<style lang="scss" scoped>

.navbar {
  min-height: $headerHeight
}

.nav-link {
  transition: border-bottom-color 0.5s ease-in-out;
  border-bottom: 5px solid transparent;
  padding-bottom: 0;
  top: 100px;
}

.nav-link:hover, .nav-link.active {
  border-bottom: 5px solid $orange-400;
}

// Size can also be negative; see how it's smaller than the element
.raise:hover,
.raise:focus {
  transform: translateY(-0.25em);
}

.raise {
  transition: 0.5s;
}

#facebook-login {
  background-color: #3b5998;
}

</style>