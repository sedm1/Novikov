import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/views/HomePage.vue"
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      title: "Главная страница"
    }
  },
  //{
  //  path: '/about',
  //  name: 'about',
  //  component: () => import( '../views/AboutView.vue')
  //}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
const DEFAULT_TITLE = 'Не задан заголовок';
router.beforeEach((to) => {
  document.title = to.meta.title || DEFAULT_TITLE;
});
