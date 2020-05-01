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
  },
  mounted() {
    const visibility = document.getElementById('content-wrapper')
    if (visibility.addEventListener) {
      visibility.addEventListener(
        'DOMContentLoaded',
        this.checkForVisibility,
        false
      )
      visibility.addEventListener('load', this.checkForVisibility, false)
      visibility.addEventListener('scroll', this.checkForVisibility, false)
    }
  },
  methods: {
    isElementInViewport(el) {
      const rect = el.getBoundingClientRect()

      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      )
    },
    checkForVisibility() {
      const headers = document.querySelectorAll('.header')
      headers.forEach((header) => {
        if (this.isElementInViewport(header)) {
          header.classList.add('headerVisible')
        } else {
          header.classList.remove('headerVisible')
        }
      })
    }
  }
}
</script>

<style lang="css">
@import '@/assets/css/styles.css';
</style>
