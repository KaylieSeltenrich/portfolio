<template>
  <div class="about">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
    <div id="about-me">
      <div class="title">About Me:</div>
      <p class="paragraph">
        I am a recent graduate from InnoTech College's six-month Fullstack Web
        Development diploma program. I also have previous experience working as
        a Graphic Designer/Typesetter at MinuteMan Press and have a Graphic
        Communications & Print Technology diploma from SAIT. I am a diligent and
        creative individual who is always eager to learn new things.
      </p>
    </div>
    <div class="title" id="technical">My Technical Skills:</div>
    <div id="skills">
      <p>• Vue.js</p>
      <p>• Javascript</p>
      <p>• Python</p>
      <p>• HTML5 & CSS3</p>
      <p>• SQL</p>
      <p>• Flask</p>
      <p>• Adobe Photoshop</p>
      <p>• Adobe Illustrator</p>
      <p>• Adobe InDesign</p>
      <p>• CorelDraw</p>
    </div>
    <div id="image-container">
      <img
        class="animate__animated animate__fadeIn"
        src="@/assets/javascript.svg"
      />
      <img
        class="animate__animated animate__fadeIn animate__delay-1s"
        src="@/assets/html-5.svg"
      />
      <img
        class="animate__animated animate__fadeIn animate__delay-2s"
        src="@/assets/css-3.svg"
      />
      <img
        class="animate__animated animate__fadeIn animate__delay-3s"
        src="@/assets/vue.svg"
      />
      <img
        class="animate__animated animate__fadeIn animate__delay-4s"
        src="@/assets/python.svg"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "About",
  components: {},
};
</script>

<style lang="css" scoped>

.about{
width: 100%;
}

.paragraph {
  font-size: 1em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-left: 2vw;
  margin-right: 2vw;
  text-align: left;
}

#technical {
  margin-top: 2vh;
  font-size: 2em;
}

img {
  filter: grayscale(80);
  opacity: 80%;
  width: 70%;
}

#image-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin-top: 5%;
  margin-left: 2%;
}

.title {
  font-size: 2.5em;
  margin-top: 9vh;
  text-align: center;
  font-family: Pridi, cursive;
}

#skills {
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1.1em;
  color: black;
  text-align: left;
  justify-items: left;
  margin-left: 5vw;
  margin-right: 5vw;
}

/* TABLET */

@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .paragraph {
    font-size: 1.2em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    margin-left: 6vw;
    margin-right: 6vw;
    text-align: left;
  }

  #technical {
    font-size: 3.5em;
  }

  img {
    filter: grayscale(80);
    opacity: 80%;
    width: 70%;
  }

  #image-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    margin-top: 5%;
    margin-left: 2%;
  }

  .title {
    font-size: 4em;
    margin-top: 9vh;
    text-align: center;
    font-family: Pridi, cursive;
  }

  #skills {
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1.5em;
    color: black;
    text-align: center;
    justify-items: center;
    margin-left: 8vw;
    margin-right: 8vw;
  }
}

/* DESKTOP */

@media only screen and (min-width: 1024px) {
.about{
  margin-left: 15%;
  width: 80%;
}

.paragraph {
    font-size: 1.5em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    margin-left: 10%;
  }

  #technical {
    font-size: 3.5em;
  }

  img {
    filter: grayscale(80);
    opacity: 80%;
    width: 60%;
  }

  #image-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    width: 80%;
    margin-left: 15%;
   
  }

  .title {
    font-size: 4em;
    width: 100%;
    margin-top: 9vh;
    font-family: Pridi, cursive;
  }

  #skills {
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 2em;
    color: black;
    justify-items: left;
    width: 60%;
    margin-left: 25%;
    margin-top: 2%;
    
  }

}
</style>
