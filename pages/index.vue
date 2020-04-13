/* eslint-disable nuxt/no-globals-in-created */
<template>
  <div id="content-wrapper" class="content-wrapper">
    <Home />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
    <Footer />
    <!-- <Social class="border border-black" /> -->
  </div>
</template>

<script>
import Home from '../components/home'
import About from '../components/about'
import Skills from '../components/skills'
import Portfolio from '../components/portfolio'
import Contact from '../components/contact'
import Footer from '../components/footer'
// import Social from '../components/social'

export default {
  components: {
    Home,
    About,
    Skills,
    Portfolio,
    Contact,
    Footer
    // Social
  }
}
</script>

<style lang="css">
@import '@/assets/css/styles.css';
</style>
