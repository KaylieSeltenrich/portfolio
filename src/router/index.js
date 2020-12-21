import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import About from "../views/About.vue";
import Projects from "../views/Projects.vue";
import Quote from "../views/Quote.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  },
  {
    path: "/quote",
    name: "Quote",
    component: Quote
  }
];

const router = new VueRouter({
  routes
});

export default router;
