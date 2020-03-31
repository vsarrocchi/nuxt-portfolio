<template>
  <nav class="fixed z-50 top-0 left-0 w-full">
    <div
      class="nav-bg bg-hidden bg-orange-500 w-full h-full absolute -top-100 block transition ease-in-out duration-700 -z-10"
    ></div>
    <ul class="flex justify-end m-0 py-1 px-8">
      <li class="px-3">
        <a
          href="#home"
          class="w-full h-full text-white no-underline transition duration-400 ease-in-out hover:text-teal-700"
          >Home</a
        >
      </li>
      <li class="px-3">
        <a
          href="#about"
          class="w-full h-full text-white no-underline transition duration-400 ease-in-out hover:text-teal-700"
          >About</a
        >
      </li>
      <li class="px-3">
        <a
          href="#skills"
          class="w-full h-full text-white no-underline transition duration-400 ease-in-out hover:text-teal-700"
          >Skills</a
        >
      </li>
      <li class="px-3">
        <a
          href="#portfolio"
          class="w-full h-full text-white no-underline transition duration-400 ease-in-out hover:text-teal-700"
          >Portfolio</a
        >
      </li>
      <li class="px-3">
        <a
          href="#contact"
          class="w-full h-full text-white no-underline transition duration-400 ease-in-out hover:text-teal-700"
          >Contact</a
        >
      </li>
    </ul>
  </nav>
</template>

<style>
.nav-bg {
  content: '';
  position: absolute;
  display: block;
  top: -100%;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: rgb(50, 50, 50);
  transition: 0.45s ease-in-out;
}

.bg-hidden {
  top: -100%;
  opacity: 0;
}

.bg-visible {
  top: 0;
  opacity: 1;
}
</style>
