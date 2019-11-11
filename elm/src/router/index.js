import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'
import city from '../components/city.vue'
import shoplist from '../components/shoplist.vue'
import shopsearch from '../components/shopsearch.vue'
import order from '../components/order.vue'
import profile from '../components/profile.vue'
import balance from '../components/balance.vue'
import shop from '../components/shop.vue'
import download from '../components/download.vue'
import discounts from '../components/discounts.vue'
import total from '../components/total.vue'
import balance_details from '../components/balance_details.vue'
import total_details from '../components/total_details.vue'
import shop_details from '../components/shop_details.vue'
import member from '../components/member.vue'
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
  // 余额详情
  {
    path: '/balance',
    name: 'balance',
    component: balance,
    children: [
      // 余额说明
      {
        path: 'balance_details',
        name: 'balance_details',
        component: balance_details
      }
    ]
  },
  // 我的优惠
  {
    path: '/discounts',
    name: 'discounts',
    component: discounts,

  },
  // 我的积分
  {
    path: '/total',
    name: 'total',
    component: total,
    children: [
      // 积分详情
      {
        path: 'total_details',
        name: 'total_details',
        component: total_details
      }
    ]
  },
  // 积分商城
  {
    path: '/shop_details',
    name: 'shop_details',
    component: shop_details
  },
  // 会员卡
  {
    path: '/member',
    name: 'member',
    component: member
  },
  //下载ele
  {
    path: '/download',
    name: 'download',
    component: download
  },
  //商品计算页面
  {
    path: '/shop/:id',
    name: 'shop',
    component: shop
  },
]

const router = new VueRouter({
  routes
})

export default router
