<template>
  <div>
    <section class="bg-light" id="home-display">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-6 d-flex flex-column align-items-center">
            <transition name="slide-fade">
              <h1 v-if="pageLoad" class="display-2 px-5 fw-bolder"><span class="display-1 me-0 fw-bolder">S</span>mart<span
                  class="display-1 me-0 fw-bolder">L</span>iving</h1>
            </transition>
            <h1 class="fw-bolder">Sign Up Now. Its FREE</h1>
            <button class="btn btn-secondary border-2 px-5 align-self-center fs-3">Sign Up</button>
          </div>
          <div class="col-6 d-flex flex-column align-items-center rounded">
<!--            <p>Get Stronger</p>-->
<!--            <p>Get Healthier</p>-->
          </div>
        </div>
      </div>
    </section>
    <section class="container-fluid bg-dark p-4 d-flex flex-column align-items-center justify-content-center" id="home-features">

    </section>
    <section class="container-fluid bg-success p-4 d-flex flex-column align-items-center justify-content-center" id="home-reviews">

    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageLoad: false
    }
  },
  mounted() {
    this.pageLoad = true
  }
}
</script>

<style lang="scss" scoped>

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
</style>