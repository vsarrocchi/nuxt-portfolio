/* eslint-disable nuxt/no-globals-in-created */
<template>
  <div id="content-wrapper" class="content-wrapper">
    <Home />
    <About />
    <Portfolio />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Home from '../components/home'
import About from '../components/about'
import Portfolio from '../components/portfolio'
import Contact from '../components/contact'
import Footer from '../components/footer'

export default {
  components: {
    Home,
    About,
    Portfolio,
    Contact,
    Footer
  }
}
</script>

<style lang="css">
@import '@/assets/css/styles.css';

.content-wrapper {
  margin: 0;
  padding: 0;
  perspective: 1px;
  transform-style: preserve-3d;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
</style>
