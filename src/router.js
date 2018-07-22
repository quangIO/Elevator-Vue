import Vue from "vue";
import Router from "vue-router";
import About from "./views/About.vue";
import AddNew from "./views/AddNew.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "addnew",
      component: AddNew
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
