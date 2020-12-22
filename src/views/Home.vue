<template>
  <div class="home">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
    <div id="title-container">
      <div id="title" class="animate__animated animate__fadeInDown">Kaylie Seltenrich</div>
    </div>
    <div id="subtitle" class="animate__animated animate__fadeIn animate__delay-1s">Junior Fullstack Web Developer/Designer</div>
    <img id="portrait" src="@/assets/croppedimage.jpg" alt="self portrait" />
    <div id="short-description">
      Hello, my name is Kaylie Seltenrich. Creativity is my fuel and passion. I
      love to create and design things from websites, to illustrations, posters,
      and logos. I wish to pursue opportunities that allow me to use both my
      technical skills in coding and my creativity and eye for design. If you
      wish to learn more about me and some projects I have created you are in
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

</style>
