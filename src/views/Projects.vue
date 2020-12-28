<template>
  <div class="projects">
    <div id="title">Projects</div>
    <div id="project-container">
      <div class="project">
        <div class="title">Inspo</div>
        <div class="image"><img src="@/assets/inspologo.png" /></div>
        <p>
          Inspo was created as my final project for InnoTech College. It is an
          MVP of a site where users can upload or search for images and then
          generate a colour palette that will be drawn from the colours of the
          selected image. It works as a 'colour picker' for images. Its purpose
          is to help inspire designers, artists, and other creatives to find the
          perfect colors for their projects. Every generated image and palette
          can be saved on a board. Users can also view other people's boards,
          like boards, and favourite boards. They can also view the most liked
          boards of the month. Each colour in the palette has a hex code that
          can be easily copied directly to the clipboard through a single click.
          I used Pexel's API to create the image search bar, and a Javascript
          library called Color Thief for the color picker. I created the
          front-end with Vue.js, Vuex, Vue router; and the back-end with MariaDB
          and DBeaver.
        </p>
        <button
          onclick="window.location.href='https://github.com/KaylieSeltenrich/FrontEndMVP'"
        >
          View Front End Code
        </button>
        <button
          onclick="window.location.href='https://github.com/KaylieSeltenrich/BackEndMVP'"
        >
          View Back End Code
        </button>
        <button onclick="window.location.href='https://inspo.ml/#/'">
          View Live Site
        </button>
      </div>

      <div class="project">
        <div class="title">Squawker</div>
        <div class="image"><img src="@/assets/squawkericon.svg" /></div>
        <p>
          Squawker/Tweeter is a Twitter clone that I created with Vue.js, Flask,
          MariaDB and Python. It is a full CRUD style application that offers
          the ability to create tweets, update tweets, delete tweets, comment on
          tweets, like tweets, follow other users, and more. The back-end API
          was created using Flask and MariaDB, while DBeaver was used for
          database management. This website is fully mobile responsive and works
          on all devices.
        </p>
        <button
          onclick="window.location.href='https://github.com/KaylieSeltenrich/TweeterFrontEnd'"
        >
          View Front End Code</button
        ><button
          onclick="window.location.href='https://github.com/KaylieSeltenrich/TweeterBackEnd'"
        >
          View Backend Code
        </button>
        <button onclick="window.location.href='https://www.squawker.ml/#/'">
          View Live Site
        </button>
      </div>

      <div class="project">
        <div class="title">Okotoks Pizza</div>
        <div class="image"><img src="@/assets/okotoks-pizza-logo.png" /></div>
        <p>
          Okotoks Pizza is a website that I created for a fictional restaurant
          using HTML and CSS/SASS exclusively, with no Javascript or back-end.
          It is a testament to how much can be done simply with these
          programming languages, such as creating animations and adding
          interesting visual effects. It also showcases the use of grids to
          create the layout. Okotoks Pizza is a fully mobile responsive website.
        </p>
        <button
          onclick="window.location.href='https://github.com/KaylieSeltenrich/OkotoksPizzaProject'"
        >
          View Code
        </button>
        <button
          onclick="window.location.href='https://www.kaylieokotokspizza.ml/'"
        >
          View Live Site
        </button>
      </div>

      <div class="project">
        <div class="title">Pokemon Battle</div>
        <div class="image"><img src="@/assets/javascript.svg" /></div>
        <p>
          Pokemon Battle is a game simulator created with Javascript. Players
          can select their Pokemon character of choice and various attack modes,
          as well as heal their compromised pokemon or attempt to dodge an
          opponent's move. The selected pokemon and it's current health status
          is stored through the use of cookies, which allows the player to
          return to the battle at any time.
        </p>
        <button
          onclick="window.location.href='https://github.com/KaylieSeltenrich/PokemonBattle'"
        >
          View Code
        </button>
        <button
          onclick="window.location.href='http://www.epicpokebattlesim.ml/'"
        >
          View Live Site
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Projects",
  components: {},
};
</script>

<style lang="css" scoped>
#project-container {
  display: grid;
  grid-template-columns: 1fr;
}

.project {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 5%;
  margin-left: 5%;
  margin-right: 5%;
  border: 1px solid black;
  margin-top: 10%;
  background-color: rgb(243, 243, 243);
  box-shadow: 1px 2px 5px 2px black;
}

.title {
  font-size: 2.5em;
  margin-top: 2vh;
  text-align: center;
  font-family: Pridi, cursive;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 35%;
}

.image {
  margin-bottom: 5%;
}

button {
  font-family: "Nixie One", cursive;
  font-weight: bold;
  padding: 5px 15px;
  text-decoration: none;
  font-size: 12px;
  text-align: center;
  color: #fff;
  background-color: rgb(31, 36, 109);
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

#title {
  font-size: 2.5em;
  margin-top: 9vh;
  text-align: center;
  font-family: Pridi, cursive;
}

p {
  margin-bottom: 5%;
}

/* TABLET */

@media only screen and (min-width: 768px) and (max-width: 1023px) {
  #title {
    font-size: 4em;
  }

  .project {
    padding: 5%;
    margin-left: 5%;
    margin-right: 5%;
    border: 1px solid black;
    margin-top: 5%;
    background-color: rgb(243, 243, 243);
    box-shadow: 1px 2px 5px 2px black;
  }

  .title {
    font-size: 3em;
    margin-top: 0vh;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 45%;
  }

  p {
    margin-bottom: 5%;
    font-size: 1.2em;
  }

  button {
    padding: 10px 20px;
    font-size: 20px;
  }
}

/* DESKTOP */

@media only screen and (min-width: 1024px) {
  #project-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: 15%;
    height: 80vh;
    overflow: scroll;
    overflow-x: hidden;
    margin-top: 0;
  }

  .project {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    padding: 5%;
    margin-left: 5%;
    margin-right: 5%;
    border: 1px solid black;
    margin-top: 5%;
    background-color: rgb(243, 243, 243);
    box-shadow: 1px 2px 5px 2px black;
  }

  .title {
    font-size: 3em;
    margin-top: 0;
    text-align: center;
    font-family: Pridi, cursive;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 35%;
  }

  .image {
    margin-bottom: 5%;
  }

  button {
    font-family: "Nixie One", cursive;
    font-weight: bold;
    padding: 5px 15px;
    text-decoration: none;
    font-size: 12px;
    text-align: center;
    color: #fff;
    background-color: rgb(31, 36, 109);
    border-radius: 15px;
    box-shadow: 0 9px #999;
  }

  #title {
    font-size: 4.5em;
    margin-left: 15%;
    margin-top: 0;
    text-align: center;
    font-family: Pridi, cursive;
  }

  p {
    margin-bottom: 0;
  }
}
</style>
