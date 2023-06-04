// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/allgemeines',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Allgemeines',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "Allgemeines" */ '@/views/wiki/Allgemeines.vue'),
      },
    ],
  },
  {
    path: '/seidenstrassenprojekt',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Seidenstraßenprojekt',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "Seidenstrassenprojekt" */ '@/views/wiki/Seidenstrassenprojekt.vue'),
      },
    ],
  },
  {
    path: '/aussenpolitik',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Außenpolitische Verhältnisse',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "Aussenpolitik" */ '@/views/wiki/Aussenpolitik.vue'),
      },
    ],
  },
  {
    path: '/innenpolitik',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Die inländischen Verhältnisse Chinas',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "Innenpolitik" */ '@/views/wiki/Innenpolitik.vue'),
      },
    ],
  },
  {
    path: '/cybermacht',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Cybermacht',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "Cybermacht" */ '@/views/wiki/Cybermacht.vue'),
      },
    ],
  },
  {
    path: '/kaiserreich',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Kaiserreich',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "Kaiserreich" */ '@/views/wiki/Kaiserreich.vue'),
      },
    ],
  },
  {
    path: '/opiumkrieg',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Opiumkrieg',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "Opiumkrieg" */ '@/views/wiki/Opiumkrieg.vue'),
      },
    ],
  },
  {
    path: '/quiz',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Quiz',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "Quiz" */ '@/views/quiz/Quiz.vue'),
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
