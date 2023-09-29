import {createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'
import Pessoas from '../views/Pessoas.vue'
import Pedidos from '../views/Pedidos.vue'
import EditarPessoa from '../views/EditarPessoa.vue'
//import Product from '../views/Product.vue'



const routes = [
  { path: '/', name:'home' ,  component: Home },
  { path: '/pessoas',name:'pessoas' , component: Pessoas },
  { path: '/pedidos',name:'pedidos' , component: Pedidos },
  { path: '/editar-pessoa/:id',name:'EditarPessoa' , component: EditarPessoa },
  { path: '/product/', component: () => import('../views/Product.vue') },
]
// const routes = [
//   { path: '/', name:'home' ,  component: Home },
//   { path: '/about',name:'about' , component: About },
//   { path: '/product/:id',name:'product', component: () => import('../views/Product.vue') },
// ]
// const routes = [
//   { path: '/', name:'home' ,  component: Home },
//   { path: '/about',name:'about' , component: About },
//   // eslint-disable-next-line no-undef
//   { path: '/product/:id/product-name/:name',name:'product', component: () => import('../views/Product.vue'), meta: {auth:true },
// }];
// const routes = [
//   { path: '/', name:'home' ,  component: Home },
//   { path: '/about',name:'about' , component: About },
//   // eslint-disable-next-line no-undef
//   { path: '/product/:id/product-name/:name',name:'product', component: () => import('../views/Product.vue'), meta: {auth:true },
// }];

const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default  router;