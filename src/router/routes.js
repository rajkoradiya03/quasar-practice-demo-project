const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "home", component: () => import("pages/HomePage.vue") },
    ],
  },
  {
    path: "/user",
    component: () => import("layouts/UserLayout.vue"),
    children: [
      {
        path: "profile",
        component: () => import("pages/ProfilePage.vue"),
      },
      {
        path: "post",
        component: () => import("pages/PostPage.vue"),
      },
    ],
  },
  {
    path: "/youtube",
    component: () => import("layouts/YoutubeLayout.vue"),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
