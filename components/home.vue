<template>
  <div id="home" class="section home">
    <HomeSvgAnimation class="w-3/4" />
    <div class="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
      Frontend Developer
    </div>
  </div>
</template>

<script>
import HomeSvgAnimation from './home-svg-animation'

export default {
  components: {
    HomeSvgAnimation
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/styles.css';

/* parallax */
.home {
  box-sizing: border-box;
  min-height: 100vh;
  position: relative;
  transform-style: inherit;
  width: 100vw;
  z-index: -10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.home,
.home:before {
  background: 50% 50% / cover;
}

.home::before {
  bottom: 0;
  content: '';
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  display: block;
  background-image: url('../assets/images/tyler-gooding-z8J0DZzXYDI-unsplash-4.jpeg?url');
  opacity: 0.3;
  background-size: cover;
  transform-origin: center center 0;
  transform: translateZ(-1px) scale(2);
  z-index: -10;
  min-height: 100vh;
}

.home * {
  font-weight: normal;
  letter-spacing: 0.2em;
  text-align: center;
  margin: 0;
  padding: 1em 0;
}
</style>
