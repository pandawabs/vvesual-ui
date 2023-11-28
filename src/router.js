import { createRouter, createWebHashHistory } from "vue-router";

const Routes = [
  {
    path: "/",
    label: "Home",
    title: "Home",
    icon: "HomeIcon",
    component: () => import("./pages/HomePage.vue"),
  },
  {
    path: "/cores",
    label: "Cores",
    title: "Cores",
    icon: "CubeIcon",
    component: () => import("./pages/CorePage.vue"),
  },
  {
    path: "/elements",
    label: "Elements",
    title: "Elements",
    icon: "PuzzlePieceIcon",
    component: () => import("./pages/ElementsPage.vue"),
  },
  {
    path: "/layout",
    label: "Layout",
    title: "Layout",
    icon: "Squares2X2Icon",
    component: () => import("./pages/LayoutPage.vue"),
  },
];

const Router = createRouter({
  history: createWebHashHistory(),
  routes: Routes,
});

export { Routes, Router };
