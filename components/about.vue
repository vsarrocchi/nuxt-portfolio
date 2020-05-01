<template>
  <div
    id="about"
    class="about section bg-white min-h-screen flex justify-center"
  >
    <div class="container flex justify-center items-center">
      <div class="header flex w-2/5">
        <div class="text-4xl">
          <div class="relative hello">Hello! I'am Valesca</div>
        </div>
        <div class>
          <img
            class="w-3/5"
            src="../assets/images/profilbild.jpg"
            alt="profilImage"
          />
        </div>
      </div>
      <div class="header w-2/5">
        <p class="text-xl font-hairline p-3 m-3">
          I am a FrontEnd developer student at Nackademin in Stockholm who is
          currently looking for an internship. I have just finished the first
          year of the program. During this time I gained experience working with
          JavaScript, jQuery, JSON, HTML, CSS, Git, GitHub, Bootstrap, Sass,
          PHP, SQL, WordPress, Photoshop and Illustrator, among other skills.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/styles.css';

.hello {
  top: 90px;
  left: 90px;
  z-index: 2;
}
</style>
