<template>
  <div
    id="about"
    class="about section bg-white min-h-screen flex justify-center"
    data-hasAppeared="false"
  >
    <div class="container pb-20 pt-10 md:py-20 md:flex items-center">
      <div class="hidden md:block absolute hello header">
        <AboutSvgAnimation />
      </div>
      <div class="flex w-11/12 md:w-2/5 mx-auto py-10 header">
        <div class="border shadow-lg w-7/12 mx-auto">
          <img src="../assets/images/profilbild.png" alt="profilImage" />
        </div>
      </div>
      <div class="w-11/12 md:w-3/5 mx-auto header">
        <p class="font-hairline leading-loose md:pr-20">
          Jag är en nyexaminerad Frontend utvecklare från Nackademin i
          Stockholm. Min utbildning bestod av två år i vilka ingick två LIA
          perioder. Under hela den perioden i skolan och praktiken lärde jag mig
          bland annat: JavaScript, HTML och CSS. CSS ramverk och preprocessor
          som: Sass, Bootstrap, Vuetify, Tailwind. JavaScript ramverk och
          bibliotek: React och Gatsby, Vue och Nuxt. Grunden till Jekyll som är
          en statik sidogenerator skriven i Ruby. Grunden till Angular och
          TypeScript. Test ramverk Jest och Jasmin. Grafiskt verktyg som Adobe
          Photoshop, Illustrator och XD, Figma, Gimp. CMS-verktyg: Contentful
          och grunden till Wordpress. Backend och interaktion med databaser:
          Grunden till PHP, SQL och MySQL. Git och GitHub.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import AboutSvgAnimation from './about-svg-animation'

export default {
  components: {
    AboutSvgAnimation
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/styles.css';
</style>
