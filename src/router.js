import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import ProjectsView from "./views/ProjectsView.vue";
import ProjectDetailView from "./views/ProjectDetailView.vue";
import AboutView from "./views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { top: 0, behavior: "smooth" };
  },
  routes: [
    { path: "/", name: "home", component: HomeView, meta: { title: "首页" } },
    { path: "/portfolio", redirect: "/" },
    { path: "/projects", name: "projects", component: ProjectsView, meta: { title: "项目" } },
    {
      path: "/projects/:slug",
      name: "project-detail",
      component: ProjectDetailView,
      meta: { title: "项目详情" },
    },
    { path: "/about", name: "about", component: AboutView, meta: { title: "关于我" } },
    { path: "/blog/:pathMatch(.*)*", redirect: "/" },
    { path: "/login/:pathMatch(.*)*", redirect: "/" },
    { path: "/admin/:pathMatch(.*)*", redirect: "/" },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
});

router.afterEach((to) => {
  document.title = `${to.meta.title || "作品集"} | 蒋安平`;
});

export default router;
