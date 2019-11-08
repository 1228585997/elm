import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'
import city from '../components/city.vue'
import shoplist from '../components/shoplist.vue'
import shopsearch from '../components/shopsearch.vue'
import order from '../components/order.vue'
import profile from '../components/profile.vue'
<<<<<<< HEAD:elm1/elm/src/router/index.js
import balance from '../components/balance.vue'
=======
import shop from '../components/shop.vue'
>>>>>>> 7b27da2157aa5ffc80f506311fd2185e56b12bb3:elm/src/router/index.js
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  //城市列表
  {
    path: '/city/:id/:type',
    // 需要在路由配置后面添加对应的参数即需要添加/:id
    // 如果不添加：id数据会在刷新的时候消失。
    name: 'city',
    component: city,
  },
  //商品列表
  {
    path: '/shoplist/:id',
    name: 'shoplist',
    component: shoplist
  },
  // 搜索列表
  {
    path: '/shopsearch',
    name: 'shopsearch',
    component: shopsearch
  },
  //订单列表
  {
    path: '/order',
    name: 'order',
    component: order
  },
  //我的
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
<<<<<<< HEAD:elm1/elm/src/router/index.js
  // 余额详情
  {
    path: '/balance',
    name: 'balance',
    component: balance
  }
=======
  //商品计算列表
  {
    path: '/profile',
    name: 'profile',
    component:profile
  },
  //商品计算页面
  {
    path: '/shop/:id',
    name: 'shop',
    component:shop
  },
>>>>>>> 7b27da2157aa5ffc80f506311fd2185e56b12bb3:elm/src/router/index.js
]

const router = new VueRouter({
  routes
})

export default router
