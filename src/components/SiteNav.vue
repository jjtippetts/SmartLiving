<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light shadow-sm">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand fs-3" href="#"><span class="navbar-brand fs-2 me-0">S</span>mart<span
          class="navbar-brand fs-2 me-0">L</span>iving
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
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
<!--          <router-link to="/diet" class="nav-link fs-5 px-4" aria-current="page">-->
<!--            Diet-->
<!--          </router-link>-->
        </div>
        <div class="d-flex">
          <button v-if="isSignedIn" @click="logout()"
                  class="me-1 btn btn-outline-primary rounded-pill px-5 raise fw-bold fs-5 border-2">Logout
          </button>
          <router-link v-else to="/login"
                       class="me-1 btn btn-outline-primary rounded-pill px-5 raise fw-bold fs-5 border-2">
            Login
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'SiteNav',
  props: {
    msg: String
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
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
  height: $headerHeight
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


</style>