<template>
  <div class="projects">
    <div id="project-container">
      <div class="project">
        <div class="title">Inspo</div>
        <div class="image"><img src="@/assets/inspologo.png" /></div>
        <p>
          Inspo was created as my final project for InnoTech College. It is a
          MVP of a site where users can upload or search for images and then
          generate a colour pallette that will be drawn from the colours of the
          selected image. It works as a sort of 'colour picker' for images. It's
          purpose is to help inspire designers, artists and other creatives with
          finding the perfect colours for their projects. Every generated image
          and pallette can be saved together as a board. Users can also view
          other peoples boards, like boards, favourite boards, and view the most
          liked boards of the month. Each colour in the pallette has a hexcode
          that can be easily copied directly to the clipboard through a single
          click. I used the Pexels.api to create the image search bar, and a
          Javascript library called Color Thief for the colour picker. I created
          the front-end with Vue.js, Vuex, Vue router and back-end with MariaDB
          and DBeaver.
        </p>
        <button>View Code</button> <button>View Live Site</button>
      </div>

      <div class="project">
        <div class="title">Squawker</div>
        <div class="image"><img src="@/assets/squawkericon.svg" /></div>
        <p>
          Squawker is a twitter clone that I created with Vue.js, Flask, MariaDB
          and Python. It is a full CRUD style application with ability to create
          tweets, update tweets, delete tweets, comment on tweets, like tweets,
          follow other users and more. The backend API was created using Flask,
          MariaDB and DBeaver as database management. It is fully mobile
          responsive and works on all devices.
        </p>
        <button>View Code</button> <button>View Live Site</button>
      </div>

      <div class="project">
        <div class="title">Okotoks Pizza</div>
        <div class="image"><img src="@/assets/okotoks-pizza-logo.png" /></div>
        <p>
          Okotoks Pizza is a website created entirely with HTML and CSS/SASS,
          without any Javascript or backend. It is a testament to how much can
          be done simply with these programming languages, such as creating
          animations and adding neat effects. It also showcases the use of grids
          to create layout. Okotoks Pizza is a fully mobile responsive website.
        </p>
        <button>View Code</button> <button>View Live Site</button>
      </div>

      <div class="project">
        <div class="title">Pokemon Battle </div>
        <div class="image"><img src="@/assets/javascript.svg" /></div>
        <p>
          A pokemon battle simulator created with Javascript. You can pick which
          Pokemon you want to use, choose from multiple attacks, heal your
          pokemon or attempt to dodge a move. Your current health and selected
          pokemon is stored through the use of cookies so that you can come back
          to the battle at any time.
        </p>
        <button>View Code</button> <button>View Live Site</button>
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
</style>
