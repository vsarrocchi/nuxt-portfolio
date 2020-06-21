<template>
  <div class="footer-section py-10 text-center">
    <a href="/#home" class="scrollTop text-5xl cursor-pointer">
      <i class="fa fa-angle-up"></i>
    </a>
    <div>Built by Valesca Sarrocchi</div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/styles.css';

.footer-section {
  background-color: #f4f4f4;
}

.scrollTop i:hover {
  transition: 300ms ease-in-out;
  color: #f56565;
  transform: scale(1.1, 1.1);
}
</style>
