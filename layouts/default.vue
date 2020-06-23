<template>
  <div>
    <Sidebar />
    <div>
      <nuxt />
    </div>
    <Social />
  </div>
</template>

<script>
import anime from 'animejs'

import Sidebar from '../components/sidebar'
import Social from '../components/social'

export default {
  components: {
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
    // isElementInViewport and checkForVisibility used in about svg animation
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
          if (header.dataset.hasAppeared === 'true') {
          } else {
            header.classList.add('headerVisible')
            const svgPath = document.querySelectorAll('.path')
            anime({
              targets: svgPath,
              loop: false,
              opacity: 1,
              strokeDashoffset: [anime.setDashoffset, 0],
              easing: 'easeInOutSine',
              duration: 350,
              delay: (el, i) => {
                return i * 100
              }
            })
            header.dataset.hasAppeared = 'true'
          }
        } else {
          header.classList.remove('headerVisible')
          header.dataset.hasAppeared = 'false'
        }
      })
    }
  }
}
</script>

<style lang="css">
@import '@/assets/css/styles.css';
</style>
