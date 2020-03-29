<template>
  <div>
    <Home />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
  </div>
</template>

<script>
import Home from '../components/home'
import About from '../components/about'
import Skills from '../components/skills'
import Portfolio from '../components/portfolio'
import Contact from '../components/contact'

export default {
  components: {
    Home,
    About,
    Skills,
    Portfolio,
    Contact
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
