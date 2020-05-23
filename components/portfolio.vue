<template>
  <div id="portfolio" class="section bg-white min-h-screen">
    <div class="container border mx-auto min-h-screen grid justi grid-cols-3">
      <!-- <div className="{portfolioStyles.portfolioBox}"> -->
      <a
        href="https://vsarrocchi.github.io/FrontendProjekt-Projekt2/"
        class="portfolio-item-1 border w-full h-full"
      >
        <span>
          <h1>Live Art Gallery</h1>
          <p>HTML/CSS/JavaScript</p>
        </span>
        <figure>
          <img src="/images/artgallery.png" alt="art gallery" />
        </figure>
      </a>
      <a
        href="https://vsarrocchi.github.io/Projektarbete-HTML-CSS/"
        class="portfolio-item-2 w-full h-full"
      >
        <span>
          <h1>Flexbox vs Grid</h1>
          <p>HTML/CSS/Sass</p>
        </span>
        <figure>
          <img src="/images/flexboxgrid.png" alt="flexbox grid" />
        </figure>
      </a>
      <a
        href="/images/grafikverktig.jpg"
        class="portfolio-item-3 w-full h-full"
      >
        <span>
          <h1>Art Gallery - Mockup</h1>
          <p>Photoshop/Illustrator</p>
        </span>
        <figure>
          <img src="/images/grafikverktig2.jpg" alt="grafikverktig 2" />
        </figure>
      </a>
      <a href="#" class="portfolio-item-4">
        <span>
          <h1>Journal</h1>
          <p>PHP/SQL/MySQL/HTML/CSS</p>
        </span>
        <figure>
          <img src="/images/journal.png" alt="php journal" />
        </figure>
      </a>
      <a
        href="https://mmdarrah.github.io/SuperHero4rent/"
        class="portfolio-item-5"
      >
        <span>
          <h1>SuperHero for hire</h1>
          <p>JavaScript/JSON/HTML/CSS/Sass</p>
        </span>
        <figure>
          <img src="/images/superhero.png" alt="superhero" />
        </figure>
      </a>
      <a
        href="https://lezcodeher.github.io/project-webshop/"
        class="portfolio-item-6"
      >
        <span>
          <h1>Life Hacks - Webshop</h1>
          <p>JavaScript/jQuery/XML/AJAX/JSON</p>
        </span>
        <figure>
          <img src="/images/webshop.png" alt="webshop" />
        </figure>
      </a>
      <a
        href="https://flamboyant-curie-65a21c.netlify.com/"
        class="portfolio-item-7"
      >
        <span>
          <h1>Band Site - Bob Marley</h1>
          <p>Jekyll/Netlify/Sass/JavaScript</p>
        </span>
        <figure>
          <img src="/images/band-site.png" alt="band site" />
        </figure>
      </a>
      <a href="#" class="portfolio-item-8">
        <span>
          <h1>This Portfolio</h1>
          <p>Gatsby/Netlify/JavaScript/CSS</p>
        </span>
        <figure>
          <img src="/images/old_portfolio.png" alt="portfolio" />
        </figure>
      </a>
      <!-- </div> -->
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
</style>
