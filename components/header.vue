<template>
  <div>
    <div class="logo">
      <img src="../assets/images/logo.png" alt="logo" />
    </div>
    <div id="menu">|||</div>
    <div id="lgMenu">
      <!-- <span id="exit">&times;</span> -->
      <span id="exit">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path
            d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z"
            fill="white"
          />
        </svg>
      </span>
      <ul>
        <li>
          <a href="#home" class="active">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
    <!-- <Social class="border border-black" /> -->
  </div>
</template>

<script>
// import Social from '../components/social'

export default {
  components: {
    // Social
  }
}
</script>

<style>
#menu {
  position: absolute;
  top: 20px;
  right: 30px;
  z-index: 111;
  font-size: 2em;
  cursor: pointer;
  text-align: center;
  transition: all 0.5s;
}

#menu:hover {
  transform: rotate(90deg);
  color: #ff9900;
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 75px;
}

li {
  text-align: center;
  text-transform: uppercase;
  height: 70px;
  line-height: 70px;
  margin: 15px 0;
  color: white;
  cursor: pointer;
  font-size: 1em;
  letter-spacing: 0.2em;
  transition: all 0.25s;
}

li:hover {
  background-color: white;
  color: black;
  letter-spacing: 0.3em;
  font-size: 1.5em;
}

#lgMenu {
  width: 20%;
  height: 100vh;
  top: 0;
  right: -400px;
  overflow: hidden;
  background-color: #393939;
  box-shadow: 5px 5px 10px grey;
  position: absolute;
  z-index: 11;
  opacity: 0;
  transition: all 0.25s;
}

#exit {
  position: absolute;
  left: 20px;
  top: 25px;
  width: 30px;
  height: 30px;
  padding: 0px;
  cursor: pointer;
  transition: all 0.25s;
}
#exit svg:hover {
  fill: #ff9900;
}

#lgMenu.enter {
  opacity: 1;
  right: 0;
}

.logo {
  position: absolute;
  top: 20px;
  left: 30px;
  width: 50px;
  z-index: 111;
}
</style>
