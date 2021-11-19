import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
import Admin from './Admin';

export default new Router({
  routes: [
    ...Admin,

    {
    path: "/",
    name: "Home",
    component: () => import("../components/Home.vue")
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: () => import("../components/NotFound/NotFound.vue")
    },

  ],
  mode: "history"
});

