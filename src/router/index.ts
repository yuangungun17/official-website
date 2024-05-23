import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/LandingPage.vue") },
  { path: "/report", component: () => import("@/views/SimplifyTasks.vue") },
  {
    path: "/:pathMatch(.*)",
    name: "Any",
    redirect: "/",
    meta: {
      hidden: true,
    },
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes, 
});

export default router
