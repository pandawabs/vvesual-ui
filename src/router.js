import { createRouter, createWebHashHistory } from "vue-router";

const Routes = [
  {
    path: "/",
    label: "Home",
    title: "Home",
    component: () => import("./pages/HomePage.vue"),
  },
  {
    path: "/cores",
    label: "Cores",
    title: "Cores",
    component: () => import("./pages/CorePage.vue"),
  },
  {
    path: "/elements",
    label: "Elements",
    title: "Elements",
    component: () => import("./pages/ElementsPage.vue"),
  },
  {
    path: "/layout",
    label: "Layout",
    title: "Layout",
    component: () => import("./pages/LayoutPage.vue"),
  },
];

const Router = createRouter({
  history: createWebHashHistory(),
  routes: Routes,
});

export { Routes, Router };
