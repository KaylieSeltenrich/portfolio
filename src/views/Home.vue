<template>
  <div class="home">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
    <div id="title-container">
      <div id="title" class="animate__animated animate__fadeInDown">
        Kaylie Seltenrich
      </div>
    </div>
    <div
      id="subtitle"
      class="animate__animated animate__fadeIn animate__delay-1s"
    >
      Junior Fullstack Web Developer/Designer
    </div>
    <img id="portrait" src="@/assets/croppedimage.jpg" alt="self portrait" />
    <div id="short-description">
      Hello, my name is Kaylie Seltenrich. Creativity is my fuel and passion. I
      love to create and design things from websites to illustrations, posters,
      and logos. I wish to pursue opportunities that allow for the usage of my
      technical skills in coding and my creativity and eye for design. If you
      hope to learn more about me and some projects I have worked on you are in
      the right place!
    </div>

    <div id="download-container">
      <a class="download" href="/KaylieSeltenrichResume.pdf" download>
        Download my Resume
      </a>
      <br />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style lang="css" scoped>
.home {
  width: 100%;
}

#title-container {
  max-height: 10vh;
  width: 100%;
}

#title {
  margin-top: 15%;
  margin-left: 5%;
  font-family: Pridi, cursive;
  font-size: 2.6em;
  white-space: nowrap;
  color: black;
}

#subtitle {
  height: 100%;
  margin-left: 5%;
  font-family: Pridi, cursive;
  font-size: 1.1em;
  line-height: 0.8;
  color: grey;
}

#portrait {
  margin-top: 5%;
  width: 200px;
  border-radius: 50%;
  float: right;
}

#short-description {
  margin-top: 5%;
  margin-left: 5%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.download {
  font-family: "Nixie One", cursive;
  font-weight: bold;
  padding: 15px 25px;
  text-decoration: none;
  font-size: 24px;
  text-align: center;
  color: #fff;
  background-color: rgb(31, 36, 109);
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

.download:active {
  background-color: rgb(71, 76, 153);
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

#download-container {
  margin-top: 10%;
  text-align: center;
}

/* TABLET */

@media only screen and (min-width: 768px) and (max-width: 1023px) {
  #title {
    font-size: 4em;
    margin-top: 10%;
  }

  #subtitle {
    font-size: 1.5em;
  }

  #portrait {
    width: 400px;
    margin-right: 2%;
  }

  #short-description {
    font-size: 1.2em;
  }

  .download {
    margin-left: 2%;
  }

  #download-container {
    margin-top: 10%;
    text-align: center;
  }
}

/* DESKTOP */
@media only screen and (min-width: 1024px) {
  .home {
    width: 100%;
  }

  #title-container {
    max-height: 10vh;
    width: 100%;
  }

  #title {
    margin-top: 15%;
    margin-left: 5%;
    font-family: Pridi, cursive;
    font-size: 2.6em;
    white-space: nowrap;
    color: black;
  }

  #subtitle {
    height: 100%;
    margin-left: 5%;
    font-family: Pridi, cursive;
    font-size: 1.1em;
    line-height: 0.8;
    color: grey;
  }

  #portrait {
    margin-top: 5%;
    width: 200px;
    border-radius: 50%;
    float: right;
  }

  #short-description {
    margin-top: 5%;
    margin-left: 5%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  .download {
    font-family: "Nixie One", cursive;
    font-weight: bold;
    padding: 15px 25px;
    text-decoration: none;
    font-size: 24px;
    text-align: center;
    color: #fff;
    background-color: rgb(31, 36, 109);
    border-radius: 15px;
    box-shadow: 0 9px #999;
  }

  .download:active {
    background-color: rgb(71, 76, 153);
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }

  #download-container {
    margin-top: 10%;
    text-align: center;
  }
}

/* DESKTOP */

@media only screen and (min-width: 1024px) {
  #title-container {
    width: 80%;
    margin: 0;
    margin-left: 20%;
    margin-top: 5%;
  }

  #title {
    font-size: 5em;
    margin: 0;
  }

  #subtitle {
    font-size: 3.5em;
    margin: 0;
    margin-left: 20%;
    line-height: 1.5;
  }

  #portrait {
    margin-top: 0%;
    margin-right: 3%;
    width: 500px;
  }

  #short-description {
    margin-top: 2%;
    margin-left: 20%;
    font-size: 1.2em;
  }

  .download:hover {
    background-color: rgb(71, 76, 153);
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }

  .download {
    font-weight: bold;
    width: 80%;
    padding: 15px 25px;
    text-decoration: none;
    font-size: 35px;
    text-align: center;
  }

  #download-container {
    margin-top: 5%;
    text-align: center;
  }
}
</style>
