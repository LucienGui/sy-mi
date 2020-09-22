import Vue from 'vue';
import VueRouter from 'vue-router';

import home from "../views/Home.vue";
import cart from "../views/Cart.vue";
import classify from "../views/Classify.vue";
import login from "../views/Login.vue";

import comments from "../views/Comments.vue";
import search from "../views/Search.vue";

import details from "../views/Details.vue";
import user from "../views/User.vue";


Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    component:home
  },
  {
    path:"/cart",
    component:cart
  },
  {
    path:"/classify",
    component:classify
  },
  {
    path:"/login",
    component:login
  },
  {
    path:"/comments",
    component:comments
  },
  {
    path:"/search",
    component:search
  },
  {
    path:"/details",
    component:details
  },
  {
    path:"/user",
    component:user
  }

]

const router = new VueRouter({
  routes:routes
})

export default router
