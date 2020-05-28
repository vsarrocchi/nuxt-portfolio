<template>
  <div id="portfolio" class="section py-32 bg-whyte min-h-screen">
    <div class="w-3/4 mx-auto mb-10 text-center">
      This are some of the projects i worked with during my time in school... I
      also worked with other projects during my internships time wick was build
      with angular, vue and nuxt, vuetify... this projects can not be shown
      because the integrity of the... I also did some testting using jasmine and
      jest.
    </div>
    <div class="container w-4/5 mx-auto min-h-screen grid gap-5 grid-cols-3">
      <a
        href="https://flamboyant-curie-65a21c.netlify.com/"
        class="portfolio-item portfolio-item-1 w-full h-full"
      >
        <span class="portfolio-item-text">
          <div class="text-xl">Band Site - Bob Marley</div>
          <div class="text-xs">Jekyll/Netlify/Sass/JavaScript</div>
        </span>
        <figure>
          <img src="../assets/images/portfolio/band-site.png" alt="band site" />
        </figure>
      </a>
      <a
        href="https://lezcodeher.github.io/project-webshop/"
        class="portfolio-item portfolio-item-2 w-full h-full"
      >
        <span class="portfolio-item-text">
          <div class="text-xl">Life Hacks - Webshop</div>
          <div class="text-xs">JavaScript/jQuery/XML/AJAX/JSON</div>
        </span>
        <figure>
          <img src="../assets/images/portfolio/webshop.png" alt="webshop" />
        </figure>
      </a>
      <a
        href="https://vssportfolio.netlify.app"
        class="portfolio-item portfolio-item-3 w-full h-full"
      >
        <span class="portfolio-item-text">
          <div class="text-xl">My second Portfolio</div>
          <div class="text-xs">Gatsby/React/Netlify/JavaScript/CSS</div>
        </span>
        <figure>
          <img
            src="../assets/images/portfolio/js3_portfolio.png"
            alt="portfolio"
          />
        </figure>
      </a>
      <a
        href="https://vsarrocchi.github.io/FrontendProjekt-Projekt2/"
        class="portfolio-item portfolio-item-4 w-full h-full"
      >
        <span class="portfolio-item-text">
          <div class="text-xl">Live Art Gallery</div>
          <div class="text-xs">HTML/CSS/JavaScript</div>
        </span>
        <figure>
          <img
            src="../assets/images/portfolio/artgallery.png"
            alt="art gallery"
          />
        </figure>
      </a>
      <a
        href="../assets/images/portfolio/grafikverktig.jpg"
        class="portfolio-item portfolio-item-5 bg-white flex justify-center w-full h-full"
      >
        <span class="portfolio-item-text">
          <div class="text-xl">Art Gallery - Mockup</div>
          <div class="text-xs">Photoshop/Illustrator</div>
        </span>
        <figure class="item-thumbnail w-64 flex">
          <img
            src="../assets/images/portfolio/grafikverktig.jpg"
            alt="grafikverktig 2"
          />
        </figure>
      </a>
      <a
        href="https://mmdarrah.github.io/SuperHero4rent/"
        class="portfolio-item portfolio-item-6 w-full h-full"
      >
        <span class="portfolio-item-text">
          <div class="text-xl">SuperHero for hire</div>
          <div class="text-xs">JavaScript/JSON/HTML/CSS/Sass</div>
        </span>
        <figure>
          <img src="../assets/images/portfolio/superhero.png" alt="superhero" />
        </figure>
      </a>
      <a
        href="https://vsarrocchi.github.io/Projektarbete-HTML-CSS/"
        class="portfolio-item portfolio-item-7 w-full h-full"
      >
        <span class="portfolio-item-text">
          <div class="text-xl">Flexbox vs Grid</div>
          <div class="text-xs">HTML/CSS/Sass</div>
        </span>
        <figure>
          <img
            src="../assets/images/portfolio/flexboxgrid.png"
            alt="flexbox grid"
          />
        </figure>
      </a>
      <a href="#" class="portfolio-item portfolio-item-8 w-full h-full">
        <span class="portfolio-item-text">
          <div class="text-xl">Journal</div>
          <div class="text-xs">PHP/SQL/MySQL/HTML/CSS</div>
        </span>
        <figure>
          <img src="../assets/images/portfolio/journal.png" alt="php journal" />
        </figure>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/styles.css';

.container {
  justify-items: center;
  align-items: center;
  grid-template-rows: auto;
  grid-template-areas:
    'item1 item2 item3'
    'item4 item4 item5'
    'item4 item4 item5'
    'item6 item7 item8';
}

.portfolio-item-1 {
  grid-area: item1;
}
.portfolio-item-2 {
  grid-area: item2;
}
.portfolio-item-3 {
  grid-area: item3;
}
.portfolio-item-4 {
  grid-area: item4;
}
.portfolio-item-5 {
  grid-area: item5;
}
.portfolio-item-6 {
  grid-area: item6;
}
.portfolio-item-7 {
  grid-area: item7;
}
.portfolio-item-8 {
  grid-area: item8;
}
.portfolio-item {
  position: relative;
  transition: 0.3s all ease-in-out;
  .portfolio-item-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    opacity: 0;
  }
  &:hover img {
    opacity: 0;
    transition: 0.3s all ease-in-out;
  }
  &:hover .portfolio-item-text {
    color: white;
    transition: 0.3s all ease-in-out;
    opacity: 1;
  }
  &:hover {
    background: linear-gradient(130deg, #503bff 0%, #8293ff 100%);
  }
}
</style>
