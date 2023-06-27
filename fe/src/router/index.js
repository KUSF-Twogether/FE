import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/pages/Home.vue";
import Login from "../components/pages/Login.vue";
import Setting from "../components/pages/Setting.vue";
import DataPitching from "../components/pages/DataPitching.vue";
import DataBatter from "../components/pages/DataBatter.vue";
import DataRunner from "../components/pages/DataRunner.vue";
import Broadcast from "../components/pages/Broadcast.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/setting',
    name: 'setting',
    component: Setting,
  },
  {
    path: '/data-pitching',
    name: 'data-pitching',
    component: DataPitching,
  },
  {
    path: '/data-batter',
    name: 'data-batter',
    component: DataBatter,
  },
  {
    path: '/data-runner',
    name: 'data-runner',
    component: DataRunner,
  },
  {
    path: '/broadcast',
    name: 'broadcast',
    component: Broadcast,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;