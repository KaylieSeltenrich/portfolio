<template>
  <div id="app">
    <div id="mobile-menu-nav">
      <img id="mobile-menu" src="./assets/menu.svg" @click="showNav()" />
      <div id="mobile-icon-container">
        <a href="https://github.com/KaylieSeltenrich">
          <img src="./assets/github.svg" width="50px" alt="github icon" />
        </a>
        <a href="https://www.linkedin.com/in/kaylieseltenrich/">
          <img src="./assets/linkedin.svg" width="50px" alt="linkedin icon" />
        </a>
      </div>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/contact">Contact</router-link>
      <div id="icon-container">
        <a href="https://github.com/KaylieSeltenrich">
          <img src="./assets/github.svg" width="50px" alt="github icon" />
        </a>
        <a href="https://www.linkedin.com/in/kaylieseltenrich/">
          <img src="./assets/linkedin.svg" width="50px" alt="linkedin icon" />
        </a>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  components: {},

  methods: {
    showNav: function() {
      var x = document.getElementById("nav");
      if (x.style.display === "none") {
        x.style.display = "grid";
      } else {
        x.style.display = "none";
      }
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Nixie+One&family=Pridi&display=swap");

#mobile-menu {
  display: block;
  position: absolute;
  top: 2vh;
  left: 5vw;
  width: 15%;
  height: 70%;
}

#mobile-menu-nav {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 12vh;
  background-color: rgb(31, 36, 109);
  width: 100%;
}
#nav {
  display: none;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  position: absolute;
  width: 100%;
  height: 10vh;
  left: 0px;
  top: 11vh;
  text-align: center;
  font-family: "Nixie One", cursive;
  font-weight: bold;
  background-color: rgb(31, 36, 109);
}

#nav a {
  display: grid;
  grid-template-columns: 1fr;
  font-size: 1.2em;
  align-content: center;
  height: 100%;
  color: rgb(255, 255, 255);
  text-decoration: none;
  text-shadow: 5px 5px 5px #000000;
}

#nav a:hover {
  font-size: 1.2em;
}

#icon-container {
  display: none;
}

img {
  width: 40px;
}

#mobile-icon-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20%;
  position: absolute;
  top: 3vh;
  right: 10vw;
}

/* TABLET */

@media only screen and (min-width: 768px) and (max-width: 1023px) {
  #nav {
    font-size: 1.3em;
  }

  #mobile-menu{
    width: 15%;
    height: 70%;
  }

  img {
    width: 60px;
  }

  #mobile-icon-container {
    column-gap: 30%;
    right: 10vw;
  }
}

/* DESKTOP */

@media only screen and (min-width: 1024px) {
  #app {
    height: 100%;
    width: 100%;
  }

  .header-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 5%;
    width: 80%;
    margin-left: 20%;
    justify-items: center;
  }

  #nav {
    display: grid;
    grid-template-columns: 1fr;
    position: absolute;
    width: 15vw;
    height: 100%;
    left: 0px;
    top: 0px;
    text-align: center;
    font-family: "Nixie One", cursive;
    font-weight: bold;
    background-color: rgb(31, 36, 109);
  }

  #nav a {
    display: grid;
    grid-template-columns: 1fr;
    font-size: 1.3em;
    align-content: center;
    height: 100%;
    color: rgb(255, 255, 255);
    text-decoration: none;
    text-shadow: 5px 5px 5px #000000;
  }

  #nav a:hover {
    font-size: 1.8em;
  }

  #icon-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: center;
    justify-items: center;
  }

  #mobile-menu {
    display: none;
  }

  #mobile-menu-nav {
    display: none;
  }

  #mobile-icon-container {
    display: none;
  }

  img {
    width: 60px;
  }
}
</style>
