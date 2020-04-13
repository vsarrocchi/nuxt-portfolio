<template>
  <div class="app">
    <Header />
    <div>
      <nuxt />
    </div>
    <Social />
  </div>
</template>

<script>
import Header from '../components/header'
import Social from '../components/social'

export default {
  components: {
    Header,
    Social
  }
}
</script>

<style lang="css">
@import '@/assets/css/styles.css';
</style>
