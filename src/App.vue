<template>
  <div id="app">
    <SiteNav></SiteNav>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SiteNav from '@/components/SiteNav'

export default {
  name: 'App',
  components: {
    SiteNav
  },
  computed: {
    ...mapState([
        'userProfile'
    ])
  }
}
</script>

<style>

#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  margin-top: 70px;
}
</style>
