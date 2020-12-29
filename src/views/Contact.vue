<template>
  <div class="contact">
    <div id="contact-info">
      <div id="contactinfo-container">
        <div class="header">Contact Information:</div>
        <div class="title">Email:</div>
        <p>
          <a href="mailto:kaylie.seltenrich@gmail.com">
            kaylie.seltenrich@gmail.com
          </a>
        </p>
        <div class="title">Mobile:</div>
        <p><a href="tel:403-816-9229">403-816-9229</a></p>
        <div class="title">LinkedIn:</div>
        <p>
          <a href="https://www.linkedin.com/in/kaylieseltenrich/"
            >https://www.linkedin.com/in/kaylieseltenrich/</a
          >
        </p>
        <div class="title">GitHub:</div>
        <p>
          <a href="https://github.com/KaylieSeltenrich"
            >https://github.com/KaylieSeltenrich</a
          >
        </p>
      </div>
    </div>
    <div id="quote-container">
      <div class="header">Want a Quote?:</div>

      <form
        method="GET"
        action="mailto:kaylie.seltenrich@gmail.com"
        enctype="text/plain"
      >
        <div class="form-header">Subject:</div>
        <input class="input" type="text" name="subject" />

        <div class="form-header">Message:</div>
        <textarea class="input-text" name="body"></textarea>

        <br />
        <input id="submit" type="submit" value="Send" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
};
</script>

<style scoped>
#contact-info {
  display: grid;
  grid-template-columns: 1fr;
  align-content: center;
  height: 100%;
  width: 70%;
  margin-top: 5%;
}

.form-header {
  font-size: 1.5em;
  font-family: "Pridi", cursive;
  margin-left: 5%;
}

.input {
  margin-left: 5%;
  height: 3vh;
  width: 80%;
  font-size: 1.2em;
}

.input-text {
  margin-left: 5%;
  height: 20vh;
  width: 80%;
  resize: none;
  overflow: scroll;
  overflow-x: hidden;
  font-size: 1.2em;
}

#submit {
  font-family: "Nixie One", cursive;
  font-weight: bold;
  padding: 15px 25px;
  text-decoration: none;
  font-size: 15px;
  text-align: center;
  color: #fff;
  background-color: rgb(31, 36, 109);
  border-radius: 15px;
  box-shadow: 0 9px #999;
  margin-left: 5%;
  margin-bottom: 3%;
}

.header {
  margin-top: 5vh;
  font-size: 2.3em;
  font-family: "Pridi", cursive;
  white-space: nowrap;
  margin-left: 2%;
}

.title {
  font-size: 1.2em;
  font-family: "Nixie One", cursive;
  font-weight: bolder;
  margin-top: 5%;
  margin-left: 2%;
}

p {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  width: 70%;
  font-size: 1em;
  margin-left: 2%;
}

a {
  color: rgb(31, 36, 109);
}

#contactinfo-container {
  display: grid;
  grid-template-columns: 1fr;
}

/* TABLET */

@media only screen and (min-width: 768px) {
  #contactinfo-container {
    display: grid;
    grid-template-columns: 1fr;
    align-items: flex-end;
    margin-left: 12%;
  }

  .header {
    margin-top: 5vh;
    font-size: 3.5em;
    font-family: "Pridi", cursive;
    white-space: nowrap;
    text-align: center;
  }

  .title {
    font-size: 1.5em;
    font-family: "Nixie One", cursive;
    font-weight: bolder;
    margin-top: 5%;
    margin-left: 2%;
  }

  p {
    font-size: 1.5em;
  }

  .form-header {
    font-size: 2em;
    margin-left: 10%;
  }

  .input {
    margin-left: 10%;
  }

  .input-text {
    margin-left: 10%;
  }

  #submit {
    margin-left: 25%;
    align-items: center;
    width: 50%;
    margin-bottom: 5%;
    margin-top: 5%;
    font-size: 25px;
  }
}

/* DESKTOP */

@media only screen and (min-width: 1024px) {
  .contact {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 15%;
    width: 80%;
    margin-left: 15%;
    margin-top: 10%;
   
  }

  #contact-info {
    display: block;
    margin: 0;
  }

  #contactinfo-container {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: top;
    
  }

  .header {
    font-size: 4em;
    font-family: "Pridi", cursive;
    white-space: nowrap;
    margin: 0;
  
  }

  .title {
    font-size: 2em;
    margin: 0;
    margin-bottom: 10px;
  }

  p {
    margin: 0;
    margin-bottom: 10px;
    font-size: 2em;
  }

  .form-header {
    font-size: 2em;
    margin-left: 0%;
  }

  .input {
    margin: 0;
    width: 30vw;
  }

  .input-text {
    margin: 0;
    width: 30vw;
  }

  #submit {
    margin-left: 15%;
    align-items: center;
    width: 70%;
    margin-bottom: 5%;
    margin-top: 5%;
    font-size: 25px;
  }

    
   #submit:hover {
    background-color: rgb(71, 76, 153);
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }


  #quote-container {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: left;
    width: 100%;

  }
}
</style>
