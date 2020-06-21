<template>
  <div class="social-media-contact">
    <a
      class="social-media-box"
      href="https://github.com/vsarrocchi"
      target="_blank"
    >
      <i class="fab fa-github"></i>
    </a>
    <a
      class="social-media-box"
      href="https://linkedin.com/in/valesca-sarrocchi"
      target="_blank"
    >
      <i class="fab fa-linkedin"></i>
    </a>
    <a class="social-media-box" href="mailto:valesca.sarrocchi.s@gmail.com">
      <i class="fa fa-envelope"></i>
    </a>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/styles.css';

.social-media-contact {
  display: flex;
  justify-content: center;
  z-index: 111;
}

.social-media-contact i {
  padding: 1rem 1rem;
  color: #393939;
}

@media (min-width: 768px) {
  .social-media-contact {
    flex-direction: column;
    justify-content: unset;
    margin: 15px 15px 15px 0;
    position: fixed;
    bottom: 0;
  }

  .social-media-contact i {
    font-size: 20px;
    padding: 1rem 2rem;
  }

  .social-media-contact i:hover {
    opacity: 1;
    color: #f56565;
  }

  .social-media-box {
    position: relative;
    display: inline-block;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
  }

  .social-media-box::after {
    content: '';
    position: absolute;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .social-media-box:hover {
    transform: scale(1.2, 1.2);
  }

  .social-media-box:hover::after {
    opacity: 1;
  }
}
</style>
