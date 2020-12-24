<template>
  <div class="contact">
    <div id="contact-info">
      <div class="header">Contact Information:</div>
      <div id="contactinfo-container">
        <div class="title">Email:</div> <p> kaylie.seltenrich@gmail.com </p>
        <div class="title">Mobile:</div> <p> 403-816-9229 </p>
        <div class="title">LinkedIn:</div> <p> https://www.linkedin.com/in/kaylieseltenrich/ </p>
        <div class="title">GitHub:</div> <p> https://github.com/KaylieSeltenrich </p>
      </div>
    </div>
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

.title{
  font-size: 1.2em;
  font-family: "Nixie One", cursive;
  font-weight: bolder;
  margin-top: 5%;
  margin-left: 2%;
  
}

p{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
  width: 70%;
  font-size: 1em;
  margin-left: 2%;
}

#contactinfo-container{
  display: grid;
  grid-template-columns: 1fr;

}
</style>
