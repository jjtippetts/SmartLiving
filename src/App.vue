<template>
  <div id="app">
    <SiteNav></SiteNav>
    <main>
      <router-view/>
    </main>
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

<style lang="scss" scoped>

#app {
  margin-top: $headerHeight;
}
</style>
