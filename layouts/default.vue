<template>
  <div>
    <Header />
    <div>
      <nuxt />
    </div>
  </div>
</template>

<script>
import Header from '../components/header'

export default {
  components: {
    Header
  }
}
</script>

<style lang="css">
@import '@/assets/css/styles.css';
</style>
