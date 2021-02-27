<template lang="pug">
  div.bg-light
    section#home-display
      div.container
        div.row.align-content-around.align-items-sm-center
          div.col-md-6
            transition(name="slide-fade")
              div.d-flex.flex-column.align-items-center(v-if="pageLoad")
                h1.display-2.px-5.fw-bolder
                  span.display-1.me-0.fw-bolder S
                  | mart
                  span.display-1.me-0.fw-bolder L
                  | iving
                h1.fw-bolder Sign Up Now. Its FREE
                router-link.btn.btn-secondary.border-2.px-5.align-items-center.fs-3.mt-2(to="/login") Sign Up
          div.col-md-6.d-flex.flex-column.align-items-center.rounded
            ul#feature-list
              li.fs-1.py-3(v-for="feature in features" v-bind:key="feature.msg") {{ feature.msg }}
    section#home-features.container-fluid.bg-secondary.p-4.d-flex.flex-column.align-items-center.justify-content-center.rounded-circle
    section#home-reviews.container-fluid.bg-primary.p-4.d-flex.flex-column.align-items-center.justify-content-center
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

.slide-fade-enter {
  transform: translateX(-10px);
  opacity: 0;
}

section, .container, .row {
  height: calc(100vh - #{$headerHeight});
}

.rounded-circle {
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}
</style>