<template>
  <div>
    <Header />
    <div>
      <nuxt />
    </div>
    <Social class="border border-black" />
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
