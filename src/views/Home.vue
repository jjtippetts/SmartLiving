<template>
  <div class="bg-light">
    <section class="" id="home-display">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-6">
            <transition name="slide-fade">
              <div v-if="pageLoad" class="d-flex flex-column align-items-center">
                <h1 class="display-2 px-5 fw-bolder"><span class="display-1 me-0 fw-bolder">S</span>mart<span
                    class="display-1 me-0 fw-bolder">L</span>iving</h1>
                <h1 class="fw-bolder">Sign Up Now. Its FREE</h1>
                <router-link to="/login" class="btn btn-secondary border-2 px-5 align-self-center fs-3 mt-2">Sign Up</router-link>
              </div>
            </transition>

          </div>
          <div class="col-6 d-flex flex-column align-items-center rounded">
            <ul id="feature-list">
              <li
                  v-for="feature in features"
                  v-bind:key="feature.msg"
                  class="fs-1 py-3"
              >{{ feature.msg }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="container-fluid bg-secondary p-4 d-flex flex-column align-items-center justify-content-center rounded-circle" id="home-features">

    </section>
    <section class="container-fluid bg-primary p-4 d-flex flex-column align-items-center justify-content-center" id="home-reviews">

    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      pageLoad: false,
      features: [
        {msg: 'Personalized Diet and Fitness Plans'},
        {msg: 'Meal and Food Suggestions'},
        {msg: 'Easily and Quickly Track Your Progress'},
        {msg: 'Explore Popular Diet and Fitness Trends'}
      ]
    }
  },
  mounted() {
    this.pageLoad = true
  }
}
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

#feature-list {
  font-family: 'Bebas Neue', cursive;
}

.slide-fade-enter-active {
  transition: all 1.2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-10px);
  opacity: 0;
}

section, .container, .row {
  min-height: calc(100vh - #{$headerHeight});
}

.rounded-circle {
  border-bottom-left-radius: 0% !important;
  border-bottom-right-radius: 0% !important;
}
</style>