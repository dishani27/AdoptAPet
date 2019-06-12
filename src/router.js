import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dogs from './views/Dogs.vue'
import Cats from './views/Cats.vue'
import Pets from './views/Pets.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/AdoptAPet',
      name: 'home',
      component: Home
    },
    {
      path: '/AdoptAPet/pets/:species/:id',
      name: 'pets',
      component: Pets
    },
    {
      path: '/AdoptAPet/dogs',
      name: 'dogs',
      component: Dogs
    },
    {
      path: '/AdoptAPet/cats',
      name: 'cats',
      component: Cats
    },
    {
      path: "/index.html",
      redirect: "/" 
    }
  ]
})
