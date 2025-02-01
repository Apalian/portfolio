import { createRouter, createWebHistory } from "vue-router";
import Home from './views/Home.vue';
import Intro from './views/Intro.vue';

const router = createRouter({
  history:createWebHistory(),
  routes: [
    {path : '/', component : Intro},
    {path : '/portfolio', component : Home},
  ]
});

export default router;