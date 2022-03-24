import { createRouter, createWebHashHistory } from 'vue-router'
import MultiComponentOne from '@/components/multiple/ComponentOne'
import MultiComponentTwo from '@/components/multiple/ComponentTwo'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/multi/first',
    name: 'multi-first',
    components: {
      SubviewOne: MultiComponentOne,
      SubviewTwo: MultiComponentTwo
    }
  },
  {
    path: '/multi/second',
    name: 'multi-second',
    components: {
      SubviewOne: MultiComponentTwo,
      SubviewTwo: MultiComponentOne
    }
  },
  {
    path: '/multi/third',
    name: 'multi-third',
    components: {
      SubviewOne: MultiComponentOne,
      SubviewTwo: MultiComponentOne
    }
  },
  {
    path: '/multi/fourth',
    name: 'multi-fourth',
    components: {
      SubviewOne: MultiComponentTwo,
      SubviewTwo: MultiComponentTwo
    }
  },
  {
    path: '/nested',
    name: 'nested',
    component: () => import('@/views/NestedRoute.vue'),
    children: [
      {
        path: 'first',
        name: 'tab-first',
        component: () => import('@/components/nested/TabOne.vue')
      },
      {
        path: 'second',
        name: 'tab-second',
        component: () => import('@/components/nested/TabTwo.vue')
      },
      {
        path: 'third',
        name: 'tab-third',
        component: () => import('@/components/nested/TabThree.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkExactActiveClass: 'link-exact-active',
  routes
})

export default router
