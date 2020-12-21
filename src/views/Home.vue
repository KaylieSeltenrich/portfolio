<template>
  <div class="home">
    <div id="header-container">
      <div id="title">
        <div id="maintitle">Kaylie Seltenrich</div>
        <div id="subtitle">
          Junior Fullstack Web Developer & Graphic Designer
        </div>
        <div id="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          impedit minus provident quo fuga esse animi autem necessitatibus
          dolore, reiciendis quibusdam at sint consequuntur quos aspernatur
          fugit ex doloribus repudiandae? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Corporis, quae ratione sed earum tempore
          odio tempora a, consectetur nulla rem minus? Harum in modi ipsa.
          Praesentium iure rem architecto perferendis.
        </div>
      </div>
      <div id="image-container">
        <img
          id="portrait"
          src="@/assets/croppedimage.jpg"
          alt="self portrait"
        />
      </div>
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
#maintitle {
  font-family: Pridi, cursive;
  font-size: 5em;
}

#subtitle {
  font-family: Pridi, cursive;
  font-size: 1.5em;
}

#header-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 5%;
  width: 80%;
  margin-left: 20%;
  justify-items: center;
}

#portrait {
  margin-top: 5%;
  border-radius: 50%;
  width: 450px;
  box-shadow: 2px 5px 1px 5px rgb(31, 36, 109);
}

#description {
  margin-top: 10%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

#skills{
  width: 80%;
  margin-left: 15%;
}
/* PHONE */

@media only screen and (max-width: 768px) {
  #maintitle {
    font-size: 2em;
  }

  #subtitle {
    font-size: 0.8em;
  }

  #header-container {
    display: grid;
    position: absolute;
    top: 20vh;
    grid-template-columns: 2fr 0.5fr;
    width: 95%;
    margin: 0;
  }

  #portrait {
    margin-top: 5%;
    border-radius: 50%;
    width: 170px;
    box-shadow: 2px 4px 1px 4px rgb(31, 36, 109);
  }
}
</style>
