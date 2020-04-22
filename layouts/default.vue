<template>
  <div>
    <Logo />
    <Sidebar />
    <div>
      <nuxt />
    </div>
    <Social />
  </div>
</template>

<script>
import Logo from '../components/logo'
import Sidebar from '../components/sidebar'
import Social from '../components/social'

export default {
  components: {
    Logo,
    Sidebar,
    Social
  }
}
</script>

<style lang="css">
@import '@/assets/css/styles.css';
</style>
