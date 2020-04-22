/* eslint-disable nuxt/no-globals-in-created */
<template>
  <div id="content-wrapper" class="content-wrapper">
    <Home />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Home from '../components/home'
import About from '../components/about'
import Skills from '../components/skills'
import Portfolio from '../components/portfolio'
import Contact from '../components/contact'
import Footer from '../components/footer'

export default {
  components: {
    Home,
    About,
    Skills,
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
  /* transform-style: preserve-3d; */
  max-height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
  /* linear gradient css */
  background-color: rgb(255, 255, 255);
  background: linear-gradient(
    45deg,
    #d4c2fc 0%,
    #eee4e5 10%,
    #f4d3f0 20%,
    #c8e0f8 30%,
    #a9f7fe 40%,
    #d4c2fc 50%,
    #eee4e5 60%,
    #f4d3f0 70%,
    #c8e0f8 80%,
    #a9f7fe 90%,
    #d4c2fc 100%
  );
  /* mix-blend-mode: hard-light; */
  animation-name: gradientanimation;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background-position: 0vw center;
  background-size: 100vw 100vw;
}

@keyframes gradientanimation {
  0% {
    background-position: 0vw center;
  }

  50% {
    background-position: 50vw center;
  }

  100% {
    background-position: 100vw center;
  }
}
</style>
