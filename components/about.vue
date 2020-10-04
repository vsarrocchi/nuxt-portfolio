<template>
  <div
    id="about"
    class="about section bg-white min-h-screen flex justify-center"
    data-hasAppeared="false"
  >
    <div class="md:w-4/5 pb-20 pt-10 md:py-20 md:flex items-center">
      <!-- <div class="hidden md:block absolute hello header">
        <AboutSvgAnimation />
      </div> -->
      <div class="w-11/12 md:w-3/5 mx-auto header">
        <h1 class="about-title text-4xl">Om mig</h1>
        <p class="md:pr-20 tracking-wide leading-relaxed my-5">
          Mitt namn är Valesca Sarrocchi och jag är en nyexaminerad Frontend
          utvecklare från Nackademin i Stockholm. Just nu jobbar jag deltid i
          ett nystartat företag som jobbar med digital tillgänglighet. Mitt jobb
          där handlar framför allt om att göra analyser av digitala gränssnitt
          gentemot WCAG och hitta tillgänglighets brister samt ge råd om hur de
          brister skulle kunna lösas.
        </p>
        <p class="md:pr-20 tracking-wide leading-relaxed my-5">
          Under utbildningen lärde jag mig bland annat:
        </p>
        <ul class="tracking-wide leading-relaxed my-5 list-disc list-inside">
          <li>JavaScript, HTML och CSS.</li>
          <li>
            CSS ramverk och preprocessor: Sass, Bootstrap, Vuetify, Tailwind.
          </li>
          <li>
            JavaScript ramverk och bibliotek: Grunden till React och Gatsby, Vue
            och Nuxt.
          </li>
          <li>Grunden till Jekyll: statik sidogenerator skriven i Ruby.</li>
          <li>Grunden till Angular och TypeScript.</li>
          <li>Test ramverk: Jest och Jasmin.</li>
          <li>
            Grafiskt verktyg: Adobe Photoshop, Illustrator och XD, Figma, Gimp.
          </li>
          <li>CMS-verktyg: Contentful och grunden till Wordpress.</li>
          <li>
            Backend och interaktion med databaser: Grunden till PHP, SQL och
            MySQL.
          </li>
          <li>Git och GitHub.</li>
        </ul>
      </div>
      <div class="flex w-11/12 md:w-2/5 mx-auto py-10 header">
        <div class="w-9/12 mx-auto">
          <!-- <div class="border shadow-lg w-7/12 mx-auto"> -->
          <!-- <img src="../assets/images/profilbild.png" alt="profilImage" /> -->
          <img src="../assets/images/profil-image.png" alt="profilImage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import AboutSvgAnimation from './about-svg-animation'

export default {
  // components: {
  //   AboutSvgAnimation
  // }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/styles.css';

.about-title {
  font-family: 'Nothing You Could Do', cursive;
}
</style>
