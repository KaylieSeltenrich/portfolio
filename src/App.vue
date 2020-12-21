<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/contact">Contact</router-link>
      <div id="icon-container">
       <a href="https://github.com/KaylieSeltenrich"> <img src="./assets/github.svg" width="50px" alt="github icon" /> </a>
        <a href="https://www.linkedin.com/in/kaylieseltenrich/"> <img src="./assets/linkedin.svg" width="50px" alt="linkedin icon" /> </a>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  components: {},
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Nixie+One&family=Pridi&display=swap");
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
}

#nav a:hover {
  font-size: 1.8em;
}

#icon-container{
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  justify-items: center;
}
</style>
